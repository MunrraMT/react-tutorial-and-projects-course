import data from './base/data';
import Article from './base/Article';

function App() {
  return (
    <main>
      <nav>
        <section className="nav-center">
          <h1>overreacted</h1>
          <button type="button" className="btn">
            toggle
          </button>
        </section>
      </nav>

      <section className="articles">
        {data.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            snippet={item.snippet}
            date={item.date}
            length={item.length}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
