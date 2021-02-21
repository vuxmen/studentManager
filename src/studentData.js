
export const studentData = 
    [
        {
            id: createID(),
            name: 'ProfileName1',
            age: 28,
            phoneNumber: 0918367367,
            birthday: '1993-2-1',
            gender: 'Nam',
            dayAdmission: '2021-1-16',
            img: './studentImg/profilename1.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName2',
            age: 25,
            phoneNumber: 0918367368,
            birthday: '1996-2-2',
            gender: 'Nam',
            dayAdmission: '2021-1-16',
            img: './studentImg/profilename2.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName3',
            age: 24,
            phoneNumber: 0918367369,
            birthday: '1997-12-5',
            gender: 'Nữ',
            dayAdmission: '2021-1-18',
            img: './studentImg/profilename3.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName4',
            age: 25,
            phoneNumber: 0918367377,
            birthday: '1996-11-5',
            gender: 'Nam',
            dayAdmission: '2021-1-17',
            img: './studentImg/profilename4.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName5',
            age: 24,
            phoneNumber: 0918367388,
            birthday: '1997-10-8',
            gender: 'Nữ',
            dayAdmission: '2021-1-16',
            img: './studentImg/profilename5.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName6',
            age: 29,
            phoneNumber: 0918367389,
            birthday: '1992-8-20',
            gender: 'Nam',
            dayAdmission: '2021-1-17',
            img: './studentImg/profilename6.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName7',
            age: 25,
            phoneNumber: 0918367368,
            birthday: '1996-5-1',
            gender: 'Nữ',
            dayAdmission: '2021-1-17',
            img: './studentImg/profilename7.jpg'
        },
        {
            id: createID(),
            name: 'ProfileName8',
            age: 28,
            phoneNumber: 0918367368,
            birthday: '1993-9-15',
            gender: 'Nam',
            dayAdmission: '2021-1-16',
            img: './studentImg/profilename8.jpg'
        },
        
    ]

    const createID = () => Math.floor(Math.random() * 100000);
