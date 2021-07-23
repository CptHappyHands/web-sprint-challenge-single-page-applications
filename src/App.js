import axios from "axios";
import React, { useState } from "react";
import Form from './components/Form'
import Pizza from './components/Pizza'
import { Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import Home from './components/Home'
import schema from './components/formSchema'
import { reach } from "yup";

const initialFormValues = {
  size: '',
  sauce: '',
  toppings: '',
  instructions: '',
}

const initialFormErrors = {
  name: ''
}

const initialDisabled = true

const App = () => {


const [formValues, setFormValues] = useState(initialFormValues)
const [pizza, setPizza] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const submitForm = () => {
  const newPizza = {
    name: formValues.name,
    size: formValues.size,
    sauce: formValues.sauce,
    instructions: formValues.instructions,
    toppings: ['pepperoni', 'olives', 'bacon', 'sausage', 'pineapple', 'mushrooms'].filter(topp => formValues[topp])
  }
  postNewPizza(newPizza)
}

const inputChange = (name, value) => {
  setFormValues({
    ...formValues, [name]: value
  })
}

const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizza(newPizza)
  })
  .catch(err => {
    console.log(err)
  })
}

const validate = ( name, value ) => {
  reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

  return (
    <div className="App">
      <nav>
        <h1 className="App-header">Lambda Eats!</h1>
        <div className='nav-links'>
          
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/pizza'>Pizza</NavLink>
          
        </div>
      </nav>
      <Home />
      <Route exact path='/pizza'>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      change={inputChange}
      />
      </Route>
      <Route exact path='/home' />
        {/* <Home />
      </Route> */}
      {/* <Redirect to='/home' /> */}
      {
      // pizza.map(p => {
      //   return (
      //     <Pizza details={p} />
      //   )
      // })
      }
    </div>
  );
};
export default App;
