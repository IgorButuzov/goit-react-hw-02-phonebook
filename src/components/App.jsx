import React from "react";

import css from 'components/App.module.css'

import Form from 'components/ContactForm/ContactForm'

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  formSubmitHandler = data =>{
    setTimeout(() => {
      console.log('я в Апп');
    }, 2000);
    
  }
  
  render() {
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
        <li>Vasya Pypkin</li>
      </ul>
      </div>
    </div>
  );
};
}

export default App;

