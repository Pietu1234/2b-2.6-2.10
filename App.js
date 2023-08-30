import React, { useState } from 'react';
import FilterForm from './FilterForm';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890' },
    { name: 'John Doe', number: '987-654-3210' },
    { name: 'Jane Smith', number: '555-123-4567' }
    // ... (lisää lisää esimerkkinimiä)
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} On jo lisätty kirjaan`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName('');
      setNewNumber('');
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm searchName={searchName} handleSearchChange={handleSearchChange} />
      <h3>Add a new person</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <PersonList persons={filteredPersons} />
    </div>
  );
};

export default App;
