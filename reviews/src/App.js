import Review from './base/Review';

function App() {
  return (
    <main>
      <section className="container">
        <header className="title">
          <h2>Nossas Análises</h2>
          <div className="underline" />
        </header>

        <Review />
      </section>
    </main>
  );
}

export default App;
