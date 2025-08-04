import "./App.css";
import Navigation from "./components/navigation/navigation";
import { WindMillPage } from "./pages/windmillListPage";

function App() {
  return (
    <div className="app">
      <Navigation />
      <WindMillPage />
    </div>
  );
}

export default App;
