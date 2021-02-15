// format time function with default parameter set to 0, if not passed
const formatDuration = (duration = 0) => {
  // checking if the parameter is positive intiger, if not throw error
  if (duration < 0 || !Number.isInteger(duration))
    throw "Wrong input, please insert positive integer";
  // if duration is 0, return value 'now'
  if (duration === 0) return "now";

  // time period constants of how many seconds are inside year/day/hour/minute
  const yearInSec = 365 * 24 * 60 * 60;
  const dayInSec = 24 * 60 * 60;
  const hourInSec = 60 * 60;
  const minuteInSec = 60;
  // initializing time object
  const timeObj = {};
  /**
   *
   * @param {string} timePeriod - the period for which we are calculating value(calculating how many years/days/hours/minutes with given duration parameter)
   * @param {number} timeConstant - time period constants represented in seconds
   */
  const calculateTimePeriod = (timePeriod, timeConstant) => {
    // if there is enough seconds to convert them to more significant time unit(years/days/hours/minutes)
    if (Math.floor(duration / timeConstant) > 0) {
      // calculating the value for given time period and setting it up as object Key/value
      timeObj[timePeriod] = Math.floor(duration / timeConstant);
      //recalculating how many seconds are left after substraction of alocated seconds for given period
      duration = duration - timeObj[timePeriod] * timeConstant;
    }
  };
  // calculating years/days/hours/minutes
  calculateTimePeriod("year", yearInSec);
  calculateTimePeriod("day", dayInSec);
  calculateTimePeriod("hour", hourInSec);
  calculateTimePeriod("minute", minuteInSec);
  // setting up the second value of timeObj at the end after setting up more significant units of time.
  timeObj.second = duration;
  // initializing final return string
  let returnString = "";
  for (let period in timeObj) {
    // adding 's for plural
    returnString +=
      timeObj[period] > 1
        ? timeObj[period] + " " + period + "s"
        : timeObj[period] + " " + period;
    // adding ', ' if its not last 2 object keys
    if (
      Object.keys(timeObj).length - Object.keys(timeObj).indexOf(period) >
      2
    ) {
      returnString += ", ";
    }
    // adding 'and ' for second to last object key
    returnString +=
      Object.keys(timeObj).indexOf(period) === Object.keys(timeObj).length - 2
        ? " and "
        : "";
  }
  // returning final string
  return returnString;
};
try {
  const time = formatDuration(62);
  console.log(time);
} catch (e) {
  console.error(e);
}
