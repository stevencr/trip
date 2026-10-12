import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'fri',
    label:'Fri 30',
    date:'Friday · 30 October 2026',
    title:'Liverpool · arrive and explore',
    intro:'Arrive at 10:30, leave the bags at the Titanic Hotel if they can store them, then head into town for the waterfront, historic docks and a relaxed first night.',
    tip:'🏨 The Titanic Hotel is at Stanley Dock, north of the city centre. Allow for a taxi or check local transport rather than assuming everything is on the doorstep.',
    items:[
      {time:'10:30',title:'Arrive at Titanic Hotel',description:'Head to Titanic Hotel Liverpool at Stanley Dock. Ask reception about luggage storage if the room is not ready yet; early check-in is subject to availability.',icon:'🧳',special:true,link:{label:'Titanic Hotel Liverpool',url:'https://www.titanichotelliverpool.com/'}},
      {time:'11:15',title:'Travel into the city centre',description:'Take a taxi or check the current bus options towards the waterfront. Start around Pier Head and the Three Graces.',icon:'🚕'},
      {time:'12:00',title:'Pier Head & waterfront',description:'See the Royal Liver Building, the Cunard Building and the waterfront views. A relaxed first walk to get your bearings.',icon:'🌊',special:true},
      {time:'13:00',title:'Lunch around the docks',description:'Head towards Royal Albert Dock for lunch and a wander beside the historic warehouses. Keep it flexible depending on arrival and luggage.',icon:'🍽️',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'14:30',title:'Explore the waterfront',description:'Browse the dockside, enjoy the river views and explore the nearby city centre at your own pace.',icon:'⚓'},
      {time:'16:30',title:'Check in & freshen up',description:'Head back to the Titanic Hotel, settle into the room and get ready for the evening.',icon:'🛎️'},
      {time:'19:00',title:'Dinner in town',description:'Book somewhere in the centre so you can roll straight into the evening afterwards. Bacaro is a good option for Italian small plates; reserve ahead if you want it.',icon:'🍝',special:true,link:{label:'Bacaro',url:'https://www.bacaro.co.uk/'}},
      {time:'21:00+',title:'Cavern Quarter & live music',description:'Explore Mathew Street and the Cavern Quarter, drop into the Cavern Club for its live-music atmosphere and see where the night takes you.',icon:'🎶',special:true,speech:'First night in Liverpool: the Cavern Quarter, pubs and live music. No need to over-plan it.',link:{label:'The Cavern Club',url:'https://www.cavernclub.com/'}}
    ]
  },
  {
    id:'sat',
    label:'Sat 31',
    date:'Saturday · 31 October 2026',
    title:'Liverpool · another day in the city',
    intro:'A slower start, a final look around the waterfront and city centre, then enjoy a good meal and another evening out.',
    tip:'🍽️ Book dinner ahead if there is somewhere specific you want to try, and check transport back to Stanley Dock.',
    items:[
      {time:'09:30',title:'Breakfast & coffee',description:'Take it easy after Friday night. Have breakfast at the hotel or find a café in town before the day gets going.',icon:'☕'},
      {time:'10:30',title:'Royal Albert Dock',description:'Enjoy the dockside walk, shops and waterfront architecture in daylight. Leave time for a coffee and a few photos.',icon:'⚓',link:{label:'Royal Albert Dock',url:'https://albertdock.com/'}},
      {time:'12:00',title:'Liverpool city centre',description:'Wander through the shopping streets and historic centre, with time for the Central Library or St George’s Hall area if that appeals.',icon:'🏛️'},
      {time:'13:00',title:'Lunch & a proper pint',description:'Find a relaxed pub or restaurant around the centre. Keep the afternoon open rather than booking every hour.',icon:'🍺',special:true},
      {time:'15:00',title:'Free afternoon',description:'Explore more of the waterfront, browse the shops, stop for a drink or return to the hotel for a rest.',icon:'🌊'},
      {time:'17:00',title:'Hotel reset',description:'Head back to the Titanic Hotel, relax and get ready for the evening.',icon:'🛎️'},
      {time:'19:00',title:'Dinner in town',description:'Choose a restaurant in the city centre and make a night of it.',icon:'🍽️',special:true},
      {time:'21:00+',title:'Pubs & live music',description:'Pick a few bars around the centre or return to the Cavern Quarter for live music. Check last transport options before setting off back to the hotel.',icon:'🎶',special:true,speech:'A relaxed second night in Liverpool: good pubs, live music and an easy journey back to Stanley Dock.',link:{label:'The Cavern Club',url:'https://www.cavernclub.com/'}}
    ]
  }
] satisfies DayTab[];

export function Liverpool(){return <TripPage eyebrow="30 — 31 October 2026" title={<>Liverpool<br/><em>city weekend</em></>} subtitle="Waterfront · historic docks · pubs · live music" pill="30–31 October 2026 · 1 night · Titanic Hotel" days={days} countdown={{target:"2026-10-30T10:30:00",label:"Countdown to arrival · Friday 30 October"}} footer="Liverpool · 30–31 October 2026 · Titanic Hotel"/>}
