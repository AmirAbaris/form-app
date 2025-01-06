import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/LandingPage";
import SummaryPage from "./pages/SummaryPage";
import UserFormPage from "./pages/UserFormPage";
import AddressFormPage from "./pages/AddressFormPage";
import { UserContextProvider } from "./context/UserContextProvider";
import ProtectedRoute from "./protected-routes";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user-form" element={<UserFormPage />} />
          <Route
            path="/address-form"
            element={
              <ProtectedRoute>
                <AddressFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <SummaryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
