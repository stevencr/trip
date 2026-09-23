import {useState} from 'react';
import type {ReactNode} from 'react';

export type DayTab<T> = {
  id:string;
  label:string;
  data:T;
};

type Props<T> = {
  days:DayTab<T>[];
  render:(day:T)=>ReactNode;
};

export function DayTabs<T>({days,render}:Props<T>){
  const [active,setActive]=useState(days[0].id);
  const day=days.find(item=>item.id===active) ?? days[0];

  return <>
    <nav className="day-nav" aria-label="Trip days">
      {days.map(item=>(
        <button
          key={item.id}
          className={item.id===active?'active':''}
          onClick={()=>setActive(item.id)}
          aria-current={item.id===active?'page':undefined}
        >
          {item.label}
        </button>
      ))}
    </nav>
    {render(day.data)}
  </>;
}