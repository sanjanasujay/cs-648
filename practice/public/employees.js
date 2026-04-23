let name1 = 'Smita';
let name2 = 'Sanjana';
let name3 = 'Robin';
let name4 = 'Jordan';
let name5 = 'Alex';
const element2 = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, name1), /*#__PURE__*/React.createElement("li", null, name2.toUpperCase()), /*#__PURE__*/React.createElement("li", null, name3), /*#__PURE__*/React.createElement("li", null, name4), /*#__PURE__*/React.createElement("li", null, name5));
ReactDOM.render(element2, document.getElementById('content'));
