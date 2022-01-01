import React, { Component } from 'react';

class AddOption extends Component {

    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this);
    }

    addOption(e) {
        e.preventDefault();
        this.props.newOption(e.target.elements.option.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }

}

export default AddOption;