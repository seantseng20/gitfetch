
import './App.css';
import React,{useState} from "react";
import SearchForm from './SearchForm';


function App() {
  const [login,setLogin]=useState("seantseng20")

  return (
    <>
    <SearchForm value={login} onSearch={setLogin} />
    </>
  );
}

export default App;
