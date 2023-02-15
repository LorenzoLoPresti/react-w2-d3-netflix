import { Container, Row, Col } from "react-bootstrap";

const MovieDetails = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={5} className="Col"></Col>
        <Col xs={12} md={7} className="Col"></Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
