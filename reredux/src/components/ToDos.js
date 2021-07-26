import React from 'react';
import {remove} from "../store";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const ToDos = ({text, onBtnClick, id}) => {
    return (
        <li key={ Math.random().toString(36).substr(2, 9) }>
            <Link to={`/${id}`}>
            {text} 
            </Link>
            <button onClick={onBtnClick}>Del</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch( remove(ownProps.id) )
    };
}

export default connect(null, mapDispatchToProps)(ToDos);