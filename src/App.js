import logo from "./logo.svg";
import Helmet from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet
        title="My Titles"
      >
            <meta name="keywords" content='печать на футболках, санкт-петербург, недорого, на заказ, цена, от 1 шт, срочный, заказать, хороший, сделать, стоимость, доставка, быстрый, качественный, черный, оверсайз, белый, онлайн, спортивный, свой дизайн, конструктор, создать макет, нанесение, собственный, толстовка, худи, студия, услуги, каталог, а3, а4, одежда, свитшот' data-react-helmet="true"/>
       
<meta name="description" content="Helmet application" />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://react-stellar-burgers-gra7.vercel.app/" />
<meta property="og:title" content="React App" />
<meta property="og:description" content="Helmet application" />
<meta property="og:image" content="https://career.habr.com/images/career_share.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://react-stellar-burgers-gra7.vercel.app/" />
<meta property="twitter:title" content="React App" />
<meta property="twitter:description" content="Helmet application" />
<meta property="twitter:image" content="https://career.habr.com/images/career_share.png" />
        </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
