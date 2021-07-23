import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from './components/Form'
import Pizza from './components/Pizza'
import { Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import Home from './components/Home'
import schema from './components/formSchema'
import { reach } from 'yup'
import './App.css';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  olives: false,
  pineapple: false,
  bacon: false,
  mushrooms: false,
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



const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizza([res.data, ...pizza])
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log("this got ran")
    setFormValues(initialFormValues)
  })
}

// const validate = ( name, value ) => {
//   reach(schema, name)
//   .validate(value)
//   .then(() => setFormErrors({...formErrors, [name]: ''}))
//   .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
// }

const inputChange = (name, value) => {
  // validate(name, value)
  setFormValues({
    ...formValues, [name]: value
  })
}

const submitForm = () => {
  const newPizza = {
    name: formValues.name,
    size: formValues.size,
    instructions: formValues.instructions,
    pepperoni: formValues.pepperoni,
    sausage: formValues.sausage,
    pineapple: formValues.pineapple,
    olives: formValues.olives,
    bacon: formValues.bacon,
    mushrooms: formValues.mushrooms,
  }
  postNewPizza(newPizza)
}

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])



  return (
    <div className="App">
      <nav>
        <h1 className="App-header">Lambda Eats!</h1>
          <h2 className='nav-links'><NavLink to='/home'>Home</NavLink></h2>
          <h2 className="nav-links"><NavLink to='/pizza'>Pizza</NavLink></h2>
          
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
