import { SET_POSTS } from './posts.types';

const INITIAL_STATE = {
  posts: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    default:
      return state;
  }
};
