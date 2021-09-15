import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import PowerIcon from '@material-ui/icons/Power';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PinDropIcon from '@material-ui/icons/PinDrop';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import { socket } from '../../../socket'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '10px'
    },
    mainHeading: {
      textAlign: 'center',
      fontWeight: 'bolder'
    },
    margin: {
      margin: '40px auto',
      width: '100% !important'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    buttonRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    buttonColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 'auto'
    },
    buttonSpacing: {
      margin: '12px 0'
    },
    slider: {
      padding: '6px 10px'
    }
  }),
);

function valuetext(value: number) {
  return `${value}°C`;
}

const RightDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.mainHeading} gutterBottom>
            Controls
          </Typography>

          <Grid item xs={12}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              className={classes.margin}
              onClick={() => {
                socket.emit('message', "hehehe"); socket.on('Notification', (data: any) => {
                  alert(data)
                })
              }}
            >
              <SearchIcon className={classes.extendedIcon} />
              Search Boat
            </Fab>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.mainHeading} gutterBottom>
            GPS Positioning
          </Typography>
          <Grid container className={classes.buttonRow} xs={12}>
            <Grid item>
              <Fab size="small" color="secondary" aria-label="add">
                <PowerIcon />
              </Fab>
            </Grid>
            <Grid item>
              <Fab size="small" color="secondary" aria-label="add">
                <LiveTvIcon />
              </Fab>
            </Grid>
            <Grid item>
              <Fab size="small" color="secondary" aria-label="add">
                <PinDropIcon />
              </Fab>
            </Grid>
            <Grid item>
              <Fab size="small" color="secondary" aria-label="add">
                <GpsFixedIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.mainHeading} gutterBottom>
            More Options...
          </Typography>
        </Grid>


        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.mainHeading} gutterBottom>
            Controls
          </Typography>
          <Grid container className={classes.buttonRow}>
            <Grid item>
              <Fab size="medium" color="primary" aria-label="add">
                <ChevronLeft />
              </Fab>
            </Grid>
            <Grid container className={classes.buttonColumn}>
              <Grid item xs={12}>
                <Fab size="medium" color="primary" className={classes.buttonSpacing} aria-label="add">
                  <ExpandLess />
                </Fab>
              </Grid>
              <Grid item xs={12}>
                <Fab size="small" color="secondary" className={classes.buttonSpacing} aria-label="add">
                  <GpsFixedIcon />
                </Fab>
              </Grid>
              <Grid item xs={12}>
                <Fab size="medium" color="primary" className={classes.buttonSpacing} aria-label="add">
                  <ExpandMore />
                </Fab>
              </Grid>
            </Grid>
            <Grid item>
              <Fab size="medium" color="primary" aria-label="add">
                <ChevronRight />
              </Fab>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.mainHeading} gutterBottom>
            Speed
          </Typography>
          <Grid container className={classes.slider}>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default RightDrawer;
