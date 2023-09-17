import React, { useEffect, useState } from "react";
import { useIterator } from "./useIterator";
import RepositoryReadme from "./RepositoryReadme";

export function RepoMenu({
    repositories,
    login,
    onSelect=f=>f
}){
    const [{name},previous,next]=useIterator(repositories)
    useEffect(()=>{
        if(!name)return;
        onSelect(name);
    },[name])

    return(<>
        <div className="flex1">
            <button onClick={previous}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
        </div>
        <RepositoryReadme login={login} repo={name}/>
        </>
    )
}