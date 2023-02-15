import { Component } from "react";
import Cards from "./Cards";

class TrendingNow extends Component {
  state = {
    cardsArr: [1, 2, 3, 4, 5, 6],
  };

  trendingFetch = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=9173a3c&s=${this.props.productQuery}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((element) => {
        const sortedArr = element.Search.sort((a, b) => {
          return Number(a.Year) - Number(b.Year);
        });
        this.setState({ ...this.state, cardsArr: sortedArr });
      });
  };
  componentDidMount() {
    this.trendingFetch();
  }
  render() {
    return (
      <>
        <h4>{this.props.categoryName}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {this.state.cardsArr.map((e, index) => {
            // if (index < 6) {
            //   return <Cards key={"cardsKeyNumber" + index} />;
            // }
            return (
              index < 6 && (
                <Cards
                  key={`CardsKey ${index}`}
                  posterImg={e.Poster}
                  title={e.Title}
                />
              )
            );
          })}
        </div>
      </>
    );
  }
}
export default TrendingNow;
