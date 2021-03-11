import axios from 'axios';
const url = 'http://localhost:5000/';
const getStudentEndPoint = `${url}Student/GetStudents`;
const addStudentEndPoint = `${url}Student/AddStudent`;

export const getStudent = async ({search, page, pageSize}) => (
    await axios.get(getStudentEndPoint, {
        params: {
            search,
            page,
            pageSize
        }
    })
).data.data;

export const addStudent = async ({
    dayAdmission, name, createdDate,
    gender, img, phoneNumber, birthday
}) => (
    await axios.post(addStudentEndPoint, {
        CreatedDate: createdDate,
        AdmissionDate: dayAdmission,
        Name: name,
        Gender: gender,
        PhoneNumber: phoneNumber,
        ImageFile: img,
        Birthday: birthday
    })
);
    

    

