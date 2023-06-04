import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.myRef = React.createRef()
  }
  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  showRef = () => {
    this.props.titleValue = this.myRef.current.value
  }
  render() {
      return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Окно редактирования</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите заголовок..."
                  autoFocus
                  ref={this.myRef}
                  onChange={(e) => e.target.value}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.showRef}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalWindow;
