import React, {useState} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ClearIcon from '@mui/icons-material/Clear';
import styles from './Review.module.scss';

export const ReviewItem = ({com, deleteMessage}) => {
    const [date, setDate] = useState();
    React.useEffect(() => {
        com.date && setDate(com.date.toString());
    }, [])

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const srcImg = "https://placekitten.com/" + getRandomInt(50,100) + '/' + getRandomInt(50,100);

    return (
        <div>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={srcImg}/>
            </ListItemAvatar>
            <ListItemText
                primary={com && com.fullName}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {com && com.text}
                        </Typography>
                    </React.Fragment>
                }
            />
            <ClearIcon onClick={deleteMessage}/>
        </ListItem>
            <div className={styles.date}>{date && date.toString().replace("T", " ").replaceAll("-", ".").substring(0, date.length - 37)}</div>
        </div>
    )
}