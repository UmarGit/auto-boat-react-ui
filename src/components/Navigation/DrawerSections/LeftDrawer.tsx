import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import Grid from '@material-ui/core/Grid';
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    routing: {
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      height: 'calc( 100vh - 64px )',
      paddingLeft: '4px',
      width: '64px'
    },
    mainHeading: {
      textAlign: 'center',
      fontWeight: 'bolder',
      marginTop: '8px'
    },
    notifyStack: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    notifyItem: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      minHeight: 60,
      animation: ''
    },
    notifyItemText: {
      fontWeight: 'bolder',
    },

  }),
);

// const remove = (arr: number[], item: number) => {
//   const newArr = [...arr];
//   newArr.splice(newArr.findIndex(i => i === item), 1);
//   return newArr;
// };

const getRandomMessage = () => {
  let messages = [
    'Auto Boat is in danger !',
    'Help, May Day !!',
    "Heading Towards North",
    "Heading Towards East",
    "Heading Towards West",
    "Heading Towards South",
    "Starting to cruise",
    "Object Detected !!",
    "Destination Reached",
  ]
  return messages[Math.round(Math.random() * (messages.length-1 - 0) + 0)]
}

const add = (arr) => {

  let obj = {
    message: getRandomMessage()
  }
  return [...arr, obj];
};

const LeftDrawer = () => {
  const [notifications, setNotifications] = useState([
    {
      message: "First Message"
    },
    {
      message: "Heading Towards North"
    },    
    {
      message: "Object Detected !!"
    }
  ]);
  const [myInterval, setMyInterval] = React.useState<NodeJS.Timeout>(setInterval(() => { }, 0));
  const [clickBut, setClickBut] = useState(null);
  const classes = useStyles();

  const startRealTime = () => {
    setMyInterval(setInterval(() => {
      clickBut.click()
    }, 3000));
  }
  
  const stopRealTime = () => {
    clearInterval(myInterval);
  } 
  
  const callBack = () => {
    setNotifications(add(notifications))
  }

  return (
    <Grid container>
      {/* <Grid item className={classes.routing} xs={3}>

        <List>
            <ListItem button key="Click" ref={button => setClickBut(button)} onClick={() => callBack()}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
            </ListItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            </ListItem>
          ))}
            <ListItem button key="Clickadd" onClick={() => startRealTime()}>
              <ListItemIcon><AddIcon/></ListItemIcon>
            </ListItem>
            <ListItem button key="Clickdelete" onClick={() => stopRealTime()}>
              <ListItemIcon><DeleteIcon/></ListItemIcon>
            </ListItem>
        </List>

      </Grid> */}
      <Grid item xs={12}>

        <Typography variant="h6" className={classes.mainHeading} gutterBottom>
          Notification
        </Typography>

        <AnimatePresence initial={false}>
          <div className={classes.notifyStack}>
            {notifications.map((data, id) => (
              <motion.div
                key={id}
                data-id={data}
                initial={{ opacity: 0, y: -100, scaleY: 0.3 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.5, transition: { duration: 0.8 } }}
                transition={{ type: "spring", bounce: 1, mass: 0.2, duration: 0.8 }}
              >

                <ListItem button className={classes.notifyItem}>
                  <ListItemIcon><DirectionsBoatIcon color="secondary" /></ListItemIcon>
                  <ListItemText>
                    <Typography className={classes.notifyItemText} variant="caption" display="block" gutterBottom>
                      {data.message}
                    </Typography>
                  </ListItemText>
                </ListItem>

              </motion.div>
            ))}
          </div>
        </AnimatePresence>


      </Grid>
    </Grid>
  );
}
export default LeftDrawer;