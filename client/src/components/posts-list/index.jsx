import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from '../post-item/';
import { getPosts } from '../../redux/posts/posts.actions';

export default function PostsList() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
console.log(posts);
  return (
    <ul>
      {loading ? (
        <div>Chargement...</div>
      ) : (
        posts.map((post) => <PostItem key={post._id} {...post} />)
      )}
    </ul>
  );
}
