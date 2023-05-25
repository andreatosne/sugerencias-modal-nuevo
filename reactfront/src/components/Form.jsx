import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import '../../src/css/stilosModal.css'
import Swal from "sweetalert2";

const FormSugerencia = ({ book, setBook }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  let { sugerencia_aprendiz } = book;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    }

    fetch('http://localhost:5000/api', requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

    setBook({
      sugerencia_aprendiz: ''
    });
  }

  const showAlert = () => {
    Swal.fire({
      text: "Su registro fue exitoso",
      icon: "success",
      timer: 3000,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose(); // Cerrar el modal al hacer clic en "Aceptar"
      }
    });
  }

  return (
    <>
      <Button className="colorprincipal" onClick={handleShow}>
        Registrarse al encuentro
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='colorheader'>
          <Modal.Title>Registro de aprendices para charlas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <textarea
              value={sugerencia_aprendiz}
              name="sugerencia_aprendiz"
              onChange={handleChange}
              placeholder='Escribe una sugerencia de qué quieres hablar'
              className="form-control"
              rows={10}
              cols={80}
            />
            <div className='espacioboton'>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <button type="submit" className="btn btn-primary" onClick={showAlert}>
                Aceptar
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Contenido del footer del modal */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormSugerencia;
