import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const NewMeeting = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header> */}
        <Modal.Title className="m-2 p-2">New Meeting</Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Meeting Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Meeting Title" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewMeeting;
