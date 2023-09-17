import React,{useState} from "react";
import { GitHubUser } from './GitHubUser';

export default function SearchForm({value,onSearch=f=>f}){
    const [searchId,setSearchId]=useState(value)

    const changeHandler=e=>{
        setSearchId(e.target.value)
    }

    const textinput=document.getElementById("search01")

    return(<>
        <div className="searchbar">
            <input type="text" placeholder="github id" value={searchId} onChange={changeHandler} required id="search01" name="q"/>
           <button onClick={()=>onSearch(textinput.value)}>搜尋</button>
        </div>
        <GitHubUser login={value}/>
    </>

    )
}