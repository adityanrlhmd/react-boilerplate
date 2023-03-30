import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Second />} path="/second" />
      </Routes>
    </>
  );
}

export default App;
