/**
 * Created by winhong on 2017/7/22.
 */

/**
 *@author Damon
 * @description 定时任务调度,按小时,按分钟,按秒,cron风格自定义
 */
var schedule = require("node-schedule");
//ScheduleOnce();



//执行一次
function ScheduleOnce() {
  var tempData = new Date(new Date().getTime() + 125 * 60);
  console.log('时间:' + tempData);
  var tag = false;
  schedule.scheduleJob(tempData, function () {
    tag = true;
    console.log('**********吃饭时间定时调度~***********');
//  multiSchedule();
  });
}


//每5秒执行一次


function multiSchedule() {
  var tempNum = 1;
  var rule1 = new schedule.RecurrenceRule();
  var times1 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
  rule1.second = times1;
  schedule.scheduleJob(rule1, function () {
    console.log('第' + tempNum + '次定时调度~');
    tempNum++;
  });
}

/**
 * 按分钟调度
 * @constructor
 */
function ScheduleByMin() {
  var rule2 = new schedule.RecurrenceRule();
  var times2 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
  rule2.minute = times2;
  schedule.scheduleJob(rule2, function () {
    /*
     需要执行的方法
     */
  });
}

/**
 * 按小时调度
 * @constructor
 */
function ScheduleByHours() {
  var rule3 = new schedule.RecurrenceRule();
  var times3 = [1, 5, 9, 13, 17, 21];
  rule3.hour = times3;
  schedule.scheduleJob(rule3, function () {
    /*
     需要执行的方法
     */
  });
}

/**
 * Cron风格的写法,貌似不太支持
 * @constructor
 */
function Schedule_cron() {
  schedule.scheduleJob('0/5 * * * * * *', function () {
    /*
     需要执行的方法
     */
    console.log('每5秒执行一次');
  });
}
