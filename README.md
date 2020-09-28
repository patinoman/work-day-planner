# **Work Day Scheduler**

A simple calendar app for scheduling your workday!

## Description

---

In this repository I created a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery/Bootstrap ,along with Moment.js library to work with date and time. Tasks can be entered to a specific time, and the "save" button saves it to local storage.

The application is generated using the following acceptance criteria:

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist

## Process

---

I linked Bootstrap, jQuery, and Moment.js to my index.html starter code and created time blocks with the given CSS classes. I faced many challenges while finishing the code for this particular project, mostly due to configuring Moment.js and knowing the formatting for jQuery. There is still room for improvement and several areas of opportunity. I would have liked to add a clear function to have all tasks reset to its initial blank form. That is something I would like to challenge myself to refactor.

## Credits

---

My friend Jesse and Jose, who have assisting me through my progress and many many MANY struggles.

- https://stackoverflow.com/questions/9775375/parseint-with-jquery
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://getbootstrap.com/docs/4.4/layout/overview/
- https://momentjs.com/docs/#/displaying/

## Screenshot

---

![Workday Planner](/images/Capture.PNG?raw=true "Workday Planner")

## Links

---

https://github.com/patinoman/work-day-planner
https://patinoman.github.io/work-day-planner/
