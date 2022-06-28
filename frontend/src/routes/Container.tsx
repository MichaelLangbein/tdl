import { FC } from "react";
import { Link } from "react-router-dom";

export default function Container({ children }: any) {
    return (
        <>
            <h1>Welcome to TDL</h1>
            <nav>
                <Link to="/">TaskView</Link> |{" "}
                <Link to="/calendar">CalendarView</Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
}