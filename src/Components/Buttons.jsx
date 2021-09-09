import React from 'react';


class Buttons extends React.Component {
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <ul >
                    <li >
                        <button type="btn">Good</button>
                    </li>
                    <li >
                        <button type="btn">Neutral</button>
                    </li>
                    <li >
                        <button type="btn">Bad</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Buttons;


