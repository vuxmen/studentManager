import axios from "axios";
import FormData from "form-data";
import { Utils } from "./utils/Utils";
const url = "http://localhost:5000/Student";
const getStudentEndPoint = `${url}/GetStudents`;
const addStudentEndPoint = `${url}/AddStudent`;
const modifyStudentEndPoint = `${url}/ModifyStudent`;

export const getStudent = async (search, page, pageSize) => {
  const result = (
    await axios.get(getStudentEndPoint, {
      params: {
        search,
        page,
        pageSize,
      },
    })
  ).data;

  return {
    ...result,
    data: result.data.map((d) => ({
      ...d,
      img: Utils.getAvatarUrlFromFileName(d.img),
    })),
  };
};

export const addStudent = async (newStudent) => {
  let fd = new FormData();

  newStudent = {
    ...newStudent,
    gender: Number.parseInt(newStudent.gender),
  };

  for (const key in newStudent) {
    if (Object.hasOwnProperty.call(newStudent, key)) {
      const value = newStudent[key];
      fd.append(key, value);
    }
  }

  return await axios.post(addStudentEndPoint, fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
  });
};

export const modifyStudent = async (modifiedStudent) =>
  await axios.post(modifyStudentEndPoint, {
    modifiedStudent: modifiedStudent,
  });
