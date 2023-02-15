import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";

const MovieDetails = (props) => {
  const [movieArray, setMovieArray] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [suggestedMovie, setSuggestedMovie] = useState(null);
  const params = useParams();

  console.log("PARAMETRI", params);

  const idFetch = (id) => {
    fetch(id)
      .then((element) => {
        if (element.ok) {
          return element.json();
        }
      })
      .then((movie) => {
        console.log("movie inside fetch", movie);
        setMovieArray(movie);
        movie.Title.length >= 5
          ? setSuggestion(movie.Title.substr(0, 5))
          : setSuggestion(movie.Title);
      });
    // fetch(`https://www.omdbapi.com/?apikey=9173a3c&s=${suggestion}`)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //   })
    //   .then((element) => setSuggestedMovie(element));
  };

  const suggestedFetch = () => {
    console.log("suggestedFetch");
    fetch(`https://www.omdbapi.com/?apikey=9173a3c&s=${suggestion}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((element) => setSuggestedMovie(element));
  };

  useEffect(() => {
    console.log("useEffect");
    idFetch(`https://www.omdbapi.com/?apikey=9173a3c&i=${params.movieId}`);
  }, [params]);

  useEffect(() => {
    suggestedFetch();
  }, [suggestion]);

  console.log("render");
  // console.log("movieOutsideFetch", movieArray);
  // console.log("titolo", suggestion);
  console.log("array", suggestedMovie);

  return (
    <>
      <Container
        className="mt-5 mb-5 py-5 border border-secondary"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        {movieArray ? (
          <Row>
            <Col xs={12} md={5}>
              <img src={movieArray.Poster} alt="" />
            </Col>
            <Col xs={12} md={7} className="text-white">
              <ListGroup>
                {/* 
            <ListGroup.Item>{movieArray.Actors}</ListGroup.Item>
          */}
                <ListGroup.Item
                  style={{
                    backgroundColor: "rgba(0,0,0,0)",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#E50914",
                  }}
                >
                  {movieArray.Title}
                </ListGroup.Item>
                <div className="d-flex">
                  <p
                    style={{
                      padding: "12px 0px 12px 20px",
                      fontWeight: "bold",
                    }}
                  >
                    Plot:
                  </p>
                  <ListGroup.Item
                    style={{
                      backgroundColor: "rgba(0,0,0,0)",
                      textAlign: "start",
                    }}
                  >
                    {movieArray.Plot}
                  </ListGroup.Item>
                </div>
                <div className="d-flex">
                  <p
                    style={{
                      padding: "12px 0px 12px 20px",
                      fontWeight: "bold",
                    }}
                  >
                    Genre:
                  </p>
                  <ListGroup.Item
                    style={{
                      backgroundColor: "rgba(0,0,0,0)",
                      textAlign: "start",
                    }}
                  >
                    {movieArray.Genre}
                  </ListGroup.Item>
                </div>
                <div className="d-flex">
                  <p
                    style={{
                      padding: "12px 0px 12px 20px",
                      fontWeight: "bold",
                    }}
                  >
                    Year:
                  </p>
                  <ListGroup.Item
                    style={{
                      backgroundColor: "rgba(0,0,0,0)",
                      textAlign: "start",
                    }}
                  >
                    {movieArray.Year}
                  </ListGroup.Item>
                </div>
              </ListGroup>
            </Col>
          </Row>
        ) : (
          <Spinner
            animation="border"
            role="status"
            variant="danger"
            className="mt-5"
          ></Spinner>
        )}
      </Container>
      <h2 className="pt-5">Potrebbero piacerti anche:</h2>
      <Row className="p-5">
        {suggestedMovie?.Search?.length > 0 ? (
          suggestedMovie?.Search?.map((element) => {
            return (
              <Col xs={12} sm={6} md={3} xl={2}>
                <Link to={"/movie-details/" + element.imdbID}>
                  <Cards posterImg={element.Poster} />
                </Link>
              </Col>
            );
          })
        ) : (
          <Spinner
            animation="border"
            role="status"
            variant="danger"
            className="mt-5"
          ></Spinner>
        )}
        {/* {suggestedMovie &&
        suggestedMovie.map((element) => {
          return <Cards />;
        })} */}
      </Row>
    </>
  );
};
export default MovieDetails;
