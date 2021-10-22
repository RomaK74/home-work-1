import ProfileClass from "./components/ProfileClass";
import ProfileFunction from "./components/ProfileFunction";

function App() {
    return (
        <div>
            <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <ProfileFunction name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
        )
}

export default App;