'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/interfaces/IMovie';

type Movies = IMovie[]; 

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Movies>([]);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`
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
      <Heading text='Популярні'/>
      <div className={styles.list}>
      {popularMovies ? popularMovies.map(item => {
        return <MovieCard key={item.id} id={item.id} title={item.title} poster_path={item.poster_path}/>
      }) : []}
      </div>
    </main>
  );
};

export default Home;
