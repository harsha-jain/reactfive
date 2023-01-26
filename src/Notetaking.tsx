import { useState } from "react";
//CRUD
export default function Notetaking() {
    const [list, setList] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");
    const [updateIndex, setUpdateIndex] = useState<number | undefined>();
    const [updateText, setUpdateText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    function onDeleteClick(index: number) {
        //DELETE
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }
    
    function renderListItem(listItem: string, index: number) {
        //READ
        return (
            <div key={index}>
                <div>{listItem}</div>
                <button onClick={()=>onDeleteClick(index)}>Delete</button>
                <button onClick={() =>
                {
                    setUpdateText(listItem);
                    setUpdateIndex(index)
                }} >Update</button>
            </div>
        )
    }
    
    function onUpdate(index: number) {
        //UPDATE
        const newList = [...list];
        newList[index] = updateText;
        setList(newList);
        setUpdateIndex(undefined);
        setUpdateText("");
    }
    
    function renderUpdateItem(index: number) {
        return (
            <div key={index}>
                <input type="text" value={updateText}
                    onChange={(e) => setUpdateText(e.target.value)} />
                <button onClick={()=>onUpdate(index)}>Done</button>
            </div>
        )
    }
    
    function renderFilteredItemList(listItem:string,index:number) {
        if (listItem.toLowerCase().includes(searchText.toLowerCase())) {
            return updateIndex===index ?renderUpdateItem(index):renderListItem(listItem,index)
        }
        return;
    }
    return (
        //create
        <>
            <input type="text" value={value}
                onChange={
                    (e)=>setValue(e.target.value)
                 } />
            <button onClick={() => {
                setList([...list, value]);
                setValue("")
            }}>add</button>
            <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value) }/>
            {list.map(renderFilteredItemList)}
        </>
    )
}