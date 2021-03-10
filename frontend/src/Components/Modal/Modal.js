import React from 'react';
import ReactDom from 'react-dom';
import classes from '../Modal/Modal.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return ReactDom.createPortal(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                id="modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>,
        document.getElementById('portal')
    )
}

export default modal;