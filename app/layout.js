'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <html lang="de">
      <body className={isDark ? 'dark' : ''}>
        <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors`}>
          {/* Header */}
          <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b-4 border-teal-600 sticky top-0 z-50 transition-colors`}>
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-4">
                <Link href="/" className="text-3xl font-bold text-teal-600 hover:text-teal-700">
                  EATSMART
                </Link>
                
                <div className="flex items-center gap-4">
                  <button onClick={toggleDark} className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition`}>
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  
                  <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/rezepte" className={`px-4 py-2 rounded-lg font-semibold transition ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    🍳 Rezepte
                  </Link>
                  <Link href="/produkte" className={`px-4 py-2 rounded-lg font-semibold transition ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    📦 Fertigprodukte
                  </Link>
                  <Link href="/lebensmittel" className={`px-4 py-2 rounded-lg font-semibold transition ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    🥬 Lebensmitteltipps
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t mt-24 py-12 transition-colors`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-teal-600 mb-4">EATSMART</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Dein wissenschaftlich fundierter Ernährungsguide</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Navigation</h4>
                  <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li><Link href="/rezepte" className="hover:text-teal-600">Rezepte</Link></li>
                    <li><Link href="/produkte" className="hover:text-teal-600">Fertigprodukte</Link></li>
                    <li><Link href="/lebensmittel" className="hover:text-teal-600">Lebensmitteltipps</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quellen</h4>
                  <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li><a href="https://fdc.nal.usda.gov/" target="_blank" className="hover:text-teal-600">USDA FoodData</a></li>
                    <li><a href="https://www.myfitnesspal.com/" target="_blank" className="hover:text-teal-600">MyFitnessPal DB</a></li>
                    <li><a href="https://scholar.google.de/" target="_blank" className="hover:text-teal-600">Google Scholar</a></li>
                  </ul>
                </div>
              </div>
              
              <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-8`}>
                <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  © 2024 EATSMART. Alle Inhalte basieren auf wissenschaftlichen Quellen. Konsultiere einen Ernährungsberater vor signifikanten Diätveränderungen.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
