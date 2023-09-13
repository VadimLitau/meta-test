import logo from "./logo.svg";
import Helmet from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet
        title="My Title"
        meta={[{
          name: 'keywords',
          content:
            'печать на футболках, санкт-петербург, недорого, на заказ, цена, от 1 шт, срочный, заказать, хороший, сделать, стоимость, доставка, быстрый, качественный, черный, оверсайз, белый, онлайн, спортивный, свой дизайн, конструктор, создать макет, нанесение, собственный, толстовка, худи, студия, услуги, каталог, а3, а4, одежда, свитшот',
        },
        
        {
          property: 'og:title',
          content:
            'Печать на футболках заказать в Санкт-Петербурге цена от 1 штуки в Studio Pinhead',
        },
        {
          property: 'og:url',
          content: 'https://studio.pnhd.ru/',
        },
        {
          property: 'og:type',
          content: 'website',
        },]}
        link={[
          {
            rel: "apple-touch-icon",
            href: "http://mysite.com/img/apple-touch-icon-57x57.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "http://mysite.com/img/apple-touch-icon-72x72.png",
          },
        ]}
        base={{ href: "http://mysite.com/" }}
      >
        <meta name="description" content="Helmet application" data-react-helmet="true"/>
        <meta property="og:image" content="https://sun9-77.userapi.com/impg/r3SRF7rtra4wl-3EmEgVqIRaaGNbjeO6q9ufUw/-yeDgKpu2CQ.jpg?size=500x500&quality=95&sign=d7fc90ef8c432358c10c8b1e16b4945f&type=album" data-react-helmet="true"/>
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
