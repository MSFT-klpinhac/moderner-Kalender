import * as React from 'react';
import styles from './GwBwKalender.module.scss';
import { IGwBwKalenderProps } from './IGwBwKalenderProps';
import { escape } from '@microsoft/sp-lodash-subset';
import BigCalendar from 'react-big-calendar'
import * as moment from 'moment';



export default class GwBwKalender extends React.Component < IGwBwKalenderProps, {} > {
  
  public render(): React.ReactElement<IGwBwKalenderProps> {
    let events = [ 
      {
        title: "Februar 2",
      start: new Date("2022-02-02T16:24:00"),
      end: new Date("2022-02-02T17:24:00"),
    },{
      title: "Februar 5",
      start: new Date("2022-02-05T16:24:00"),
      end: new Date("2022-02-07T17:24:00"),
  }
    ];
    const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
    return(
      <div className = { styles.gwBwKalender } >
        <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
      </div >
    );
  }
}
