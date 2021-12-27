import React, {useEffect, useState} from "react";
import {Reviews} from './components/Reviews';
import styles from './App.module.scss';
import {ReviewForm} from "./components/ReviewForm";

function App() {
    const [comments, setComments] = useState([]);
    React.useEffect(() => {
        if (comments.length > 0)
            localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);
    React.useEffect(() => {
        setComments(JSON.parse(localStorage.getItem('comments')));
    }, []);
    const sendComment = async (newCom) => {
        await setComments(prev => [...prev, newCom]);
    }

    const deleteMessage = (e) => {
        setComments(comments.filter(comment => comment.date !== e))
    }

    return (
        <div className={styles.container}>
            {comments && comments.length !== 0 ? <Reviews comments={comments} deleteMessage={deleteMessage}/> : "Комментариев нет"}
            <ReviewForm sendComment={sendComment}/>
        </div>
    )
}

export default App;