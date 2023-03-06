import React from 'react';
import { createRoot } from 'react-dom/client';
import { TestComp } from './components/testcomp';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
root.render(<TestComp>SassModuleExample</TestComp>);