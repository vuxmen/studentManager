import style from './StudentList.moduel.css';
import { StudentItem } from './StudentItem';
import { useSelector, useDispatch } from 'react-redux';

export default StudentList = () => {
    const studentList = useSelector(state => state.students.studentList);
    const studentIndex = useSelector (state => state.pagination.studentIndex);
    return (
        <div className = {style.studentlist} >
            {
                studentIndex.map(item => studentList[item])
                .map(student =>
                 <StudentItem 
                    key = {student.id}
                    
                  />
                 );
            }
        </div>
    );
}