import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AppRoutes } from "./routes/routes";
import { AuthGoogleProvider } from "./contexts/authGoogle";

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}

export default App;
