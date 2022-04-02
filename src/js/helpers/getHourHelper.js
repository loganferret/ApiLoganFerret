export function getTime(time) {
    let date = new Date(time);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    let datee = date.getDate();

    switch (day) {
        case 1 : day= 'Monday'
            break;
        case 2 : day= 'Tuesday'
            break;
        case 3 : day= 'Wednesday'
            break;
        case 4 : day= 'Thursday'
            break;
        case 5 : day= 'Friday'
            break;
        case 6 : day= 'Saturday'
            break;
        case 7 : day= 'Sunday'
            break;
    }

    switch (month) {
        case 1 : month= 'January'
            break;
        case 2 : month= 'February'
            break;
        case 3 : month= 'Mars'
            break;
        case 4 : month= 'April'
            break;
        case 5 : month= 'May'
            break;
        case 6 : month= 'June'
            break;
        case 7: month= 'July'
            break;
        case 8 : month= 'August'
            break;
        case 9 : month= 'September'
            break;
        case 10 : month= 'October'
            break;
        case 11 : month= 'November'
            break;
        case 12 : month= 'December'
            break;

    }
    let sec2 = sec - (sec%10);
    if (sec2==0) {sec = '00'}

return `Data from ${day} ${datee} ${month} ${year}, ${hour}:${min}:${sec}, ${Intl.DateTimeFormat().resolvedOptions().timeZone} `
}