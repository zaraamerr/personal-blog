
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">Zara's Blog</a>
        <nav>
          <a href="">New Blogs</a>
          <a href="">Trending Blogs</a>
        </nav>
      </header>
      <div className="post">
      <div className ="image">
        <img src="https://images.squarespace-cdn.com/content/v1/63ef7bd2f5198045eaae5913/43b10517-aa36-43bd-83c8-e97fcd88b741/Takoyaki%2C+a+ball-shaped+Japanese+snack+from+Japan+Fes..jpeg?format=1000w" alt=""></img>
      </div>
        <div className="texts">
          <h2>i conceived a food baby at a festival on steinway street</h2>
          <p className="info">
            <time>2024-06-24 13:09</time>
          </p>
          <p className="blurb">i love food and new york- a melting pot of every culture imaginable - has the best food. let's give it a taste in queens!</p>
        </div>
      </div>
      <div className="post">
        <div className ="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Roosevelt_Island_tramcar_2010.jpg/1280px-Roosevelt_Island_tramcar_2010.jpg" alt=""></img>
        </div>
        <div className="texts">
          <h2>lady and the roosevelt tram</h2>
          <p className="info">
            <time>2024-06-24 13:09</time>
          </p>
          <p className="blurb">the most modern aerial tramway in the world, at only $2.90 a ticket, provides dreamy views of manhattan. enough to cure anyone's fear of heights!</p>
        </div>
      </div>
      <div className="post">
      <div className ="image">
        <img src="https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/crm/newyorkstate/_DSC2336-1--8687c0bace45a8d_8687c338-f74b-b3c9-b34630852eec9af0.jpg" alt=""></img>
      </div>
        <div className="texts">
          <h2>i wouldn't mind being buried here tbh: the best state park in upstate nyc</h2>
          <p className="info">
            <time>2024-06-24 13:09</time>
          </p>
          <p className="blurb">allegany state park is home to the most gorgeous river that i kayaked on. i swear it was a top ten life moment.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
