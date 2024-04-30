import styles from './heading.module.css';

const Heading = ({ text }: { text: string }) => {
    return (
        <h1 className={styles.heading}>{text}</h1>
    );
};

export default Heading;