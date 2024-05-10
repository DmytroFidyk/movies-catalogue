import styles from './genre.module.css';

const Genre = ({ name }: { name: string }) => {
    return (
        <div className={styles.genre}>{name}</div>
    );
};

export default Genre;