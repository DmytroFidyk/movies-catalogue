import styles from './styles.module.css';
import Image from 'next/image';
import Genre from '@/components/Genre';
import Movie from '@/models/Movie';

type MovieCardProps = {
    posterPath: string,
    title: string,
    genreIds: number[],
    allGenreNames: {id: number, name: string}[]
};

export default function MovieCard({posterPath, title, genreIds, allGenreNames}: MovieCardProps): React.JSX.Element {
    const movie = new Movie(title, posterPath, genreIds);
    const genres = movie.getGenreNames(allGenreNames);

    return (
        <div className={styles.card__container}>
            <Image 
                src={`https://image.tmdb.org/t/p/original${posterPath}`} 
                alt="Плакат серіалу" 
                width={240} 
                height={320}
            />
            <div className={styles.title__container}>
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.genres}>{genres.map(item => <Genre genreName={item}/>)}</div>
        </div>
    );
}