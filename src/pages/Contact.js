import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Contact(props) {
  const [state, setState] = useState("");

  return (
    <div>
      <h2> Contact</h2>
      <Link to="/home"> Home </Link>
    </div>
  );
}
