import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Everything extends React.Component {
  render() {
    let snowflakes = [];
    for (var i = 0; i < 40; i++) {
      const position = Math.random() * 100;
      const delay = Math.random() * 2.8;
      const style = {
        animationDelay: delay + 's',
        left: position + '%',
      };
      snowflakes.push(
        <div key={i} style={style} className="snowflakeContainer">
          {/* Use FontAwesomeIcon for the fire icon */}
          <FontAwesomeIcon icon={faFire} className="snowflake" />
        </div>
      );
    }
    return (
      <div className="everything">
        {snowflakes}
        <div className="ground"></div>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
        <h2>This is the home page</h2>
      {/* <Everything /> */}
    </div>
  );
}

export default Home;
