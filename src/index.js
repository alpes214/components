import React from "react";
import { createRoot } from 'react-dom/client';
import ComponentDetail from './ComponentDetail.js';

const App = () => {
    return (
        <div>
            <ComponentDetail />
            <ComponentDetail />
            <ComponentDetail />
            <ComponentDetail />
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
