import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Settings from "./components/Settings";
import MainContent from "./components/MainContent";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Settings />
      <MainContent />
      <MyFooter />
    </div>
  );
}

export default App;
