import { Title } from './shared/Title/Title';
import { Phonebook } from './Phonebook/Phonebook';
import '../../src/index.css';
export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Title>Phonebook</Title>

      <Phonebook />
    </div>
  );
};
