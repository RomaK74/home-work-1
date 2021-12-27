import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const ReviewForm = ({sendComment}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidationEmail, setIsValidationEmail] = useState(false);
    const [message, setMessage] = useState('');

    React.useEffect(() => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false)
            setIsValidationEmail(false)
        else
            setIsValidationEmail(true);
    }, [email])

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = () => {
        if (isValidationEmail && name && email && message) {
            const newComment = {
                fullName: name,
                email: email,
                text: message,
                date: new Date().toString()
            }
            sendComment(newComment);
        }
    }

    return (
        <div>
            <h2>Обратная связь:</h2>
            <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Имя"
                value={name}
                fullWidth
                onChange={handleChangeName}
            />
            <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Почта"
                fullWidth
                inputProps={{inputMode: 'email'}}
                value={email}
                onChange={handleChangeEmail}
            />
            <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Текст..."
                fullWidth
                multiline
                rows={4}
                height={20}
                value={message}
                onChange={handleChangeMessage}
            />
            <Button variant="contained"
                    fullWidth
                    onClick={sendMessage}>
                Отправить
            </Button>
        </div>
    );
}