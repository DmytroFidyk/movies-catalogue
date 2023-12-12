import Link from 'next/link';
import styles from './styles.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Каталог фільмів</div>
            <nav className={styles.nav}>
                <Link className={styles.navItem} href="/">Популярні</Link>
                <Link className={styles.navItem} href="/favorite">Улюблені</Link>
            </nav>
        </header>
    );
}