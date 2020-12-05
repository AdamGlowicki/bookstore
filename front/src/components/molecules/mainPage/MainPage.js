import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'
import Select from '../../atoms/select/Select';
import BookComponent from '../bookComponent/BookComponent';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks} from '../../../reducers/bookReducer/duck/operations';
import {sortTemplates} from '../../../enum';
import MenuItem from '@material-ui/core/MenuItem';
import AsyncSelect from '../../atoms/asyncSelect/AsyncSelect';
import {NavLink} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const slide = keyframes`
  from {transform: scaleX(0); opacity: 0;}
  to {transform: scaleX(1); opacity: 1;}
`
const StyledSort = styled.div.attrs({
  className: 'mt-3 mb-5'
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  animation: ${slide} .8s;
  transform-origin: right;
`
const BooksContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
`
const StyledControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  animation: ${slide} .8s;
  transform-origin: left;
`

const MainPage = () => {

  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const books = useSelector(state => state.books.books)

  const menuItems = () => (
    sortTemplates.map(item => (<MenuItem value={item.label} key={item.id}>{item.label}</MenuItem>))
  )

  const handleSelectSort = (e) => {
    const {value} = e.target;
    console.log(value)
    setSort(value)
  }
  return (
    <div>
      <StyledControls>
        <div className='mr-5'>
          <AsyncSelect/>
        </div>

        <div>
          <NavLink  to='/ss'>
            <ShoppingCartIcon style={{color: 'lightgrey'}}  fontSize='large'/>
          </NavLink>
        </div>
      </StyledControls>

      <StyledSort>
        <Select value={sort} onChange={handleSelectSort} label='Sortuj wg.:' menuItems={menuItems}/>
      </StyledSort>
      <BooksContent>
        {books && books.map((book, i) => (<BookComponent book={book} index={i}/>))}
      </BooksContent>
    </div>
  );
};

export default MainPage;
