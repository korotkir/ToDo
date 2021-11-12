import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import start from "./icon/start.json"

class Start extends React.Component {
 constructor(props) {
  super(props);
  this.player = React.createRef(); // initialize your ref
 }
 render() {
  return (
   <Player
    className="animations"
    ref={this.player} // set the ref to your class instance
    autoplay={false}
    loop={true}
    controls={true}
    src={start}
    style={{ height: '300px', width: '300px' }}
   ></Player>
  );
 }
}

export default Start


