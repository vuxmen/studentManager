import React from "react";
import style from "./StudentItem.module.css";
import { Male, Female } from "react-gender";
import { useHistory } from "react-router-dom";
import { Utils } from "../utils/Utils";
import Avatar from "antd/lib/avatar/avatar";

export default function StudentItem({ student }) {
  const history = useHistory();
  const showGender = () => {
    if (student.gender === 1)
      return <Male color="#419fcf" className={style.genderType} />;
    else return <Female color="#f378ac" className={style.genderType} />;
  };

  const handleBeginModifyStudent = () => {
    history.push(`/ModifyStudent/${student.id}`);
  };

  return (
    <div className={style.studentItem} onClick={handleBeginModifyStudent}>
      <div className={style.img_container}>
        <Avatar size={58} src={student.img} />
      </div>
      <div className={style.details_area}>
        <div className={style.name}>{student.name}</div>
        <div className={style.phoneNumber}>{student.phoneNumber}</div>
      </div>
      <div className={style.gender_container}>{showGender()}</div>
    </div>
  );
}
