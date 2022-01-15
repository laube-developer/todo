export default function Item(props){
    return <li
        className={props.styles.item}
        key={props.index}>
            {props.children}
            <span onClick={props.handleExcluir}>
                    X
            </span>
        </li>
}