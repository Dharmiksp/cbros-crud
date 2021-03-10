import React, { Component } from 'react';
import axios from 'axios';
import classes from '../Delete/Delete.css'

class Delete extends Component {
    userId = this.props.useId
    
    deleteHandler = () => {
        axios.delete(`http://localhost:8080/family/${this.userId}`)
        this.props.updateData()
    }
    
    render() {
        return (
            <button id="del" onClick={this.deleteHandler}>Delete</button>
        )
    }
}

export default Delete;
