import { combineReducers } from "redux";
import { pagination } from "./pagination";
import { students } from "./students";
import { auth } from "./auth";
import { status } from "./status";

export default combineReducers({ auth, pagination, students, status });
