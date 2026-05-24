'use client';

import { useState, useEffect } from 'react';
import { recipes } from '@/data/recipes';
import { Search, Clock, Flame, Zap } from 'lucide-react';

export default function Rezepte() {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTime, setSelectedTime] = useState('alle');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  useEffect(() => {
    let result = recipes;

    // Zeit Filter
    if (selectedTime === '5-10') result = result.filter(r => r.time === '5 min' || r.time === '8 min' || r.time === '10 min');
    if (selectedTime === '10-20') result = result.filter(r => ['12 min', '15 min', '18 min', '20 min'].includes(r.time));
    if (selectedTime === '20-45') result = result.filter(r => ['22 min', '25 min', '30 min', '35 min'].includes(r.time));

    // Suche
    if (searchTerm) result = result.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Tags
    if (selectedTags.length > 0) result = result.filter(r => selectedTags.some(tag => r.tags.includes(tag)));

    setFilteredRecipes(result);
  }, [searchTerm, selectedTime, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">🍳 Rezepte</h1>

      {/* Filters */}
      <div className={`p-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              type="text"
              placeholder="Rezept suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border-2 border-teal-600 focus:outline-none ${isDark ? 'bg-gray-700 text-white' : 'bg-white'}`}
            />
          </div>
        </div>

        {/* Zeit Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">⏱️ Zeit</h3>
          <div className="flex gap-2 flex-wrap">
            {['alle', '5-10', '10-20', '20-45'].map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedTime === time
                    ? 'bg-teal-600 text-white'
                    : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
                }`}
              >
                {time === 'alle' ? 'Alle' : `${time} min`}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filter */}
        <div>
          <h3 className="font-semibold mb-3">🏷️ Filter</h3>
          <div className="flex gap-2 flex-wrap">
            {['vegetarisch', 'vegan', 'eiweiß', 'lowcarb'].map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedTags.includes(tag)
                    ? 'bg-teal-600 text-white'
                    : `${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border-2 border-gray-300`
                }`}
              >
                {tag === 'vegetarisch' && '🌱'} {tag === 'vegan' && '🌿'} {tag === 'eiweiß' && '💪'} {tag === 'lowcarb' && '⚡'} {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-8">
        <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {filteredRecipes.length} Rezepte gefunden
        </p>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className={`p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="text-5xl mb-3">{recipe.image}</div>
            <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{recipe.description}</p>
            
            <div className="flex gap-2 flex-wrap mb-4">
              <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Clock size={12} className="inline mr-1" />{recipe.time}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Flame size={12} className="inline mr-1" />{recipe.nutrition.calories} kcal
              </span>
              <span className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Zap size={12} className="inline mr-1" />{recipe.nutrition.protein}g
              </span>
            </div>

            <div className="flex gap-1 flex-wrap">
              {recipe.tags.map(tag => (
                <span key={tag} className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-2xl w-full p-8 my-8`}>
            <button
              onClick={() => setSelectedRecipe(null)}
              className="text-2xl mb-4 font-bold text-teal-600 hover:text-teal-700"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">{selectedRecipe.image}</div>
            <h2 className="text-3xl font-bold mb-4">{selectedRecipe.title}</h2>

            {/* Nutrition */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedRecipe.nutrition.calories}</div>
                <div className="text-xs">kcal</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedRecipe.nutrition.protein}g</div>
                <div className="text-xs">Eiweiß</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedRecipe.nutrition.carbs}g</div>
                <div className="text-xs">Kohlenhydrate</div>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                <div className="text-2xl font-bold text-teal-600">{selectedRecipe.nutrition.fat}g</div>
                <div className="text-xs">Fett</div>
              </div>
            </div>

            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{selectedRecipe.description}</p>

            {/* Info */}
            <div className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <p className="text-sm"><strong>⏱️ Zeit:</strong> {selectedRecipe.time}</p>
              <p className="text-sm"><strong>👥 Portion:</strong> {selectedRecipe.servings}</p>
              <p className="text-sm"><strong>⭐ Schwierigkeit:</strong> {selectedRecipe.difficulty}</p>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Zutaten</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Zubereitung</h3>
              <ol className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedRecipe.instructions.map((inst, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="font-bold text-teal-600">{idx + 1}.</span>
                    {inst}
                  </li>
                ))}
              </ol>
            </div>

            {/* Variations & Tips */}
            {selectedRecipe.variations && selectedRecipe.variations.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3">💡 Abwandlungen</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedRecipe.variations.map((v, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span>✓</span> {v}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Source */}
            {selectedRecipe.sources && selectedRecipe.sources.length > 0 && (
              <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} text-xs`}>
                <strong>Quelle:</strong> {selectedRecipe.sources.join(', ')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
