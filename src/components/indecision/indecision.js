import React, { Component } from 'react';
import AddOption from './add-option';
import Options from './options';
import IndecisionHeader from './header';
// import Option from './option';

class Indecision extends Component {

    constructor(props) {
        super(props);
        this.removeAllIndecisions = this.removeAllIndecisions.bind(this);
        this.addNewOption = this.addNewOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options: ['op1', 'op2', 'op3']
        }
    }

    removeAllIndecisions() {
        this.setState(() => ({
            options: []
        }))
    }

    removeOption(optionToDelete) {
        console.log(optionToDelete);
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(option => option !== optionToDelete)
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
                    removeOptionProp={this.removeOption}
                />
                <AddOption newOption={this.addNewOption} />
            </div>
        );
    }

}

export default Indecision;