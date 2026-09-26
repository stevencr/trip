import {AudioButton} from './AudioButton';
import type {Item} from './Timeline';

type Props={item:Item;date:string};

function getEventWindow(date:string,time:string){
  const match=time.match(/^(\d{1,2}):(\d{2})(?:\s*[–-]\s*(\d{1,2}):(\d{2}))?$/);
  if(!match)return null;
  const [,startHour,startMinute,endHour,endMinute]=match;
  const start=new Date(`${date} ${startHour.padStart(2,'0')}:${startMinute}`);
  const end=new Date(`${date} ${(endHour??startHour).padStart(2,'0')}:${endMinute??startMinute}`);
  if(!endHour)end.setMinutes(end.getMinutes()+60);
  return {start,end};
}

export function TimelineItem({item,date}:Props){
  const window=getEventWindow(date,item.time);
  const now=Date.now();
  const isCurrent=!!window&&now>=window.start.getTime()&&now<window.end.getTime();
  const className=['timeline-item',item.special?'special':'',isCurrent?'current':''].filter(Boolean).join(' ');
  return <article className={className} aria-current={isCurrent?'time':undefined}>
    <span className="timeline-dot">{isCurrent?'●':item.icon}</span>
    <div className="time">{isCurrent&&<span className="now-badge">NOW</span>}{item.time}</div>
    <div className="item-card"><h3>{item.title}</h3><p>{item.description}</p>{item.tag&&<span className="tag">{item.tag}</span>}{item.link&&<div className="links"><a href={item.link.url} target="_blank" rel="noreferrer">{item.link.label} ↗</a></div>}{item.speech&&<AudioButton text={item.speech}/>}</div>
  </article>
}
