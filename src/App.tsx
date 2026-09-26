import {NavLink,Route,Routes,useLocation} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {trips} from './trips';

function Home(){
  const upcoming=trips.filter(trip=>new Date(trip.endDate).getTime()>=Date.now());

  return <section className="home">
    <div className="eyebrow"><span/>Upcoming trips</div>
    <h1>What’s coming up.</h1>
    <p className="intro">A quick look at the next escapes, with the full itinerary just a tap away.</p>
    <div className="trip-grid">
      {upcoming.length>0?upcoming.map(trip=><NavLink key={trip.path} className="trip-card" to={trip.path}>
        <div className="trip-card__date">{trip.date}</div>
        <h2>{trip.title}</h2>
        <p>{trip.summary}</p>
        <span>View itinerary →</span>
      </NavLink>):<div className="trip-card"><div className="trip-card__date">No trips booked</div><h2>Nothing coming up yet.</h2><p>New adventures will appear here when they're added.</p></div>}
    </div>
  </section>
}

export default function App(){const location=useLocation();const[open,setOpen]=useState(false);useEffect(()=>setOpen(false),[location.pathname]);return <><header className="site-header"><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button><NavLink className="brand" to="/"><span className="brand-mark">✦</span><span><strong>Travel plans</strong></span></NavLink><nav className="desktop-nav"><NavLink to="/">Trips</NavLink>{trips.map(t=><NavLink key={t.path} to={t.path}>{t.shortTitle}</NavLink>)}</nav></header>{open&&<nav className="mobile-nav"><NavLink to="/">Trips</NavLink>{trips.map(t=><NavLink key={t.path} to={t.path}>{t.shortTitle}</NavLink>)}</nav>}<main><Routes><Route path="/" element={<Home/>}/>{trips.map(t=><Route key={t.path} path={t.path} element={t.element}/>)}<Route path="*" element={<Home/>}/></Routes></main><footer>✦ Travel plans · little trips, good memories ✦</footer></>}
