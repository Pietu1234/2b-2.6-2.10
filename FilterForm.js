import React from 'react';

const FilterForm = ({ searchName, handleSearchChange }) => {
  return (
    <div>
      Filter shown names: <input value={searchName} onChange={handleSearchChange} />
    </div>
  );
};

export default FilterForm;
