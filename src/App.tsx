import "./App.css";
import TopBar from "./components/TopBar";
import { WindMillPage } from "./pages/windmillListPage";

function App() {
  return (
    <div className="app">
      <TopBar />
      <WindMillPage />
    </div>
  );
}

export default App;
