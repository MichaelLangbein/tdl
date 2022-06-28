import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/user">User</Link> |{" "}
        <Link to="/count">Count</Link>
      </nav>
    </div>
  );
}

