import React from "react";
import { ListGroup, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function EmailItem({ senderEmail, subject, onDelete, unRead, id, inbox }) {
  const navTo = useNavigate();

  const readMessageHandler = () => {
    if (inbox === "sentmails") {
      navTo(`/inbox/sentbox/message/${id}`);
    } else {
      navTo(`/inbox/message/${id}`);
    }
  };

  return (
    <ListGroup.Item
      style={{ backgroundColor: "#f8f9fa" }}
      className="d-flex align-items-center"
    >
      <div
        className="d-flex align-items-center"
        onClick={readMessageHandler}
        style={{ float: "right", width: "90%", marginLeft: "20px" }}
      >
        <div style={{ marginLeft: "20px" }}>
          <div>{` Recievd From: ${senderEmail}`}</div>
          <div>{subject}</div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <Button
          variant="danger"
          onClick={() => onDelete(id)}
          style={{ float: "right" }}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default EmailItem;
