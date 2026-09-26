import {AudioButton} from './AudioButton';
import type {Item} from './Timeline';

type Props={item:Item;date:string;now:number};

function getEventWindow(date:string,time:string){
  const dateParts=date.match(/(\d{1,2})\s+([A-Za-z]+)/);
  if(!dateParts)return null;

  const year=new Date().getFullYear();
  const dateValue=new Date(`${dateParts[2]} ${dateParts[1]}, ${year}`);
  if(Number.isNaN(dateValue.getTime()))return null;

  const match=time.match(/^(\d{1,2}):(\d{2})(?:\s*[–-]\s*(\d{1,2}):(\d{2}|late)|\+)?$/i);
  if(!match)return null;

  const [,startHour,startMinute,endHour,endMinute]=match;
  const start=new Date(dateValue);
  start.setHours(Number(startHour),Number(startMinute),0,0);

  const end=new Date(start);
  if(!endHour){
    end.setMinutes(end.getMinutes()+60);
  }else if(endMinute?.toLowerCase()==='late'){
    end.setHours(23,59,59,999);
  }else{
    end.setHours(Number(endHour),Number(endMinute),0,0);
    if(end<=start)end.setDate(end.getDate()+1);
  }

  return {start,end};
}

export function TimelineItem({item,date,now}:Props){
  const window=getEventWindow(date,item.time);
  const isCurrent=!!window&&now>=window.start.getTime()&&now<window.end.getTime();
  const className=['timeline-item',item.special?'special':'',isCurrent?'current':''].filter(Boolean).join(' ');

  return <article className={className} aria-current={isCurrent?'time':undefined}>
    <span className="timeline-dot">{isCurrent?'●':item.icon}</span>
    <div className="time">{isCurrent&&<span className="now-badge">NOW</span>}{item.time}</div>
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.tag&&<span className="tag">{item.tag}</span>}
      {item.link&&<div className="links"><a href={item.link.url} target="_blank" rel="noreferrer">{item.link.label} ↗</a></div>}
      {item.speech&&<AudioButton text={item.speech}/>}
    </div>
  </article>
}
