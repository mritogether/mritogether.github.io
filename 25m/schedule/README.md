# Schedule Template

A simple template that lets you display events on a timeline, as well as organize them in groups (week days, conference rooms etc…).

[Article on CodyHouse](https://codyhouse.co/gem/schedule-template)

[Demo](https://codyhouse.co/demo/schedule-template)
 
[License](https://codyhouse.co/license)

## Dependencies

This experiment is built upon the [CodyHouse Framework](https://github.com/CodyHouse/codyhouse-framework).

Make sure to include both the style.scss and util.js files of the framework.

## Some guidelines from the people before you suffering to get the schedule up to date

There are a couple of places you have to adapt. Here, I refer to the 24m schedule directory.

1 - The main page for schedule is index.html here. 
* Here you can adapt the legend (line 13-24), event boxes in the legend depending on the session categories you defined (25-61). Line 84-117 defines the layout of the timetable.
* From line 138 each day’s events are defined in a separate cd-schedule__group div, where each session is contained in a cd-schedule__event. Here you need to change the information of the events: start and end time (UTC), the session specific html file (data-content, see 2), event type (data-event categories defined in the legend), speakers, moderators and session title.
* For each cd-schedule__group, adapt the day and date

2 - Each event has a html file in the same directory, to which is refered in the index.html under data-content. Those files contain the text in the modal when opened.
For each session you have to adapt title and speakers.

3 - Finally there are data-speakers and data-moderators. Images from all speakers and moderators are stored in the database is https://console.firebase.google.com/u/3/project/mritogether-graph/database/. It is under the mritogether old account that was in use only in 2021, the username and password for that account can be retrieved by the leaders of MRI Together. When logged into the database, just add any new moderator/speaker under users in Realtime Database , and then add images to storage with the corresponding keys. Make sure to use the same names in the index.html and session specific html files.
