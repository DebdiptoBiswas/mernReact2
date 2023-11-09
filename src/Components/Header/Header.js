import React, { useEffect, useRef } from "react";

import "./Header.css";

function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  // Getting the most recent history entry
  const lastHistory = props.history && props.history.length > 0 ? props.history[props.history.length - 1] : null;

  return (
    <div className="header custom-scroll">
      <div className="header_history">
        {lastHistory && <p key={lastHistory}>{lastHistory}</p>}
      </div>
      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
}

export default Header;







