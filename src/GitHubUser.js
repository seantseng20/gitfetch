import React from "react";
import { Fetch } from "./Fetch";
import UserRepositories from "./UserRepositories";

export function GitHubUser({login}){
return (
    <Fetch
       uri={`https:\\api.github.com/users/${login}`}
       renderSuccess={UserDetails}
    />
)
}

function UserDetails({data}){
    return(
        <div className="githubUser">
            <div className="profile"> 
            <img
            src={data.avatar_url}
            alt={data.login}
            style={{width:200}}
            />
            <h1>{data.login}</h1>
            {data.name&&<p>{data.name}</p>}
            {data.location&&<p>{data.location}</p>}
            </div>
            <UserRepositories 
              login={data.login}
              onSelect={repoName=>console.log(`${repoName}`)}
            />

        </div>
    )
}