// import React from 'react'
import PropTypes from "prop-types";

const CheckPage = (props) => {
  return (
    <div>
      <h1>保存された画像</h1>
      <img src={props.image_url} alt="Saved Image" />
    </div>
  );
};

CheckPage.propTypes = {
  image_url: PropTypes.string.isRequired,
};

export default CheckPage;
