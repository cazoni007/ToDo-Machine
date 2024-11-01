import editIcon from './Edit-Icon.svg';
import completeIcon from './Complete-Icon.svg';
import closeIcon from './Close-Item.svg';
import './TodoItem.css'
function TodoItem ({contenido}) {
    return (
        <li className="todoItem"><span className='closeIcon'><img src={closeIcon} alt="Cerrar icono"/></span><span> <img src={editIcon} alt="Editar icono"/></span> <span><img src={completeIcon} alt="Completar icono"/></span> <p className='content'>{contenido}</p></li>
    )
}

export {TodoItem};