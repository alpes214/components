import React from "react";
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

const App = () => {
    return (
    <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">Sam</a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
