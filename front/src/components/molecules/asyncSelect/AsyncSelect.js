import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputText from "../../atoms/inputText/InputText";
import ViewToAsyncSelect
  from '../viewToAsyncSelect/ViewToAsyncSelect';
import {useSelector} from 'react-redux';
import CustomLink from '../../atoms/customLink/CustomLink';

const AsyncSelect = ({width}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    let handler = setTimeout( () =>handleSearch(search), 500)

    return () => {
      clearTimeout(handler)
    };
  }, [search]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const books = useSelector(state => state.books.books)

  const handleSearch = (string) => {
    setDisabled(true)
    const searched = books ? books.filter(item => item.title.toLowerCase().includes(string.toLowerCase())) : []
    setOptions(searched)
    setDisabled(false)
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => {
        return option.id === value.id;
      }}
      getOptionLabel={(object) => Object.values(object).length ? `${object.title}` : ''}
      options={options}
      noOptionsText='Nie znaleziono dopasowania'
      renderInput={(params) => (
          <InputText
            {...params}
            value={search}
            disabled={disabled}
            onChange={(e) => setSearch(e.target.value)}
            label='Wyszukaj książkę'
            width={width}
          />
      )}
      renderOption={(options, val) => {
        return (
          <CustomLink to={`/books/${options.id}`}>
            <ViewToAsyncSelect book={options}/>
          </CustomLink>
        )}}
    />
  );
}

export default AsyncSelect;
