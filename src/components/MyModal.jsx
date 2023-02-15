import { Button, Modal, ModalBody } from "react-bootstrap";
import { Component } from "react";
import img from "../img/6.png";

class MyModal extends Component {
  state = {
    show: true,
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{ backgroundColor: "rgb(40, 44, 52, 0.3)" }}
          className="text-light"
        >
          <Modal.Header
            style={{ backgroundColor: "rgb(40, 44, 52)" }}
            closeButton
          >
            <Modal.Title style={{ color: "#DC0913" }}>
              {this.props.modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "rgb(40, 44, 52)" }}>
            {this.props.modalPlot}
          </Modal.Body>
          <img src={this.props.modalImg} alt="poster" />
        </Modal>
      </>
    );
  }
}
export default MyModal;
