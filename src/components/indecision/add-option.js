import React, { Component } from 'react';
import Datepicker from '@awsui/components-react/date-picker';

class AddOption extends Component {

    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.dateCheck = this.dateCheck.bind(this);
        this.onDateFocus = this.onDateFocus.bind(this);
        this.state = {
            dateEntered: '',
            dateValid: false
        }
    }

    // this will disable dates in date calender
    dateCheck(e) {
        console.log(!new Date(e).getFullYear() >= 3000);
        return !(new Date(e).getFullYear() >= 3000);
    }

    addOption(e) {
        console.log(e)
        e.preventDefault();
        this.props.newOption(e.target.elements.option.value);
    }

    dateChange(e) {
        console.log(e);
        let i = new Date(e).getFullYear();
        
        this.setState(() => ({
            dateEntered: e.detail.value
        }));
    }

    // this will remove date from input field
    onDateFocus(e) {
        new Date(this.state.dateEntered).getFullYear() >= 2999 ?
        this.setState(() => ({dateValid: true})) : this.setState(() => ({dateValid: false}));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    {this.state.dateValid}
                    <Datepicker
                        value={this.state.dateEntered}
                        onChange={this.dateChange}
                        isDateEnabled={this.dateCheck}
                        onBlur={this.onDateFocus}
                        invalid={this.state.dateValid}
                        placeholder='hello date' />
                        {this.state.dateValid ? <p>I am stupid date</p> : ''}
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }

}

export default AddOption;