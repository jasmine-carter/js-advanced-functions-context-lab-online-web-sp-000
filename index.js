/* Your Code Here */
function createEmployeeRecord(employee) {
  return {
    firstName : employee[0],
    familyName : employee[1],
    title : employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord)
};

function createTimeInEvent(timeIn){
  let newEvent = {type: "TimeIn", hour: parseInt(timeIn.substring(11, 15)), date: timeIn.substring(0,10)}
  this.timeInEvents.push(newEvent)
  return this
};


function createTimeOutEvent(timeOut){
  let newEvent = {type: "TimeOut", hour: parseInt(timeOut.substring(11, 15)), date: timeOut.substring(0,10)}
  this.timeOutEvents.push(newEvent)
  return this
};

let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
