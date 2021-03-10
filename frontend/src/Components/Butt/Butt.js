import React from 'react';
import classes from '../Butt/Butt.css';
import Aux from '../../hoc/Aux';

const butt = (props) => {
    return (
        <Aux>
            <button onClick={props.added} id="add">ADD</button>
        </Aux>
    );
}

export default butt;