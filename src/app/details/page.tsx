'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { IMovie } from '@/interfaces/IMovie';
import styles from './page.module.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Genre from '@/components/Genre';

export default function DetailsPage() {
    const [movie, setMovie] = useState<IMovie>({id: 0, title: '', poster_path: '', overview: '', genres: []});
    const searchParams = useSearchParams();
    const movieId = searchParams.get('movieId');
    
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
                        <div className={styles.genres_container}>
                            {movie.genres?.map((genre: {id: number, name: string}) => {
                                return <Genre key={genre.id} name={genre.name}/>
                            })}
                        </div>
                        <p>{movie.overview}</p>
                    </div>  
                </div>
            </main>
        </>   
    );
};