import { useEffect } from "react";
import "./Campaign.css";

function Campaign({campaign}){

  useEffect(() => {
    let campaignText = document.getElementsByClassName("campaign-description");
    campaignText[0].innerHTML = campaign;
  })

  return(
    <div class="component-container">
      <div class="risk-inner">
        <h2 class="component-header">Campaign</h2>
        <div class="campaign-description">

        </div>
      </div>
    </div>
  )
}

export default Campaign
