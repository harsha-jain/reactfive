import { useNavigate } from "react-router-dom";

export default function Donald() {
    const naviagte = useNavigate();
    return (
    <>
        <div> Donald trump</div>
            <button onClick={() => naviagte("/sachin")}>go to Sachin</button>
    </>
    );
}