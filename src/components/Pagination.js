import React from "react";
import style from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage, reloadPage } from "../action/actionCreator";
import { Pagination } from "antd";

export default function PaginationCpn() {
  const currentPage = useSelector(state => state.auth.searchPackage.page);
  const pageSize = useSelector(state => state.auth.searchPackage.pageSize);
  const dispatch = useDispatch();

  const handleChangeCurrentPage = (pageNumber, pageSize) => {
    dispatch(changeCurrentPage(pageNumber));
    dispatch(reloadPage());
  }

  return (
    <div className={style.pages}>
      <Pagination
        defaultCurrent={currentPage}
        total={25}
        pageSize={pageSize}
        responsive={true}
        pageSizeOptions={[30]}
        onChange={(pageNumber, pageSize) => handleChangeCurrentPage(pageNumber, pageSize)}
      />
    </div>
  );
}
