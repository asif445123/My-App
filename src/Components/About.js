import React from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

export default function About(props) {
   // const [myStyle, setMyStyle] = useState(
   // {color:"black",backgroundColor:"white"})
   let myStyle = {color:props.mode==='dark'?'white':'black',backgroundColor:props.mode===
    'dark'?'#af7ac5':'white',border: '1px solid',borderColor:props.mode==='dark'?'white':'black'}
    
    return <div className='container' style={myStyle}>
        <h1 className='my-3'>About</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.Count your words and character also.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
       TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
       TextUtilies reports the number of words and characters.Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
       This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari & Opera.
       It suits to count character in facebook, blog, books, excel documents, pdf documents, essays, etc.
      </div>
    </div>
  </div>
</div>

    </div>;
}

//About.propTypes = propTypes;
//About.defaultProps = defaultProps;
// #endregion

//export default About;