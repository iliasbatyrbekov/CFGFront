import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import PersonIcon from '@mui/icons-material/Person';

import pastImg from "../assets/past.png";
const fsImg = {
  width: "100vw",
  // height:"100vh"
}
const Teams = () => {
  return (
    <div>
      <img style={fsImg} src={pastImg} alt="a problem" />
      
    </div>
  );
};
  
export default Teams;

/*
<List sx={{ width: '100%', maxWidth: 360, alignItems:"flex-start", bgcolor: 'secondary.1' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hong Fu" secondary="Tsang" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wei" secondary="Lui" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Natalia" secondary="Wisely" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Kinshuk" secondary="Kotecha" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ko" secondary="Yu" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ilias" secondary="Batyrbekov" />
      </ListItem>
    </List>
*/