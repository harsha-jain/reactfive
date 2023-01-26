import { useState } from "react";

export default function Carousel() {
    const [current, setCurrent] = useState<number>(0);
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz045DeYb7MVaMV-0Sh_GdwCpv7DDkIL3etw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IYG0awyV7ZliSq_3CsqHKMnkFiYX64Dq3Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mnvXaG2vbkPxyW7xGBudI5wDUeTF_skwtA&usqp=CAU"
    ];
    return(
        <>
            <img src={images[current]} alt="not found" />
            <button disabled={current===0?true:false} onClick={()=>setCurrent(current-1)}>left</button>
            <button disabled={current === images.length-1 ? true : false} onClick={() => setCurrent(current + 1)}>right</button>
        </>
    )
}