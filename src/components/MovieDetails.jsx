import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const [movieArray, setMovieArray] = useState(null);
  const params = useParams();

  console.log("Wallace", params);

  const idFetch = () => {
    fetch(`https://www.omdbapi.com/?apikey=9173a3c&i=${params.movieId}`)
      .then((element) => {
        if (element.ok) {
          return element.json();
        }
      })
      .then((movie) => {
        console.log("movie inside fetch", movie);
        setMovieArray(movie);
      });
  };

  useEffect(() => {
    idFetch();
    console.log("movieOutsideFetch", movieArray);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={5} className="Col">
          <img src={movieArray.Poster} alt="" />
        </Col>
        <Col xs={12} md={7} className="Col">
          <ListGroup>
            {/* 
            <ListGroup.Item>{movieArray.Actors}</ListGroup.Item>
            <ListGroup.Item>{movieArray.Plot}</ListGroup.Item>
          */}
            <ListGroup.Item>{movieArray.Title}</ListGroup.Item>
            <ListGroup.Item>{movieArray.Year}</ListGroup.Item>
            <ListGroup.Item>{movieArray.Genre}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
