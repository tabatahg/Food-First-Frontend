import React from "react";
import { Link } from "react-router-dom";
import { organizations } from "../../data/organization";
import shanes_cafe from "../../data/photos/shanes_cafe.jpg";
import ralphs from "../../data/photos/ralphs.jpg";
import cross_campus from "../../data/photos/cross_campus.png";
import cedars_street from "../../data/photos/cedars_street.jpg";
import grow_dtla from "../../data/photos/grow_dtla.jpg";
import marukai_market from "../../data/photos/marukai_market.jpg";
import trader_joes from "../../data/photos/trader_joes.png";
import whole_foods_market from "../../data/photos/whole_foods_market.jpg";

const photos = {
  ralphs: ralphs,
  shanes_cafe: shanes_cafe,
  cross_campus: cross_campus,
  cedars_street: cedars_street,
  grow_dtla: grow_dtla,
  marukai_market: marukai_market,
  trader_joes: trader_joes,
  whole_foods_market: whole_foods_market
};

const OrganizationDetails = props => {
  const organization = organizations.find(org => {
    return parseInt(org["id"]) === parseInt(props.match.params["id"]);
  });

  return (
    <div className="organization-details">
      <div className="organization-details-photo">
        <img
          className="top-photo"
          src={photos[organization["photo"]]}
          alt="photos"
        />
      </div>

      <div className="organization-details-info">
        <div className="organization-details-name">{organization["name"]}</div>

        <div className="organization-details-address">
          {organization["address"]}
        </div>

        <hr />

        <div className="organization-details-items">
          <div className="disclaimer">Items available for pickup</div>
          {organization["items"].map(item => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
