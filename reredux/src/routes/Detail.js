import React from 'react';
import {connect} from 'react-redux';

function Deatail(props) {
    console.log(props);
    return (<>
        <h1> Detail {props.toDo.text} </h1>
        <h5> Created at {props.toDo.id}</h5>
    </>);
}

const mapStateToProps = (state, ownProps) => {
    const {match :{params: {id}}} = ownProps;
    return {
        toDo : state.find(toDo => toDo.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Deatail);