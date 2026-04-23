let name1 = 'Smita';
let name2 = 'Sanjana';
let name3 = 'Robin';
let name4 = 'Jordan';

const element2 = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{name1}</li>
        <li>{name2.toUpperCase()}</li>
        <li>{name3}</li>
        <li>{name4}</li>
    </ul>
);

ReactDOM.render(element2, document.getElementById('content'));