import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import React, { useRef } from 'react';
import { getCommentsEndpointUrl } from '../common/constants';
import { useListStyles } from '../common/styles';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import { Comment } from '../models/Comment';
import SnackBar from './SnackBar';

const commentsList = (props: { postId: number }): JSX.Element => {
  const classes = useListStyles();
  const isMountedRef = useRef(true);
  const [comments, loading, hasError] = useFetch<Comment[]>({
    isMountedRef,
    url: getCommentsEndpointUrl(props.postId),
  });

  return (
    <div>
      {loading && <Loading />}
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        {comments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <ListItem button>
                <ListItemText primary={comment.body} />
              </ListItem>
              <Divider />
            </div>
          ))}
      </List>
      {hasError && <SnackBar />}
    </div>
  );
};
export default commentsList;
