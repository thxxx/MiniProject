import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import {add} from "../store";
import ToDos from "../components/ToDos";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (<>
        <h1> To do welcome </h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => <ToDos {...toDo} />)}
        </ul>
    </>);
}

const mapStateToProps = (state) => {
    return {toDos:state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo : text => dispatch( add(text) )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);