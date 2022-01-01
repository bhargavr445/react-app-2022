import React, { Component } from 'react';
import AddOption from './add-option';
import Options from './options';
import IndecisionHeader from './header';

class Indecision extends Component {

    constructor(props) {
        super(props);
        this.removeAllIndecisions = this.removeAllIndecisions.bind(this);
        this.addNewOption = this.addNewOption.bind(this);
        this.state = {
            options: ['op1', 'op2', 'op3']
        }
    }

    removeAllIndecisions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    addNewOption(option) {
        this.setState((prevState) => {
            return {
                options: [...prevState.options, option]
            }
        })
    }

    render() {
        return (
            <div>
                <h1>I am indecision header</h1>
                <IndecisionHeader hasOptionsAvailable={this.state.options.length > 0} />
                <Options
                    options={this.state.options}
                    removeAllIndecisionsProp={this.removeAllIndecisions}
                />
                <AddOption newOption={this.addNewOption} />
            </div>
        );
    }

}

export default Indecision;