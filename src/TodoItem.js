import editIcon from './Edit-Icon.svg';
import completeIcon from './Complete-Icon.svg';
import closeIcon from './Close-Item.svg';
function TodoItem ({contenido}) {
    return (
        <li className="todoItem"><span> <img src={editIcon} alt="Editar icono"/> </span> <span><img src={completeIcon} alt="Completar icono"/></span> {contenido} <span><img src={closeIcon} alt="Cerrar icono"/></span></li>
    )
}

export {TodoItem};