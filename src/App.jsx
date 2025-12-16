import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "../pages/Homepage";
import BuyPixel from "../pages/BuyPixel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="buy" element={<BuyPixel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
