import * as React from 'react';
import List from '@mui/material/List';
import {ReviewItem} from './ReviewItem';

export const Reviews = ({comments, deleteMessage}) => {
    return (
        <div>
            <h3>Отзывы:</h3>
            <List sx={{width: '100%', maxWidth: 366, bgColor: 'background.paper'}}>
                {comments && comments.length > 0 && comments.map((com) => (
                    <ReviewItem com={com} key={com.date} deleteMessage={() => deleteMessage(com.date)}/>
                ))}
            </List>
        </div>
    );
}