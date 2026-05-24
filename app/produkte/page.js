'use client';

import { useState, useEffect } from 'react';
import { products } from '@/data/products';
import { Search, Star } from 'lucide-react';

export default function Produkte() {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'alle') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: 'alle', name: 'Alle Produkte' },
    { id: 'protein-shakes', name: 'Protein Shakes' },
    { id: 'protein-bars', name: 'Protein Riegel' },
    { id: 'tiefkühl', name: 'Tiefkühlt' },
    { id: 'dosen', name: 'Dosen & Gläser' },
    { id: 'joghurt', name: 'Joghurts' },
    { id: 'milchprodukte', name: 'Milchprodukte' },
    { id: 'getränke', name: 'Getränke' },
    { id: 'saucen', name: 'Saucen' }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">📦 Fertigprodukte</h1>

      {/* Filters */}
      <div className={`p-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              type="text"
              placeholder="Produkt suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border-2 border-teal-600 focus:outline-none ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
            />
          </div>
        </div>

        <h3 className="font-semibold mb-3">📂 Kategorien</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white'
                  : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-8">
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {filteredProducts.length} Produkte gefunden
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="text-5xl mb-3">{product.image}</div>
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className={`text-sm font-semibold text-teal-600 mb-3`}>{product.brand}</p>
            
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : `${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
              ))}
              <span className="text-xs font-semibold">{product.rating}</span>
            </div>

            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{product.description}</p>
            
            <div className={`text-sm font-bold text-teal-600 mb-3`}>{product.price}</div>

            <div className={`text-xs space-y-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div>🔥 {product.nutrition.calories} kcal</div>
              <div>💪 {product.nutrition.protein}g Protein</div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-2xl w-full p-8 my-8`}>
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-2xl mb-4 font-bold text-teal-600 hover:text-teal-700"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">{selectedProduct.image}</div>
            <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className={`text-lg font-semibold text-teal-600 mb-4`}>{selectedProduct.brand}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < Math.round(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : `${isDark ? 'text-gray-600' : 'text-gray-300'}`} />
              ))}
              <span className="text-sm font-semibold">{selectedProduct.rating}/5</span>
            </div>

            {/* Nutrition */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedProduct.nutrition.calories}</div>
                <div className="text-xs">kcal</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedProduct.nutrition.protein}g</div>
                <div className="text-xs">Eiweiß</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedProduct.nutrition.carbs}g</div>
                <div className="text-xs">KH</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedProduct.nutrition.fat}g</div>
                <div className="text-xs">Fett</div>
              </div>
            </div>

            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProduct.description}</p>

            {/* Info */}
            <div className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <p className="text-sm mb-2"><strong>💰 Preis:</strong> {selectedProduct.price}</p>
              <p className="text-sm mb-2"><strong>🏪 Wo kaufen:</strong> {selectedProduct.where.join(', ')}</p>
              <p className="text-sm"><strong>📊 Quelle:</strong> {selectedProduct.source}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-teal-600 mb-3">✅ Vorteile</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                  {selectedProduct.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-500 mb-3">⚠️ Nachteile</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                  {selectedProduct.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span>✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
