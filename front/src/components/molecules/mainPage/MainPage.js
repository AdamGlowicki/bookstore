import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'
import Select from '../../atoms/select/Select';
import BookComponent from '../bookComponent/BookComponent';
import {useDispatch, useSelector} from 'react-redux';
import {showNumbers, sortTemplates} from '../../../enum';
import MenuItem from '@material-ui/core/MenuItem';
import AsyncSelect from '../../atoms/asyncSelect/AsyncSelect';
import {NavLink} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaginationComponent
  from '../../atoms/paginationComponent/PaginationComponent';
import {divideArray} from '../../../utils';
import {sortBooksInStore} from '../../../reducers/bookReducer/duck/actions';

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
  align-items: flex-end;
  animation: ${slide} .8s;
  transform-origin: right;
`
const BooksContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
  grid-column-gap: 16px;
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
  const [page, setPage] = useState(1);
  const [showNumber, setShowNumber] = useState(9);

  const books = useSelector(state => state.books.books)
  const dispatch = useDispatch();

  const dividedBooks = divideArray(books, showNumber)

  const menuItems = () => (
    sortTemplates.map(item => (<MenuItem value={item.label} key={item.id}>{item.label}</MenuItem>))
  )

  const menuNumbersItem = () => (
    showNumbers.map(item => (<MenuItem key={item.id} value={item.number}>{item.number}</MenuItem>))
  )

  const handleSelectSort = (e) => {
    const {value} = e.target;
    setSort(value)
    dispatch(sortBooksInStore(value))
  }

  const handleSelectShowNumbers = e => {
    const {value} = e.target;
    setShowNumber(value)
  }

  return (
    <div>
      <StyledControls>
        <div className='mr-5'>
          <AsyncSelect width='300px'/>
        </div>

        <div>
          <NavLink  to='/ss'>
            <ShoppingCartIcon style={{color: 'lightgrey'}}  fontSize='large'/>
          </NavLink>
        </div>
      </StyledControls>

      <StyledSort>
        <Select width='180px' value={sort} onChange={handleSelectSort} label='Sortuj wg.:' menuItems={menuItems}/>
        <div className='ml-3'>
          <Select width='40px' value={showNumber} onChange={handleSelectShowNumbers} menuItems={menuNumbersItem}/>
        </div>
      </StyledSort>
      <BooksContent>
        {books && dividedBooks[page -1].map((book, i) => (<BookComponent key={book.id} book={book} index={i}/>))}
      </BooksContent>

      <div className='w-100 d-flex flex-row justify-content-center align-items-center mt-5 mb-5'>
        <PaginationComponent setPage={setPage} page={page} pagesNumber={dividedBooks.length}/>
      </div>
    </div>
  );
};

export default MainPage;
