import React from 'react';
import NavigationBar from './components/Navigation/NavigationBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from './components/Navigation/Drawer'
import LeftDrawer from './components/Navigation/DrawerSections/LeftDrawer'
import RightDrawer from './components/Navigation/DrawerSections/RightDrawer'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    fullScreenVideo: {
      width: '90%',
      height: '75%',
      position: 'absolute',
      left: '50%',
      zIndex: 10000,
      maxWidth: '90%',
      right: '50%',
      transform: 'translate(-50%, 0)'
    },
    mainCard: {
      borderRadius: '10px',
      height: '320px'
    },
    compassCard: {
      borderRadius: '10px',
      height: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    liveVideoHeader: {
      padding: '6px 12px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: 'bold',
      fontSize: '0.7rem'
    },
    liveVideo: {
      width: '100%',
      height: '260px',
      marginBottom: '10px',
      objectFit: 'cover',
      borderRadius: '10px 10px 0 0',
      backgroundColor: 'rgba(100, 100, 100, 0.2)'
    }
  }),
);

const App = () => {
  // const videoRef = React.useRef(null);

  // React.useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = "http://192.168.100.11:5000/video_feed";
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  // };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationBar />
      <Drawer childrens={<LeftDrawer />} position="left" width={260} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={4} >
          <Grid item xs={6}>
            <Paper className={classes.mainCard} elevation={6}>
              <div className={classes.liveVideoHeader}>
                Live Feed
              </div>
              <div>
                {/* <video className={classes.liveVideo} ref={videoRef}  src="http://192.168.100.11:5000/video_feed"/> */}
                <img src="http://127.0.0.1:5000/video_feed" alt="video" className={classes.liveVideo} />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.compassCard} elevation={6}>
              <div>
                Compass
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.mainCard} elevation={6}>
              <div>
                <iframe title="googlemaps" width="600" id="gmap_canvas" src="https://maps.google.com/maps?q=Iqra%20University%20Main%20Campus%20Road%D8%8C%20Shaheed-e-Millat%20Rd,%20Phase%201%20Defence%20View%D8%8C%20Karachi,%20Karachi%20City,%20Sindh%2075500&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
              </div>
            </Paper>
          </Grid>
        </Grid>

      </main>
      <Drawer childrens={<RightDrawer />} position="right" width={240} />
    </div>
  );
}

export default App;
