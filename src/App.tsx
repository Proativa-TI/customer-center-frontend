import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import LayoutPrincipal from "./components/LayoutPrincipal";

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
        <Route
          path="/catalogo-produtos"
          element={
            <LayoutPrincipal>
              <CatalogoProdutos />
            </LayoutPrincipal>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
