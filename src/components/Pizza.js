import React from 'react'

function Pizza({details}) {
    if(!details) {
        return <h3>Loading your Pizza...</h3>
    }

    return (
        <div className='pizza-container'>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            <p>{details.sauce}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((topp, idx) => <li key={idx}>{topp}</li>)}
                    </ul>
                    </div>
            }
            <p>{details.instructions}</p>
        </div>
    )
}

export default Pizza