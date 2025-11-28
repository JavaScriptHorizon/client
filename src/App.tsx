import { Route, Routes } from "react-router-dom";

// *routes
import { routes } from "./routes";

// *components shared
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

const App: React.FC = () => {
  return (
    <div className="px-4 space-y-4 max-w-7xl mx-auto">
      <Navbar />

      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} {...{ path, element }} />
        ))}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
