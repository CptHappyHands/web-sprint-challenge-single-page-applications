import axios from "axios";
import React, { useState } from "react";
import Form from './components/Form'
import { Route, Link, Switch } from "react-router-dom";

const initialFormValues = {
  size: '',
  sauce: '',
  toppings: '',
  instructions: '',
}

const App = () => {


const [formValues, setFormValues] = useState(initialFormValues)
const [pizza, setPizza] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const submitForm = () => {
  const newPizza = {
    size: formValues.size,
    sauce: formValues.sauce,
    toppings: formValues.toppings,
    instructions: formValues.instructions,
  }
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

  return (
    <div className="App">
      <nav>
        <h1 className="App-header">Lambda Eats!</h1>
        <div className='nav-links'>
          {/* <Switch> */}
          <Route exact path='/'>Home</Route>
          <Route path='/order-pizza'></Route>
          {/* </Switch> */}
        </div>
      </nav>
      
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      change={inputChange}
      />
      
    </div>
  );
};
export default App;
