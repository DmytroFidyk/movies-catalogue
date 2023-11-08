import styles from './styles.module.css';

export default function Genre(props: {genre: string}){
    return (
        <div className={styles.genre}>
            {props.genre}
        </div>
    );
}