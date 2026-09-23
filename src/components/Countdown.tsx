import {useEffect,useState} from 'react';

type Props={target:string;label:string};

function getRemaining(target:number){return Math.max(0,target-Date.now())}

function format(ms:number){
  const total=Math.floor(ms/1000);
  const days=Math.floor(total/86400);
  const hours=Math.floor(total%86400/3600);
  const minutes=Math.floor(total%3600/60);
  const seconds=total%60;
  return days>0?days+'d '+hours+'h '+minutes+'m':hours+'h '+minutes+'m '+seconds+'s'
}

export function Countdown({target,label}:Props){
  const targetTime=new Date(target).getTime();
  const[remaining,setRemaining]=useState(()=>getRemaining(targetTime));

  useEffect(()=>{
    const update=()=>setRemaining(getRemaining(targetTime));
    update();
    const id=window.setInterval(update,1000);
    const handleVisibility=()=>{if(!document.hidden) update()};
    document.addEventListener('visibilitychange',handleVisibility);
    return()=>{
      window.clearInterval(id);
      document.removeEventListener('visibilitychange',handleVisibility);
    };
  },[targetTime]);

  return <div className="countdown" role="timer" aria-live="polite">
    <span>{label}</span>
    <strong>{remaining>0?format(remaining):'Trip has started'}</strong>
  </div>
}