import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.SignUpPage />} />
      <Route path="/admin" element={<P.MainPage />} />
    </Routes>
  );
}

export default App;
