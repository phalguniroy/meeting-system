import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        
        <div className="container pt-1">
        <header >
        <ul className="nav justify-content-center bg-secondary text-white">
        <li className="nav-item">
        <Link className="nav-link" to="/">List</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/schedule">Schedule</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/description">Description</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/meetinglist">MeetingList</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/busyschedule">BusySchedule</Link>
        </li>
      </ul>
      </header>
      </div>
        
    )
}
