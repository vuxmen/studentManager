import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import style from './NewStudent.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addingBirthday,
        addingDayAdmission,
        addingGender,
        addingImg,
        addingPhoneNumber,
        addingName,
        saveAddedList
} from '../action/actionCreator';
import { useHistory } from 'react-router-dom';

export default function NewStudent() {
    const newStudent = useSelector(state => state.students.newStudent);
    const imgAdding = useSelector(state => state.students.newStudent.img);
    const nameAdding = useSelector(state => state.students.newStudent.name);
    const birthdayAdding = useSelector(state => state.students.newStudent.birthday);
    const phoneNumberAdding = useSelector(state => state.students.newStudent.phoneNumber);
    const dayAdmissionAdding = useSelector(state => state.students.newStudent.dayAdmission);
    const studentList = useSelector(state => state.students.studentList);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSaveAdded = () => {
        newStudent.id = Math.floor(Math.random() * 100000);
        studentList.push(newStudent);
        localStorage.setItem('updatedList', JSON.stringify(studentList));
        dispatch(saveAddedList(studentList));
        history.push('/');
    }

    const handleCancelAdding = () => {
        dispatch(addingName(''));
        dispatch(addingPhoneNumber(''));
        dispatch(addingBirthday(''));
        dispatch(addingDayAdmission(''));
        dispatch(addingImg(''));
        dispatch(addingGender(''));
        history.push('/');
    }

    const handleUploadImage = objImg => {
        const urlImg = URL.createObjectURL(objImg);
        dispatch(addingImg(urlImg));
    }

    const handleAddGender = (gender, checked) => {
        if (checked) dispatch(addingGender(gender));
    }

    

    return (
        <div className = {style.newStudent}>
            <div className = {style.topbar} onClick = {handleCancelAdding}>
                <ArrowBackIosIcon className = {style.arrowIcon}/>
                <h2>Danh sách</h2>
            </div>
            <form className = {style.form}>
                <div className = {style.firstContent}>
                    <div className = {style.img_container}>
                        <label htmlFor="imageUpload">
                            <input type="file" id ="imageUpload" className = {style.file}
                            onChange = {e => handleUploadImage(e.target.files[0])}/>
                            <img src={imgAdding} alt={nameAdding}/>
                        </label>
                    </div>
                    <input className = {style.standard2} type="text" value = {nameAdding}
                     onChange = {e => dispatch(addingName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="">Ngày sinh</label>
                    <input className = {style.standard1} type="date" 
                    id="dateOfBirth" name="dateOfBirth" value = {birthdayAdding} 
                    onChange = {e => dispatch(addingBirthday((e.target.value)))}/>
                </div>
                <div>
                    <label htmlFor="gender">Giới tính</label>
                    <div className = {style.gender}>
                        <div className={style.manCheckBox}>
                            <input className = {style.standard3} type="checkbox" 
                            value = "Nam" onChange = {e => handleAddGender(e.target.value, e.target.checked)}/>
                            <label htmlFor="Nam" >Nam</label>
                        </div>
                        <div>
                            <input className = {style.standard3} type="checkbox" 
                            value = "Nữ" onChange = {e => handleAddGender(e.target.value, e.target.checked)}/>
                            <label htmlFor="Nữ" >Nữ</label>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="dateAdmission">Ngày nhập học</label>
                    <input  className = {style.standard1} type="date"
                    value = {dayAdmissionAdding}
                    onChange = {e => dispatch(addingDayAdmission((e.target.value)))}/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Điện thoại</label>
                    <input className = {style.standard1} type="text"
                    value = {phoneNumberAdding}
                    onChange = {e => dispatch(addingPhoneNumber((e.target.value)))}/>
                </div>
                
            </form>
            <div className = {style.button_group}>
                <button className = {style.add_butt} onClick = {handleSaveAdded}>Thêm</button>
                <button className = {style.cancel_butt} onClick = {handleCancelAdding}>Huỷ</button>
            </div>
        </div>
    );
}