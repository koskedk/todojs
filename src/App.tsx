import React from 'react';
import Tasks from './features/tasks/Tasks';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
         <h1>Welcome to toDoJs !</h1>
      <Counter />
      <hr />
      <Tasks/>
    </div>
  );
}

export default App;
