import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from '../Family/table.css';
import { Link } from 'react-router-dom';

class Family extends Component {
    state = {
        loading: true,
        family: []
    };

    async componentDidMount() {
        const url = "http://localhost:8080/family";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({family: data, loading: false})
    }
    
    renderTableData() {
        return this.state.family.map((fam) => {
           const { id, name } = fam 
           return (
                <tr key={fam._id}>
                    <td>{fam._id}</td>
                    <td>
                        <Link to = {`detail/${fam._id}`} id='link'>
                            {fam.family_name}
                        </Link>
                    </td>
                </tr>
            )
        })
    }
  
    render() {
        return (
            <Aux>
                {this.state.loading || this.state.person ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <center>
                        <table id='family'> 
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                        </center>
                        
                    </div>       
                )}
            </Aux>
        )
    }
}

export default Family;