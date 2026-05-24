'use client';

import { useState, useEffect } from 'react';
import { ingredients } from '@/data/ingredients';
import { Search } from 'lucide-react';

export default function Lebensmittel() {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('protein');
  const [selectedSubcategory, setSelectedSubcategory] = useState('alle');
  const [filteredIngredients, setFilteredIngredients] = useState(ingredients);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  useEffect(() => {
    let result = ingredients;

    // Kategorie
    result = result.filter(i => i.category === selectedCategory);

    // Subkategorie
    if (selectedSubcategory !== 'alle') {
      result = result.filter(i => i.subcategory === selectedSubcategory);
    }

    // Suche
    if (searchTerm) {
      result = result.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredIngredients(result);
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const getSubcategories = () => {
    const subs = new Set(ingredients.filter(i => i.category === selectedCategory).map(i => i.subcategory));
    return Array.from(subs);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">🥬 Lebensmitteltipps</h1>

      <p className={`mb-8 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Intelligente Auswahl nach deinen Zielen: Eiweißreich oder Kalorienarm, mit verschiedenen Ernährungsstilen
      </p>

      {/* Main Category Selection */}
      <div className={`p-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <h3 className="font-semibold mb-3 text-lg">🎯 Was ist dein Ziel?</h3>
        <div className="flex gap-2">
          {['protein', 'lowcalorie'].map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubcategory('alle');
              }}
              className={`px-6 py-3 rounded-lg font-bold text-lg transition ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white'
                  : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
              }`}
            >
              {cat === 'protein' ? '💪 Eiweißreich' : '🔥 Kalorienarm'}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className={`p-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              type="text"
              placeholder="Lebensmittel suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border-2 border-teal-600 focus:outline-none ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
            />
          </div>
        </div>

        {/* Subcategory */}
        <h3 className="font-semibold mb-3">🌱 Ernährungsstil</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedSubcategory('alle')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedSubcategory === 'alle'
                ? 'bg-teal-600 text-white'
                : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
            }`}
          >
            Alle
          </button>
          {getSubcategories().map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedSubcategory === sub
                  ? 'bg-teal-600 text-white'
                  : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
              }`}
            >
              {sub === 'vegan' && '🌿'} {sub === 'vegetarisch' && '🌱'} {sub === 'milch' && '🥛'} {sub === 'fisch' && '🐟'} {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-8">
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {filteredIngredients.length} Lebensmittel gefunden
        </p>
      </div>

      {/* Ingredient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredIngredients.map(ing => (
          <div
            key={ing.id}
            onClick={() => setSelectedIngredient(ing)}
            className={`p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="text-5xl mb-3">{ing.image}</div>
            <h3 className="text-lg font-bold mb-3">{ing.name}</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{ing.description}</p>
            
            <div className={`text-sm space-y-1 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="font-bold text-teal-600">{ing.nutrition.calories} kcal</div>
              <div>💪 {ing.nutrition.protein}g Protein</div>
              <div>🍂 {ing.nutrition.carbs}g KH</div>
              <div>🧈 {ing.nutrition.fat}g Fett</div>
            </div>

            <div className="flex gap-1 flex-wrap">
              {ing.tags.map(tag => (
                <span key={tag} className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedIngredient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-2xl w-full p-8 my-8`}>
            <button
              onClick={() => setSelectedIngredient(null)}
              className="text-2xl mb-4 font-bold text-teal-600 hover:text-teal-700"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">{selectedIngredient.image}</div>
            <h2 className="text-3xl font-bold mb-4">{selectedIngredient.name}</h2>
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{selectedIngredient.description}</p>

            {/* Nutrition */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedIngredient.nutrition.calories}</div>
                <div className="text-xs">kcal</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedIngredient.nutrition.protein}g</div>
                <div className="text-xs">Eiweiß</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedIngredient.nutrition.carbs}g</div>
                <div className="text-xs">KH</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedIngredient.nutrition.fat}g</div>
                <div className="text-xs">Fett</div>
              </div>
            </div>

            {/* Tipps */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">💡 Tipps & Tricks</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedIngredient.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Eigenschaften</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedIngredient.tags.map(tag => (
                  <span key={tag} className={`px-4 py-2 rounded-full ${isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'} font-semibold`}>
                    {tag === 'vegetarisch' && '🌱'} {tag === 'vegan' && '🌿'} {tag === 'eiweiß' && '💪'} {tag === 'lowcarb' && '⚡'} {tag === 'lowcalorie' && '🔥'} {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            {/* Source */}
            <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-xs`}>
              <strong>Quelle:</strong> {selectedIngredient.source}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
