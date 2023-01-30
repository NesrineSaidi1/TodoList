import { Button, Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { UpdateTask } from "../redux/todoslice/Todoslice";
import { useDispatch } from "react-redux";

const EditTask = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, EditTask] = useState({
    title: "",
    description: "",
  });
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Add Todo name"
            onChange={(e) => {
              EditTask({ ...edited, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Add Todo description"
            onChange={(e) => {
              EditTask({ ...edited, description: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(UpdateTask({ id: id, edited }));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
