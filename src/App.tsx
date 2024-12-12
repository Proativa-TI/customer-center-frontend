import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/extern/Login";
import Cadastro from "./pages/extern/Register-1";
import Dashboard from "./pages/general/Dashboard";
import CatalogoProdutos from "./pages/products/ProductCatalog";
import LayoutPrincipal from "./components/fixed-layers/LayoutPrincipal";
import ProdutosContratados from "./pages/products/ContractedProducts";

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
        <Route
          path="/produtos-contratados"
          element={
            <LayoutPrincipal>
              <ProdutosContratados />
            </LayoutPrincipal>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
