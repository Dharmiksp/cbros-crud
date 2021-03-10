import React, { Component } from 'react';
import Butt from '../../Components/Butt/Butt';
import Modal from '../../Components/Modal/Modal';
import Update from '../Update/Update';
import Upbutton from '../../Components/Butt/Upbutton';
import Form from '../Form/Form';
import Delete from '../Delete/Delete';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import classes from '../Detail/detail.css';
 

class Detail extends Component {
    familyId = this.props.match.params.id
    state = {
       detail:[],
       adding: false,
       updating: false,
       userId: ''
    }

    loadData = () => {
        axios.get(`http://localhost:8080/family/${this.familyId}`)
         .then(response => {
             this.setState({detail: response.data});
         });
    }

    componentDidMount () {
        this.loadData()
    }

    addHandler = () => {
        this.setState({adding: true});
    }

    addingCancelHandler = () => {
        this.setState({adding: false});
    }

    updateHandler = (userId) => {
        this.setState({updating: true, userId: userId});
    }

    updatingCancelHandler = () => {
        this.setState({updating: false});
        this.loadData()
    }

    render() {
        const detail = this.state.detail.map(det => {
            return (
                <center> 
                    <div key={'details'+ det.id} id='detail'>
                        <h3 id='name'>{det.person_name}</h3> 
                        <Delete useId={det.id} updateData={this.loadData} key={'deletebutton'+det.id}/>
                        <Upbutton updated={()=> this.updateHandler(det.id)} key={'updatebutton'+det.id}/> 
                        <a href="tel:{det.mob_1}" id='no'> {det.mob_1} </a> <br/>
                        <a href="tel:{det.mob_2}" id='no'> {det.mob_2} </a>
                        <h3 id='email'>{det.email_id}</h3>
                    </div>
                </center>
            )
        })

        let form = <Form addCancel={this.addingCancelHandler} famId={this.familyId} updateData={this.loadData}/>

        return(
            <Aux>
                <button onClick={this.props.history.goBack} id="back">BACK</button> 
                <Butt  added={this.addHandler}/>
                <Modal show= {this.state.adding} modalClosed={this.addingCancelHandler}>
                    {form}
                </Modal>
                <Modal show= {this.state.updating} modalClosed={this.updatingCancelHandler}>
                    <Update updateCancel={this.updatingCancelHandler} userId={this.state.userId}/>
                </Modal>
                {detail}
                
            </Aux>
        )
    }
}
export default Detail;
