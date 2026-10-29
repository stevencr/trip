import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'fri',
    label:'Fri 30',
    date:'Friday · 30 October 2026',
    title:'Liverpool · arrive and explore',
    intro:'Arrive at 10:30, explore the waterfront, then follow a pub route from Stanley Dock into the city centre: dockside drink, the Cavern Quarter, The Bridewell and Pogue Mahone.',
    tip:'🍺 Pub route: start at Stanley Dock, then head into town. The stops are spread out, so use a taxi or allow time for the walks; check opening and live-music times on the day.',
    items:[
      {time:'10:30',title:'Arrive at Titanic Hotel',description:'Head to Titanic Hotel Liverpool at Stanley Dock. Ask reception about luggage storage if the room is not ready yet; early check-in is subject to availability.',icon:'🧳',special:true,link:{label:'Titanic Hotel Liverpool',url:'https://www.titanichotelliverpool.com/'}},
      {time:'11:15',title:'Travel into the city centre',description:'Take a taxi or check the current bus options towards the waterfront. Start around Pier Head and the Three Graces.',icon:'🚕'},
      {time:'12:00',title:'Pier Head & waterfront',description:'See the Royal Liver Building, the Cunard Building and the waterfront views. A relaxed first walk to get your bearings.',icon:'🌊',special:true},
      {time:'13:00',title:'Lunch around the docks',description:'Head towards Royal Albert Dock for lunch and a wander beside the historic warehouses. Keep it flexible depending on arrival and luggage.',icon:'🍽️',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'14:30',title:'Docklands drink to start the pub tour',description:'Start close to the hotel at Stanley’s Bar & Grill at Titanic Hotel, or take a short walk around Stanley Dock first. Have one drink and enjoy the historic dockside setting.',icon:'🍺',special:true,link:{label:'Stanley’s Bar & Grill',url:'https://www.titanichotelliverpool.com/'}},
      {time:'15:30',title:'Head into the Cavern Quarter',description:'Take a taxi or walk into the city centre, then explore Mathew Street. The Cavern Pub is opposite the Cavern Club; the pub has free entry and live music is listed from 16:00 on Friday. The Cavern Club itself has live music throughout the day and evening.',icon:'🎸',special:true,link:{label:'Cavern Pub live music & opening info',url:'https://www.cavernclub.com/the-cavern-club-liverpool/cavern-pub-liverpool/'}},
      {time:'17:00',title:'The Bridewell',description:'Continue south-west to this Grade II-listed former Victorian police lock-up. The old cells are now seating areas; it opens from midday. Allow around 30–45 minutes for a drink and a look around.',icon:'🍻',special:true,link:{label:'The Bridewell official site',url:'https://thebridewellpub.co.uk/'}},
      {time:'18:15',title:'Pogue Mahone on Seel Street',description:'Finish the main crawl at this Irish pub for Guinness and a lively atmosphere. The venue says it opens from midday and has live music at weekends. It is a short walk from The Bridewell.',icon:'☘️',special:true,link:{label:'Pogue Mahone official site',url:'https://apubcalledpogues.com/'}},
      {time:'19:30',title:'Dinner & choose your next stop',description:'Eat around Ropewalks or the city centre, then decide whether to return to Mathew Street for more live music or head back to the hotel. Keep the pace comfortable and check your return transport.',icon:'🍽️',special:true},
      {time:'21:00+',title:'Optional live music around Mathew Street',description:'If you still have energy, return to the Cavern Quarter for the Cavern Club or Cavern Pub. The Cavern Club charges for entry; the Cavern Pub is free. This is a music-venue stop, not a Beatles tour.',icon:'🎶',special:true,speech:'Liverpool pub crawl: the docks, the Cavern Quarter, The Bridewell and Pogue Mahone.',link:{label:'The Cavern Club opening times',url:'https://www.cavernclub.com/opening-times-and-prices/'}}
    ]
  },
  {
    id:'sat',
    label:'Sat 31',
    date:'Saturday · 31 October 2026',
    title:'Liverpool · another day in the city',
    intro:'Take a relaxed look around Liverpool in daylight, then enjoy a second round of characterful pubs and live music if you fancy it.',
    tip:'🚕 The Titanic Hotel is at Stanley Dock, away from the central pub areas. Check your return taxi or bus options before the evening gets late.',
    items:[
      {time:'09:30',title:'Breakfast & coffee',description:'Take it easy after Friday night. Have breakfast at the hotel or find a café in town before the day gets going.',icon:'☕'},
      {time:'10:30',title:'Royal Albert Dock & waterfront',description:'Enjoy the dockside walk, shops and waterfront architecture in daylight. Leave time for a coffee and a few photos.',icon:'⚓',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'12:00',title:'The Bridewell or a traditional city pub',description:'If you missed it on Friday, pop into The Bridewell for its unusual former-cell seating; otherwise try a traditional city-centre pub for a pint before lunch.',icon:'🍺',special:true,link:{label:'The Bridewell official site',url:'https://thebridewellpub.co.uk/'}},
      {time:'13:00',title:'Lunch in the city centre',description:'Find a relaxed pub or restaurant around the centre. Keep the afternoon open rather than booking every hour.',icon:'🍽️',special:true},
      {time:'14:30',title:'Mathew Street & Cavern Quarter',description:'Return to the Cavern Quarter for the atmosphere and live music. The Cavern Pub lists Saturday live music from 15:00, with free entry; the Cavern Club also runs live music during the day.',icon:'🎸',special:true,link:{label:'Cavern Pub live music & opening info',url:'https://www.cavernclub.com/the-cavern-club-liverpool/cavern-pub-liverpool/'}},
      {time:'16:30',title:'Pogue Mahone',description:'Head to Seel Street for an Irish pub stop, Guinness and weekend live-music atmosphere. It is a handy base for the Ropewalks area before dinner.',icon:'☘️',special:true,link:{label:'Pogue Mahone official site',url:'https://apubcalledpogues.com/'}},
      {time:'18:00',title:'Hotel reset or dinner',description:'Choose a city-centre dinner, or head back to the Titanic Hotel for a break before the evening. Check your return transport before setting off.',icon:'🛎️'},
      {time:'20:00+',title:'Final pubs & live music',description:'Finish where the atmosphere suits you: the Cavern Quarter for live music or Seel Street for Irish-pub craic. No tour booking is needed for the pub stops; check venue entry prices if you want to go inside the Cavern Club.',icon:'🎶',special:true,speech:'Saturday in Liverpool: waterfront by day, then pubs and live music around Mathew Street and Seel Street.',link:{label:'The Cavern Club opening times',url:'https://www.cavernclub.com/opening-times-and-prices/'}}
    ]
  }
] satisfies DayTab[];

export function Liverpool(){return <TripPage eyebrow="30 — 31 October 2026" title={<>Liverpool<br/><em>city weekend</em></>} subtitle="Waterfront · historic docks · pubs · live music" pill="30–31 October 2026 · 1 night · Titanic Hotel" days={days} countdown={{target:"2026-10-30T10:30:00",label:"Countdown to arrival · Friday 30 October"}} footer="Liverpool · 30–31 October 2026 · Titanic Hotel"/>}
