import {useState} from 'react';
import type {ReactNode} from 'react';
import type {Item} from './Timeline';

export type DayTab={id:string;label:string;date:string;title:string;intro:string;items:Item[];tip?:string};

type Props={days:DayTab[];render:(day:DayTab)=>ReactNode};
export function DayTabs({days,render}:Props){const[active,setActive]=useState(days[0].id);const day=days.find(item=>item.id===active)??days[0];return <><nav className="day-nav" aria-label="Trip days">{days.map(item=><button key={item.id} className={item.id===active?'active':''} onClick={()=>setActive(item.id)} aria-current={item.id===active?'page':undefined}>{item.label}</button>)}</nav>{render(day)}</>}