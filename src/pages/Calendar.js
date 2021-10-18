import React, {
  usState,
  useEffect,
  cloneElement,
  useState,
  useRef,
} from "react";
import { useCalendar } from "../hooks/useCalendar";

export function Calendar(props) {
  const timeElementRef = useRef(null);

  const {
    days,
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
    setSelectedDate,
    getEventByHour,
  } = useCalendar();

  const hourContainerStyle = {
    height: 60,
    borderBottom: "solid 0.5px gray",
    borderRight: "solid 0.5px gray",
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

  const handleNewEvent = (evt) => {
    ///show popup to create new event
    console.log("create new event");
  };

  const hourElements = [...Array(24).keys()].map(function (hourItem, index) {
    if (eventHours.includes(hourItem) && selectedDateEvents.length > 0) {
      let eventItem = selectedDateEvents.filter(function (item, index) {
        return new Date(item.date).getHours() === hourItem;
      });

      console.log("############### Event Item #################");

      if (eventItem.length > 0) {
        let eventElements = eventItem.map(function (item, index) {
          return (
            <span key={index.toString()} className="event" style={eventStyle}>
              {" "}
              {eventItem[0].summary}
            </span>
          );
        });

        return (
          <div
            onClick={handleNewEvent}
            key={hourItem.toString()}
            id={hourItem}
            style={hourContainerStyle}>
            {eventElements}
          </div>
        );
      }
    } else {
      return (
        <div
          onClick={handleNewEvent}
          key={hourItem.toString()}
          id={hourItem}
          style={hourContainerStyle}></div>
      );
    }
  });

  const timeElements = [...Array(24).keys()].map(function (item, index) {
    return (
      <div
        ref={timeElementRef}
        className="time-element"
        key={item.toString()}
        style={{
          height: 60,
          borderBottom: "solid 0.5px gray",
          borderRight: "solid 0.5px gray",
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

  const decrementDate = () => {
    setSelectedDate(selectedDate - 1);
  };

  const incrementDate = () => {
    setSelectedDate(selectedDate + 1);
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
        <div onClick={decrementDate}>
          {" "}
          <i class="fas fa-chevron-left"></i>{" "}
        </div>
        <div onClick={incrementDate}>
          {" "}
          <i class="fas fa-chevron-right"></i>{" "}
        </div>
      </div>
    );
  }

  function weekbar() {
    let weekBarElements = days[0].map(function (item, index) {
      return (
        <div key={item.name} className="week-bar-element">
          <span>{item.name}</span>
        </div>
      );
    });
    return weekBarElements;
  }

  useEffect(function () {
    if (timeElementRef.current) {
    }
  }, []);

  return (
    <div>
      {toolBar()}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: `${
            view === "week" ? "100px 1fr 1fr 1fr 1fr 1fr 1fr 1fr" : "100px 1fr"
          }`,
        }}>
        {view === "week" && (
          <div className="week-bar-element">
            <span></span>
          </div>
        )}

        {view === "week" && weekbar()}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${
            view === "week" ? "100px 1fr 1fr 1fr 1fr 1fr 1fr 1fr" : "100px 1fr"
          }`,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <div
          style={{
            display: "grid",
            borderTop: "solid 0.5px gray",
          }}>
          {timeElements}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            borderTop: "solid 0.5px gray",
          }}>
          {hourElements}
        </div>

        {view === "week" && (
          <React.Fragment>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderTop: "solid 0.5px gray",
              }}>
              {hourElements}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
