import React from "react";
import img1 from "../images/rocks/1.png";
import img2 from "../images/rocks/2.png";
import img3 from "../images/rocks/3.png";
import img4 from "../images/rocks/4.png";
import img5 from "../images/rocks/5.png";
import img6 from "../images/rocks/6.png";
import img7 from "../images/rocks/7.png";

function Parallax(props) {
  // Translate X's
  let style2 = {
    transform: `translateX(-${props.scroll * 0.4}px)`,
  };
  let style3 = {
    transform: `translateX(${props.scroll * 0.8}px)`,
  };
  let style6 = {
    transform: `translateX(-${props.scroll * 1}px)`,
  };
  let style7 = {
    transform: `translateX(${props.scroll * 1.2}px)`,
  };

  // Translate Y's
  let style4 = {
    transform: `translateY(${props.scroll * 0.6}px)`,
  };
  let style5 = {
    transform: `translateY(${props.scroll * 0.4}px)`,
  };

  return (
    <div className="Parallax">
      {/* background */}
      <img src={img1} className="Parallax__img" style={style5} />
      {/* clouds far */}
      <img src={img2} className="Parallax__img" style={style2} />
      {/* mountains far */}
      <img src={img4} className="Parallax__img" style={style4} />
      {/* clouds far 2 */}
      <img src={img3} className="Parallax__img" style={style3} />
      {/* mountains close */}
      <img src={img5} className="Parallax__img" style={style5} />
      {/* cloud */}
      <img src={img6} className="Parallax__img" style={style6} />
      {/* cloud */}
      <img src={img7} className="Parallax__img" style={style7} />
      {/* background below */}
      <div className="Parallax__img Parallax__img__color" style={style5} />
    </div>
  );
}

export default Parallax;
