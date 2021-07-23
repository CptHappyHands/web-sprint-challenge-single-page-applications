import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()
    const routeToPizza = () => {
        console.log('fetching pizza')
        history.push('/pizza')
    }

    return (
        <div className='home-wrapper'>
            
            <img
            className='home-img'
            src='Pizza.jpg'
            alt=''
            />
            <button
            onClick={routeToPizza}
            id='order-pizza'>
                Treat yo self. To Pizza.
            </button>
        </div>
    )
}