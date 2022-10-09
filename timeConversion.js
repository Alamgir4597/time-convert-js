/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    return (s || '').split(':').reduce((target, item, index) => {
        item = !index
            ?
            ((s || '').includes('PM')
                ? (+item < 12 ? `${+item + 12}` : item)
                : (+item < 12 ? item : '00')
            )
            :
            item.replace(/PM|AM/gi, '');

        target.push(item);

        return target;
    }, []).join(':');
}

let time = "6:00:00PM";
console.log(timeConversion(time));

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

console.log(tConvert('18:00:00')) ;