import { useAppDispatch, useAppSelector } from '../state/store';
import { login, logout } from '../state/User';

export default function UserControl() {

    const counter = useAppSelector(state => state.counter);
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();


    function doLogin() {
      dispatch(login("pass123"));
    }
    function doLogout() {
      dispatch(logout({}));
    }

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>User control</h2>
        <p>Current count: {counter.value}</p>
        <p>Current user: {user.name}/{user.status}</p>
        <button onClick={doLogin}>Log in</button>
        <button onClick={doLogout}>Log out</button>
      </main>
    );
  }