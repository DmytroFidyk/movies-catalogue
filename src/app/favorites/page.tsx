import styles from './page.module.css';
import Header from "@/components/Header";

export default function Favorites() {
    return (
        <>
            <Header/>
            <h1 className={styles.heading}>Вибрані фільми</h1>
        </>
    );
}