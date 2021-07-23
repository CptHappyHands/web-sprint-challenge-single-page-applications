import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        // errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        console.log(evt.target)
        change( name, value )
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

            <div className="form-sauce input">
                <h4>Chose your sauce</h4>
                <label htmlFor="sauce-select">Marinara
                    <input type="radio" value="marinara" onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Zesty Marinara
                    <input type="radio" value="zesty-marinara" onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Alfredo
                    <input type="radio" value="alfredo" onChange={onChange}
                    />
                </label>
                <br></br>
                <label>The Blood of your Enemies
                    <input type="radio" value="enemies" onChange={onChange}
                    />
                </label>
            </div>

            <div className="form-toppings input">
                <h4>Choose your Toppings</h4>
                <label htmlFor="toppings-select">Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'pepperoni'}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'sausage'}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Mushrooms
                    <input
                    type='checkbox'
                    name='mushrooms'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'mushrooms'}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Pineapple
                    <input
                    type='checkbox'
                    name='pineapple'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'pineapple'}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Bacon
                    <input
                    type='checkbox'
                    name='bacon'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'bacon'}
                    />
                </label>
                <br></br>
                <label htmlFor="toppings-select">Olives
                    <input
                    type='checkbox'
                    name='olives'
                    value='true'
                    onChange={onChange}
                    checked={values.toppings === 'olives'}
                    />
                </label>
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
                <button name="submitBtn" disabled={disabled}>submit</button>
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