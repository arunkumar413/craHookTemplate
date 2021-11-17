import { func } from "prop-types";
import React, { useState, useEffect } from "react";

import closeButton from "../assets/xmark-solid.svg";
import linkIcon from "../assets/link-solid.svg";
import locationIcon from "../assets/location-dot-solid.svg";
import { useCalendar } from "../hooks/useCalendar";
import fileIcon from "../assets/file-lines-solid.svg";
import headingIcon from "../assets/heading-solid.svg";
import userIcon from "../assets/user-group-solid.svg";
import calendarIcon from "../assets/calendar-days-solid.svg";
import sunIcon from "../assets/cloud-sun-solid.svg";

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

  const { events, setEvents, test, setTest, addNewEvent } = useCalendar();

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
    setEvents(function () {
      return [...events, newEvent];
    });
  }

  function handleNewEvent(evt) {
    if (evt.target.name === "isFullDayEvent") {
      setNewEvent({
        ...newEvent,
        isFullDayEvent: newEvent.isFullDayEvent === true ? false : true,
      });
    } else if (evt.target.name === "date") {
      setNewEvent({
        ...newEvent,
        [evt.target.name]: new Date(evt.target.value).toISOString(),
      });
    } else {
      setNewEvent({ ...newEvent, [evt.target.name]: evt.target.value });
      setTest(evt.target.value);
    }
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
    backgroundColor: "var(--secondary-lightest)",
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

  useEffect(
    function () {
      console.log(events);
    },
    [events]
  );

  return (
    <div className="NewEvent rounder" style={newEventStyle}>
      <div>
        <h3 className="color-primary"> Add new event </h3>
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={headingIcon} alt={"heading icon"} />

        <input
          onChange={handleNewEvent}
          name="summary"
          className="input-small-primary round"
          placeholder="Summary"
        />
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={fileIcon} alt={"File icon"} />

        <textarea
          style={{ padding: "1rem" }}
          rows={10}
          cols={18}
          onChange={handleNewEvent}
          name="description"
          className="input-small-primary round"
          placeholder="Description"></textarea>
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={linkIcon} alt={"link-icon"} />
        <input
          onChange={handleNewEvent}
          name="link"
          type="URL"
          className="input-small-primary round"
          placeholder="Link"
        />
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={locationIcon} alt={"location icon"} />

        <input
          onChange={handleNewEvent}
          name="location"
          type="location"
          className="input-small-primary round"
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
        <div style={containerStyle}>
          <img style={iconStyle} src={userIcon} alt={"guests icon"} />

          <input
            name="guestEmail"
            onKeyDown={handleKeyDown}
            type="email"
            value={guestInput}
            onChange={handleGuestInput}
            className="input-small-primary round"
            placeholder="Guests (add email id)"
          />
        </div>

        <button onClick={addGuests} className="btn-primary-filled round">
          {" "}
          +{" "}
        </button>
      </div>

      <div style={containerStyle}>
        <img style={iconStyle} src={calendarIcon} alt={"calendar icon"} />

        <input
          onChange={handleNewEvent}
          name="date"
          type="datetime-local"
          className="input-small-primary round"
          placeholder="Enter date and time"
        />
      </div>

      <div style={containerStyle} className="full-day-event">
        <img style={iconStyle} src={sunIcon} alt={"calendar icon"} />
        <label style={{ fontSize: 16 }} htmlFor={"isFullDayEvent"}>
          {" "}
          Is full day event?
        </label>{" "}
        <input
          checked={newEvent.isFullDayEvent}
          onChange={handleNewEvent}
          name="isFullDayEvent"
          type="checkbox"
        />
      </div>

      <div className="guest-list" style={{ borderTop: "solid 1px gray" }}>
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
                  "&:hover": {
                    backgroundColor: "#efefef",
                  },
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
        <button
          onClick={() => props.setShowNewEventModal("none")}
          className="btn-secondary-filled round">
          {" "}
          Cancel{" "}
        </button>

        <button onClick={saveNewEvent} className="btn-primary-filled round">
          {" "}
          Save{" "}
        </button>
        {events[5] ? events[5].summary : ""}
        {events[6] ? events[6].summary : ""}

      </div>
    </div>
  );
}
