import React from 'react'
import Counter from './components/Counter';

const Title = () => (
    <h1>
      Introduction to Unit Testing
    </h1>
);

const App = () => {
  return (
    <section id='main'>
      <Counter />
    </section>
  );
}

export default App;