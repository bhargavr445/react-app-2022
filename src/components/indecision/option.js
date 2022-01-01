import React, { Component } from 'react';

class Option extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p> {this.props.eachOption}</p>
            </div>
        );
    }

}

export default Option;