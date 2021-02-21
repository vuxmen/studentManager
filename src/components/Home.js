import style from './Home.module.csss';
import Header from './Header';
import StudentList from './StudentList';
import Pagination from './Pagination';

export default Home = () => {
    return (
        <div className = {style.home}>
            <Header />
            <StudentList />
            <Pagination />
        </div>
    );
}