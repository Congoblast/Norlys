import "./App.css";
import { AppHeader } from "./components/appHeader";
import { WindMillPage } from "./pages/windmillListPage";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <WindMillPage />
    </div>
  );
}

export default App;
