import { combineReducers } from "redux";
import { pagination } from "./pagination";
import { students } from "./students";
import { status } from "./status";

export default combineReducers({ pagination, students, status });
