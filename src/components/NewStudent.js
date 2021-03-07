import React from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import style from "./NewStudent.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { saveStudent } from "../action/actionCreator";
import { useHistory } from "react-router-dom";
import { Utils } from "../utils/Utils";
import * as Yup from "yup";

export default function NewStudent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSaveAdded = (values) => {
    dispatch(saveStudent(values));
    history.push("/");
  };

  const handleCancelAdding = () => {
    history.push("/");
  };

  return (
    <div className={style.newStudent}>
      <div className={style.topbar} onClick={handleCancelAdding}>
        <ArrowBackIosIcon className={style.arrowIcon} />
        <h2>Danh sách</h2>
      </div>
      <Formik
        initialValues={{
          img: "default.png",
          name: "",
          phoneNumber: "",
          birthday: "",
          gender: "",
          dayAdmission: "",
        }}
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
        onSubmit={handleSaveAdded}
      >
        {({ values, setFieldValue, handleSubmit, isValid }) => {
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
                      <img
                        src={Utils.getAvatarUrlFromFileName(values.img)}
                        alt={values.name}
                      />
                    </label>
                  </div>
                  <Field className={style.standard2} name="name" type="text" />
                </div>
                <ErrorMessage name="name" />
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
                <ErrorMessage name="gender" />
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
                <ErrorMessage name="phoneNumber" />
              </form>
              <div className={style.button_group}>
                <button
                  disabled={!isValid}
                  className={style.add_butt}
                  onClick={handleSubmit}
                >
                  Thêm
                </button>
                <button
                  className={style.cancel_butt}
                  onClick={handleCancelAdding}
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
