import { Component } from "react";
import MyModal from "./MyModal";

class Cards extends Component {
  state = {
    clicked: false,
    modalTitle: "",
    modalPlot: "",
    modalImg: "",
  };

  modalInfo = () => {
    fetch(`https://www.omdbapi.com/?apikey=9173a3c&t=${this.props.title}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((elementMovie) => {
        this.setState({
          ...this.state,
          modalTitle: elementMovie.Title,
          modalPlot: elementMovie.Plot,
          modalImg: elementMovie.Poster,
        });
      });
  };

  componentDidMount() {
    this.modalInfo();
  }

  render() {
    return (
      <div
        className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 px-1"
        onClick={() => {
          this.setState({ ...this.state, clicked: !this.state.clicked });
          console.log(this.state.clicked);
        }}
      >
        <img
          className="image-fluid posterImg"
          src={this.props.posterImg}
          //   alt="movie picture"

          alt=""
        />
        {this.state.clicked && (
          //   <div
          //     style={{
          //       height: "100px",
          //       width: "200px",
          //       backgroundColor: "black",
          //       position: "absolute",
          //       top: "0",
          //       right: "0",
          //     }}
          //   >
          //     ciao
          //   </div>
          <MyModal
            modalTitle={this.props.title}
            modalPlot={this.state.modalPlot}
            modalImg={this.props.posterImg}
          />
        )}
      </div>
    );
  }
}

export default Cards;
