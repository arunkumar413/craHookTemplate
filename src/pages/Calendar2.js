import React, { useState, useEffect } from "react";
import { useCalendar } from "../hooks/useCalendar";

const hourStyle = {
  borderLeft: "solid 0.5px gray",
  borderBottom: "solid 0.5px gray",
  height: 60,
};

export function Calendar2() {
  const {
    events,
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
        eventHour === hour
      ) {
        return (
          <div key={index.toString()} style={{ color: "white" }}>
            <div style={{ backgroundColor: "blue", width: "100%" }}>
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

  const weekElements = monthDays.map(function (item1, index1) {
    return [...Array(item1).keys()].map(function (item2, index2) {
      return (
        <div
          key={item1.toString()+ item2}
          style={{ borderBottom: "solid 1px gray", textAlign: "center" }}>
          <div style={{ padding: 10, borderBottom: "solid 0.5px gray" }}>
            {" "}
            <div style={{ fontSize: 24, fontWeight: "bold" }}>
              {" "}
              {index2 + 1}{" "}
            </div>
            {getDay(index2 + 1)}
          </div>
          {[...Array(24).keys()].map(function (hour, index) {
            return (
              <div key={index.toString()} style={hourStyle}>
                {" "}
                {buildEvents(item2, hour)}{" "}
              </div>
            );
          })}
        </div>
      );
    });
  });

  // const filteredWeekElements = weekElements[9][selectedDate].slice(
  //   selectedtWeekStart,
  //   selectedWeekEnd
  // );

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
          justifyContent: "space-around",
          alignItems: "center",
          gap: 10,
          padding: 10,
          marginBottom: 20,
          backgroundColor: "whitesmoke",
          borderRadius: 5,
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
          <select value={view} onChange={handleView}>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month"> Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div onClick={view === "week" ? decrementWeek : decrementDate}>
          {" "}
          <i className="fas fa-chevron-left"></i>{" "}
        </div>
        <div onClick={view === "week" ? incrementWeek : incrementDate}>
          {" "}
          <i className="fas fa-chevron-right"></i>{" "}
        </div>
      </div>
    );
  }

  const timeElements = [...Array(24).keys()].map(function (item, index) {
    return (
      <div
        key={item.toString()}
        style={{
          height: 60,
          borderBottom: "solid 0.5px gray",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
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
          {view === "week" &&
            weekElements.length &&
            weekElements[selectedMonth].slice(
              selectedtWeekStart,
              selectedWeekEnd
            )}
        </div>
      </div>
    </div>
  );
}
