import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import successLight from "./icon/success_light.json";
import successDark from "./icon/success_dark.json"

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
    loop={false}
    controls={true}
    src={this.props.theme === 'light' ? successLight : successDark}
    style={{ height: '300px', width: '300px' }}
   ></Player>
  );
 }
}

export default Success;
