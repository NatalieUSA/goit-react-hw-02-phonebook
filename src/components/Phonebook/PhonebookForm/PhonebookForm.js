import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../phonebook.module.scss';
import { Button } from 'components/shared/Button/Button';
import { initialState } from './initialState';

export class PhonebookForm extends Component {
  state = {
    ...initialState,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const result = onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
    if (result) {
      this.reset();
    }
  };

  reset() {
    this.setState({ ...initialState });
  }

  handleChange = ({ target }) => {
    // console.log(target.value);
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            onChange={handleChange}
            placeholder="enter name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number</label>
          <input
            onChange={handleChange}
            placeholder="enter number"
            type="text"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
