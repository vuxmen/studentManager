import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import style from "./NewStudent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  editStudent,
} from "../action/actionCreator";
import { useHistory } from "react-router-dom";
import { Field, Formik } from "formik";
import { Utils } from "../utils/Utils";

export default function ModifyStudent(props) {
  const studentId = useParams().id;

  const student = useSelector((state) =>
    state.students.studentList.find((s) => s.id === studentId)
  );
  

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSaveStudent = (values) => {
    dispatch(editStudent(values));
    history.push("/");
  };

  const handleCancelModify = () => {
    history.push("/");
  };

  return (
    <div className={style.newStudent}>
      <div className={style.topbar} onClick={handleCancelModify}>
        <ArrowBackIosIcon className={style.arrowIcon} />
        <h2>Danh sách</h2>
      </div>
      <Formik
        initialValues={{ ...student }}
        validationSchema={Yup.object().shape({
          phoneNumber: Yup.string().required("Vui lòng nhập số điện thoại"),
          gender: Yup.string().required("Vui lòng chọn giới tính"),
        })}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Vui lòng nhập tên";
          }

          return errors;
        }}
        onSubmit={handleSaveStudent}
      >
        {({ values, setFieldValue, handleSubmit }) => {
          return (
            <React.Fragment>
              <form className={style.form}>
                <div className={style.firstContent}>
                  <div className={style.img_container}>
                    <label htmlFor="imageUpload">
                      <input
                        type="file"
                        id="imageUpload"
                        className={style.file}
                        onChange={(e) => {
                          const urlImg = URL.createObjectURL(e.target.files[0]);
                          setFieldValue("img", urlImg, true);
                        }}
                      />
                      <img src={Utils.getAvatarUrlFromFileName(values.img)} alt={values.name} />
                    </label>
                  </div>
                  <Field className={style.standard2} type="text" name="name" />
                </div>
                <div>
                  <label htmlFor="">Ngày sinh</label>
                  <Field
                    className={style.standard1}
                    type="date"
                    name="birthday"
                  />
                </div>
                <div>
                  <label htmlFor="gender">Giới tính</label>
                  <div className={style.gender}>
                    <div className={style.manCheckBox}>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="Nam"
                      />
                      <label htmlFor="Nam">Nam</label>
                    </div>
                    <div>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="Nữ"
                      />
                      <label htmlFor="Nữ">Nữ</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="dateAdmission">Ngày nhập học</label>
                  <Field
                    className={style.standard1}
                    type="date"
                    name="dayAdmission"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Điện thoại</label>
                  <Field
                    className={style.standard1}
                    type="text"
                    name="phoneNumber"
                  />
                </div>
              </form>
              <div className={style.button_group}>
                <button className={style.add_butt} onClick={handleSubmit}>
                  Sửa
                </button>
                <button
                  className={style.cancel_butt}
                  onClick={handleCancelModify}
                >
                  Huỷ
                </button>
              </div>
            </React.Fragment>
          );
        }}
      </Formik>
    </div>
  );
}
