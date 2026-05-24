'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Search } from 'lucide-react';

const recipes = [
  {id: 1, title: "Protein Pancakes", time: "10 min", nutrition: {calories: 320, protein: 32}, tags: ["vegetarisch"], image: "🥞"},
  {id: 2, title: "Omelett Spinat", time: "12 min", nutrition: {calories: 280, protein: 28}, tags: ["vegetarisch"], image: "🥚"},
  {id: 3, title: "Thunfisch Salat", time: "8 min", nutrition: {calories: 300, protein: 40}, tags: ["eiweiß"], image: "🥗"},
  {id: 4, title: "Tofu Stir Fry", time: "12 min", nutrition: {calories: 350, protein: 35}, tags: ["vegan"], image: "🍲"},
  {id: 5, title: "Hähnchen Wrap", time: "10 min", nutrition: {calories: 420, protein: 48}, tags: ["eiweiß"], image: "🌯"},
];

const products = [
  {id: 1, name: "Gold Standard Whey", brand: "Optimum Nutrition", price: "€25-30", nutrition: {calories: 120, protein: 24}, rating: 4.8, image: "💪"},
  {id: 2, name: "MyFit Protein Bar", brand: "MyProtein", price: "€0.80", nutrition: {calories: 180, protein: 18}, rating: 4.3, image: "📦"},
  {id: 3, name: "Eismann Hähnchenbrust", brand: "Eismann", price: "€4-6", nutrition: {calories: 165, protein: 30}, rating: 4.4, image: "🔄"},
  {id: 4, name: "Fage Joghurt", brand: "Fage", price: "€2.50", nutrition: {calories: 101, protein: 10.2}, rating: 4.8, image: "🥣"},
  {id: 5, name: "Magerquark", brand: "Diverse", price: "€0.80", nutrition: {calories: 98, protein: 14}, rating: 4.7, image: "🥣"},
];

const ingredients = [
  {id: 1, name: "Hähnchenbrust", category: "protein", subcategory: "fisch", nutrition: {calories: 165, protein: 31}, image: "🍗"},
  {id: 2, name: "Rote Linsen", category: "protein", subcategory: "vegan", nutrition: {calories: 353, protein: 25}, image: "🫘"},
  {id: 3, name: "Spinat", category: "lowcalorie", subcategory: "vegan", nutrition: {calories: 23, protein: 2.9}, image: "🌱"},
  {id: 4, name: "Brokkoli", category: "lowcalorie", subcategory: "vegan", nutrition: {calories: 34, protein: 2.8}, image: "🥦"},
  {id: 5, name: "Tofu", category: "protein", subcategory: "vegan", nutrition: {calories: 76, protein: 8}, image: "🟫"},
];

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDark(JSON.parse(saved));
  }, []);

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const handleLogin = () => {
    if (password === "Sonnenblume") {
      setAuthenticated(true);
      setPassword("");
    } else {
      alert("Falsches Passwort!");
    }
  };

  if (!authenticated) {
    return (
      <div style={{
        minHeight: "100vh",
        background: isDark 
          ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" 
          : "linear-gradient(135deg, #008080 0%, #006666 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .fadeInUp { animation: fadeInUp 0.8s ease-out; }
          @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(0,128,128,0.3); } 50% { box-shadow: 0 0 40px rgba(0,128,128,0.5); } }
          .glow { animation: glow 3s ease-in-out infinite; }
        `}</style>
        
        <div style={{textAlign: "center", marginBottom: "3rem", color: "white", animation: "fadeInUp 0.8s ease-out"}} className="fadeInUp">
          <h1 style={{fontSize: "4rem", margin: "0 0 1rem", fontWeight: "700", letterSpacing: "-1px"}}>EATSMART</h1>
          <p style={{fontSize: "1.3rem", margin: 0, opacity: 0.85, fontWeight: "300"}}>Der intelligente Ernährungsguide</p>
        </div>

        <div style={{
          background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          padding: "2.5rem",
          boxShadow: isDark 
            ? "0 8px 32px rgba(0,0,0,0.3)" 
            : "0 20px 60px rgba(0,0,0,0.15)",
          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(20px)"
        }} className="fadeInUp">
          <h2 style={{color: "#008080", marginBottom: "1.5rem", fontSize: "1.3rem", fontWeight: "600"}}>🔐 Passwort</h2>
          <input
            type="password"
            placeholder="Passwort eingeben..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{
              width: "100%",
              padding: "1rem",
              border: "2px solid #008080",
              borderRadius: "12px",
              fontSize: "1rem",
              marginBottom: "1.5rem",
              boxSizing: "border-box",
              background: isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.5)",
              color: isDark ? "white" : "#1a1a1a",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
            onFocus={(e) => e.target.style.boxShadow = "0 0 0 3px rgba(0,128,128,0.2)"}
            onBlur={(e) => e.target.style.boxShadow = "none"}
          />
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "1rem",
              background: "linear-gradient(135deg, #008080 0%, #006666 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 20px rgba(0,128,128,0.3)"
            }}
            onMouseEnter={(e) => {e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 30px rgba(0,128,128,0.4)"}}
            onMouseLeave={(e) => {e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 20px rgba(0,128,128,0.3)"}}
          >
            Zugriff
          </button>
        </div>
      </div>
    );
  }

  const Card = ({ item, type }) => (
    <div
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => setSelectedItem({...item, type})}
      style={{
        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)"}`,
        borderRadius: "16px",
        padding: "1.5rem",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hoveredId === item.id ? "translateY(-8px) scale(1.02)" : "translateY(0)",
        boxShadow: hoveredId === item.id 
          ? `0 20px 40px ${isDark ? "rgba(0,0,0,0.4)" : "rgba(0,128,128,0.15)"}`
          : `0 4px 12px ${isDark ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.05)"}`
      }}
    >
      <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>{item.image}</div>
      <h3 style={{margin: "0 0 0.5rem", color: "#008080", fontWeight: "600"}}>{item.title || item.name}</h3>
      <p style={{margin: "0 0 0.75rem", fontSize: "0.9rem", color: isDark ? "#999" : "#666", opacity: 0.8}}>
        {item.brand || item.time || item.description}
      </p>
      <div style={{display: "flex", gap: "1rem", fontSize: "0.85rem"}}>
        <span>🔥 {item.nutrition.calories}</span>
        <span>💪 {item.nutrition.protein}g</span>
      </div>
    </div>
  );

  return (
    <div style={{
      background: isDark 
        ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" 
        : "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
      color: isDark ? "#ffffff" : "#1a1a1a",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        .slideIn { animation: slideIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fadeIn { animation: fadeIn 0.6s ease-out; }
      `}</style>

      {/* Header */}
      <header style={{
        background: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
        padding: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h1 style={{margin: 0, color: "#008080", fontSize: "2rem", fontWeight: "700"}}>EATSMART</h1>
          <div style={{display: "flex", gap: "1rem"}}>
            <button
              onClick={toggleDark}
              style={{
                background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                border: "none",
                padding: "0.75rem",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                color: isDark ? "white" : "#1a1a1a"
              }}
              onMouseEnter={(e) => e.target.style.background = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}
              onMouseLeave={(e) => e.target.style.background = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem", display: "flex", gap: "1rem", flexWrap: "wrap"}}>
        {[
          {id: "home", label: "🏠 Home"},
          {id: "rezepte", label: "🍳 Rezepte"},
          {id: "produkte", label: "📦 Produkte"},
          {id: "lebensmittel", label: "🥬 Tipps"}
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            style={{
              background: currentPage === item.id 
                ? "linear-gradient(135deg, #008080 0%, #006666 100%)" 
                : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              color: currentPage === item.id ? "white" : isDark ? "#ccc" : "#333",
              border: currentPage === item.id ? "none" : `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: currentPage === item.id ? "600" : "500",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.id) {
                e.target.style.background = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.id) {
                e.target.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{maxWidth: "1200px", margin: "0 auto", padding: "0 1rem 4rem"}}>
        {currentPage === "home" && (
          <div className="fadeIn">
            <h2 style={{fontSize: "3rem", fontWeight: "700", margin: "2rem 0 1rem", letterSpacing: "-0.5px"}}>Willkommen zu EATSMART</h2>
            <p style={{fontSize: "1.2rem", opacity: 0.8, marginBottom: "3rem"}}>Der intelligente Ernährungsguide - wissenschaftlich fundiert, praktisch umgesetzt</p>
            
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "2rem"}}>
              {[
                {icon: "🍳", num: "50+", text: "Rezepte"},
                {icon: "📦", num: "30", text: "Produkte"},
                {icon: "🥬", num: "35", text: "Tipps"}
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,128,128,0.1)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,128,128,0.2)"}`,
                    padding: "2rem",
                    borderRadius: "16px",
                    textAlign: "center",
                    transition: "all 0.4s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 12px 30px ${isDark ? "rgba(0,0,0,0.3)" : "rgba(0,128,128,0.15)"}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{fontSize: "3rem", marginBottom: "1rem"}}>{stat.icon}</div>
                  <div style={{fontSize: "2.5rem", fontWeight: "700", color: "#008080", marginBottom: "0.5rem"}}>{stat.num}</div>
                  <div style={{opacity: 0.8}}>{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === "rezepte" && (
          <div className="fadeIn">
            <h2 style={{fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem"}}>🍳 Rezepte</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem"}}>
              {recipes.map(recipe => <Card key={recipe.id} item={recipe} type="recipe" />)}
            </div>
          </div>
        )}

        {currentPage === "produkte" && (
          <div className="fadeIn">
            <h2 style={{fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem"}}>📦 Fertigprodukte</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem"}}>
              {products.map(product => <Card key={product.id} item={product} type="product" />)}
            </div>
          </div>
        )}

        {currentPage === "lebensmittel" && (
          <div className="fadeIn">
            <h2 style={{fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem"}}>🥬 Lebensmitteltipps</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem"}}>
              {ingredients.map(ing => <Card key={ing.id} item={ing} type="ingredient" />)}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{textAlign: "center", padding: "3rem 1rem", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, color: isDark ? "#999" : "#666"}}>
        <p style={{margin: 0}}>© 2024 EATSMART - Dein intelligenter Ernährungsguide 🌿</p>
      </footer>

      {/* Modal */}
      {selectedItem && (
        <div
          style={{position: "fixed", inset: 0, background: isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, backdropFilter: "blur(5px)"}}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              background: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.95)",
              backdropFilter: "blur(30px)",
              borderRadius: "24px",
              padding: "2.5rem",
              maxWidth: "500px",
              width: "90%",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              boxShadow: `0 25px 50px ${isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)"}`,
              transform: "scale(0.95)",
              animation: "slideIn 0.3s ease-out forwards"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              style={{float: "right", background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: isDark ? "#ccc" : "#1a1a1a", width: "32px", height: "32px", borderRadius: "8px", transition: "all 0.2s"}}
              onMouseEnter={(e) => e.target.style.background = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
              onMouseLeave={(e) => e.target.style.background = "none"}
            >✕</button>
            <div style={{fontSize: "4rem", marginBottom: "1.5rem"}}>{selectedItem.image}</div>
            <h2 style={{color: "#008080", fontSize: "1.8rem", fontWeight: "700", margin: "0 0 1rem"}}>{selectedItem.title || selectedItem.name}</h2>
            <p style={{color: isDark ? "#bbb" : "#666", margin: "0 0 1.5rem", opacity: 0.9}}>{selectedItem.description || selectedItem.brand || ""}</p>
            <div style={{background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,128,128,0.08)", padding: "1.5rem", borderRadius: "12px", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,128,128,0.2)"}`, backdropFilter: "blur(10px)"}}>
              <p style={{fontWeight: "600", color: "#008080", marginBottom: "1rem"}}>Nährwerte</p>
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.95rem"}}>
                <div>🔥 {selectedItem.nutrition.calories} kcal</div>
                <div>💪 {selectedItem.nutrition.protein}g Protein</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
