import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const headerHeightLtMd = '56px';
export const headerHeightGtSm = '64px';

export const useAppStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      paddingTop: headerHeightLtMd,
      [theme.breakpoints.up('sm')]: {
        paddingTop: headerHeightGtSm,
      },
    },
  }),
);

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
      marginTop: '20px',
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

export const usePostListsStyles = makeStyles((theme: Theme) =>
  createStyles({
    postWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        alignItems: 'flex-start',
      },
    },
  }),
);

export const useSideMenuStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export const useUserDetailStyles = makeStyles((theme: Theme) =>
  createStyles({
    userDetailContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      margin: '10px 20px',
    },
    userInfoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        minWidth: '400px',
        padding: '15px 20px',
        alignSelf: 'center',
        boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
      },
    },
    userAvatarWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      marginRight: '20px',
    },
    infoItemsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '290px',
    },
    infoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoItemLabel: {
      display: 'flex',
      alignItems: 'center',
    },
    postsWrapper: {
      width: '100%',
    },
  }),
);

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
