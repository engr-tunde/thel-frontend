import { useState } from "react";
import "../public/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import PurchaseListPage from "./pages/purchase";
import CategoryPage from "./pages/products/category";
import ProductPageList from "./pages/products";
import { ToastContainer } from "react-toastify";
import PrintBarcodePage from "./pages/products/print-barcode.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import LoginPage from "./pages/auth/Login.jsx";
import SaleListPage from "./pages/sale/index.jsx";
import ExpenseListPage from "./pages/expense/index.jsx";
import StaffListPage from "./pages/staff/index.jsx";
import SupplierListPage from "./pages/staff/supplier.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="/products" element={<ProductPageList />} />
            <Route path="/products/category" element={<CategoryPage />} />
            <Route
              path="/products/print-barcode"
              element={<PrintBarcodePage />}
            />
            <Route path="/purchases" element={<PurchaseListPage />} />
            <Route
              path="/products/product-list"
              element={<ProductPageList />}
            />
            <Route path="/products/category" element={<CategoryPage />} />
            <Route path="/sales/sale-list" element={<SaleListPage />} />
            <Route path="/expense/expense-list" element={<ExpenseListPage />} />
            <Route path="/staff/staff-list" element={<StaffListPage />} />
            <Route path="/staff/supplier-list" element={<SupplierListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
