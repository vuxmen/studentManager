import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import style from './NewStudent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { saveModifiedList } from '../action/actionCreator';
import { useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import Validation from '../studentValidate';


export default function ModifyStudent() {
    const studentList = useSelector(state => state.students.studentList);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const formik = useFormik({
        initialValues: location.state.student,
        validationSchema: Validation,
        onSubmit: () => {
            console.log(formik.values);
            const updatedList = studentList.map(student =>
                (student.id === formik.values.id)
                    ? formik.values : student
                );
            localStorage.setItem('updatedList', JSON.stringify(updatedList));
            dispatch(saveModifiedList(updatedList));
            history.push('/');
        }
    });

    const handleCancelModifying = () => {
        if (window.confirm('Bạn có muốn huỷ chỉnh sửa học viên không ?')) {
            history.push('/');
        } else return
    }

    const handleChangeImg = file => {
        const urlImg = URL.createObjectURL(file);
        formik.setFieldValue('img', urlImg);
    }


    const handleChangeGender = (gender, checked) => {
        if (checked) formik.setFieldValue('gender', gender, true);
    }

    const checkMale = () => {
        if (formik.values.gender === 'Nam') return true;
        else return false 
    }

    const checkFemale = () => {
        if (formik.values.gender === 'Nữ') return true;
        else return false 
    }

    return (
        <div className = {style.newStudent}>
            <div className = {style.topbar} onClick = {handleCancelModifying}>
                <ArrowBackIosIcon className = {style.arrowIcon}/>
                <h2>Danh sách</h2>
            </div>
            <form className = {style.form} onSubmit = {formik.handleSubmit}>
                <div className = {style.firstContent}>
                    <div className = {style.img_container}>
                        <label htmlFor="imageUpload">
                            <input type="file" id ="imageUpload" className={style.file} name = "img"
                            onChange = {e => handleChangeImg(e.target.files[0])}/>
                            <img src={formik.values.img} alt="Upload img"/>
                        </label>
                        <p className = {style.error}>{formik.errors.img}</p>
                    </div>
                    <div className={style.standard2} >
                        <input name="name" type="text"
                        value = {formik.values.name} onChange = {formik.handleChange}
                        />
                        <p className = {style.error}>{formik.errors.name}</p>
                    </div>
                </div>
                <div className = {style.otherContent}>
                    <label htmlFor="birthday">Ngày sinh</label>
                    <div className={style.standard1}>
                        <input  type="date" id="birthday"
                        name="birthday" value = {formik.values.birthday}
                        onChange = {formik.handleChange} 
                        />
                        <p className = {style.error}>{formik.errors.birthday}</p>
                    </div>
                </div>
                <div className = {style.genderContent}>
                    <label htmlFor="gender">Giới tính</label>
                    <div className = {style.gender}>
                        <div className={style.standard1}>
                            <div className = {style.genderType} >
                                <input type="checkbox" name = "gender" checked = {checkMale()}
                                value = "Nam" onChange = {e => handleChangeGender(e.target.value, e.target.checked)}/>
                                <label htmlFor="Nam" >Nam</label>
                            </div>
                            <div className = {style.genderType}>
                                <input type="checkbox" name = "gender" checked = {checkFemale()}
                                value = "Nữ" onChange = {e => handleChangeGender(e.target.value, e.target.checked)}/>
                                <label htmlFor="Nữ" >Nữ</label>
                            </div>   
                        </div>
                        <p className = {style.error}>{formik.errors.gender}</p>
                    </div>
                    
                </div>
                <div className = {style.otherContent}>
                    <label htmlFor="dayAdmission">Ngày nhập học</label>
                    <div className={style.standard1}>
                        <input type="date" id="dayAdmission"
                        value = {formik.values.dayAdmission} name = "dayAdmission"
                        onChange = {formik.handleChange}/>
                        <p className = {style.error}>{formik.errors.dayAdmission}</p>
                    </div>
                    
                </div>
                <div className = {style.otherContent}>
                    <label htmlFor="phoneNumber">Điện thoại</label>
                    <div className={style.standard1}>
                        <input type="text" id="phoneNumber"
                        value = {formik.values.phoneNumber} name = "phoneNumber"
                        onChange = {formik.handleChange}/>
                        <p className = {style.error}>{formik.errors.phoneNumber}</p>
                    </div>
                </div>
                <div className = {style.button_group}>
                    <button type = "submit" className = {style.add_butt}>Sửa</button>
                    <button className = {style.cancel_butt} onClick = {handleCancelModifying}>Huỷ</button>
                </div>
                
            </form>
            
        </div>
    );
}