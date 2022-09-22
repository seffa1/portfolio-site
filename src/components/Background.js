// import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

function Background(props) {
  let scroll = props.scroll;
  // Background rects

  let rectElements = props.rectData.map((data) => {
    return (
      <div
        className="Background__rect"
        style={{
          // style the element
          transform: `translateY(-${props.scroll * data.speed}px)`,
          height: data.height,
          width: data.width,
          top: data.top,
          left: data.left,
          zIndex: data.zIndex,
          background: data.color,
          position: "absolute",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
        }}
      ></div>
    );
  });
  // console.log(rectElements);

  // let fastUp = { transform: `translateY(-${scroll * 0.9}px)` };
  // let mediumUp = { transform: `translateY(-${scroll * 0.1}px)` };
  // let slowUp = { transform: `translateY(-${scroll * 0.05}px)` };
  // let fastDown = { transform: `translateY(${scroll * 0.2}px)` };
  // let mediumDown = { transform: `translateY(${scroll * 0.4}px)` };
  // let slowDown = { transform: `translateY(${scroll * 0.8}px)` };

  // console.log(rectElements);
  return (
    <section className="Background">
      <div>{rectElements}</div>

      {rectElements}
      {/* <div
        className="Background__rect Background__rect--big "
        style={slowDown}
      ></div>
      <div
        className="Background__rect Background__rect--medium "
        style={mediumDown}
      ></div>
      <div
        className="Background__rect Background__rect--small "
        style={fastDown}
      ></div> */}
    </section>
  );
}

export default Background;
