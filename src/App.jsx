import React, { useState, useEffect } from "react";

function App() {
  // 🧠 1. STATE VARIABLES (All useStates go here)
  const [count, setCount] = useState(0);

  // ⚙️ 2. SIDE EFFECTS (API calls, localStorage, etc.)
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    // 🧱 3. OUTER LAYOUT
    <div className="min-h-screen bg-blue-200 text-gray-800 p-6">
      
      {/* 🔝 4. HEADER / NAVBAR */}
      <header className="text-3xl font-bold mb-6">
        My React App
      </header>

      {/* 📦 5. MAIN CONTENT */}
      <main className="space-y-4 ">
        
        {/* 🧩 COMPONENTS OR SECTIONS */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Counter Section</h2>
          <p className="mt-2">Count: {count}</p>
          <button 
            onClick={() => setCount(count + 1)} 
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
        </section>

        <div className="flex rounded-3xl bg-amber-300 px-4 py-2.5">
              Hardwork is Key to success
        </div>

      </main>

      {/* 📞 6. FOOTER */}
      <footer className="mt-10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Vibhor Gupta
      </footer>
    </div>
  );
}

export default App;
