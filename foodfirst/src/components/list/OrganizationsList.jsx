import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OrganizationDetails from "./OrganizationDetails";


import './organization_list.css'
import shanes_cafe from '../../data/photos/shanes_cafe.jpg';
import ralphs from '../../data/photos/ralphs.jpg';
import cross_campus from '../../data/photos/cross_campus.png';
import cedars_street from '../../data/photos/cedars_street.jpg';
import grow_dtla from '../../data/photos/grow_dtla.jpg';
import marukai_market from '../../data/photos/marukai_market.jpg';
import trader_joes from '../../data/photos/trader_joes.png';
import whole_foods_market from '../../data/photos/whole_foods_market.jpg';

const photos = {
  "ralphs": ralphs,
  "shanes_cafe": shanes_cafe,
  "cross_campus": cross_campus,
  "cedars_street": cedars_street,
  "grow_dtla": grow_dtla,
  "marukai_market": marukai_market,
  "trader_joes": trader_joes,
  "whole_foods_market": whole_foods_market,
}

const OrganizationsList = ({ organizations }) => {
  return (
    <Router>
      <Route exact={true} path="/list" render={() => (
        <Segment.Group>
          <Responsive as={Segment}>
            <div className="organizations-list">
              { organizations.map((organization, index) => renderOrganization(organization, index)) }
            </div>
          </Responsive>
        </Segment.Group>
      )}/>

      <Route path="/organizations/:id" component={OrganizationDetails} />
    </Router>
  )
}

const renderOrganization = (organization, index) => {
  return (
    <Link key={index} to={`/organizations/${organization.id}`}>
      <div key={index} className="organization-item">
        <div className="organization-photo">
          <img src={photos[organization["photo"]]} width="100" height="75" alt="photos"/>
        </div>
        <div className="organization-distance">
            { organization["distance"]}
        </div>
        <div className="organization-info">
          <div className="organization-name">
            {`${organization["id"]}. ${organization["name"]}`}
          </div>
          <div className="organization-address">
            { organization["address"] }
          </div>
          <div className="organization-type">
            { organization["type"]}
          </div>
        </div>
      </div>
    </Link>
  )
}


export default OrganizationsList;
