import React, { useState, useEffect, useDebugValue } from "react";

export function useCalendar(key) {
  const [centuryYears, setCenturyYears] = useState([
    1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000,
  ]);
  const [isLeapYear, setIsLeapYear] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [eventHours, setEventHours] = useState([]);
  const [eventMinutes, setEventMinutes] = useState([]);
  const [selectedDateString, setSelectedDateString] = useState(
    new Date().toISOString()
  );

  useDebugValue(eventHours ? "hours" : "hours");

  const [selectedYearEvents, setSelectedYearEvents] = useState([]);
  const [selectedMonthEvents, setSelectedMonthEvents] = useState([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  const [view, setView] = useState("week");

  const [events, setEvents] = useState([
    {
      date: "2021-10-05T06:56:08.984Z",
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
      isFullDayEvent: false,
    },
    {
      date: "2021-10-05T08:56:08.984Z",
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
      isFullDayEvent: false,
    },

    {
      date: "2021-10-05T10:56:08.984Z",
      location: "Zoom",
      summary: "Zoom Meeting",
      description: "Zoom meeting for new calendar App",
      link: "",
      isFullDayEvent: false,
    },
    {
      date: "2021-11-05T10:56:08.984Z",
      location: "Zoom",
      summary: "November Event",
      description: "Zoom meeting for new calendar App",
      link: "",
      isFullDayEvent: false,
    },
    {
      date: "2021-11-05T10:56:08.984Z",
      location: "Zoom",
      summary: "November Event",
      description: "Zoom meeting for new calendar App",
      link: "",
      isFullDayEvent: false,
    },
  ]);

  const [days, setDays] = useState([
    { name: "Sunday" },
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
  ]);

  const [months, setMonths] = useState([
    { name: "Janurary", totalDays: 31 },
    { name: "February", totalDays: isLeapYear ? 29 : 28 },
    { name: "March", totalDays: 31 },
    { name: "April", totalDays: 30 },
    { name: "May", totalDays: 31 },
    { name: "June", totalDays: 30 },
    { name: "July", totalDays: 31 },
    { name: "August", totalDays: 31 },
    { name: "September", totalDays: 30 },
    { name: "October", totalDays: 31 },
    { name: "November", totalDays: 30 },
    { name: "December", totalDays: 31 },
  ]);
  const [monthDays, setMonthDays] = useState([]);
  const [selectedtWeekStart, setSelectedWeekStart] = useState(0);
  const [selectedWeekEnd, setSelectedWeekEnd] = useState(7);

  useEffect(
    function () {
      let m = months.map(function (item, index) {
        return item.totalDays;
      });
      setMonthDays(m);
    },
    [selectedYear, months]
  );

  useEffect(
    function () {
      if (selectedYear % 4 === 0) {
        setIsLeapYear(true);
      } else if (centuryYears.includes(selectedYear)) {
        setIsLeapYear(true);
      }
    },
    [selectedYear, centuryYears]
  );

  function changeYear(year) {
    setSelectedYear(year);
  }

  function changeMonth(month) {
    setSelectedMonth(month);
  }
  function changeDate(date) {
    setSelectedDate(date);
  }
  function changeView(view) {
    setView(view);
  }

  function getEventByHour(hour) {
    let event = selectedDateEvents.filter(function (item, index) {
      return new Date(item.date).getHours() === hour;
    });
    return event;
  }

  useEffect(
    function () {
      let selectedYearEvents = events.filter(function (item, index) {
        return new Date(item.date).getFullYear() === selectedYear;
      });
      setSelectedYearEvents(selectedYearEvents);
    },

    [events, selectedYear]
  );

  useEffect(
    function () {
      let selectedMonthEvents = selectedYearEvents.filter(function (
        item,
        index
      ) {
        return new Date(item.date).getMonth() === selectedMonth;
      });

      setSelectedMonthEvents(selectedMonthEvents);
    },
    [events, selectedMonth, selectedYearEvents]
  );

  useEffect(
    function () {
      let selectedDateEvents = selectedMonthEvents.filter(function (
        item,
        index
      ) {
        return new Date(item.date).getDate() === selectedDate;
      });

      setSelectedDateEvents(selectedDateEvents);
    },
    [events, selectedMonthEvents, selectedDate]
  );

  useEffect(
    function () {
      let slectedDateHourEvents = selectedDateEvents.filter(function (
        item,
        index
      ) {
        return new Date(item.date).getHours() === selectedDate;
      });
    },
    [events, selectedDateEvents]
  );

  useEffect(
    function () {
      let eventHours = selectedDateEvents.map(function (item, index) {
        return new Date(item.date).getHours();
      });

      setEventHours(eventHours);
    },
    [events, selectedDateEvents]
  );

  useEffect(
    function () {
      let eventMinutes = selectedDateEvents.map(function (item, index) {
        return new Date(item.date).getMinutes();
      });

      setEventMinutes(eventMinutes);
    },
    [events, selectedDateEvents]
  );

  return {
    events,
    days,
    months,
    monthDays,
    selectedMonth,
    selectedDate,
    selectedDay,
    selectedtWeekStart,
    selectedWeekEnd,
    setSelectedWeekStart,
    setSelectedWeekEnd,
    setSelectedDate,
    setSelectedDay,
    setSelectedMonth,
    setSelectedYear,
    selectedYear,
    selectedDateEvents,
    selectedMonthEvents,
    selectedYearEvents,
    eventHours,
    eventMinutes,
    changeView,
    changeYear,
    changeMonth,
    changeDate,
    getEventByHour,
    view,
  };
}
