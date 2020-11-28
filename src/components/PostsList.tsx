import React from 'react';
import { navStyle, useListStyles, usePostListsStyles } from '../common/styles';
import { Post } from '../models/Post';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { ChildRoutes, Routes } from '../models/Routes';
import { getPostsEndpointUrl } from '../common/constants';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import SnackBar from './SnackBar';

function PostsList(props: { userId: string }): JSX.Element {
  const classes = { ...useListStyles(), ...usePostListsStyles() };
  const [posts, loading, hasError] = useFetch<Post[]>(getPostsEndpointUrl(props.userId));

  return (
    <div>
      {loading && <Loading />}
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <Link style={navStyle} to={`/${Routes.USERS}/${props.userId}/${ChildRoutes.POSTS}/${post.id}`}>
                <ListItem className={classes.postWrapper} button>
                  <ListItemText secondary={post.title} />
                  <ListItemText primary={post.body} />
                </ListItem>
              </Link>
              <Divider />
            </div>
          ))}
      </List>
      {hasError && <SnackBar />}
    </div>
  );
}
export default PostsList;
