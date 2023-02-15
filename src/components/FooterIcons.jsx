import { Component } from "react";

class FooterIcons extends Component {
  // Nell'HTML queste icone non compaiono, ho apporfittato della cosa per allenarmi col map
  state = {
    icons: ["fa-facebook", "fa-instagram", "fa-twitter", "fa-youtube"],
  };
  render() {
    return (
      <div className="row">
        <div className="col col-12 text-left mb-2">
          {this.state.icons.map((icon, index) => (
            <i
              className={`fa ${icon} footer-icon icons`}
              key={`${icon} ${index}`}
            ></i>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"></div>
      </div>
    );
  }
}
export default FooterIcons;
