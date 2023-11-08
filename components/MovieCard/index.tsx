import styles from './styles.module.css';
import Image from 'next/image';
import Genre from '@/components/Genre';

export default function MovieCard(props: {poster: string, title: string, genres: string[]}) {
    const movieGenres = props.genres.map(item => <Genre genre={item}/>);

    return (
        <div className={styles.card__container}>
            <Image 
                src={props.poster} 
                alt="Плакат серіалу" 
                width={240} 
                height={320}
            />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.genres}>{movieGenres}</div>
        </div>
    );
}