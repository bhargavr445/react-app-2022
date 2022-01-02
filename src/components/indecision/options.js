import React, { Component } from 'react';
import Option from './option';

class Options extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAllIndecisionsProp}>Remove All</button>
                {this.props.options.map((option, index) => <Option 
                key={index} 
                eachOption={option} 
                removeOptionP={this.props.removeOptionProp}
                />)}
            </div>
        );
    }
}

export default Options;