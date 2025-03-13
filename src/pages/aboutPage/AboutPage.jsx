import styles from './AboutPage.module.css';
import Description from '../../components/Discription';

const AboutPage = () => {
    const data = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.about}>
            <h1>About Page</h1>
            <Description data={data} />
        </div>
    );
};

export default AboutPage;