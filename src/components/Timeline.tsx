import {useEffect,useState} from 'react';
import {TimelineItem} from './TimelineItem';

export type Item={time:string;title:string;description:string;icon:string;tag?:string;special?:boolean;speech?:string;link?:{label:string;url:string}};

export function Timeline({items,date}:{items:Item[];date:string}){
  const[now,setNow]=useState(()=>Date.now());

  useEffect(()=>{
    const update=()=>setNow(Date.now());
    const id=window.setInterval(update,30000);
    const handleVisibility=()=>{if(!document.hidden)update()};
    document.addEventListener('visibilitychange',handleVisibility);
    return()=>{
      window.clearInterval(id);
      document.removeEventListener('visibilitychange',handleVisibility);
    };
  },[]);

  return <div className="timeline">{items.map((item,i)=><TimelineItem key={item.time+'-'+item.title+'-'+i} item={item} date={date} now={now}/>)}</div>
}
