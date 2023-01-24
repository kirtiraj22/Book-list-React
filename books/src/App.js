import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import books from './data.json'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          books.map((element) => {
            return(
            <Book
              name={element.Title} 
              author={element.Author}
              img={element.image}
              />
          )
          })
        }
      </div>
    </div>
  );
}

export default App;
