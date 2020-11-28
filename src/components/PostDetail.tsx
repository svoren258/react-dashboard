import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostEndpointUrl } from '../common/constants';
import { usePostDetailStyles } from '../common/styles';
import useFetch from '../hooks/useFetch';
import { MatchParams } from '../models/MatchParams';
import { Page } from '../models/Page';
import { Post } from '../models/Post';
import CommentsList from './CommentsList';
import Loading from './Loading';
import SnackBar from './SnackBar';

function PostDetail(props: { activePage: (page: Page) => void }): JSX.Element {
  const classes = usePostDetailStyles();
  const { postId } = useParams<MatchParams>();
  const [post, loading, hasError] = useFetch<Post>(getPostEndpointUrl(postId));
  useEffect(() => {
    props.activePage(Page.POST_DETAIL);
  }, []);
  return (
    <div className={classes.contentContainer}>
      {loading && <Loading />}
      {!loading && (
        <div className={classes.contentWrapper}>
          <h2>{post && post.title}</h2>
          <p>{post && post.body}</p>
          <div>
            <h3 className={classes.subtitle}>Comments (5)</h3>
            {post && <CommentsList postId={post.id} />}
          </div>
        </div>
      )}
      {hasError && <SnackBar />}
    </div>
  );
}
export default PostDetail;
