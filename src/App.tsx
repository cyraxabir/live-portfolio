import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tempo routes will be injected here automatically */}
      </Routes>
    </Suspense>
  );
}

export default App;