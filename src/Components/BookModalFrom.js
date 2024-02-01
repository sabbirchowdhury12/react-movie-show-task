import React, { useState } from "react";
import styled from "styled-components";
import { addToDb } from "../utils/AddToDB";

const BookModalFrom = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [movieName, setMovieName] = useState(showModal.name);
  const [time, setTime] = useState(showModal.schedule.days[0]);
  // const { name, setName ] = useState('');

  const handleBook = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      movieName,
      time,
      id: showModal.id,
    };
    // localStorage.setItem('Users', JSON.stringify(user));
    addToDb(user);
    setShowModal(null);
  };

  return (
    <ModalContainer>
      <Modal>
        <label onClick={() => setShowModal(false)} className="cross">
          X
        </label>
        <h2>
          Buy A Ticket For -- <span> {showModal.name}</span>
        </h2>
        <Form onSubmit={handleBook}>
          <label htmlFor="name">Your Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            email="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="movie">Movie Name</label>
          <Input
            type="text"
            disabled
            defaultValue={showModal.name}
            name="movie"
            id="movie"
          />
          <label htmlFor="time">Schedule</label>
          <Input
            type="text"
            id="time"
            name="time"
            disabled
            defaultValue={`${showModal.schedule.days[0]} - ${showModal.schedule.time}`}
          />
          <label htmlFor="language">Language</label>
          <Input
            type="text"
            id="language"
            name="language"
            disabled
            defaultValue={showModal.language}
            // onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Book</button>
        </Form>
      </Modal>
    </ModalContainer>
  );
};

export default BookModalFrom;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 400px;
  //   height: 400px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  color: #000;
  .cross {
    position: absolute;
    font-size: 20px;
    right: 6px;
    top: 2px;
    font-weight: bold;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
