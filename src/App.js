import './styles/main.css';
import Content from './components/Content';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
        <h1 className="title">Title of Page</h1>
        <Content />
        <Gallery />
        <footer>And finally, I am some text centered along the bottom of the page.</footer>
    </div>
  );
}

export default App;
