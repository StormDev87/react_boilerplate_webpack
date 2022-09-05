import React from 'react'
import { createRoot } from 'react-dom/client';
import "./index.css";

// const unused = "something";
const logico = "logico";
const App = () => <h1>My React and TypeScript App!ddd! {logico}</h1>;

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);