
import PropType from 'prop-types';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { FormButton, FormInput } from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchStr, setSearchStr] = useState('');
  const exportData = e => {
    e.preventDefault();
    if (searchStr.trim() === '') {
      Notify.failure('Enter some value');
      return;
    }
    onSubmit(searchStr);
  };
  const updateCurrState = e => {
    const { value } = e.currentTarget;
    setSearchStr(value);
  };

  return (
    <form onSubmit={exportData}>
      <FormInput
        type="text"
        name="searchStr"
        value={searchStr}
        onChange={updateCurrState}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />{' '}
      <FormButton type="submit">Search</FormButton>
    </form>
  );
};
Searchbar.protoType = {
  onSubmit: PropType.func.isRequired,
  onClick: PropType.func.isRequired,
};

export default Searchbar;