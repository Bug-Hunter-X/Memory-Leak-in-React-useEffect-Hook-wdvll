# React UseEffect Memory Leak Bug
This repository demonstrates a common bug in React applications: memory leaks caused by improper use of the `useEffect` hook.
The `bug.js` file contains a component with a memory leak because it fails to clear an interval in the cleanup function.  The `bugSolution.js` file provides the corrected code.
## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the behavior of the component - the counter increases continuously, but memory usage will keep growing.
## Solution
The solution involves clearing the interval in the cleanup function of the `useEffect` hook. This prevents the interval from continuing indefinitely, thus fixing the memory leak.