import React, { useEffect, useState } from 'react';
import classes from '../Butt/Butt.css';
import Aux from '../../hoc/Aux';

const Upbutton = (props) => {
    return (
        <Aux>
            <button onClick={props.updated} id="upd">Update</button>
        </Aux>
    );
}

export default Upbutton;