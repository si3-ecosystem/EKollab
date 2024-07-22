import "../assets/css/include/Analyze.css";

import info from "../assets/img/fluent_info-28-regular.png"

function Analyze(props) {
  return (
    <div className="Analyzing-container">
      <p className="btn-text">{props.title}</p>
      <div className="analyzing-integer">
        <div className="analyzing-integer-first">
          <p><span className="bold-title">0</span> &nbsp; <span className="btn-text" style={{ color: "#119D55" }}>+00%</span> &nbsp; <span className="title"> 1M &nbsp; 1W &nbsp; 1M</span></p>
        </div>
        <div className="analyzing-integer-second">
          <img src={info} alt="" style={{ marginTop: "12px" }} />
        </div>
      </div>
      <div className="analyzing-main">
        <p className="middle-title">NO RESULTS FOUND</p>
      </div>
    </div>
  )
}

export default Analyze;