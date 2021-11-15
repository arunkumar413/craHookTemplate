import { func } from "prop-types";
import React, { useState, useEffect } from "react";

import closeButton from "../assets/xmark-solid.svg";
import linkIcon from "../assets/link-solid.svg";
import { useCalendar } from "../hooks/useCalendar";

export function NewEvent(props) {
  const [guests, setGuests] = useState([]);
  const [guestInput, setGuestInput] = useState("");
  const [newEvent, setNewEvent] = useState({
    date: "",
    location: "",
    summary: "",
    description: "",
    link: "",
    isFullDayEvent: false,
    guests: [],
  });

  const { setEvents, events } = useCalendar();

  function addGuests(evt) {
    setGuests(function () {
      return [...guests, guestInput];
    });

    setNewEvent({ ...newEvent, guests: guests });

    setGuestInput("");
  }

  function handleGuestInput(evt) {
    setGuestInput(evt.target.value);
  }

  function removeGuest(value) {
    debugger;
    let filteredGuets = guests.filter(function (item, index) {
      return item !== value;
    });

    setGuests(filteredGuets);
  }

  function handleKeyDown(evt) {
    if (evt.key === "Enter") {
      addGuests();
    }
  }

  function saveNewEvent(evt) {
    console.log(events);
    setEvents(function () {
      return [...events, newEvent];
    });
  }

  function handleNewEvent(evt) {
    setNewEvent({ ...newEvent, [evt.target.name]: evt.target.value });
  }

  const newEventStyle = {
    display: props.showNewEventModal,
    justifyContent: "center",
    position: "fixed",
    zIndex: 1000,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "5px 5px 5px gray",
    padding: 10,
    gridTemplateColumns: "1fr",
    border: "solid 0.5px gray",
    gap: 10,
    backgroundColor: "var(--primary-lightest)",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  };

  const iconStyle = {
    width: 24,
    height: 24,
    textAlign: "center",
  };

  useEffect(
    function () {
      setNewEvent({ ...newEvent, guests: guests });
    },
    [guests]
  );

  return (
    <div className="NewEvent" style={newEventStyle}>
      <div>
        <h4> Add new event </h4>
      </div>
      <input
        onChange={handleNewEvent}
        name="summary"
        className="input-small-primary"
        placeholder="Summary"
      />
      <input
        onChange={handleNewEvent}
        name="description"
        className="input-small-primary"
        placeholder="Description"
      />

      <div style={containerStyle}>
        <img style={iconStyle} src={linkIcon} alt={"link-icon"} />
        <input
          onChange={handleNewEvent}
          name="link"
          type="URL"
          className="input-small-primary"
          placeholder="Link"
        />
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={linkIcon} alt={"link-icon"} />

        <input
          onChange={handleNewEvent}
          name="location"
          type="location"
          className="input-small-primary"
          placeholder="Location"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 100px",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
        }}>
        <input
          name="guestEmail"
          onKeyDown={handleKeyDown}
          type="email"
          value={guestInput}
          onChange={handleGuestInput}
          className="input-small-primary"
          placeholder="Guests (add email id)"
        />

        <button onClick={addGuests} className="btn-primary-filled">
          {" "}
          +{" "}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
        <input
          onChange={handleNewEvent}
          name="date"
          type="datetime-local"
          className="input-small-primary"
          placeholder="Enter date and time"
        />

        <div className="full-day-event">
          <label htmlFor={"isFullDayEvent"}> Is full day event </label>{" "}
          <input
            onChange={handleNewEvent}
            name="isFullDayEvent"
            type="checkbox"
          />
        </div>
      </div>

      <div className="guest-list">
        <ol>
          <h5> Guests </h5>
          {guests.map(function (guest, index) {
            return (
              <li
                key={index.toString()}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 5,
                }}>
                {guest}

                <img
                  onClick={() => removeGuest(guest)}
                  style={{ width: 16, height: 16 }}
                  src={closeButton}
                  alt="close button"
                />
              </li>
            );
          })}
        </ol>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 5,
        }}>
        <button className="btn-secondary-filled"> Cancel </button>

        <button onClick={saveNewEvent} className="btn-primary-filled">
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
}
