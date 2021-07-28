import '../styles/main.css';
import Content from './Content';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Title of Page</h1>
      </header>

      <div className="wrapper">
        <Content />
        <Gallery />
      </div>

      <footer>
        <p>And finally, I am some text centered along the bottom of the page.</p>
      </footer>
    </div>
  );
}

export default App;
