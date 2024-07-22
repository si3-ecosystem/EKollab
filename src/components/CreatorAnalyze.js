import "../assets/css/include/Analyze.css";

function CreatorAnalyze(props) {
  return (
    <div className="creator-Analyzing-container">
      <div className="creator-analyzing-header">
        <span className="bold-title creator-analyzing-header-num">5</span>
        <img className="creator-analyzing-header-icon" src={props.img} alt="" />
      </div>
      <div className="creator-analyzing-content">
        <span className="title">{props.content}</span>
      </div>
    </div>
  )
}

export default CreatorAnalyze;