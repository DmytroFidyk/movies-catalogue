import styles from './styles.module.css';
import Image from 'next/image';
import Genre from '@/components/Genre';

type MovieCardProps = {
    posterPath: string,
    title: string,
    genreIds: number[],
    genreNames: {id: number, name: string}[]
};

export default function MovieCard({posterPath, title, genreIds, genreNames}: MovieCardProps): React.JSX.Element {
    const genres: string[] = [];

    for (let i = 0; i < genreNames.length; i++) {
        for (let j = 0; j < genreIds.length; j++) {
            if (genreNames[i].id === genreIds[j]) {
                genres.push(genreNames[i].name);
            }
        }
    }
    
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