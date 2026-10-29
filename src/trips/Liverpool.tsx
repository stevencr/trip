import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const pubRouteUrl='https://www.google.com/maps/dir/Maray,+Royal+Albert+Dock,+Liverpool/The+One+OClock+Gun,+Albert+Dock,+Liverpool/Pump+House,+Albert+Dock,+Liverpool/The+Baltic+Fleet,+Wapping,+Liverpool/St+Peter%27s+Tavern,+Seel+Street,+Liverpool/Pogue+Mahone,+Seel+Street,+Liverpool/The+Bridewell,+Campbell+Square,+Liverpool/Thomas+Rigbys,+Dale+Street,+Liverpool/Ye+Hole+in+Ye+Wall,+Hackins+Hey,+Liverpool/The+Lion+Tavern,+Moorfields,+Liverpool/Cavern+Pub,+Mathew+Street,+Liverpool/The+Ship+and+Mitre,+Dale+Street,+Liverpool/Titanic+Hotel+Liverpool,+Stanley+Dock/data=!4m2!4m1!3e2';
const pubRouteEmbed='https://www.google.com/maps?output=embed&dirflg=w&saddr=Maray,+Royal+Albert+Dock,+Liverpool&daddr=The+One+OClock+Gun,+Liverpool+to:Pump+House,+Liverpool+to:The+Baltic+Fleet,+Liverpool+to:St+Peter%27s+Tavern,+Liverpool+to:Pogue+Mahone,+Liverpool+to:The+Bridewell,+Liverpool+to:Thomas+Rigbys,+Liverpool+to:Ye+Hole+in+Ye+Wall,+Liverpool+to:The+Lion+Tavern,+Liverpool+to:Cavern+Pub,+Liverpool+to:The+Ship+and+Mitre,+Liverpool+to:Titanic+Hotel+Liverpool,+Stanley+Dock';

function PubRouteMap(){return <section aria-label="Friday pub crawl map" style={{margin:'1rem 0 1.25rem',padding:'1rem',border:'1px solid var(--border, #d8d8d8)',borderRadius:'16px',background:'var(--paper, #fff)'}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'1rem',flexWrap:'wrap'}}>
    <h2 style={{margin:0,fontSize:'1.1rem'}}>Friday pub crawl · walking route</h2>
    <a href={pubRouteUrl} target="_blank" rel="noreferrer">Open walking directions ↗</a>
  </div>
  <p style={{margin:'0.4rem 0 0.9rem',fontSize:'.9rem',opacity:.8}}>The route is ordered stop-by-stop: start at Maray after dinner, work from the docks through the city pubs, then finish back near Titanic Hotel.</p>
  <iframe title="Interactive Liverpool pub crawl walking map from Maray to Titanic Hotel" src={pubRouteEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen style={{display:'block',width:'100%',height:'min(65vh,520px)',minHeight:'340px',border:0,borderRadius:'12px',background:'#f4f1eb'}}/>
  <p style={{margin:'0.7rem 0 0',fontSize:'.85rem'}}>The final destination is Titanic Hotel Liverpool, Stanley Dock. The walking route is a suggested sequence; Google Maps may adjust individual legs for current pedestrian access.</p>
</section>}

const days=[
  {
    id:'fri',
    label:'Fri 30',
    date:'Friday · 30 October 2026',
    title:'Liverpool · arrive and explore',
    intro:'You are staying at the Titanic Hotel and have dinner booked at Maray on Albert Dock for 17:15. After dinner, this is the main event: a generous crawl of proper Liverpool pubs, moving from the dockside into the city centre.',
    tip:'🍺 This is an ambitious crawl. Treat the times as guides, have one drink per stop, and skip a pub if you want more time somewhere good. The Titanic Hotel is at Stanley Dock, so arrange a taxi back at the end.',
    items:[
      {time:'10:30',title:'Arrive at Titanic Hotel',description:'Head to Titanic Hotel Liverpool at Stanley Dock. Ask reception about luggage storage if the room is not ready yet; early check-in is subject to availability.',icon:'🧳',special:true,link:{label:'Titanic Hotel Liverpool',url:'https://www.titanichotelliverpool.com/'}},
      {time:'11:15',title:'Travel into the city centre',description:'Take a taxi or check current bus options towards the waterfront. Start around Pier Head and the Three Graces.',icon:'🚕'},
      {time:'12:00',title:'Pier Head & waterfront',description:'See the Royal Liver Building, the Cunard Building and the waterfront views. A relaxed first walk to get your bearings.',icon:'🌊',special:true},
      {time:'13:00',title:'Lunch around the docks',description:'Head towards Royal Albert Dock for lunch and a wander beside the historic warehouses. Keep it flexible depending on arrival and luggage.',icon:'🍽️',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'16:45',title:'Walk to Maray',description:'Head to Maray at Royal Albert Dock in good time for your booking.',icon:'🚶',special:true,link:{label:'Maray · Royal Albert Dock',url:'https://www.google.com/maps/search/?api=1&query=Maray+Royal+Albert+Dock+Liverpool'}},
      {time:'17:15',title:'Maray · booked dinner',description:'Your booked meal. Enjoy dinner and drinks before setting off on the pub crawl at about 18:45.',icon:'🍽️',special:true},
      {time:'18:45',title:'1 · The One O’Clock Gun',description:'A proper dockside pub on Albert Dock. Start with a local beer or Guinness and enjoy the waterfront setting.',icon:'🍺',special:true,link:{label:'The One O’Clock Gun',url:'https://theoneoclockgun.pub/'}},
      {time:'19:10',title:'2 · Pump House',description:'Stay around the Albert Dock for this characterful pub in a former hydraulic engine house. This is an easy, short walk from The One O’Clock Gun.',icon:'🍻',special:true,link:{label:'Pump House map',url:'https://www.google.com/maps/search/?api=1&query=Pump+House+Albert+Dock+Liverpool'}},
      {time:'19:35',title:'3 · The Baltic Fleet',description:'Walk out towards Wapping to this distinctive Victorian, Grade II-listed dock-road pub, known for its cask ales and old-school character.',icon:'⚓',special:true,link:{label:'The Baltic Fleet',url:'https://oldtownliverpool.co.uk/the-baltic-fleet/'}},
      {time:'20:45',title:'6 · The Bridewell',description:'Head inland to the former Victorian police lock-up. The original cells are now part of the pub’s seating, making this one of the most unusual stops on the route.',icon:'🍺',special:true,link:{label:'The Bridewell official site',url:'https://thebridewellpub.co.uk/'}},
      {time:'21:55',title:'9 · The Lion Tavern',description:'Continue north towards Moorfields for a classic pub with a historic interior and a strong reputation for well-kept cask ale.',icon:'🍻',special:true,link:{label:'The Lion Tavern map',url:'https://www.google.com/maps/search/?api=1&query=The+Lion+Tavern+Moorfields+Liverpool'}},
      {time:'21:30',title:'8 · Ye Hole in Ye Wall',description:'Head back south a few minutes to this tucked-away traditional pub on Hackins Hey. Small, characterful and worth seeking out.',icon:'🍺',special:true,link:{label:'Ye Hole in Ye Wall map',url:'https://www.google.com/maps/search/?api=1&query=Ye+Hole+in+Ye+Wall+Hackins+Hey+Liverpool'}},
      {time:'21:10',title:'7 · Thomas Rigby’s',description:'Carry on towards Dale Street for a historic city-centre pub with traditional ales. A handy stop on the way towards Mathew Street.',icon:'🍻',special:true,link:{label:'Thomas Rigby’s map',url:'https://www.google.com/maps/search/?api=1&query=Thomas+Rigbys+Dale+Street+Liverpool'}},
      {time:'22:20',title:'10 · Cavern Pub',description:'Finish the city-centre stretch in the Cavern Quarter. The Cavern Pub is opposite the Cavern Club, has free entry and regularly features live music. No tour required—just a pub and music stop.',icon:'🎸',special:true,link:{label:'Cavern Pub live music & opening info',url:'https://www.cavernclub.com/the-cavern-club-liverpool/cavern-pub-liverpool/'}},
      {time:'20:15',title:'5 · St Peter’s Tavern (formerly Alma de Cuba)',description:'Stop at the venue formerly known as Alma de Cuba around Seel Street. Check current entry and opening arrangements on the night.',icon:'🍸',special:true,link:{label:'St Peter’s Tavern · map',url:'https://www.google.com/maps/search/?api=1&query=St+Peter%27s+Tavern+Seel+Street+Liverpool'}},
      {time:'20:30',title:'6 · Pogue Mahone',description:'A nearby Irish-pub stop on Seel Street before heading back north into the city centre.',icon:'☘️',special:true,link:{label:'Pogue Mahone',url:'https://apubcalledpogues.com/'}},
      {time:'23:15+',title:'10 · St Peter’s Tavern (formerly Alma de Cuba)',description:'Finish at St Peter’s Tavern, the venue formerly known as Alma de Cuba, around Seel Street. Check the current entry and opening arrangements on the night, then take a taxi back to Titanic Hotel.',icon:'🍸',special:true,link:{label:'St Peter’s Tavern · map',url:'https://www.google.com/maps/search/?api=1&query=St+Peter%27s+Tavern+Seel+Street+Liverpool'}},
      {time:'22:50',title:'11 · The Ship & Mitre',description:'Finish the city-centre pub crawl at this beer-led traditional pub on Dale Street, then head north to Titanic Hotel.',icon:'🍺',special:true,link:{label:'The Ship & Mitre map',url:'https://www.google.com/maps/search/?api=1&query=The+Ship+and+Mitre+Dale+Street+Liverpool'}},
      {time:'23:20+',title:'12 · Finish at Titanic Hotel',description:'The route ends at your hotel at Stanley Dock, avoiding a late cross-city walk back from Seel Street. Check bar opening arrangements with the hotel.',icon:'🏨',special:true,link:{label:'Titanic Hotel Liverpool',url:'https://www.titanichotelliverpool.com/'}}
    ]
  },
  {
    id:'sat',
    label:'Sat 31',
    date:'Saturday · 31 October 2026',
    title:'Liverpool · another day in the city',
    intro:'Keep Saturday flexible after Friday’s big night: enjoy the waterfront, explore the city at your own pace and choose an activity or a relaxed meal.',
    tip:'🚕 No pub crawl planned for Saturday. The Titanic Hotel is at Stanley Dock, away from the central attractions, so check return transport before heading out.',
    items:[
      {time:'09:30',title:'Breakfast & coffee',description:'Take it easy after Friday night. Have breakfast at the hotel or find a café in town before the day gets going.',icon:'☕'},
      {time:'10:30',title:'Royal Albert Dock & waterfront',description:'Enjoy the dockside walk, shops and waterfront architecture in daylight. Leave time for a coffee and a few photos.',icon:'⚓',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'12:00',title:'Explore the city centre',description:'Wander around the shops, architecture and waterfront at your own pace. Keep the plan loose rather than booking every hour.',icon:'🏙️'},
      {time:'13:00',title:'Lunch',description:'Choose a café or restaurant in the city centre, Albert Dock or around Liverpool ONE.',icon:'🍽️',special:true},
      {time:'14:30',title:'Choose an afternoon activity',description:'Leave the afternoon open for shopping, galleries that are open, a waterfront walk or live music if something appeals. Check opening times before setting off.',icon:'🗺️',special:true,link:{label:'Visit Liverpool',url:'https://www.visitliverpool.com/'}},
      {time:'17:00',title:'Return to the hotel & freshen up',description:'Head back to Titanic Hotel, take a breather and decide on dinner. Book a taxi or check public transport if you are heading out again.',icon:'🧳'}
    ]
  }
] satisfies DayTab[];

export function Liverpool(){return <TripPage eyebrow="30 — 31 October 2026" title={<>Liverpool<br/><em>city weekend</em></>} subtitle="Waterfront · historic docks · pubs · live music" pill="30–31 October 2026 · 1 night · Titanic Hotel" days={days} countdown={{target:"2026-10-30T10:30:00",label:"Countdown to arrival · Friday 30 October"}} routeMap={<PubRouteMap/>} footer="Liverpool · 30–31 October 2026 · Titanic Hotel"/>}
