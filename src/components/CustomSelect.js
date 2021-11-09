import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; //

export function CustomSelect(props) {
  const options = props.options;

  const [showOptions, setShowOptions] = useState("none");
  const [selectedItems, setSelectedItems] = useState(0);

  const handleClick = (evt) => {
    let display = showOptions === "none" ? "grid" : "none";
    setShowOptions(display);
  };

  const handleSelected = (value) => {
    console.log(value);
    setSelectedItems(value);
    props.setValue(value);
  };

  const optionElements = options.map(function (item, index) {
    return (
      <React.Fragment key={item.name}>
        <div
          onClick={() => handleSelected(index)}
          className="select-option"
          style={{
            padding: 5,
            marginBottom: 1,
            width: "100%",
          }}
          value={item.value}>
          {item.name}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div onClick={handleClick} className="customSelect">
      <div
        className="select"
        style={{
          display: "grid",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 5,
        }}>
        {options[props.value].name}
      </div>
      <div
        style={{
          display: showOptions,
          boxShadow: "5px 5px 5px gray",
          backgroundColor: "whitesmoke",
          textAlign: "left",
          zIndex: 10000,
        }}>
        {optionElements}
      </div>
    </div>
  );
}

CustomSelect.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
};
