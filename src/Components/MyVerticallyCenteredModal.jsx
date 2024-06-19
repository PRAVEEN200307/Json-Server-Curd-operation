import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ButtonComponent from "./ButtonComponent";

function MyVerticallyCenteredModal(props) {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill the required
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={  props.useobj.id  ? props.updateSubmit: props.submit }>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              name="productName"
              placeholder={props.useobj.title || "Enter your name"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              required
              name="brandName"
              placeholder={ props.useobj.brand  || 'Enter your Brand Name'} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              required
              name="CategoryName"
              placeholder={ props.useobj.category  || 'Enter your Cateogroy Name'} 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              required
              name="price"
              placeholder={ props.useobj.price  || 'Enter price'} 

            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="url"
              required
              name="ImageUrl"
              placeholder={ 'Enter your Image url'} 
            />
          </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function ModulesCompo() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

export default MyVerticallyCenteredModal;
