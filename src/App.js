import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Settings from "./components/Settings";
import MainContent from "./components/MainContent";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MyDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Settings />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
