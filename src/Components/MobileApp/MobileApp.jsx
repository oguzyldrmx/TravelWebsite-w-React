import React from 'react'
import './mobileApp.css'
import {BsGooglePlay} from 'react-icons/bs'
import {FaAppStore} from 'react-icons/fa'
const MobileApp = () => {
    return (
        <section className="mobile section container">
          <div className="mobileContainer grid">
            <div className="mobileHeader flex">
              <div className="textDiv">
                <h2 className="mobileTitle">Download our apps now!</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          <div className="mobileBoxes flex">
            <div className="firstBox">
                <BsGooglePlay className="icon"/>
              <p>
              Get it on
              </p>
            </div>
            <div className="secondBox">
                <FaAppStore className="icon"/>
              <p>
              Get it on
              </p>
            </div>
            </div>
          </div>
        </section>
      );
}

export default MobileApp