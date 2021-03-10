import React from "react";
import style from "./Header.module.css";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { changeSearchingValue, reloadPage } from "../action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStudent } from '../studentService';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchPackage = useSelector(state => state.auth.searchPackage);
  const searchText = useSelector(state => state.auth.searchPackage.search);
  

  const handleMoveToNewStudentPage = () => {
    history.push("/NewStudent");
  };

  const handleSearchValue = async () => {
    try {
      await getStudent(searchPackage);
      console.log(searchPackage);
      dispatch(reloadPage());
    } catch (err) {
      console.log(err);
    }
    

  }

  return (
    <div className={style.header}>
      <div className={style.top_area}>
        <h2>Quản lý sinh viên</h2>
        <button onClick={handleMoveToNewStudentPage}>
          <AddIcon className={style.plus} />
          <span>Thêm mới</span>
        </button>
      </div>
      <div className={style.search_area}>
        <input
          type="text"
          value={searchText}
          placeholder="  Type Name or Phone Number"
          onChange={e => dispatch(changeSearchingValue(e.target.value))}
        />
        <SearchIcon
          className={style.search_button}
          onClick={handleSearchValue}
        />
      </div>
    </div>
  );
}
