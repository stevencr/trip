import {Timeline} from './Timeline';
import type {DayTab} from './DayTabs';
export function DayContent({day}:{day:DayTab}){return <div className="trip-content"><div className="day-head"><div className="date">{day.date}</div><h2>{day.title}</h2><p>{day.intro}</p></div><Timeline items={day.items}/>{day.tip&&<div className="tip">{day.tip}</div>}</div>}