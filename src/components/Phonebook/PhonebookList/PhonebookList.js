import { Button } from 'components/shared/Button/Button';
import { BsTelephone } from 'react-icons/bs';

export const PhonebookList = ({ removeContact, contacts }) => {
  const contact = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}
      <BsTelephone /> {number}
      <Button type="submit" onClick={() => removeContact(id)}>
        delete
      </Button>
    </li>
  ));
  return <ul>{contact}</ul>;
};

PhonebookList.defaultProps = {
  contacts: [],
};
