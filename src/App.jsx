import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MovieList from "./comp/MovieList";
import "./style.css";
import { useState } from "react";
import Upcoming from "./comp/Upcoming";
import Search from "./comp/Search";
import Movie from "./Movie";
import Form from "./comp/Form";
import Popular from "./comp/Popular";

function App() {
  // const [num, SetNum] = useState(2)

  // function rise(){
  //   SetNum(num + 1)
  // }

  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <Link to="/" className="logo">
              Movie App
            </Link>
            <div className="links">
              <Link to="/">Фильмы в кино</Link>
              <Link to="/upcoming">Скоро в кино</Link>
              <Link to="/popular">Популярные Фильмы</Link>
            </div>
            <div className="search">
              <Form />
            </div>
          </header>

          <Switch>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            
            <Route path="/search/:q">
              <Search />
            </Route>
          </Switch>
          <footer>
            Created by Georgy
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;