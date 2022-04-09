import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";

// ReactDOM.render( <App />, document.getElementById('app') );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);