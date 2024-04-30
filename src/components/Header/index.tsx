import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>MovieCat</h1>
            <nav className={styles.nav}>
                <Link href="/">Популярні</Link>
                <Link href="/favorites">Вибрані</Link>
            </nav>
        </header>
    );
};

export default Header;
