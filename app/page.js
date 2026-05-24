'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  const categories = [
    {
      title: '🍳 Rezepte',
      description: 'Nach Zeit sortiert: 5-10 Min, 10-20 Min, 20-45 Min',
      href: '/rezepte',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: '📦 Fertigprodukte',
      description: '30 hochwertige Produkte mit Reviews und Nährwerten',
      href: '/produkte',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: '🥬 Lebensmitteltipps',
      description: 'Eiweißreich & Kalorienarm - intelligent kategorisiert',
      href: '/lebensmittel',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-teal-600">
            EATSMART
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Der intelligente Ernährungsguide - wissenschaftlich fundiert, praktisch umgesetzt
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} text-center`}>
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Hochwertige Rezepte</div>
          </div>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} text-center`}>
            <div className="text-4xl font-bold text-teal-600 mb-2">30</div>
            <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Fertigprodukte Reviews</div>
          </div>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'} text-center`}>
            <div className="text-4xl font-bold text-teal-600 mb-2">35</div>
            <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>Lebensmitteltipps</div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Deine Ernährung im Überblick</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href}>
              <div className={`h-full p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{cat.description}</p>
                <div className="mt-6 inline-block px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition">
                  Entdecken →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <h2 className="text-2xl font-bold mb-6">Wie EATSMART funktioniert</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-3">✅ Wissenschaftlich fundiert</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Jedes Rezept und jede Empfehlung basiert auf:
            </p>
            <ul className={`mt-2 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• USDA Food Composition Database</li>
              <li>• Wissenschaftliche Studien (Google Scholar)</li>
              <li>• MyFitnessPal Nährwertdatenbank</li>
              <li>• Ernährungswissenschaftliche Quellen</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-3">💪 Praktisch umsetzbar</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Alles ist für die Realität gemacht:</p>
            <ul className={`mt-2 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Rezepte nach verfügbarer Zeit</li>
              <li>• Echte Fertigprodukte mit Reviews</li>
              <li>• Intelligente Lebensmitteltipps</li>
              <li>• Alle Nährwerte transparent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Bereit zu starten?</h2>
        <Link href="/rezepte">
          <button className="px-8 py-4 bg-teal-600 text-white text-lg font-bold rounded-lg hover:bg-teal-700 transition transform hover:scale-105">
            Jetzt Rezepte entdecken 🚀
          </button>
        </Link>
      </section>
    </div>
  );
}
