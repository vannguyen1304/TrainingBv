import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import BaiTap1 from "./component/BaiTap1";
import BaiTap2 from "./component/BaiTap2";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<BaiTap1 />} />
        <Route path="task1" element={<BaiTap1 />} />
        <Route path="task2" element={<BaiTap2 />} />
      </Routes>
    </>
  );
}

export default App;
