import React from 'react';

function App() {
    const [users, setUsers] = React.useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch('https://61f560ce62f1e300173c4129.mockapi.io/users');
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <ul>
                {
                    users.map(obj => (
                        <li key={obj.id}>{obj.name}</li>
                    ))
                }
            </ul>
            <button onClick={getUsers}>Получить список пользователей</button>
        </div>
    )
}

export default App;