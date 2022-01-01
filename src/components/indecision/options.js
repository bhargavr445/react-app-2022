import React, { Component } from 'react';
import Option from './option';

class Options extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.removeAllIndecisionsProp}>Remove All</button>
                {this.props.options.map(option => <Option key={option} eachOption={option} />)}
            </div>
        );
    }

}

export default Options;