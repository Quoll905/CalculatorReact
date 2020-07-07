import React from 'react';

import './display.css';

class Display extends React.Component {

    render() {
        return (
            <p className="result">{this.props.result}</p>
        )
    }

}

export default Display;