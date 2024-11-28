import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import LayoutPrincipal from "./components/LayoutPrincipal";
import { JSX } from "react/jsx-runtime";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas protegidas (com layout e menu lateral) */}
        <Route
          path="/dashboard"
          element={
            <LayoutPrincipal>
              <Dashboard />
            </LayoutPrincipal>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
