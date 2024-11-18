import '../styles/ToggleTheme.css';
function ToggleTheme(props) {
    return (
        <div className={props.theme} onClick={props.toggleTheme}></div>
    )
}

export { ToggleTheme };