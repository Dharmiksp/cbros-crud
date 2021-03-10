import React, { Component } from 'react';
import axios from 'axios';
import classes from '../Form/Form.css';

class Form extends Component {
    familyId = this.props.famId
    state = {
        person_name: '',
        mob_1: '',
        email_id: ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    cancelHandler = () => {
        this.setState({person_name:'', mob_1:'', email_id:''})
        this.props.addCancel()
    }

    saveHandler = e => {
        e.preventDefault()
        axios.post(`http://localhost:8080/family/${this.familyId}`, this.state).then( () => {
            this.setState({person_name:'', mob_1:'', email_id:''})
            this.props.addCancel()
            this.props.updateData()
        })
    }

    render() {
        const { person_name, mob_1, email_id } = this.state
        return (
            <form onSubmit={this.saveHandler} id="for">
                <center>
                    <div>
                        <input id="pname" type="text" name="person_name" value={person_name} onChange={this.changeHandler} placeholder="Name"/>
                    </div>
                    <br/>
                    <div>
                        <input id="pname" type="text" name="mob_1" value={mob_1} onChange={this.changeHandler} placeholder="Mobile"/>
                    </div>
                    <br/>
                    <div>
                        <input id="pname" type="text" name="email_id" value={email_id} onChange={this.changeHandler} placeholder="Email"/>
                    </div>
                    <br/>
                    <button id="sav" type="submit">Save</button>
                    <button id="sav" onClick={this.props.cancelHandler} >Cancel</button>
                </center>
            </form>
        )
    }
}

export default Form;