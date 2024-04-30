'use client';

import Header from "@/components/Header";
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Movie } from '@/app/page';
import Image from 'next/image';

export default function DetailsPage() {
    const [movie, setMovie] = useState<Movie>({id: 0, title: '', poster_path: '', overview: '', genres: []});
    const searchParams = useSearchParams();
    const movieId = searchParams.get('movieId');
    console.log(movie);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=uk-UA`, options)
        .then(response => response.json())
        .then(responseJSON => setMovie(responseJSON))
        .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div className={styles.movie_details}>
                    <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={400} height={600} alt={`Постер фільму ${movie.title}`}/>
                    <div className={styles.text_details}>
                        <h1 className={styles.movie_title}>{movie.title}</h1>
                        <div className={styles.genres_container}>{movie.genres ? movie.genres.map((genre: {name: string}) => <div key={genre.name} className={styles.genre}>{genre.name}</div>) : 'Немає жанрів'}</div>
                        <p>{movie.overview}</p>
                    </div>  
                </div>
            </main>
        </>   
    );
};