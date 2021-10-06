import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
  
const Teams = () => {
  return (
    <div>
      <h1>Hello, we are Team 4 Good</h1>
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
    </div>
  );
};
  
export default Teams;