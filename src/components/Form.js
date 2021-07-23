import React from 'react'


export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    // console.log(evt.target)
    change(name, valueToUse)
    }

    return (
        <form className="form-container" id="pizza-form" onSubmit={onSubmit}>
            
            <div className="form-name input">
                <h3>Your Name: </h3>
                <label>
                    <input
                    id="name-input"
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
            </div>
            
            <div className="form-size input">
                <h3>Make your pizza!</h3>
                    
                <label htmlFor="size">Choose your size
                    <select id='size-dropdown' name='size' onChange={onChange} value={values.size}>
                    <option value=''>--Select a size--</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='x-large'>Extra-Large</option>
                    </select>
                </label>
            </div>

            {/* <div className="form-sauce input">
                <h4>Chose your sauce</h4>
                <label htmlFor="sauce-select">Marinara
                    <input 
                    type="radio" 
                    name='sauce' 
                    value="marinara" 
                    onChange={onChange} 
                    checked={values.sauce === 'marinara'}
                    />
                </label>
                <br></br>
                <label>Zesty Marinara
                    <input 
                    type="radio"
                    name='sauce'
                    value="zesty-marinara"
                    onChange={onChange}
                    checked={values.sauce === 'zesty-marinara'}
                    />
                </label>
                <br></br>
                <label>Alfredo
                    <input 
                    type="radio"
                    name='sauce'
                    value="alfredo" 
                    onChange={onChange}
                    checked={values.sauce === 'alfredo'}
                    />
                </label>
                <br></br>
                <label>The Blood of your Enemies
                    <input 
                    type="radio" 
                    name='sauce'
                    value="enemies" 
                    onChange={onChange}
                    checked={values.sauce === 'enemies'}
                    />
                </label>
            </div> */}

            <div className="form-toppings input">[
                <h4>Choose your Toppings</h4>
                <label htmlFor="toppings-select">Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={values.pepperoni}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    onChange={onChange}
                    checked={values.sausage}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Mushrooms
                    <input
                    type='checkbox'
                    name='mushrooms'
                    onChange={onChange}
                    checked={values.mushrooms}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Pineapple
                    <input
                    type='checkbox'
                    name='pineapple'
                    onChange={onChange}
                    checked={values.pineapple}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Bacon
                    <input
                    type='checkbox'
                    name='bacon'
                    onChange={onChange}
                    checked={values.bacon}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Olives
                    <input
                    type='checkbox'
                    name='olives'
                    onChange={onChange}
                    checked={values.olives}
                    />
                </label>]
            </div>

            <div className='form-instructions input'>
                <h4>Special Instructions</h4>
                <input
                id="special-text"
                value={values.instructions}
                onChange={onChange}
                name="instructions"
                type='text'
                />
            </div>

            <div className='form-submit input'>
                <button id='order-button' name="submitBtn" disabled={disabled}>submit</button>
                   <Pizza />
                    {/* <div className='errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                    </div> */}
            </div>
        </form>
    )
}

function Pizza({details}) {
    if(!details) {
        return <h3>Loading your Pizza...</h3>
    }

    return (
        <div className='pizza-container'>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            <p>{details.pepperoni}</p>
            <p>{details.sausage}</p>
            <p>{details.bacon}</p>
            <p>{details.pineapple}</p>
            <p>{details.mushrooms}</p>
            <p>{details.olives}</p>
            
            {/* {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((topp, idx) => <li key={idx}>{topp}</li>)}
                    </ul>
                    </div>
            } */}
            <p>{details.instructions}</p>
        </div>
    )
}
