import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className='card' style={{overflow:"hidden"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3X-1k2fJ2QW_oJ0T5a3uJuZABJGOH3B-FA&s" alt="" width={333} style={{border:"2px solid blue"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
