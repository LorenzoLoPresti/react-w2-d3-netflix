import { Component } from "react";

class FooterListElement extends Component {
  render() {
    return (
      <div className="col col-12 col-sm-6 col-md-3 footer-links">
        {this.props.listContent.map((element, index) => (
          <p key={`le-${index}`}>
            <a href={`#${element}`} alt="footer link">
              {element}
            </a>
          </p>
        ))}
      </div>
    );
  }
}
export default FooterListElement;
