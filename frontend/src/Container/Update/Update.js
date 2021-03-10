import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    userId = this.props.userId
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
        this.props.updateCancel()
    }

    saveHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8080/family/${this.props.userId}`, this.state).then( () => {
            this.setState({person_name:'', mob_1:'', email_id:''})
            this.props.updateCancel()
        })
    }

    async componentWillReceiveProps(newProps) {
        await axios.get(`http://localhost:8080/user/${newProps.userId}`)
         .then(response => { this.setState({person_name: response.data[0].person_name,mob_1: response.data[0].mob_1, email_id: response.data[0].email_id});
        });
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
                    <button id="sav" onClick={this.cancelHandler}>Cancel</button>
                </center>
            </form>
        )
    }
}

export default Update;