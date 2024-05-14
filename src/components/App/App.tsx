import logo from '../../assets/logo.png';

import './App.scss';

function App() {
  return (
    <div className="App w-full md:w-3/4 md:mx-auto">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-pink-500">
          Hello world!
        </h1>
        <img src={logo} className="" alt="logo" />

        <p>
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
