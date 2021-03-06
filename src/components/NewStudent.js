import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import style from './NewStudent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { saveAddedList } from '../action/actionCreator';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Validation from '../studentValidate';


export default function NewStudent() {
    const studentList = useSelector(state => state.students.studentList);
    const dispatch = useDispatch();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            img: './studentImg/default.png',
            name: '',
            phoneNumber: '',
            birthday: '',
            dayAdmission: '',
            gender: ''
        },
        validationSchema: Validation,
        onSubmit: () => {
            const newStudent = formik.values;
            newStudent.id = Math.floor(Math.random() * 100000);
            studentList.push(newStudent);
            localStorage.setItem('updatedList', JSON.stringify(studentList));
            dispatch(saveAddedList(studentList));
            history.push('/');
        }
    });

    const handleCancelAdding = () => {
        if (window.confirm('Bạn có muốn huỷ thêm học viên không ?')) {
            history.push('/');
            console.log(formik.values);
        } 
    }

    const handleChangeImg = file => {
        const urlImg = URL.createObjectURL(file);
        formik.setFieldValue('img', urlImg);
    }

    // ;

    const handleChangeGender = (gender) => {
        formik.setFieldValue('gender', gender, true);
    }

    return (
        <div className = {style.newStudent}>
            <div className = {style.topbar} onClick = {handleCancelAdding}>
                <ArrowBackIosIcon className = {style.arrowIcon}/>
                <h2>Danh sách</h2>
            </div>
            <form className = {style.form} onSubmit = {formik.handleSubmit}>
                <div className = {style.firstContent}>
                    <div className = {style.img_container}>
                        <label htmlFor="imageUpload">
                            <input type="file" id ="imageUpload" className={style.file} 
                            onChange = {e => handleChangeImg(e.target.files[0])}/>
                            <img src={formik.values.img} alt="Upload ảnh"/>
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
                <div>
                    <label htmlFor="birthday">Ngày sinh</label>
                    <div className = {style.standard1}>
                        <input  type="date" id="birthday"
                        name="birthday" value = {formik.values.birthday}
                        onChange = {formik.handleChange} 
                        />
                        <p className = {style.error}>{formik.errors.birthday}</p>
                    </div>
                </div>
                <div>
                    <label htmlFor="gender">Giới tính</label>
                    <div className = {style.gender}>
                        <div>
                            <div className = {style.standard3} >
                                <input type="checkbox" name = "gender"
                                value = "Nam" onChange = {e => handleChangeGender(e.target.value)}/>
                                <label htmlFor="Nam" >Nam</label>
                            </div>
                            <div>
                                <input className = {style.standard3} type="checkbox" name = "gender"
                                value = "Nữ" onChange = {e => handleChangeGender(e.target.value)}/>
                                <label htmlFor="Nữ" >Nữ</label>
                            </div>   
                        </div>
                        <p className = {style.error}>{formik.errors.gender}</p>
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="dayAdmission">Ngày nhập học</label>
                    <div>
                        <input  className = {style.standard1} type="date"
                        value = {formik.values.dayAdmission} name = "dayAdmission"
                        onChange = {formik.handleChange}/>
                    </div>
                    <p className = {style.error}>{formik.errors.dayAdmission}</p>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Điện thoại</label>
                    <div>
                        <input className = {style.standard1} type="text"
                        value = {formik.values.phoneNumber} name = "phoneNumber"
                        onChange = {formik.handleChange}/>
                        <p className = {style.error}>{formik.errors.phoneNumber}</p>
                    </div>
                </div>
                <div className = {style.button_group}>
                    <button type = "submit" className = {style.add_butt}>Thêm</button>
                    <button className = {style.cancel_butt} onClick = {handleCancelAdding}>Huỷ</button>
                </div>
                
            </form>
            
        </div>
    );
}