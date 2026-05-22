
//import styled from 'styled-components';
//import PropTypes from 'prop-types';
//import React, { useState } from 'react';

//const propTypes = {};

//const defaultProps = {};

function Alert (props) {const capitalize = (word) =>{const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);}  

    return (<div style={{height:'50px'}}>{props.alert &&
<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
</div>}</div>
)}

//Alert.propTypes = propTypes;
//Alert.defaultProps = defaultProps;
// #endregion

export default Alert;