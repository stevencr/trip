import {useEffect,useState} from 'react';

type Props={target:string;label:string};
function getRemaining(target:number){return Math.max(0,target-Date.now())}
function format(ms:number){const total=Math.floor(ms/1000);const days=Math.floor(total/86400);const hours=Math.floor(total%86400/3600);const minutes=Math.floor(total%3600/60);const seconds=total%60;return days>0?days+'d '+hours+'h '+minutes+'m':hours+'h '+minutes+'m '+seconds+'s'}
export function Countdown({target,label}:Props){const targetTime=new Date(target).getTime();const[remaining,setRemaining]=useState(()=>getRemaining(targetTime));useEffect(()=>{const id=window.setInterval(()=>setRemaining(getRemaining(targetTime)),1000);return()=>window.clearInterval(id)},[targetTime]);return <div className="countdown"><span>{label}</span><strong>{remaining>0?format(remaining):'Trip has started'}</strong></div>}