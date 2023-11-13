import styles from './styles.module.css';

type GenreProps = {
    genreName: string;
};

export default function Genre({ genreName }: GenreProps) {
    return (
        <div className={styles.genre}>
            {genreName}
        </div>
    );
}