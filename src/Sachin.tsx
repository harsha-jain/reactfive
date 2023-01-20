import { useNavigate } from "react-router-dom";

export default function Sachin() {
    const navigate = useNavigate();
    return (
    <>
            <div> Sachin Tensdulkar</div>
            <button onClick={()=>navigate(-1)}>go back</button>
    </>
    );
}