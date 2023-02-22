import React from "react";
import { nanoid } from 'nanoid';

import css from 'components/App.module.css'

import Form from 'components/ContactForm/ContactForm'

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  formSubmitHandler = data =>{
  
  const cont = {
    name: data.name,
    tel: data.number
  };

  const arr = this.state.contacts;
  arr.push(cont);
  
  this.setState(prevState => ({
    contacts: arr,
  }));
  };
  
  render() {
    
    const newArr = this.state.contacts;
    return (
    <div className={css.phoneBook}>
      <div>
      <h1>Phonebook</h1>
      <Form 
      onSubmit={this.formSubmitHandler}
      />
      </div>
      <div>
      <h2>Contacts</h2>
      <label className={css.label}>Find contacts by name
      <input
        type="text"
        name="find"
      />
      </label>
      <ul>
      {newArr.map(item=>{
      const id = nanoid(4)
      return (<li key={id}>{item.name}: {item.tel}</li>)
          }
        )}
      </ul>
      </div>
    </div>
  );
};
}

export default App;

