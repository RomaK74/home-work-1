import React, {useEffect, useRef} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './style.css';
import useDebounce from './assets/Debounce';

function App() {
    const btn = useRef();
    const history = useHistory();
    const [account, setAccount] = React.useState("");
    const [userData, setUserData] = React.useState({});
    const [showUser, setShowUser] = React.useState(false);
    const [searching, setSearching] = React.useState(false);
    const debouncedSearchTerm = useDebounce(account, 500);

    const onClickSearch = async () => {
        try {
            setSearching(true);
            const {data} = await axios.get(`https://api.github.com/users/${account}`);
            await setUserData({
                ...userData,
                name: data.name,
                bio: data.bio || "",
                login: data.login || "",
                location: data.location || "",
                public_repos: data.public_repos || 0,
                followers: data.followers || 0,
                following: data.following || 0,
                blog: data.blog || "",
                avatar_url: data.avatar_url
            });
            setShowUser(true);
            setSearching(false);
            history.push(`/?login=${data.login}`);
        } catch (e) {
            alert(`Пользователь ${account} не найден!`);
            setSearching(false);
        }
    }

    const checkValue = () => {
        if (account) {
            onClickSearch();
        }
    };

    React.useEffect(() => {
        if (history.location.search.includes('?login=')) {
            let login = history.location.search.split('=').pop();
            setAccount(login);
        }
    }, []);

    React.useEffect(() => {
        if (account) {
            checkValue();
        }
    }, [debouncedSearchTerm]);

    return (
        <div className="app">
            <div className="app-container">
                <div className="app-form">
                    <input value={account}
                           onChange={e => setAccount(e.target.value)}
                           type="text"
                           className="app-input"
                           placeholder="Укажите GitHub-аккаунт"/>
                    <button className="app-form_btn" onClick={onClickSearch}
                            disabled={searching} ref={btn}>{searching ? "Загрузка..." : "Найти"}</button>
                </div>
                {showUser && (<div className="app-user">
                    <div className="app-user_info">
                        <div className="app-user_image">
                            <img src={userData.avatar_url} className="image" alt=""/>
                        </div>
                        <div className="app-user_data">
                            <h1 className="app-user_name">
                                {userData.name}
                                <span>@{userData.login}</span>
                            </h1>
                            <p className="app-user_about">
                                {userData.bio}
                            </p>
                        </div>
                    </div>
                    <ul className="app-user_stats">
                        <li className="app-user_stats-item">
                            Репозиториев
                            <div>{userData.public_repos}</div>
                        </li>
                        <li className="app-user_stats-item">
                            Подписчиков
                            <div>{userData.followers}</div>
                        </li>
                        <li className="app-user_stats-item">
                            Подписок
                            <div>{userData.following}</div>
                        </li>
                    </ul>
                    <ul className="app-user_location">
                        <li className="app-user_location-item">{userData.location}</li>
                        <li className="app-user_location-item">
                            <a href="http://archakov.im">{userData.blog}</a>
                        </li>
                    </ul>
                </div>)}
            </div>
        </div>
    );
}

export default App;