import React, { usState, useEffect, cloneElement, useState } from "react";
import { useCalendar } from "../hooks/useCalendar";

export function Calendar(props) {
  const {
    view,
    changeDate,
    changeMonth,
    changeYear,
    changeView,
    eventHours,
    eventMinutes,
    selectedDate,
    selectedMonth,
    selectedYear,
    selectedMonthEvents,
    selectedDateEvents,
    selectedYearEvents,
    getEventByHour,
  } = useCalendar();

  const hourContainerStyle = {
    height: 60,
    border: "solid 0.5px gray",
  };

  const eventStyle = {
    fontSize: "0.8rem",
    backgroundColor: "blue",
    display: "block",
    color: "white",
    padding: 2,
    margin: 2,
    borderRadius: 5,
  };

  const hourElements = [...Array(24).keys()].map(function (hourItem, index) {
    if (eventHours.includes(hourItem) && selectedDateEvents.length > 0) {
      let eventItem = selectedDateEvents.filter(function (item, index) {
        return new Date(item.date).getHours() === hourItem;
      });

      console.log("############### Event Item #################");
      console.log(eventItem[0].summary);

      return (
        <div key={hourItem.toString()} id={hourItem} style={hourContainerStyle}>
          <span className="event" style={eventStyle}>
            {" "}
            {eventItem[0].summary}
          </span>
        </div>
      );
    } else {
      return (
        <div
          key={hourItem.toString()}
          id={hourItem}
          style={hourContainerStyle}></div>
      );
    }
  });

  const timeElements = [...Array(24).keys()].map(function (item, index) {
    return (
      <div
        key={item.toString()}
        style={{
          height: 60,
          border: "solid 0.5px gray",
        }}>
        <span>
          {" "}
          {item <= 11
            ? item + "AM"
            : item === 12
            ? item + "PM (Noon)"
            : item - 12 + "PM"}{" "}
        </span>
      </div>
    );
  });

  const handleView = (evt) => {
    changeView(evt.target.value);
  };

  const handleMonth = (evt) => {
    changeMonth(parseInt(evt.target.value));
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
        }}>
        <div>
          <select value={selectedMonth.toString()} onChange={handleMonth}>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>
        <div>
          <select onChange={handleView}>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month"> Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div>
          <h4> {"<"} </h4>
        </div>
        <div>
          <h4> {">"} </h4>
        </div>
      </div>
    );
  }

  return (
    <div>
      {toolBar()}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <div
          style={{
            display: "grid",
          }}>
          {timeElements}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          {hourElements}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
          {hourElements}
        </div>
      </div>
    </div>
  );
}
