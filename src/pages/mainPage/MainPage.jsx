import styles from './MainPage.module.css';
import Description from '../../components/Discription';

const MainPage = () => {
    const data = { title: "Title", description: "description" };

    return (
        <div className={styles.main}>
            <h1>Main Page</h1>
            <Description data={data} />
        </div>
    );
};

export default MainPage;