// Generated by CoffeeScript 1.3.1
(function() {
  var calculate, getFirstWeek;

  getFirstWeek = function(year) {
    var days, end, start;
    end = new Date(year, 0, 1);
    end.setHours(0, 0, 0, 0);
    days = 0;
    while (++days < 4 || end.getDay() !== 6) {
      end.setDate(end.getDate() + 1);
    }
    start = new Date(end.getTime());
    start.setDate(start.getDate() - 6);
    return start;
  };

  calculate = function(date, marker) {
    var day, firstWeekNextYear, firstWeekThisYear, week;
    if (date == null) {
      date = new Date();
    }
    date.setHours(0, 0, 0, 0);
    firstWeekThisYear = getFirstWeek(date.getFullYear());
    firstWeekNextYear = getFirstWeek(date.getFullYear() + 1);
    if (marker == null) {
      marker = new Date(date.getTime());
    }
    marker.setMonth(0, 1);
    week = 0;
    while (marker < date) {
      day = marker.getDay();
      if (day === 6) {
        week++;
      }
      marker.setDate(marker.getDate() + 1);
    }
    if (week === 0) {
      if (date >= firstWeekThisYear) {
        return {
          week: 1,
          year: date.getFullYear()
        };
      } else {
        marker.setFullYear(date.getFullYear() - 1, 0, 1);
        return calculate(date, marker);
      }
    } else {
      if (week >= 51 && date >= firstWeekNextYear) {
        return {
          week: 1,
          year: date.getFullYear() + 1
        };
      } else {
        return {
          week: week + 1,
          year: date.getFullYear() - (date < firstWeekThisYear ? 1 : 0)
        };
      }
    }
  };

  module.exports = calculate;

}).call(this);
