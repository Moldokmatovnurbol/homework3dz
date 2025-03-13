import styles from './Discription.module.css';

const Description = ({ data }) => {
    return (
        <div className={styles.description}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default Description;