import { React, Fragment, useEffect } from "react";
import style from "./StudentList.module.css";
import StudentItem from "./StudentItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getStudent } from '../studentService';
import { updateStudentList, changeLoadingStatus, changeErrorStatus } from '../action/actionCreator';


export default function StudentList() {

  const studentList = useSelector(state => state.students.studentList);
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const reloadPage = useSelector(state => state.auth.reloadTime);
  const searchPackage = useSelector(state => state.auth.searchPackage);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(async () => {
    try {
      const renderList = await getStudent(searchPackage);
      dispatch(updateStudentList(renderList));
      dispatch(changeLoadingStatus(false));
    } catch {
      dispatch(changeLoadingStatus(false));
      dispatch(changeErrorStatus(true));
    }
  },[dispatch, reloadPage]);  

  console.log(studentList);

  const renderLoadingContent = () => (
    <Fragment>
      <p>Đang tải trang, vui lòng đợi hoặc tải lại bằng nút bên dưới</p>
      <button onClick={() => history.push('/')}>Tải lại</button>
    </Fragment>
  );

  const renderErrorContent = () => (
    <Fragment>
      <p>Có lỗi khi tải trang, vui lòng tải lại</p>
      <button onClick = {() => history.push('/')}>Tải lại</button>
    </Fragment>
  );

  const renderStudentList = () =>
    studentList.map((student) => (
      <StudentItem key={student.id} student={student} />
    ));

  if (loading) {
    return renderLoadingContent();
  } else {
    if (error) return renderErrorContent();
    else {
      if (studentList.length === 0) {
        return (
          <div className={style.list}>
            <p>Không tìm thấy kết quả nào</p>

          </div>
        );
      } else return <div className={style.list}>{renderStudentList()}</div>;
    }
  }
  
}
