import {  Component} from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Calender';
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  setView(view: CalendarView) {

    this.view = view;
  }
  
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date('Sep 09,2021')),
      title: 'Course',
    },
    {
      start: startOfDay(new Date('Sep 10,2021')),
      title: 'Reg',
    },
    {
      start: startOfDay(new Date('Sep 13,2021')),
      title: 'Orientation Fall-2021',
    },
    {
      start: startOfDay(new Date('Sep 14,2021')),
      title: '1st Day Of Classes',
    },
    {
      start: startOfDay(new Date('Oct 19,2021')),
      title: 'Eid Milad un Nabi',
    },
    {
      start: startOfDay(new Date('Oct 24,2021')),
      title: 'Admission Announcement Spring22',
    },
    {
      start: startOfDay(new Date('Nov 06,2021')),
      title: 'MID',
      
    },
    {
      start: startOfDay(new Date('Nov 07,2021')),
      title: '',
    },
    {
      start: startOfDay(new Date('Nov 08,2021')),
      title: '',
    },
    {
      start: startOfDay(new Date('Nov 09,2021')),
      title: 'Semester',
    },
    {
      start: startOfDay(new Date('Nov 10,2021')),
      title: '',
    },
    {
      start: startOfDay(new Date('Nov 11,2021')),
      title: '',
    },
    {
      start: startOfDay(new Date('Nov 12,2021')),
      title: 'Exams',
    },
    {
      start: startOfDay(new Date('Nov 15,2021')),
      title: 'Mid Semester',
    },
    {
      start: startOfDay(new Date('Nov 16,2021')),
      title: 'Paper Showing &',
    },
    {
      start: startOfDay(new Date('Nov 17,2021')),
      title: 'Results Posting',
    },
    {
      start: startOfDay(new Date('Nov 18,2021')),
      title: 'Departmental',
    },
    {
      start: startOfDay(new Date('Nov 19,2021')),
      title: 'Review',
    },
    {
      start: startOfDay(new Date('Dec 10,2021')),
      title: 'CBT',
    },
    {
      start: startOfDay(new Date('Dec 11,2021')),
      title: 'TEST',
    },
    {
      start: startOfDay(new Date('Dec 20,2021')),
      title: 'FYP-II',
    },
    {
      start: startOfDay(new Date('Dec 21,2021')),
      title: 'Presentaion',
    },
    {
      start: startOfDay(new Date('Jan 03,2022')),
      
      title: 'Last Day of Classes',
    },
    {
      start: startOfDay(new Date('Jan 05,2022')),
      title: 'Final',
    },
    {
      start: startOfDay(new Date('Jan 08,2022')),
      title: 'Examination',
    },
    {
      start: startOfDay(new Date('Jan 12,2022')),
      
      title: 'Fall',
    },
    {
      start: startOfDay(new Date('Jan 14,2022')),
      title: '2021',
    },
    {
      start: startOfDay(new Date('Jan 18,2022')),
      title: 'Showing &',
    },
    {
      start: startOfDay(new Date('Jan 17,2022')),
      title: 'Answer Scripts',
    },
    {
      start: startOfDay(new Date('Jan 19,2022')),
      title: 'Results Posting',
    },
    {
      start: startOfDay(new Date('Jan 20,2022')),
      title: 'Departmental',
    },
    {
      start: startOfDay(new Date('Jan 21,2022')),
      title: 'Review',
    },
    {
      start: startOfDay(new Date('Jan 25,2022')),
      title: 'Fall-21 Result Declaration',
    },
    {
      start: startOfDay(new Date('Jan 27,2022')),
      title: 'Course',
    },
    {
      start: startOfDay(new Date('Jan 28,2022')),
      title: 'Registration',
    },
    {
      start: startOfDay(new Date('Feb 01,2022')),
      title: '1st Day Of Classes',
    },
    {
      start: startOfDay(new Date('Feb 05,2022')),
      title: 'Kashmir Day',
    },
    {
      start: startOfDay(new Date('Mar 06,2022')),
      title: 'Admission Announcemet Phase I FALL-2022',
    },
    {
      start: startOfDay(new Date('Mar 07,2022')),
      title: 'Students',
    },
    {
      start: startOfDay(new Date('Mar 08,2022')),
      title: '--------',
    },
    {
      start: startOfDay(new Date('Mar 09,2022')),
      title: '---------',
    },
    {
      start: startOfDay(new Date('Mar 10,2022')),
      title: '----------',
    },
    {
      start: startOfDay(new Date('Mar 11,2022')),
      title: 'Week',
    },
    {
      start: startOfDay(new Date('Mar 18,2022')),
      title: 'Convocation Rehearsal',
    },
    {
      start: startOfDay(new Date('Mar 19,2022')),
      title: 'Convocation',
    },
    {
      start: startOfDay(new Date('Mar 23,2022')),
      title: 'Pakistan Day',
    },
    {
      start: startOfDay(new Date('Apr 01,2022')),
      title: 'MID',
    },
    {
      start: startOfDay(new Date('Apr 04,2022')),
      title: 'Semester',
    },
    {
      start: startOfDay(new Date('Apr 07,2022')),
      title: 'Exams',
    },
    {
      start: startOfDay(new Date('Apr 08,2022')),
      title: 'Mid',
    },
    {
      start: startOfDay(new Date('Apr 09,2022')),
      title: 'Semester',
    },
    {
      start: startOfDay(new Date('Apr 10,2022')),
      title: 'Ans-Scripts',
    },
    {
      start: startOfDay(new Date('Apr 11,2022')),
      title: 'Showing &',
    },
    {
      start: startOfDay(new Date('Apr 12,2022')),
      title: 'Result Posting',
    },
    {
      start: startOfDay(new Date('Apr 13,2022')),
      title: 'Departmental',
    },
    {
      start: startOfDay(new Date('Apr 04,2022')),
      title: 'Review',
    },
    {
      start: startOfDay(new Date('Apr 15,2022')),
      title: 'CBT',
    },
    {
      start: startOfDay(new Date('Apr 16,2022')),
      title: 'TEST',
    },
    {
      start: startOfDay(new Date('Apr 25,2022')),
      title: 'FYP',
    },
    {
      start: startOfDay(new Date('Apr 26,2022')),
      title: 'I',
    },
    {
      start: startOfDay(new Date('Apr 27,2022')),
      title: 'Presentation',
    },
    {
      start: startOfDay(new Date('Apr 28,2022')),
      title: 'Career Fair',
    },
    {
      start: startOfDay(new Date('May 01,2022')),
      title: 'Labour Day',
    },
    {
      start: startOfDay(new Date('May 03,2022')),
      title: 'EID',
    },
    {
      start: startOfDay(new Date('May 04,2022')),
      title: 'UL',
    },
    {
      start: startOfDay(new Date('May 05,2022')),
      title: 'FITR',
    },
    {
      start: startOfDay(new Date('May 16,2022')),
      title: 'FYP',
    },
    {
      start: startOfDay(new Date('May 17,2022')),
      title: 'III',
    },
    {
      start: startOfDay(new Date('May 18,2022')),
      title: 'Presentaion',
    },
    {
      start: startOfDay(new Date('May 23,2022')),
      title: 'Posting of Internals',
    },
    {
      start: startOfDay(new Date('May 24,2022')),
      title: 'Open House',
    },
    {
      start: startOfDay(new Date('Jun 02,2022')),
      title: 'Last Day of Classes',
    },
    {
      start: startOfDay(new Date('Jun 04,2022')),
      title: 'Final',
    },
    {
      start: startOfDay(new Date('Jun 08,2022')),
      title: 'Examination',
    },
    {
      start: startOfDay(new Date('Jun 11,2022')),
      title: 'Spring',
    },
    {
      start: startOfDay(new Date('Jun 14,2022')),
      title: '2022',
    },
    {
      start: startOfDay(new Date('Jun 15,2022')),
      title: 'Answer',
    },
    {
      start: startOfDay(new Date('Jun 16,2022')),
      title: 'Scripts',
    },
    {
      start: startOfDay(new Date('Jun 17,2022')),
      title: 'Showing &',
    },
    {
      start: startOfDay(new Date('Jun 18,2022')),
      title: 'Result',
    },
    {
      start: startOfDay(new Date('Jun 19,2022')),
      title: 'Posting',
    },
    {
      start: startOfDay(new Date('Jun 20,2022')),
      title: 'Departmental',
    },
    {
      start: startOfDay(new Date('Jun 21,2022')),
      title: 'Review',
    },
    {
      start: startOfDay(new Date('Jun 23,2022')),
      title: 'Spring-22 Result Declaration',
    },
    {
      start: startOfDay(new Date('Jun 24,2022')),
      title: 'Summer Course',
    },
    {
      start: startOfDay(new Date('Jun 25,2022')),
      title: 'Registration',
    },
    {
      start: startOfDay(new Date('Jun 27,2022')),
      title: '1st Day Of Classes',
    },
    {
      start: startOfDay(new Date('Jun 29,2022')),
      title: 'COMPUTER',
    },
    {
      start: startOfDay(new Date('Jun 30,2022')),
      title: 'COMPUTER',
    },
    {
      start: startOfDay(new Date('Jul 01,2022')),
      title: 'BASED',
    },
    {
      start: startOfDay(new Date('Jul 02,2022')),
      title: 'ENTRANCE',
    },
    {
      start: startOfDay(new Date('Jul 03,2022')),
      title: 'TEST',
    },
    {
      start: startOfDay(new Date('Jul 04,2022')),
      title: 'ISLAMABAD',
    },
    {
      start: startOfDay(new Date('Jul 05,2022')),
      title: 'CAMPUS',
    },
    {
      start: startOfDay(new Date('Jul 09,2022')),
      title: 'EID',
    },
    {
      start: startOfDay(new Date('Jul 11,2022')),
      title: 'UL',
    },
    {
      start: startOfDay(new Date('Jul 13,2022')),
      title: 'AZHA',
    },
    {
      start: startOfDay(new Date('Jul 28,2022')),
      title: 'MID',
    },
    {
      start: startOfDay(new Date('Jul 29,2022')),
      title: 'SEMESTER',
    },
    {
      start: startOfDay(new Date('Jul 30,2022')),
      title: 'EXAM',
    },
    {
      start: startOfDay(new Date('Aug 01,2022')),
      title: 'Answer Scripts',
    },
    {
      start: startOfDay(new Date('Aug 02,2022')),
      title: 'Showing&',
    },
    {
      start: startOfDay(new Date('Aug 03,2022')),
      title: 'Result Posting',
    },
    {
      start: startOfDay(new Date('Aug 04,2022')),
      title: 'Departmental',
    },
    {
      start: startOfDay(new Date('Aug 05,2022')),
      title: 'Review',
    },
    {
      start: startOfDay(new Date('Aug 08,2022')),
      title: 'ASHURA',
    },
    {
      start: startOfDay(new Date('Aug 09,2022')),
      title: 'ASHURA',
    },
    {
      start: startOfDay(new Date('Aug 11,2022')),
      title: 'Mid Semester Result Declaration',
    },
    {
      start: startOfDay(new Date('Aug 14,2022')),
      title: 'Independence Day',
    },
    {
      start: startOfDay(new Date('Aug 18,2022')),
      title: 'Posting of Internals',
    },
    {
      start: startOfDay(new Date('Aug 25,2022')),
      title: 'Last Day of Classes',
    },
    {
      start: startOfDay(new Date('Aug 26,2022')),
      title: 'Final ',
    },
    {
      start: startOfDay(new Date('Aug 27,2022')),
      title: 'Exam',
    },
    {
      start: startOfDay(new Date('Aug 29,2022')),
      title: 'Summer',
    },
    {
      start: startOfDay(new Date('Aug 30,2022')),
      title: '2022',
    },
    {
      start: startOfDay(new Date('Sep 01,2022')),
      title: 'Ans Scripts Showing',
    },
    {
      start: startOfDay(new Date('Sep 02,2022')),
      title: 'Result Posting',
    },
    {
      start: startOfDay(new Date('Sep 05,2022')),
      title: 'Departmental Review',
    },
    {
      start: startOfDay(new Date('Sep 06,2022')),
      title: 'Summer 2022 Result Declaration',
    },
    {
      start: startOfDay(new Date('Sep 08,2022')),
      title: 'Course',
    },
    {
      start: startOfDay(new Date('Sep 09,2022')),
      title: 'Registration',
    },
    {
      start: startOfDay(new Date('Sep 12,2022')),
      title: 'Orientation Fall-2022',
    },
    {
      start: startOfDay(new Date('Sep 13,2022')),
      title: '1st Day of Classes',
    },

  ]
 
  
}