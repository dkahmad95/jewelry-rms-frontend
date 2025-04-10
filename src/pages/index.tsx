import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SuppliersList from "@/pages/Screens/Supplier/SuppliersList";
import Layout from "@/pages/Screens/Layout/Layout";
import CreateSupplier from "@/pages/Screens/Supplier/CreateSupplier";
import SingleSupplier from "@/pages/Screens/Supplier/SingleSupplier";
import NotFound from "@/pages/Screens/Supplier/not-found";
import EditSupplier from "@/pages/Screens/Supplier/EditSupplier";
import LoginPage from "@/pages/Screens/Login/Login";
import NewSupplierTransaction from "@/pages/Screens/Supplier/NewSupplierTransaction";
import NewSupplierPayment from "@/pages/Screens/Supplier/NewSupplierPayment";
import CustomersList from "@/pages/Screens/Customer/CustomersList";
import CreateCustomerInvoice from "@/pages/Screens/Customer/CreateCustomerInvoice";
import Register from "@/pages/Screens/Register/Register";
import EditCustomerInvoice from "@/pages/Screens/Customer/EditCustomerInvoice";
import Expenses from "@/pages/Screens/Expenses/Expenses";
import Receipt from "@/UI-Components/sharedComponents/Receipt";
import ConfirmSignUpByEmail from "@/pages/Screens/ConfirmSignUpByEmail/ConfirmSignUpByEmail";
import { AuthService } from "@/lib/auth.service";
import FrogetPassword from "@/pages/Screens/FrogetPassword/FrogetPassword";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setIsAuth, setIsAuthGot } from "@/lib/redux/userRedux";
import UnAuthLayout from "@/pages/Screens/Layout/UnAuthLayout";
import AppLoader from "@/UI-Components/sharedComponents/appLoader";

const authService = new AuthService();
export default function App() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const authGot = useSelector((state: RootState) => state.user.authGot);
  const dispatch = useDispatch();
 
  const checkUser = async () => {
    try {
      const res = await authService.getAuthenticatedUser();
      const idToken = await authService.getIdToken();

      dispatch(setIsAuth(true));
      dispatch(setIsAuthGot());
    } catch (e) {
      dispatch(setIsAuth(false));
      dispatch(setIsAuthGot());
    }
  };

  useEffect(() => {
    checkUser();
  }, [isAuth]);

  return (
    <Router>
      {authGot ? (
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/suppliersList" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {isAuth ? (
            <>
              <Route element={<Layout />}>
                <Route path="suppliersList" element={<SuppliersList />} />
                <Route path="createSupplier" element={<CreateSupplier />} />
                <Route path="singleSupplier/:id" element={<SingleSupplier />} />
                <Route path="editSupplier/:id" element={<EditSupplier />} />
                <Route
                  path="newSupplierTransaction/:id"
                  element={<NewSupplierTransaction />}
                />
                <Route
                  path="newSupplierPayment/:id"
                  element={<NewSupplierPayment />}
                />
                <Route path="notFound" element={<NotFound />} />
                <Route path="customersList" element={<CustomersList />} />
                <Route
                  path="createCustomerInvoice"
                  element={<CreateCustomerInvoice />}
                />
                <Route
                  path="editCustomerInvoice/:id"
                  element={<EditCustomerInvoice />}
                />
                <Route path="expenses" element={<Expenses />} />
                <Route path="receipt" element={<Receipt />} />
              </Route>
            </>
          ) : (
            <>
              <Route element={<UnAuthLayout />}>
                <Route path="frogetPassword" element={<FrogetPassword />} />
                <Route
                  path="confirmSignUpByEmail"
                  element={<ConfirmSignUpByEmail />}
                />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
            </>
          )}
        </Routes>
      ) : (
        <AppLoader />
      )}
    </Router>
  );
}
