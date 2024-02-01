import React, { useState } from "react";
import "../../utils/Custom.css";

const BookList = () => {
  const [bookingList, setBookingList] = useState(
    JSON.parse(localStorage.getItem("User"))
  );

  return (
    <table>
      {!bookingList?.length ? (
        <h2>NO TICKET AVAILABLE</h2>
      ) : (
        <thead>
          <tr>
            <th>Show Name</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Show schedule</th>
            {/* <th>Ticket</th> */}
          </tr>
        </thead>
      )}
      <tbody>
        {bookingList?.map((book, index) => (
          <tr key={book.id}>
            <td>{book.movieName}</td>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.time ? book.time : "Today"}</td>
            {/* <td>{book.quantity}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
