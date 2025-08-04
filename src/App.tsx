import "./App.css";
import Navigation from "./components/navigation/navigation";
import { WindMillPage } from "./pages/windmillListPage";
import { WindmillProvider } from "./providers/WindmillProvider";

function App() {
  return (
    <div className="app">
      <Navigation />
      <WindMillPage />
    </div>
  );
}

export default App;
