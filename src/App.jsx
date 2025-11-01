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
import CustomerListPage from "./pages/customer/index.jsx";
import ExpenseCategoryListPage from "./pages/expense/expenseCategory.jsx";
import SupplierListPage from "./pages/supplier/index.jsx";
import WarehouseListPage from "./pages/warehouse/index.jsx";
import AccountListPage from "./pages/account/index.jsx";
import PosPageLayout from "./layouts/PosPageLayout.jsx";
import PosPage from "./pages/sale/pos-page.jsx";

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
            <Route
              path="/expense/expense-category"
              element={<ExpenseCategoryListPage />}
            />
            <Route path="/staff/staff-list" element={<StaffListPage />} />
            <Route
              path="/supplier/supplier-list"
              element={<SupplierListPage />}
            />
            <Route
              path="/customer/customer-list"
              element={<CustomerListPage />}
            />
            <Route path="/setting/warehouse" element={<WarehouseListPage />} />
            <Route path="/account/account-list" element={<AccountListPage />} />
          </Route>

          <Route path="/sales" element={<PosPageLayout />}>
            <Route path="pos" element={<PosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
