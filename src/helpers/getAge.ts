export const getAge = (dateEmployee: string) => {
    let date = dateEmployee.split('-');

    let dayEmployee = parseInt(date[2]);
    let monthEmployee = parseInt(date[1]);
    let yearEmployee = parseInt(date[0]); 

    return calculateAge(dayEmployee, monthEmployee, yearEmployee);
}

export const calculateAge = (day: number, month: number, year: number) => {
    const dayNow = new Date().getDate();
    const monthNow = new Date().getMonth() + 1;
    const yearNow = new Date().getFullYear();

    if(day >= dayNow && month >= monthNow) {
        return (yearNow - year) - 1;
    } else {
        return yearNow - year;
    }
}
 