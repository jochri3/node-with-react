import { SET_POSTS } from './posts.types';
import postsAPI from '../../api/postsAPI';

export const getPosts = () => {
  return async (dispatch) => {
    const reponse = await postsAPI.get('/api/posts');
    dispatch({
      type: SET_POSTS,
      payload: reponse.data,
    });
  };
};
