import React from 'react';
import "./Header.css";
import upcomingImg from '../../Assets/Images/upcoming.png';
import launch1 from '../../Assets/Images/newLaunch.png';
import launch2 from '../../Assets/Images/newLaunch2.png';

const HeaderBanner = () => {
    return (
        <div>

      <div className="container-fluid top-style">

        <div className="row mid-style">
          <div className="col text-nowrap text-truncate last-style">
            <h1 className="heading">
              <a
                className="
                  d-xxl-flex
                  justify-content-xxl-center
                  align-items-xxl-end
                "
                href="/"
              >
                Security Zines</a
              >
            </h1>
            <h1
              className="
                text-center
                d-flex
                flex-wrap
                justify-content-center
                align-items-center align-content-center
                title
              "
            >
              its your security solution
              <a href="/" target="_blank">Jabed</a>
            </h1>
          </div>
        </div>
      </div>

      <div className="container card-container">
          <div className="card header-card">
              <div className="card-body header-card-body">
                  <p className="card-text header-card-text">
                    <strong>
                        <u>SecurityZines</u>
                    </strong>
                    are new way of learning security concepts, check the collection of Zines down below. You can get them all in a bundle or individually. But why should you read it ? Because, its proven that graphics has more persistent memory than text. 
                  </p>
              </div>
          </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-center align-items-center">
          <div className="row d-flex ">
              <div className="col-md-6">

                <div className="row">
                    <div className="col upcoming">
                        <h4 className="text-center pulse animated infinite upcoming-text">
                            Upcoming ....

                        </h4>
                        <img data-bss-hover-animate="pulse" src={upcomingImg} alt="upcoming-img" className="animated pulse upcoming-img" />

                    </div>
                </div>

              </div>
              <div className="col-md-6" style={{padding:"0"}}>

                <div className="row" >
                    <div className="col" style={{padding: "0"}}>
                        <h4 className="text-center launch-text">
                            New Launch
                        </h4>
                    </div>
                </div>
                <div className="row text-center d-flex flex-wrap align-items-center justify-content-between" style={{margin: "10%"}}>
                    <div className="col" style={{padding: "0"}}>
                        <a href="/">
                            <img data-bss-hover-animate="pulse" className="launch-img animated pulse" src={launch1} alt="" srcset="" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="/">
                            <img data-bss-hover-animate="pulse" className="launch-img animated pulse" src={launch2} alt="" srcset="" />
                        </a>
                    </div>
                </div>
                
              </div>
          </div>
      </div>
    </div>
    );
};

export default HeaderBanner;