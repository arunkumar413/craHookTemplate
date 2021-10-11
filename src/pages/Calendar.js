import React, { usState, useEffect, cloneElement, useState } from "react";

const hourContainerStyle = {
  border: "solid 0.5px gray",
  minHeight: 60,
};

const eventStyle = {
  backgroundColor: "var(--primary)",
  color: "var(--text-lightest)",
  fontSize: "0.8rem",
  border: "none",
  padding: 5,
  marginRight: 5,
  borderRadius: 5,
};

function hourLableElements() {
  let labelElements = [];

  for (let i = 0; i <= 24; i++) {
    labelElements.push(
      <div
        style={{
          border: "solid 0.5px gray",
          minHeight: 60,
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "flex-start",
          textAlign: "center",
          borderRight: "none",
          borderLeft: "none",
        }}>
        {" "}
        {i > 12 ? i - 12 + "PM" : i + "AM"}{" "}
      </div>
    );
  }
  return labelElements;
}

export function Calendar() {
  const [eventItems, setEventItems] = useState([4, 8, 12, 16]);
  const centuryYears = [1900, 2000, 2100, 2200, 2300, 2400, 2500];
  const [thisYear, setThisYear] = useState(new Date().getFullYear());
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [monthDefinitions, setMonthDefinitions] = useState([]);

  useEffect(function () {
    if (thisYear % 4 === 0) {
      setIsLeapYear(true);
    } else if (centuryYears.includes(thisYear)) {
      setIsLeapYear(true);
    }
  }, []);

  useEffect(
    function () {
      setMonthDefinitions(months);
    },
    [isLeapYear]
  );

  const months = [
    { name: "Janurary", num: 0, totalDays: 31 },
    { name: "February", num: 1, totalDays: isLeapYear ? 29 : 28 },
    { name: "March", num: 2, totalDays: 31 },
    { name: "April", num: 3, totalDays: 30 },
    { name: "May", num: 4, totalDays: 31 },
    { name: "June", num: 5, totalDays: 30 },
    { name: "July", num: 6, totalDays: 31 },
    { name: "August", num: 7, totalDays: 31 },
    { name: "September", num: 8, totalDays: 30 },
    { name: "October", num: 9, totalDays: 31 },
    { name: "November", num: 10, totalDays: 30 },
    { name: "December", num: 11, totalDays: 31 },
  ];

  const [events, setEvents] = useState([
    {
      date: new Date("2021-10-05T06:56:08.984Z"),
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
    },
    {
      date: new Date("2021-10-05T08:56:08.984Z"),
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
    },

    {
      date: new Date("2021-10-05T10:56:08.984Z"),
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
    },
  ]);

  let eventYears = events.map(function (item, index) {
    return item.date.getFullYear();
  });

  let eventMonths = events.map(function (item, index) {
    return item.date.getMonth();
  });

  let eventDates = events.map(function (item, index) {
    return item.date.getDate();
  });

  let eventHours = events.map(function (item, index) {
    return item.date.getHours();
  });

  let eventMinutes = events.map(function (item, index) {
    return item.date.getMinutes();
  });

  function hourElements() {
    let items = [];
    for (let i = 0; i <= 24; i++) {
      if (eventItems.includes(i)) {
        items.push(
          <div style={hourContainerStyle}>
            <div className="event" style={eventStyle}>
              Meeting
            </div>
          </div>
        );
      } else {
        items.push(<div style={hourContainerStyle}></div>);
      }
    }
    return items;
  }

  function eventElements() {
    return events.map(function (item, index) {
      return (
        <div className="event" style={eventStyle}>
          Meeting
        </div>
      );
    });
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px 1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {hourLableElements()}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {hourElements()}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {hourElements()}
      </div>
    </div>
  );
}
