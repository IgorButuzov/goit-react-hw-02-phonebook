import React from "react";

import css from 'components/ContactForm/ContactForm.module.css'

class Form extends React.Component {
  state = {
    name: '',
    number: ''
  }

  handleInputChange = e =>{
    const {name,value} = e.currentTarget;
    this.setState({[name]:value});
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.resetForm();
    this.props.onSubmit(this.state);
  }
  resetForm = () => {
    this.setState({
        name: '',
        number: '', 
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label className={css.label}>Name
        <input
          type="text"
          name="name"
          id={this.nameid}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        </label>
        <label className={css.label}>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        </label>
        <button type="submit">Add contact</button>
        </form>
        
  );
};
}

export default Form;