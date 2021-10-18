import "./risks.css";

function Risks({ risks }) {

  return (
    <div className="component-container">
      <div className="risk-inner">
        <h2 className="component-header">Risks</h2>
        <div className="risk-description">{risks}</div>
      </div>
    </div>
  )
}

export default Risks
