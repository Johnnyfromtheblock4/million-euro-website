import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "../pages/Homepage";
import BuyPixel from "../pages/BuyPixel";
import Faq from "../pages/Faq";
import PixelList from "../pages/PixelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="buy" element={<BuyPixel />} />
          <Route path="faq" element={<Faq />} />
          <Route path="pixels" element={<PixelList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
