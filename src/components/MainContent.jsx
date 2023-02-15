import { Component } from "react";

import TrendingNow from "./TrendingNow";

class MainContent extends Component {
  state = {
    categories: [
      ["Trending now", "harry+potter"],
      ["Watch it now", "star+wars"],
      ["New releases", "sherlock+holmes"],
    ],
  };
  render() {
    return this.state.categories.map((e, index) => (
      <div key={`MovieSectionKey${index}`} className="text-left px-4">
        <TrendingNow categoryName={e[0]} productQuery={e[1]} />
      </div>
    ));
  }
}
export default MainContent;
