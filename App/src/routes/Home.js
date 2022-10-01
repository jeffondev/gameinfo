import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state ={
    isLoading: true,
    movies: [],
  };
  getMovies = () => {
    this.movies = [
      {
        "id": 30440,
        "year": 2008,
        "title": "Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough",
        "summary": "Avenged Sevenfold recorded their first live DVD at Long Beach Arena.",
        "medium_cover_image": "https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/medium-cover.jpg",
        "genres": [
          "Action",
          "Documentary"
        ],
      },
      {
        "id": 30321,
        "year": 2007,
        "title": "제프리",
        "summary": "genius",
        "medium_cover_image": "https://avatars.githubusercontent.com/u/63241142?v=4",
        "genres": [
          "CODIING",
          "GAME"
        ],
      }
    ];
    this.setState({movies: this.movies, isLoading: false});
  };
  componentDidMount() {
    this.getMovies();
  }   
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loder">
            <span className="loder__text">Loading...</span>
          </div>
        ) : (
          <div className="movies"> 
            {movies.map((movie) => {
              return <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title} 
                summary={movie.summary}
                poster={movie.medium_cover_image} 
                genres={movie.genres}  
              />
            })}
          </div>
        )}
       </section>
    );  
  }  
}
export default Home;
