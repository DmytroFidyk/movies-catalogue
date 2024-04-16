'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import MovieCard from "@/components/MovieCard";
import Header from "@/components/Header";

export interface Movie {
  id: number,
  title: string,
  poster_path: string
};

type Movies = Movie[]; 

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movies>([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=uk-UA&page=1', options)
      .then(response => response.json())
      .then(responseJSON => setPopularMovies(responseJSON.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.list}>
      {popularMovies.map(item => {
        return <MovieCard key={item.id} id={item.id} title={item.title} poster_path={item.poster_path}/>
      })}
      </div>
    </main>
  );
}
