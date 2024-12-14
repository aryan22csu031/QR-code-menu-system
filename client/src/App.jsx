import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import MenuItems from "./pages/MenuItems";

const App = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<User />} />
      <Route path="/menu/all" element={<MenuItems/>} />
    </Routes>
  </Router>
);

export default App;
