import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Users } from "./components/users/Users";
import { Login } from "./components/login/Login";
import { Teachers } from "./components/teachers/Teachers";
import { People } from "./components/people/People";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Users />} />
        <Route path="login" element={<Login />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="people" element={<People />} />
        

      </Routes>
    </div>
  );
}

export default App;
