import react, { useState, useEffect } from "react";

export function Test() {
  return (
    <div>
      <h2> Test</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 6fr 1fr",
          gridGap: 10,
        }}>
        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button>
        <button> 5 </button>
        <button> 6 </button>
        <button> 7 </button>
      </div>
    </div>
  );
}
