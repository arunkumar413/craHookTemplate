import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"; //

export function CustomSelect(props) {
  const options = props.options;
  const selectRef = useRef(null);
  const [dropDownWidth, setDropDownWidth] = useState(0);

  const [showOptions, setShowOptions] = useState("none");
  const [selectedItems, setSelectedItems] = useState(0);

  useEffect(function () {
    console.log(selectRef.current.getBoundingClientRect().width);
    setDropDownWidth(selectRef.current.getBoundingClientRect().width);
  }, []);

  const handleClick = (evt) => {
    let display = showOptions === "none" ? "grid" : "none";
    setShowOptions(display);
  };

  const handleSelected = (value) => {
    console.log(value);
    setSelectedItems(value);
    props.setValue(value);
  };

  const handleMouseOut = (evt) => {
    // setShowOptions("none");
  };

  const handleMouseLeave = (evt) => {
    setShowOptions("none");
  };

  const optionElements = options.map(function (item, index) {
    return (
      <React.Fragment key={item.name}>
        <div
          onClick={() => handleSelected(index)}
          className="select-option"
          value={item.value}>
          {item.name}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      className="customSelect">
      <div
        ref={selectRef}
        className="select"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}>
        <div style={{ paddingLeft: 10 }}>{options[props.value].name}</div>{" "}
        <i
          style={{ paddingRight: 10 }}
          className="fa-solid fa-caret-down fa-xl"></i>{" "}
      </div>
      <div
        className="select-options-container"
        style={{
          display: showOptions,
          boxShadow: "5px 5px 5px gray",
          backgroundColor: "whitesmoke",
          textAlign: "left",
          zIndex: 10000,
          position: "absolute",
          width :dropDownWidth
        }}>
        {optionElements}
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  value: PropTypes.number,
  options: PropTypes.array,
};
