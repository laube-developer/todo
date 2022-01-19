export default function Item(props){
    return <li
        className={props.styles[props.checked ? "item_check" : "item"]}
        key={props.index}>
            <input type="checkbox" checked={props.checked} onChange={props.handleMarcar}/>
            <p className={props.styles[props.checked ? "p_check" : "p_not_check"]}>
                {props.children}
            </p>
            <span onClick={props.handleExcluir}>
                    X
            </span>
        </li>
}