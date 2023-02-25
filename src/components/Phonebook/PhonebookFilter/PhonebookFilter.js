import PropTypes from 'prop-types';

import styles from '../phonebook.module.scss';

export const PhonebookFilter = ({ handleChange }) => {
  return (
    <div className={styles.formGroup}>
      <label>Find contacts by name</label>
      <input name="filter" onChange={handleChange} placeholder="enter name" />
    </div>
  );
};

PhonebookFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
