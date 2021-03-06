import * as Yup from 'yup';

const Validation = Yup.object().shape(
    {
        name: Yup.string()
            .required('Vui lòng điền tên')
            .min(6, 'Ít nhất 6 ký tự')
            .max(12, 'Tối đa 12 kí tự')
            .matches(/(^[a-zA-Z ]+$)/, 'Tên không hợp lệ'),
        phoneNumber: Yup.string()
            .required('Vui lòng nhập SĐT')
            .matches(/((09|01[2|6|8|9])+([0-9]{8})\b)/, 'Số điện thoại không hợp lệ'),
        birthday: Yup.date()
            .required('Nhập ngày sinh') 
            .test('age', 'Bạn phải trên 18 tuổi', 
                birthday => {
                    const moment = new Date();
                    moment.setFullYear(moment.getFullYear() - 18);
                    return birthday <= moment;
                }
            ),
        dayAdmission: Yup.date().required('Nhập ngày nhập học'),
        gender: Yup.string().required('Chọn giới tính'),
        img: Yup.mixed().required('Chọn ảnh')
    }
);

export default Validation;