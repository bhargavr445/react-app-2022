import React, { Component } from 'react';

class IndecisionHeader extends Component {
    render() {
        return (
            <div>I am header
                <button disabled={!this.props.hasOptionsAvailable}>What should I do?</button>
            </div>
        );
    }
}

export default IndecisionHeader;