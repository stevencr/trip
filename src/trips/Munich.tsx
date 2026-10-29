import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const munichRouteUrl='https://www.google.com/maps/dir/Marienplatz,+Munich/Viktualienmarkt,+Munich/Eisbachwelle,+Munich/Kilians+Irish+Pub,+Frauenplatz,+Munich/data=!4m2!4m1!3e2';
const munichRouteEmbed='https://www.google.com/maps?output=embed&dirflg=w&saddr=Marienplatz,+Munich&daddr=Viktualienmarkt,+Munich+to:Eisbachwelle,+Munich+to:Kilians+Irish+Pub,+Frauenplatz,+Munich';

function MunichRouteMap(){return <section aria-label="Munich sightseeing map" style={{margin:'1rem 0 1.25rem',padding:'1rem',border:'1px solid var(--border, #d8d8d8)',borderRadius:'16px',background:'var(--paper, #fff)'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'1rem',flexWrap:'wrap'}}>
    <h2 style={{margin:0,fontSize:'1.1rem'}}>Munich · central sights walking map</h2>
    <a href={munichRouteUrl} target="_blank" rel="noreferrer">Open walking directions ↗</a>
  </div>
  <p style={{margin:'0.4rem 0 0.9rem',fontSize:'.9rem',opacity:.8}}>A practical central route linking Marienplatz, Viktualienmarkt, the Eisbach wave in the English Garden, and Kilians Irish Pub near Frauenplatz.</p>
  <iframe title="Interactive Munich walking map from Marienplatz via Viktualienmarkt and Eisbach wave to Kilians Irish Pub" src={munichRouteEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen style={{display:'block',width:'100%',height:'min(65vh,520px)',minHeight:'340px',border:0,borderRadius:'12px',background:'#f4f1eb'}}/>
  <p style={{margin:'0.7rem 0 0',fontSize:'.85rem'}}>This map covers the central Munich sights in the itinerary; it does not assume a hotel location or include the optional Alps/Neuschwanstein day trip. Check current walking access and opening times before setting off.</p>
</section>}

const days=[
{id:'thu',label:'Thu 20',date:'Thursday · 20 May',title:'Arrival · first beers',intro:'Munich begins. Check in, get your bearings and get The Usual Suspects together.',tip:'🍺 Start easy — Munich is going to provide plenty of opportunities later.',items:[
{time:'AFTERNOON',title:'Arrive & check in',description:'Drop the bags and head into the old town.',icon:'🧳'},
{time:'17:00',title:'Marienplatz & old town',description:'Walk through Marienplatz, see the Neues Rathaus and Frauenkirche, and get your first feel for Munich.',icon:'🏛️'},
{time:'19:00',title:'Bavarian dinner',description:'Proper Bavarian food and a first local beer. Keep it substantial.',icon:'🥨',special:true},
{time:'21:00+',title:'Kilians Irish Pub',description:'Head to Kilians on Frauenplatz for Guinness or Augustiner, live music and the first proper night out. The pub is known for live music seven nights a week.',icon:'🍀',special:true,speech:'Kilians Irish Pub. Guinness, Augustiner, live music and the first proper night of the trip.',link:{label:'Kilians Irish Pub',url:'https://kiliansirishpub.de/en/kilians'}}
]},
{id:'fri',label:'Fri 21',date:'Friday · 21 May',title:'Beer · food · Munich',intro:'A full Munich day followed by a proper Friday night.',tip:'🌳 English Garden in the afternoon, beer hall by lunch, bars by night.',items:[
{time:'09:30',title:'Breakfast & coffee',description:'Recover from the first night and get moving.',icon:'☕'},
{time:'10:30',title:'Viktualienmarkt & old town',description:'Explore the market and central streets before lunch.',icon:'🧺'},
{time:'12:30',title:'Traditional beer hall lunch',description:'Sausages, schnitzel and local beer. This is not a sandwich day.',icon:'🍺',special:true},
{time:'15:00',title:'English Garden',description:'Walk through the park, see the Eisbach wave and stop at a beer garden if the weather is good.',icon:'🌳'},
{time:'19:30',title:'Big Bavarian dinner',description:'A long group meal before Friday night properly starts.',icon:'🍽️',special:true},
{time:'22:00+',title:'The Usual Suspects · Friday night',description:'Bars around the centre, with no need to decide exactly where the night ends.',icon:'🌙',special:true}
]},
{id:'sat',label:'Sat 22',date:'Saturday · 22 May',title:'Bavaria day',intro:'Choose between more Munich or an outing towards the Alps, then bring it home with one final big night.',tip:'🏔️ Keep the morning flexible — the Alps are tempting, but so is another Munich day.',items:[
{time:'MORNING',title:'Choose your adventure',description:'Option A: Residenz, Königsplatz and more central Munich. Option B: a day trip towards the Alps or Neuschwanstein.',icon:'🏔️'},
{time:'AFTERNOON',title:'Back to Munich',description:'Return to the city, relax and prepare for the final night.',icon:'🚆'},
{time:'19:30',title:'Final Bavarian feast',description:'One last serious dinner with plenty of food and local beer.',icon:'🍻',special:true},
{time:'21:30+',title:'Kilians / Ned Kelly’s · final night',description:'Finish at Kilians or next-door Ned Kelly’s for live music, sport and late drinks.',icon:'🍀',special:true,speech:'Final night. Kilians or Ned Kelly’s, then see where the evening takes us.',link:{label:'Kilians & Ned Kelly’s',url:'https://kiliansirishpub.de/en'}}
]},
{id:'sun',label:'Sun 23',date:'Sunday · 23 May',title:'Last beers · home',intro:'Slow Sunday, final wander and home.',tip:'🧳 Hydrate, eat and leave Munich with everyone accounted for.',items:[
{time:'10:00',title:'Recovery breakfast',description:'Coffee, food and a full assessment of the previous two nights.',icon:'☕'},
{time:'11:30',title:'Last wander',description:'One final walk through the old town and a last Weissbier if time allows.',icon:'🍺'},
{time:'AFTERNOON',title:'Home, somehow',description:'Collect bags and head for the airport.',icon:'✈️'}
]}
] satisfies DayTab[];

export function Munich(){return <TripPage eyebrow="20 — 23 May 2027" title={<>Munich<br/><em>The Usual Suspects</em></>} subtitle="Beer halls · Bavarian food · Kilians · live music · good company" pill="The Usual Suspects · 3 nights · 20–23 May 2027" days={days} countdown={{target:"2027-05-20T00:00:00",label:"Countdown to 20 May · Thursday"}} footer="Munich · 20–23 May 2027 · The Usual Suspects"/>}