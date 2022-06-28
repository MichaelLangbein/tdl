import { decrement, increment } from '../state/Counter';
import { useAppDispatch, useAppSelector } from '../state/store';

export default function CountControl() {

    const user = useAppSelector(state => state.user);
    const {value} = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Count control</h2>
        <p>Current count: {value}</p>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <p>Current user: {user.name}/{user.status}</p>
      </main>
    );
  }