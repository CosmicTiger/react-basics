import React from 'react'

const Title = () => (
    <h1>
      Introduction to Unit Testing
    </h1>
);

const App = () => {
  return (
    <section id='main'>
      <Title />
      <div className='container'>
        <span num={3} active={false} >First</span>
        <span num='3' active='false' >Second</span>
      </div>
      <input type='text' />
      <input type='checkbox' />
      <div></div>

      <p>************</p>
      <p>************2</p>

      <section></section>

      <p>Other</p>

    </section>
  );
}

export default App;