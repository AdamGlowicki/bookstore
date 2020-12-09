import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledAvatar = styled.img`
  max-height: 60px;
  object-fit: contain;
`

const StyledTitle = styled.div.attrs({
  className: 'ml-2'
})`
  font: 12px Arial, sans-serif;
  font-weight: 600;
`

const ViewToAsyncSelect = ({book}) => {
  return (
    <StyledWrapper>
      <StyledAvatar src={book.cover_url}/>
      <StyledTitle>
        {book.title}
      </StyledTitle>
    </StyledWrapper>
  );
};

ViewToAsyncSelect.propTypes = {
  book: PropTypes.object.isRequired
}

export default ViewToAsyncSelect;
