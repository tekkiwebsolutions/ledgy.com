import React from "react";
import Draggable from "react-draggable";
import "./Home.scss";
import IBM2 from "../../img/company/IBM2.png";
import ibms from "../../img/company/ibms.png";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

export function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState<any>(0);
  const [intext, setIntext] = useState(
    "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“"
  );
  const [fttext, setFttext] = useState("Nic Sauriol");
  const [role, setRole] = useState("Software Development Leader");
  const [percentage, setpercentage] = useState<any>("70");
  const [xaxis, setXaxis] = useState("");
  const [rtext, setrtext] = useState(
    "Increase in revenue following a three-month customer messaging pilot program"
  );

  const colorBlue = () => {
    var target = document.getElementById("cf-box");
    document.getElementById("cl-box").className = "bluebg-effect col-md-12";
    target.className = "container-fluid main-drapper bluebg-effect";
    document.getElementById("box").className = "col-md-7 drag-title bg-blue";
    document.getElementById("pr-text").className = "dg-text text-blue";
    document.getElementById("hr-text").className = "dg-detail text-blue";
    document.getElementById("ft-text2").className = "bt-text-blue";
    setIntext(
      "“With real-time integrated data flows from Segment, we can truly understand what people are doing with our platform.“"
    );
    setFttext("Nic Sauriol");
    setRole("Software Development Leader");
    setpercentage(70);
    document.getElementById("title-desc").className = "title-desc t-effect";
    document.getElementById("blue-img").style.opacity = "1";
    document.getElementById("pink-img").style.opacity = "0.3";
    document.getElementById("dblue-img").style.opacity = "0.3";
    document.getElementById("lblue-img").style.opacity = "0.3";
    document.getElementById("grey-img").style.opacity = "0.3";
  };
  const colorPink = () => {
    var target = document.getElementById("cf-box");
    document.getElementById("cl-box").className = "col-md-12 pinkbg-effect";
    target.className = "container-fluid main-drapper pinkbg-effect";
    document.getElementById("box").className = "col-md-7 drag-title bg-pink";
    document.getElementById("pr-text").className = "dg-text text-pink";
    document.getElementById("hr-text").className = "dg-detail text-pink";
    document.getElementById("ft-text2").className = "bt-text-pink";

    setFttext("Grace Preyapongpisan");
    setRole("Vice President, Business Intelligence");
    setpercentage(30);
    setIntext(
      "“Segment has enabled us to streamline the data capture process while maintaining flexibility to customize per brand as needed.“"
    );
    document.getElementById("blue-img").style.opacity = "0.3";
    document.getElementById("pink-img").style.opacity = "1";
    document.getElementById("dblue-img").style.opacity = "0.3";
    document.getElementById("lblue-img").style.opacity = "0.3";
    document.getElementById("grey-img").style.opacity = "0.3";
  };

  const colorDarkBlue = () => {
    var target = document.getElementById("cf-box");
    document.getElementById("cl-box").className = "darkbluebg-effect col-md-12";
    target.className = "container-fluid main-drapper darkbluebg-effect";
    document.getElementById("box").className =
      "col-md-7 drag-title bg-darkblue";
    document.getElementById("pr-text").className = "dg-text text-darkblue";
    document.getElementById("hr-text").className = "dg-detail text-darkblue";
    document.getElementById("ft-text2").className = "bt-text-darkblue";

    setIntext(
      "“Segment allows us to be more precise with how we dynamically suppress or target users in ad campaigns based on actual product usage.“"
    );
    setpercentage(50);
    setFttext("Micky Onvural");
    setRole("Co-President");
    document.getElementById("blue-img").style.opacity = "0.3";
    document.getElementById("pink-img").style.opacity = "0.3";
    document.getElementById("dblue-img").style.opacity = "1";
    document.getElementById("lblue-img").style.opacity = "0.3";
    document.getElementById("grey-img").style.opacity = "0.3";
  };
  const colorLightBlue = () => {
    var target = document.getElementById("cf-box");
    document.getElementById("cl-box").className =
      "lightbluebg-effect col-md-12";
    target.className = " container-fluid main-drapper lightbluebg-effect";
    document.getElementById("box").className =
      "col-md-7 drag-title bg-lightblue";
    document.getElementById("pr-text").className = "dg-text text-lightblue";
    document.getElementById("hr-text").className = "dg-detail text-lightblue";
    document.getElementById("ft-text2").className = "bt-text-lightblue";
    setIntext(
      "“Segment allows us to be more precise with how we dynamically suppress or target users in ad campaigns based on actual product usage.“"
    );
    setpercentage(80);
    setFttext("Sam Coren");
    setRole("Senior User Acquisition Managers");
    document.getElementById("blue-img").style.opacity = "0.3";
    document.getElementById("pink-img").style.opacity = "0.3";
    document.getElementById("dblue-img").style.opacity = "0.3";
    document.getElementById("lblue-img").style.opacity = "1";
    document.getElementById("grey-img").style.opacity = "0.3";
  };

  const colorGrey = () => {
    var target = document.getElementById("cf-box");
    document.getElementById("cl-box").className = "greybg-effect col-md-12";
    target.className = "container-fluid main-drapper greybg-effect";
    document.getElementById("box").className = "col-md-7 drag-title bg-grey";
    document.getElementById("pr-text").className = "dg-text text-grey";
    document.getElementById("hr-text").className = "dg-detail text-grey";
    document.getElementById("ft-text2").className = "bt-text-grey";

    setIntext(
      "“The cost of a Segment investment completely beat our in-house options out of the water. It was a no-brainer in terms of cost.“"
    );
    setpercentage(90);
    setFttext("Klaus Thorup");
    setRole("Senior User Acquisition Manager");
    document.getElementById("blue-img").style.opacity = "0.3";
    document.getElementById("pink-img").style.opacity = "0.3";
    document.getElementById("dblue-img").style.opacity = "0.3";
    document.getElementById("lblue-img").style.opacity = "0.3";
    document.getElementById("grey-img").style.opacity = "1";
  };

  const Boxes = [
    { func: colorBlue, id: "blue" },
    { func: colorPink, id: "pink" },
    { func: colorDarkBlue, id: "darkBlue" },
    { func: colorLightBlue, id: "lightBlue" },
    { func: colorGrey, id: "grey" },
  ];

  const handleDrag = (e: any, ui: any) => {
    console.log(isActive);

    console.log(ui.lastX, "ui.lastX");
    setXaxis(ui.lastX);

    if (ui.lastX > 0 && isActive === Boxes.length - 1) {
      Boxes[0].func();
      setIsActive(0);
    } else if (ui.lastX < 0 && isActive === 0) {
      Boxes[Boxes.length - 1].func();
      setIsActive(Boxes.length - 1);
    } else if (ui.lastX < 0) {
      Boxes[isActive - 1].func();
      setIsActive(isActive - 1);
    } else if (ui.lastX > 0) {
      Boxes[isActive + 1].func();
      setIsActive(isActive + 1);
    }
  };

  return (
    <>
      <div id="cf-box" className="container-fluid main-drapper bluebg-effect">
        <div className="container" id="ow-hidden">
          <Row className="j-center">
            <Col md={12} id="cl-box" className="bluebg-effect">
              <div className="dgt-box">
                <Row>
                  <Col md={12}>
                    <h2 className="dg-title">
                      <span className="o7-title">Trusted by</span> startups{" "}
                      <span className="o7-title">and the</span> world's largest
                      companies
                    </h2>
                  </Col>
                </Row>
                <Draggable
                  axis="x"
                  bounds={{
                    top: 0,
                    right: 100,
                    left: -130,
                    bottom: 0,
                  }}
                  //   bounds="parent"
                  defaultPosition={{ x: 0, y: 0 }}
                  position={position}
                  onStop={handleDrag}
                >
                  <div className="drag-wrapper shadow-lg">
                    <Row className="drag-row">
                      <div id="box" className="col-md-7 drag-title bg-blue">
                        <div className="logo-box">
                          <img src={IBM2} alt="IBM" />
                        </div>
                        <h3 id="title-desc" className="title-desc">
                          {intext}
                        </h3>

                        <div className="t-footer">
                          <p className="ft-text">{fttext}</p>
                          <p id="ft-text2" className="bt-text-blue">
                            {role}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 right-box">
                        <div className="dg-descbox">
                          <p id="pr-text" className="dg-text text-blue">
                            {percentage}
                            <sup>%</sup>
                          </p>
                          <h4 id="hr-text" className="dg-detail text-blue">
                            {rtext}
                          </h4>
                          <div className="ft-box">
                            <div className="br-line"></div>
                            <a className="rts" href="https://ledgy.com">
                              Read their story
                            </a>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Draggable>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="main-icons">
              <div className="icon-box">
                <ul>
                  <li onClick={colorBlue}>
                    {" "}
                    <img id="blue-img" className="op-1" src={ibms} alt="IBM" />
                  </li>
                  <li onClick={colorPink}>
                    {" "}
                    <img id="pink-img" src={ibms} alt="IBM" />
                  </li>
                  <li onClick={colorDarkBlue}>
                    {" "}
                    <img id="dblue-img" src={ibms} alt="IBM" />
                  </li>
                  <li onClick={colorLightBlue}>
                    {" "}
                    <img id="lblue-img" src={ibms} alt="IBM" />
                  </li>
                  <li onClick={colorGrey}>
                    {" "}
                    <img id="grey-img" src={ibms} alt="IBM" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
