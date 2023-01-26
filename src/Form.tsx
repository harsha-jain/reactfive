import Button from "./Button";
import "./App.css";
import { useState } from "react";
export default function Form() {
    const [First, setFirst] = useState<number>(0);
    const [Second, setSecond] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    return (
        <div>
            <input type="number" placeholder="type first number"
                value={First} onChange={
                    (e) => {
                        setFirst(parseInt(e.target.value))
                    }
                 } />
            <input type="number" placeholder="type second number"
             value={Second} onChange={
                (e) => {
                    setSecond(parseInt(e.target.value))
                }
             }/>
            <Button text="add" className="addButton" onClick={()=>setResult(First+Second) } />
            <Button text="minus" className="minusButton" onClick={()=>setResult(First-Second) } />
            <label>{result}</label>
        </div>
    )
}