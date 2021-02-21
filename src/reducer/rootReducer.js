import { combineReducers } from 'redux';
import { pagination } from './pagination';
import { students } from './students';
import { userInteract } from './userInteract';
export const combineReducers(pagination, students, userInteract);