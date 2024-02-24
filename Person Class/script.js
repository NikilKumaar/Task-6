// Write a “person” class to hold all the details.

class Person{
    constructor(name, age, gender, email_id, address, phone_Number,work)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email_id = email_id;
        this.address = address;
        this.phone_Number = phone_Number
        this.work = work
    }
}
let person1 = new Person('Nikil Kumaar N', 26, 'Male', 'nikilnike666@gmail.com', '176,Thirumalaipalayam,C.R.Palayam post,Dharapuram',8667805987, 'Fresher currently seeking for a job')
console.log(person1)

let person2 = new Person('Baranitharan N', 24, 'Male', 'barani098@gmail.com', '168,Thirumalaipalayam,C.R.Palayam post,Dharapuram', 6383281289, 'Doctor')
console.log(person2)

let person3 = new Person('Prabhu KD', 28, 'Male', 'prabhukd28@gmail.com', '10/7,Cumbam road,Thrni', 7397177571, 'Software Developer')
console.log(person3)