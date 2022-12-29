import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.MainPage />} />
      <Route path="/signup" element={<P.SignUpPage />} />
    </Routes>
  );
}

export default App;
