import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>TDL</h1>
      <nav>
        <Link to="/tasks">TaskView</Link> |{" "}
        <Link to="/calendar">CalendarView</Link>
      </nav>
    </div>
  );
}

