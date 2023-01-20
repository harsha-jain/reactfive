import { useParams } from "react-router-dom";

export default function UserParams() {
    const userParam = useParams<{userId:string}>();
    return (
        <>
            <div>{"user Params "+userParam.userId }</div>
        </>
    );
}