import * as Yup from 'yup';

const Validation = Yup.object().shape(
    {
        name: Yup.string()
            .required('Chưa nhập tên')
            .min(6, 'Tên dài ít nhất 6 ký tự')
            .max(12, 'Tên tối đa 12 kí tự')
            .matches(/(^[a-zA-Z ]+$)/, 'Tên không hợp lệ'),
        phoneNumber: Yup.string()
            .required('Chưa nhập SĐT')
            .matches(/((09|01[2|6|8|9])+([0-9]{8})\b)/, 'Số điện thoại không hợp lệ'),
        birthday: Yup.date()
            .required('Chưa nhập ngày sinh') 
            .test('age', 'Sinh viên trên 18 tuổi', 
                birthday => {
                    const moment = new Date();
                    moment.setFullYear(moment.getFullYear() - 18);
                    return birthday <= moment;
                }
            ),
        dayAdmission: Yup.date().required('Chưa nhập ngày'),
        gender: Yup.string().required('Chưa chọn giới tính'),
        img: Yup.mixed().required('Chưa upload ảnh')
    }
);

export default Validation;