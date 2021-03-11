import React from "react";
import { Modal, Button, Space, message } from "antd";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import style from "./NewStudent.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { refreshStudentList } from "../action/actionCreator";
import { useHistory } from "react-router-dom";
import { Utils } from "../utils/Utils";
import * as Yup from "yup";
import { addStudent } from "../studentService";
import Avatar from "antd/lib/avatar/avatar";

const { confirm } = Modal;

function showConfirm(onOk, onCancel) {
  confirm({
    title: "Bạn có thực sự muốn huỷ?",
    icon: <ExclamationCircleOutlined />,
    content: "Các thay đổi sẽ không được lưu",
    okType: "default",
    cancelButtonProps: {
      type: "primary",
    },
    onOk() {
      onOk();
    },
    onCancel() {
      onCancel();
    },
  });
}

export default function NewStudent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSaveAdded = async (values, helper) => {
    try {
      message.success("Lưu thành công");
      await addStudent(values);
      dispatch(refreshStudentList());
      history.push("/");
    } catch (e) {
      message.error("có lỗi xảy ra, vui lòng thử lại!");
    } finally {
      helper.setSubmitting(false);
    }
  };

  const handleCancelAdding = (dirty, helper) => {
    if (!dirty) history.push("/");
    else
      showConfirm(
        () => history.push("/"),
        () => {}
      );
  };

  return (
    <div className={style.newStudent}>
      <Formik
        initialValues={{
          img: Utils.getAvatarUrlFromFileName("default.jpeg"),
          imageFile: null,
          name: "",
          phoneNumber: "",
          birthday: "",
          gender: "",
          dayAdmission: "",
        }}
        validationSchema={Yup.object().shape({
          img: Yup.string().required(),
          name: Yup.string()
            .required("Vui lòng nhập tên")
            .matches(
              /^[^`~!@#$%^&*()_+={}[\]|\\:;“’<,>.?๐฿]*$/,
              "Tên không được chứa ký tự đặc biệt"
            ),
          phoneNumber: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Số điện thoại không hợp lệ "
            ),
          birthday: Yup.string().required("Vui lòng nhập ngày sinh"),
          gender: Yup.string().required("Vui lòng chọn giới tính"),
          dayAdmission: Yup.string().required("Vui lòng chọn ngày nhập học"),
        })}
        validateOnMount={true}
        onSubmit={handleSaveAdded}
      >
        {({
          values,
          setFieldValue,
          handleSubmit,
          isValid,
          dirty,
          isSubmitting,
        }) => {
          return (
            <React.Fragment>
              <div
                className={style.topbar}
                onClick={() => handleCancelAdding(dirty)}
              >
                <ArrowBackIosIcon className={style.arrowIcon} />
                <h2>Danh sách</h2>
              </div>
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
                          setFieldValue("imageFile", e.target.files[0]);
                        }}
                      />
                      <Avatar size={70} src={values.img} />
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
                <ErrorMessage name="birthday" />
                <div>
                  <label htmlFor="gender">Giới tính</label>
                  <div className={style.gender}>
                    <div className={style.manCheckBox}>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="1"
                      />
                      <label htmlFor="Nam">Nam</label>
                    </div>
                    <div>
                      <Field
                        className={style.standard3}
                        type="radio"
                        name="gender"
                        value="2"
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
                <ErrorMessage name="dayAdmission" />
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
                <Space>
                  <Button
                    disabled={!isValid}
                    type="primary"
                    loading={isSubmitting}
                    onClick={handleSubmit}
                  >
                    Thêm
                  </Button>
                  <Button
                    disabled={isSubmitting}
                    onClick={() => handleCancelAdding(dirty)}
                  >
                    Huỷ
                  </Button>
                </Space>
              </div>
            </React.Fragment>
          );
        }}
      </Formik>
    </div>
  );
}
