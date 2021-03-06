import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const styles = {
  backgroundColor: "var(--primary-lightest",
  color: "white",
};
export function Sidebar() {
  return (
    <aside style={styles}>
      <nav>
        <ol>
          <li className="crumb">
            <Link to="/buttons">Buttons</Link>
          </li>
          <li className="crumb">
            <Link to="/inputs">Inputs</Link>
          </li>
          <li className="crumb">
            <Link to="/typography">Typography</Link>
          </li>
          <li className="crumb">
            <Link to="/chips">Chips</Link>
          </li>
          <li className="crumb">
            <Link to="/progress">Progress</Link>
          </li>
          <li className="crumb">
            <Link to="/dropdown">Drop Down</Link>
          </li>

          <li className="crumb">
            <Link to="/stepper">Stepper</Link>
          </li>

          <li className="crumb">
            <Link to="/calendar2">Calendar</Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
