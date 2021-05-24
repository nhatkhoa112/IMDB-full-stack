import types from '../constants/review.constants';
import { toast } from 'react-toastify';
import api from '../api';

const getAll = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_REVIEWS_START });
    const { data } = await api.get('/reviews');
    dispatch({ type: types.GET_REVIEWS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.GET_REVIEWS_FAILURE });
    console.log(error);
  }
};

const create = (review) => async (dispatch) => {
  try {
    console.log(review);
    dispatch({ type: types.CREATE_REVIEW_START });
    const { data } = await api.post('/reviews', review);
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.CREATE_REVIEW_FAILURE });
    console.log(error);
  }
};

const update = (id, review) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_REVIEW_START });
    const { data } = api.patch(`/reviews/${id}`, review);
    dispatch({ type: types.UPDATE_REVIEW_SUCCESS, payload: data.data });
    // toast.success('The review is updated successfully');
  } catch (error) {
    dispatch({ type: types.UPDATE_REVIEW_FAILURE });
    console.log(error);
  }
};

const deleteReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_REVIEW_START });
    const { data } = await api.delete(`/reviews/${id}`);
    dispatch({ type: types.DELETE_REVIEW_SUCCESS, payload: data.data });
    // toast.success('The review is deleted successfully');
  } catch (error) {
    dispatch({ type: types.DELETE_REVIEW_FAILURE });
    console.log(error);
  }
};

const reviewActions = {
  getAll,
  create,
  update,
  deleteReview,
};

export { reviewActions };
