import { Component } from "react";
import FooterIcons from "./FooterIcons";
import FooterListElement from "./FooterListElement";

class MyFooter extends Component {
  state = {
    listText: [
      ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
      ["Audio Description", "Investor Relations", "Legal Notices"],
      ["Help Center", "Jobs", "Cookie Preferences"],
      ["Gift Cards", "Terms of Use", "Corporate Information"],
    ],
  };
  render() {
    return (
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <FooterIcons />

          <div className="col">
            <div className="row">
              {this.state.listText.map((element, index) => (
                <FooterListElement
                  listContent={element}
                  key={"keyList" + index}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 mt-2 copyright">
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyFooter;
