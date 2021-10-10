import react, { useState, useEffect } from "react";

export function Typography() {

const pageStyle= {
  display: 'grid',
  gridTemplateContainer:'1fr',
  justifyContent:'center'
}


  return (
    <div style={pageStyle}>
      <h1> Heading 1 </h1>
      <h2> Heading 2</h2>
      <h3> Heading 3</h3>
      <h4> Heading 4 </h4>
      <h5> Heading 5 </h5>
      <h6> Heading 6</h6>
      <p>   Paragraph  </p>
    </div>
  );
}
