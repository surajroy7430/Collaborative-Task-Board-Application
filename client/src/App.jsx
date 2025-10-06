import { Toaster } from "./components/ui/sonner";
import AppRoutes from "./routes/appRoutes";

const App = () => {
  return (
    <div className="min-h-screen">
      <AppRoutes />
      <Toaster />
    </div>
  );
};

export default App;
