import React, { Component } from 'react';

class Option extends Component {

    constructor(prop) {
        super(prop)
        this.removeOption = this.removeOption.bind(this);
    }

    removeOption(option) {
        this.props.removeOptionP(option)
    }

    render() {
        return (
            <div>
                <p> {this.props.eachOption}</p>--<button onClick={(e) => this.removeOption(this.props.eachOption)}>Remove</button>
            </div>
        );
    }
}

export default Option;