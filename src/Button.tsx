interface IButtonProps{
    text: string;
    className: string;
    onClick: () => void;
}
export default function Button(props:IButtonProps) {
    return <button className={props.className} onClick={props.onClick}>{props.text }</button>
}