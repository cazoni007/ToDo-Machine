import '../styles/TodoButton.css';
// import { CreateTodo } from './CreateTodo.js';

function TodoButton () {
    return (
        <div className='buttonContainer'><button className="button" onClick={buttonClick}><span className="buttonIcon"></span></button></div> 
    )
}

function buttonClick () {
    console.log("funca");
}

export {TodoButton};