import { Component } from "react";
import logo from "../img/logo.png";
import { Col } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

class MyNavbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <a className="navbar-brand" href="#home">
          <img
            src={logo}
            style={{ width: "100px", height: "55px" }}
            alt="netflix-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Col className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#Home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#Tv">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#Movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#Recent">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#MyList">
                My List
              </a>
            </li>
          </ul>
        </Col>
        <Col className="d-none d-lg-flex">
          <FaSearch className="icons" />
          <div id="kids">KIDS</div>
          <FaBell className="icons" />
          <FaUser className="icons" />
        </Col>
      </nav>
    );
  }
}
export default MyNavbar;
