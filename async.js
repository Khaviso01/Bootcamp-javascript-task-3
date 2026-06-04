//Create studentDatabase
const studentDatabase = [
    { id: 1,
        firstName: 'Khaviso',
        lastName: 'Vukeya',
        email: 'khavisovukeya3@gmail.com',
        course: 'mLab',
        age: 23
    },
    { id: 1,
        firstName: 'Vanessa',
        lastName: 'Mdee',
        email: 'vanessamdee@gmail.com',
        course: 'B Music',
        age: 28
    },
    { id: 1,
        firstName: 'Ntokozo',
        lastName: 'Mndluli',
        email: 'ntokozom@gmail.com',
        course: 'Engineering',
        age: 27
    },
    { id: 1,
        firstName: 'Coco',
        lastName: 'Jones',
        email: 'cocojones@gmail.com',
        course: 'Medicine',
        age: 31
    },
    { id: 1,
        firstName: 'Nyeleti',
        lastName: 'Mbombi',
        email: 'nyeletim@gmail.com',
        course: 'Accounting',
        age: 20
    },
]

//question 1: Synchronous Programming
 function syncExeccution(){
    console.log('Function is starting');
    console.log('The Process is in action');
    console.log('Function has reached the final stage');
 }

 syncExeccution();

 // Q2: Asynchronous with Timeout
 function getAsyncStudentData(){
    console.log('Fetching records from database...');
    setTimeout(() => {
        console.log('Student Records: ');
        studentDatabase,forEach(student => {
            console.log(`${student.firstName} - ${student.lastName} - ${student.email} - ${student.course} - ${student.age}`);
        })
    }, 3000);
 }

 getAsyncStudentData();
