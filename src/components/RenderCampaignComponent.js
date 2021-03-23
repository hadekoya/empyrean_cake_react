import React, { Component } from "react";
import { Link } from "react-router-dom";

function RenderCampaign({ campaign, title }) {
    var rows = [];

    rows.push(<div className="row row-content p-3">
        <div className="col offset-1">
            <h2>{title}</h2>
        </div>
    </div>);
    for (var i = 0; i < campaign.length; i++) {
        rows.push(
        <div key={campaign[i].id} className="row row-content p-3">
            <div className="col-sm-1 d-md-block"></div>
            <div class="col-sm-6"><span>{campaign[i].description} </span></div>
            <div class="col-sm-5">
                <img src={campaign[i].image} class="img-fluid rounded d-block w-100"/>
            </div>
        </div>
        );
    }
  return (
      <div>{rows}</div>
    
  );
}
export default RenderCampaign;
