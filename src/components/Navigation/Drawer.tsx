import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
  window?: () => Window;
  childrens?: JSX.Element;
  position?: "bottom" | "left" | "right" | "top";
  width?: number;
}

export default function Sidebar(props: Props) {
  const { window } = props;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: props.width,
          flexShrink: 0,
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: props.width,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }),
  );


  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {props.childrens}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} style={{width: 300}} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={props.position}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
                <div>
      <div className={classes.toolbar} />
      {props.childrens}
    </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open
            anchor={props.position}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
