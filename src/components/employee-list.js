import React, { Component } from 'react';
import axios from "axios";

class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.getEmpData = this.getEmpData.bind(this);
        this.state = {
            empData: null,
            newData: 10
        }
    }


    getEmpData = () => {
        axios.get('http://universities.hipolabs.com/search').then(data => {
            console.log(data);
            this.setState(() => ({
                empData: data
            }));
            console.log(this.state);
        }, err => {
            console.log(err);
        })
        
    }

    render() {
        return (
            <div>
                <p>Hello Employee list...</p>
                <button onClick={this.getEmpData}>Get Universities</button>
                {/* {this.state.empData} */}
            </div>
        );
    }
}

export default EmployeeList;