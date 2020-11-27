import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const navStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  textTransform: 'capitalize',
};

export const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    backToHomeButton: {
      '&:hover': {
        color: 'red',
      },
    },
  }),
);

export const useHomeStyles = makeStyles({
  homePageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homePage: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
});

export const useLoadingStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
  }),
);

export const usePostDetailStyles = makeStyles({
  contentWrapper: {
    margin: '15px',
    textTransform: 'capitalize',
  },
  subtitle: {
    marginTop: '30px',
    marginBottom: '0',
  },
});

export const usePostListsStyles = makeStyles({
  postWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const useSideMenuStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export const useUserDetailStyles = makeStyles({
  userDetailContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '15px',
  },
  userAvatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    marginRight: '20px',
  },
  userInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '290px',
    width: '50%',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postsWrapper: {
    width: '100%',
  },
});

export const useUserTableStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);
