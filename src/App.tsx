import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/external/Login";
import Cadastro from "./pages/external/Register-1";
import Dashboard from "./pages/internal/customer/general/Dashboard";
import CatalogoProdutos from "./pages/internal/customer/products/ProductCatalog";
import ProdutosContratados from "./pages/internal/customer/products/ContractedProducts";
import ManageCustomer from "./pages/internal/admin/clients/ManageCustomer";
import ManageCustomerProducts from "./pages/internal/admin/clients/ManageCustomerProducts";
import ViewCustomer from "./pages/internal/admin/clients/ViewCustomer";
import AdminDashboard from "./pages/internal/admin/general/AdminDashboard";
import ManageInvoices from "./pages/internal/admin/invoices/ManageInvoices";
import ViewInvoices from "./pages/internal/admin/invoices/ViewInvoices";
import ManageProducts from "./pages/internal/admin/products/ManageProducts";
import RegisterProducts from "./pages/internal/admin/products/RegisterProducts";
import ManageOrdersInternal from "./pages/internal/admin/sales/ManageOrders-internal";
import ViewOrdersInternal from "./pages/internal/admin/sales/ViewOrders-internal";
import LayoutPrincipal from "./components/fixed-layers/LayoutPrincipal";

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

        {/* Novas Rotas - Administração */}
        <Route
          path="/admin/dashboard"
          element={
            <LayoutPrincipal>
              <AdminDashboard />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/manage-customer"
          element={
            <LayoutPrincipal>
              <ManageCustomer />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/manage-customer-products"
          element={
            <LayoutPrincipal>
              <ManageCustomerProducts />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/view-customer"
          element={
            <LayoutPrincipal>
              <ViewCustomer />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/manage-invoices"
          element={
            <LayoutPrincipal>
              <ManageInvoices />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/view-invoices"
          element={
            <LayoutPrincipal>
              <ViewInvoices />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/manage-products"
          element={
            <LayoutPrincipal>
              <ManageProducts />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/register-products"
          element={
            <LayoutPrincipal>
              <RegisterProducts />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/manage-orders"
          element={
            <LayoutPrincipal>
              <ManageOrdersInternal />
            </LayoutPrincipal>
          }
        />
        <Route
          path="/admin/view-orders"
          element={
            <LayoutPrincipal>
              <ViewOrdersInternal />
            </LayoutPrincipal>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;