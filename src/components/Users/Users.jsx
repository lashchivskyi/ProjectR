import React from "react";
import classes from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: "https://vokrug.tv/pic/person/9/6/8/b/968be54cdef1878c21f174385ed512aa.jpg", followed: false, fullName: "Serhii", status: "JS Dev", location: { city: "Lviv", country: "Ukraine" } },
            { id: 2, photoUrl: "https://vokrug.tv/pic/person/9/6/8/b/968be54cdef1878c21f174385ed512aa.jpg", followed: true, fullName: "Andrey", status: "Java Dev", location: { city: "Warshava", country: "Polend" } },
            { id: 3, photoUrl: "https://vokrug.tv/pic/person/9/6/8/b/968be54cdef1878c21f174385ed512aa.jpg", followed: false, fullName: "Igor", status: "Python Dev", location: { city: "Chicago", country: "USA" } }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto} ></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;