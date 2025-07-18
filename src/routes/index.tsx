import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "../components/layouts/Dashboard";
import NotFound from "../components/notFound/NotFound";
import UnderConstruction from "../components/others/underConstructions";
import AuthLayout from "../components/feature/auth/AuthLayout";
import AuthSide from "../components/feature/auth/AuthSide";
import SignInPage from "../components/feature/auth/SignIn";
import SignUpPage from "../components/feature/auth/SignUp";
import ForgetPassPage from "../components/feature/auth/ForgetPass";
import OtpVerification from "../components/feature/auth/Otp";
import ResetPasswordPage from "../components/feature/auth/ResetPassword";

const RouterProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AuthLayout fullWidthSide sideComponent={<AuthSide />} />}
        >
          <Route index={true} element={<SignInPage />} />
          <Route path="signUp" element={<SignUpPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="otp" element={<OtpVerification />} />
          <Route path="forget-password" element={<ForgetPassPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index={true}
            element={<UnderConstruction name="Dashboard" />}
          />
          <Route
            path="booking-list"
            element={<UnderConstruction name="Booking List" />}
          />
          <Route index element={<UnderConstruction name="Service" />} />
          <Route
            path="add-service"
            element={<UnderConstruction name="Add Service" />}
          />
          <Route
            path="all-service"
            element={<UnderConstruction name="All Services" />}
          />
          <Route index element={<UnderConstruction name="Locations" />} />
          <Route
            path="add-location"
            element={<UnderConstruction name="Add Location" />}
          />
          <Route
            path="all-location"
            element={<UnderConstruction name="All Locations" />}
          />
          <Route index element={<UnderConstruction name="Clinicians" />} />
          <Route
            path="add-clinicians"
            element={<UnderConstruction name="Add Clinician" />}
          />
          <Route
            path="all-clinicians"
            element={<UnderConstruction name="All Clinicians" />}
          />
          <Route index element={<UnderConstruction name="Blog" />} />
          <Route
            path="post1"
            element={<UnderConstruction name="Add Blogs" />}
          />
          <Route
            path="post2"
            element={<UnderConstruction name="All Blogs" />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterProvider;
