import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { getCommentsEndpointUrl } from '../common/constants';
import { useListStyles } from '../common/styles';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import { Comment } from '../models/Comment';
import SnackBar from './SnackBar';

function CommentsList(props: { postId: number }): JSX.Element {
  const classes = useListStyles();
  const [comments, loading, hasError] = useFetch<Comment[]>(getCommentsEndpointUrl(props.postId));

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
}
export default CommentsList;
