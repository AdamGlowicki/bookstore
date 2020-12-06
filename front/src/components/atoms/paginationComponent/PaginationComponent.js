import React, {Fragment} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';


const PaginationComponent = ({setPage, page, pagesNumber}) => {
  const handleChange = (e, page)=> {
    setPage(page)
  }

  return (
    <Fragment>
      <Pagination
        onChange={handleChange}
        count={pagesNumber}
        page={page}
        siblingCount={0}
      />
    </Fragment>
  );
};

PaginationComponent.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number.isRequired,
  pagesNumber: PropTypes.number.isRequired,
}

export default PaginationComponent;
