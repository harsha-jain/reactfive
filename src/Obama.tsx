import { useNavigate } from "react-router-dom";

export default function Sachin() {
    const navigate = useNavigate();
    return (
    <>
        <div> Barack Obama</div>
            <button onClick={() => navigate("/sachin")}>go to sachin</button>
    </>
    );
}