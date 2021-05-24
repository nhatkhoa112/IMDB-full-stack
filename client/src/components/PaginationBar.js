import React from 'react';
import { Pagination } from 'react-bootstrap';
import { movieActions } from '../redux/actions';
import { useDispatch } from 'react-redux';

const PaginationBar = ({ pageNum, setPageNum, totalPage, perPage, sort }) => {
  const dispatch = useDispatch();

  console.log(sort);

  const handleClickOnFirst = (e) => {
    e.preventDefault();
    setPageNum(1);
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  };
  const handleClickOnPrev = (e) => {
    e.preventDefault();
    if (pageNum > 1) setPageNum((num) => num - 1);
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  };

  const handleClickOnLast = (e) => {
    e.preventDefault();
    setPageNum(totalPage);
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  };
  const handleClickOnNext = (e) => {
    e.preventDefault();
    if (pageNum < totalPage) setPageNum((num) => num + 1);
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  };

  const handleClickOnPage = (e, page) => {
    e.preventDefault();
    setPageNum(page);
    dispatch(movieActions.getAll(pageNum, perPage, '', sort));
  };
  return (
    <Pagination className="mt-3 justify-content-center">
      <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
      <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
      <Pagination.Item
        active={pageNum === 1}
        onClick={(e) => handleClickOnPage(e, 1)}
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
          onClick={(e) => handleClickOnPage(e, totalPage)}
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
