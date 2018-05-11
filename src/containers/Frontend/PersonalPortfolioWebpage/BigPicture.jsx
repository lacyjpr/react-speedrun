import React from 'react';
import bridge from './../../../assets/portfolio/newport_bridge-large_2x.jpg';

const BigPicture = () => (
  <div className="big-picture">
    <div className="row">
      <div className="col-md-12">
        <img src={bridge} class="img-responsive" />
      </div>
    </div>
  </div>
);

export default BigPicture;
