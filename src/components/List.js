
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

export const List = () => {
    

    // const url = 'https://d28hsb6vkzynsw.cloudfront.net/extrafiles/react_task_user_data.json'
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    // .then(response => response.text())
    // .then(contents =>{
    //     console.log(typeof contents);
    //     setList(contents)
    // } )
    // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    const arr =[
        {
            "name": "Manoj",
            "designation": "Developer"
        },
        {
            "name": "Nirav",
            "designation": "Tech Lead"
        },
        {
            "name": "Namdev",
            "designation": "Frontend Developer"
        },
        {
            "name": "Vishal",
            "designation": "Sales Head"
        },
        {
            "name": "Mayank",
            "designation": "CTO"
        }
    ]

    const [list, setList] = useState(arr)


    return (
        <div className="li-container container">
        <ul className="list-group mt-4">
        {list.map((user) => (
            <li  key={user.name} className="listWidth  list-group-item">
            {user.name} <button type="button" className="btn btn-dark float-right">meet</button>
            </li>
          ))}
        </ul>
        </div>
    )
}
