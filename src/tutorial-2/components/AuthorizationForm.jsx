import React from 'react';
import "./style.css";

export const AuthorizationForm = () => {
    let email;
    let password;

    function handleChangeInput(event) {
        event.target.type === 'email' ? email = event.target.value : password = event.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log({email, password});
            e.target.reset();
        } else
            alert("Заполните поля!")
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="form">
                <input type="email" onChange={handleChangeInput} placeholder="E-Mail"/>
                <input type="password" onChange={handleChangeInput} placeholder="Пароль"/>
                <input type="submit" value="Войти"/>
            </form>
        </div>
    )
}