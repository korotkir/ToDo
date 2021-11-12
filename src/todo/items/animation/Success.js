import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import success from "./icon/success.json";

class Success extends React.Component {
 constructor(props) {
  super(props);
  this.player = React.createRef(); // initialize your ref
 }
 render() {
  return (
   <Player
    className="animations"
    ref={this.player} // set the ref to your class instance
    autoplay={true}
    loop={true}
    controls={true}
    src={success}
    style={{ height: '300px', width: '300px' }}
   ></Player>
  );
 }
}

export default Success;
