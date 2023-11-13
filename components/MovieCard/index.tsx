import styles from './styles.module.css';
import Image from 'next/image';
import Genre from '@/components/Genre';

type MovieCardProps = {
    poster_path: string,
    title: string,
    genres: string[] 
};

export default function MovieCard({poster_path, title, genres}: MovieCardProps): React.JSX.Element {
    return (
        <div className={styles.card__container}>
            <Image 
                src={`https://image.tmdb.org/t/p/original${poster_path}`} 
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