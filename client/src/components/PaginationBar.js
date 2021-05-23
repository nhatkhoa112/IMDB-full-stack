import React from 'react';
import { Pagination } from 'react-bootstrap';
import { movieActions } from '../redux/actions';
import { useDispatch } from 'react-redux';

const PaginationBar = ({ pageNum, setPageNum, totalPage, perPage }) => {
  const dispatch = useDispatch();

  const handleClickOnFirst = () => {
    setPageNum(1);
    dispatch(movieActions.getAll(pageNum, perPage));
  };
  const handleClickOnPrev = () => {
    if (pageNum > 1) setPageNum((num) => num - 1);
    dispatch(movieActions.getAll(pageNum, perPage));
  };

  const handleClickOnLast = () => {
    setPageNum(totalPage);
    dispatch(movieActions.getAll(pageNum, perPage));
  };
  const handleClickOnNext = () => {
    if (pageNum < totalPage) setPageNum((num) => num + 1);
    dispatch(movieActions.getAll(pageNum, perPage));
  };

  const handleClickOnPage = (page) => {
    setPageNum(page);
    dispatch(movieActions.getAll(pageNum, perPage));
  };
  return (
    <Pagination className="mt-3 justify-content-center">
      <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
      <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
      <Pagination.Item
        active={pageNum === 1}
        onClick={() => handleClickOnPage(1)}
      >
        {1}
      </Pagination.Item>
      {pageNum > 2 && <Pagination.Ellipsis />}

      {pageNum > 1 && pageNum < totalPage && (
        <Pagination.Item active>{pageNum}</Pagination.Item>
      )}

      {pageNum < totalPage - 1 && <Pagination.Ellipsis />}
      {totalPage > 1 && (
        <Pagination.Item
          active={pageNum === totalPage}
          onClick={() => handleClickOnPage(totalPage)}
        >
          {totalPage}
        </Pagination.Item>
      )}
      <Pagination.Next
        disabled={pageNum === totalPage}
        onClick={handleClickOnNext}
      />
      <Pagination.Last
        disabled={pageNum === totalPage}
        onClick={handleClickOnLast}
      />
    </Pagination>
  );
};

export default PaginationBar;
