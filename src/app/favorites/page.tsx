import styles from './page.module.css';
import Header from '@/components/Header';

const Favorites = () => {
    return (
        <>
            <Header/>
            <h1 className={styles.heading}>Вибрані фільми</h1>
        </>
    );
}

export default Favorites;