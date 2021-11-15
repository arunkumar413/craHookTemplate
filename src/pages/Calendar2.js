import { func } from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { CustomSelect } from "../components/CustomSelect";
import { NewEvent } from "../components/NewEvent";
import { useCalendar } from "../hooks/useCalendar";

const hourStyle = {
  borderLeft: "solid 0.5px gray",
  borderBottom: "solid 0.5px gray",
  height: 60,
  padding: 1,
};

const fullDayStyle = {
  borderLeft: "solid 0.5px gray",
  backgroundColor: "var(--primary-lightest)",

  borderBottom: "solid 0.5px gray",
  height: 60,
  padding: 1,
};

const eventStyle = {
  backgroundColor: "blue",
  width: "100%",
  margin: 1,
  fontSize: "0.8rem",
  cursor: "pointer",
  color: "white",
};

const arrowStyle = {
  borderRadius: 20,
  backgroundColor: "var(--primary-lighter)",
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

export function Calendar2() {
  const {
    events,
    months,
    monthDays,
    days,
    view,
    changeDate,
    changeMonth,
    changeYear,
    changeView,
    eventHours,
    eventMinutes,
    selectedDate,
    selectedtWeekStart,
    selectedWeekEnd,
    selectedMonth,
    selectedYear,
    selectedMonthEvents,
    selectedDateEvents,
    selectedYearEvents,
    setSelectedDate,
    setSelectedWeekEnd,
    setSelectedWeekStart,
    getEventByHour,
  } = useCalendar();

  const [showNewEventModal, setShowNewEventModal] = useState("none");

  function decrement() {
    if (view === 0) {
      decrementDate();
    } else if (view === 1) {
      decrementWeek();
    }
  }

  function handleNewEvent(evt) {
    evt.stopPropagation();
    console.log("new event");
    setShowNewEventModal(showNewEventModal === "grid" ? "none" : "grid");
  }

  function increment() {
    if (view === 0) {
      incrementDate();
    } else if (view === 1) {
      incrementWeek();
    }
  }

  function getDay(date) {
    let year = selectedYear;
    let month = selectedMonth;

    let day = new Date(`${selectedYear}-${selectedMonth + 1}-${date}`).getDay();
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];
  }

  function getFullDayEvent(date) {
    let fullDayEvent = null;
    for (let i = 0; i < events.length; i++) {
      let eventYear = new Date(events[i].date).getFullYear();
      let eventMonth = new Date(events[i].date).getMonth();
      let eventDate = new Date(events[i].date).getDate();
      let eventHour = new Date(events[i].date).getHours();

      if (
        eventYear === selectedYear &&
        eventMonth === selectedMonth &&
        eventDate === date &&
        events[i].isFullDayEvent === true
      ) {
        fullDayEvent = events[i].summary;
      } else {
        fullDayEvent = "";
      }
    }

    return fullDayEvent;
  }

  function fullDayEvents(date) {
    let result = null;
    for (let i = 0; i < events.length; i++) {
      let eventYear = new Date(events[i].date).getFullYear();
      let eventMonth = new Date(events[i].date).getMonth();
      let eventDate = new Date(events[i].date).getDate();
      let eventHour = new Date(events[i].date).getHours();

      if (
        eventYear === selectedYear &&
        eventMonth === selectedMonth &&
        eventDate === date &&
        events[i].isFullDayEvent === true
      ) {
        result = true;
      } else {
        result = false;
      }
    }

    return result;
  }

  function buildEvents(date, hour) {
    return events.map(function (event, index) {
      let eventYear = new Date(event.date).getFullYear();
      let eventMonth = new Date(event.date).getMonth();
      let eventDate = new Date(event.date).getDate();
      let eventHour = new Date(event.date).getHours();
      if (
        eventYear === selectedYear &&
        eventMonth === selectedMonth &&
        eventDate === date &&
        eventHour === hour &&
        event.isFullDayEvent !== true
      ) {
        return (
          <div key={index.toString()} style={{ color: "white" }}>
            <div
              className="event"
              style={{
                backgroundColor: "blue",
                width: "100%",
                margin: 1,
                fontSize: "0.8rem",
                cursor: "pointer",
              }}>
              {" "}
              {event.summary}
              <span></span>
            </div>{" "}
          </div>
        );
      } else {
        return null;
      }
    });
  }
  // loop through the months and their total days days

  const weekElements = monthDays.map(function (item1, index1) {
    return [...Array(item1).keys()].map(function (item2, index2) {
      // loop through the total days of each month
      return (
        // Week headers
        <div
          key={item1.toString() + item2}
          style={{ borderBottom: "solid 1px gray", textAlign: "center" }}>
          <div
            className="week-header"
            style={{
              padding: 10,
              borderBottom: "solid 0.5px gray",
              borderLeft: "solid 0.5px gray",
              height: 100,
            }}>
            {" "}
            <div style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {index2 + 1}{" "}
            </div>
            {getDay(index2 + 1)}
            <div style={eventStyle}> {getFullDayEvent(index2)} </div>
          </div>
          {[...Array(24).keys()].map(function (hour, index) {
            //loop thrugh 24 hours and create hour elements
            return (
              <div
                onClick={handleNewEvent}
                className="hour-container"
                key={index.toString()}
                style={fullDayEvents(item2) ? fullDayStyle : hourStyle}>
                {" "}
                {/* if for each month, date, hour there are any events create an event item */}
                {buildEvents(item2, hour)}{" "}
              </div>
            );
          })}
        </div>
      );
    });
  });

  const handleView = (evt) => {
    changeView(evt.target.value);
  };

  const handleMonth = (evt) => {
    changeMonth(parseInt(evt.target.value));
  };

  const decrementDate = () => {
    setSelectedDate(selectedDate - 1);
  };

  const incrementDate = () => {
    setSelectedDate(selectedDate + 1);
  };

  const incrementWeek = () => {
    setSelectedWeekStart(selectedtWeekStart + 7);
    setSelectedWeekEnd(selectedWeekEnd + 7);
  };

  const decrementWeek = () => {
    setSelectedWeekStart(selectedtWeekStart - 7);
    setSelectedWeekEnd(selectedWeekEnd - 7);
  };

  function toolBar() {
    return (
      <div
        className="calendar-tool-bar"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          padding: 5,
          marginBottom: 20,
          backgroundColor: "whitesmoke",
          borderRadius: 5,
        }}>
        <CustomSelect
          options={months}
          value={selectedMonth}
          setValue={changeMonth}
        />

        <CustomSelect
          options={[
            { name: "Day", value: "day" },
            { name: "Week", value: "week" },
            { name: "Month", value: "month" },
            { name: "Year", value: "year" },
          ]}
          value={view}
          setValue={changeView}
        />

        {/* <select value={view} onChange={handleView}>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month"> Month</option>
            <option value="year">Year</option>
          </select> */}
        <div onClick={decrement}>
          {" "}
          <div style={arrowStyle}>
            <i className="fas fa-chevron-left fa-xl"></i>{" "}
          </div>
        </div>
        <div style={arrowStyle} onClick={increment}>
          {" "}
          <i className="fas fa-chevron-right fa-xl"></i>{" "}
        </div>
      </div>
    );
  }

  const timeElements = [...Array(24).keys()].map(function (item, index) {
    return (
      <div
        className="time-container"
        key={item.toString()}
        style={{
          height: 60,
          borderBottom: "solid 0.5px gray",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
        }}>
        {item === 0
          ? "12AM"
          : item === 12
          ? "12 PM (Noon)"
          : item <= 11
          ? item + "AM"
          : item > 12
          ? item - 12 + "PM"
          : null}
      </div>
    );
  });

  return (
    <div>
      {toolBar()}
      <div
        className="Calendar2"
        style={{ display: "grid", gridTemplateColumns: "100px 1fr" }}>
        <div>
          <div
            style={{
              padding: 10,
              borderBottom: "solid 0.5px gray",
              height: 100,
            }}>
            <div
              style={{
                visibility: "hidden",
                fontSize: 24,
                fontWeight: "bold",
              }}>
              Hour
            </div>
            <span style={{ visibility: "hidden" }}> s </span>
          </div>

          {timeElements}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {view === 1 &&
            weekElements.length &&
            weekElements[selectedMonth].slice(
              selectedtWeekStart,
              selectedWeekEnd
            )}
        </div>
      </div>
      <NewEvent showNewEventModal={showNewEventModal} />
    </div>
  );
}
