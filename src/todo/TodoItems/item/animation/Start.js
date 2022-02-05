import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import startLight from "./icon/start_light.json"
import startDark from "./icon/start_dark.json"

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
    autoplay={true}
    loop={false}
    controls={false}
    src={this.props.theme === 'light' ? startLight : startDark}
    style={{ height: '300px', width: '300px' }}
   ></Player>
  );
 }
}

export default Start


