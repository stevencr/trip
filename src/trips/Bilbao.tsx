import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'thu',
    label:'Thu 1',
    date:'Thursday · 1 October',
    title:'Bilbao begins',
    intro:'Settle in, find the old town and start properly with pintxos.',
    tip:'🍢 Pintxos rule · Order one or two at a time, then move on to the next bar.',
    items:[
      {time:'AFTERNOON',title:'Check in & explore Casco Viejo',description:'Wander the Seven Streets, Plaza Nueva, Santiago Cathedral and the riverfront.',icon:'🚶',speech:'Check in and explore Casco Viejo. Wander the Seven Streets, Plaza Nueva, Santiago Cathedral and the riverfront.'},
      {time:'17:00',title:'Plaza Nueva pintxos',description:'Start the Bilbao ritual with a few pintxos and local drinks around the square.',icon:'🍢',special:true,speech:'Plaza Nueva pintxos. Start the Bilbao ritual with a few pintxos and local drinks around the square.'},
      {time:'19:30',title:'Dinner in the Old Town',description:'Keep it Basque: grilled fish, txuleta, croquettes or a sharing menu.',icon:'🍽️'},
      {time:'21:30+',title:'The Usual Suspects · first night out',description:'Take the evening as it comes around Casco Viejo. Plaza Nueva and the Seven Streets are made for hopping between bars.',icon:'🍻',speech:'The Usual Suspects first night out. Take the evening as it comes around Casco Viejo, hopping between the bars.'}
    ]
  },
  {
    id:'fri',
    label:'Fri 2',
    date:'Friday · 2 October',
    title:'Art, the river & the city',
    intro:'Bilbao’s modern side, followed by a long lunch and a proper night out.',
    items:[
      {time:'09:30',title:'Breakfast & coffee',description:'Slow start somewhere near the centre.',icon:'☕'},
      {time:'10:30 – 13:00',title:'Guggenheim Museum Bilbao',description:'Allow a couple of hours for the galleries, architecture and riverside Puppy.',icon:'🏛️',tag:'BOOK AHEAD',special:true,speech:'Guggenheim Museum Bilbao. Allow a couple of hours for the galleries, the architecture and Puppy by the river.',link:{label:'Museum',url:'https://www.guggenheim-bilbao.eus/en/'}},
      {time:'13:15 – 15:00',title:'Lunch & wine',description:'A leisurely Basque lunch — this is not a day for rushing.',icon:'🍷'},
      {time:'15:15 – 17:00',title:'Riverside Bilbao',description:'Walk along the Nervión, taking in the bridges, architecture and transformed waterfront.',icon:'🌊'},
      {time:'17:15 – 19:00',title:'Drinks around Abando',description:'Find a good bar for vermouth, beer or a glass of txakoli before dinner.',icon:'🍺'},
      {time:'20:00',title:'Group dinner',description:'Book somewhere central and make this the big Friday night meal.',icon:'🍽️',tag:'BOOK AHEAD',special:true},
      {time:'22:00+',title:'The Usual Suspects · Bilbao night',description:'Casco Viejo, Ledesma or the bars around the centre — see where the night takes you.',icon:'🌙',speech:'The Usual Suspects Bilbao night. Casco Viejo, Ledesma or the bars around the centre. See where the night takes you.'}
    ]
  },
  {
    id:'sat',
    label:'Sat 3',
    date:'Saturday · 3 October',
    title:'San Sebastián day trip',
    intro:'A full day on the coast — La Concha, Monte Igueldo, the Old Town and a serious pintxos crawl.',
    tip:'🌊 Donostia · Keep the day flexible. The official tourism route combines the coast, La Concha, pintxos and the Old Town.',
    items:[
      {time:'MORNING',title:'Travel to San Sebastián',description:'Head east from Bilbao for a full day in Donostia / San Sebastián. Check the latest public-transport timetable before leaving.',icon:'🚌',tag:'CHECK TIMETABLE'},
      {time:'10:30',title:'Monte Igueldo viewpoint',description:'Take the historic funicular up Monte Igueldo for the classic panorama over La Concha Bay and the city.',icon:'🚠',special:true,speech:'Monte Igueldo viewpoint. Take the historic funicular up for the classic panorama over La Concha Bay and San Sebastián.',link:{label:'Monte Igueldo',url:'https://sansebastianturismoa.eus/en/to-do/hills/mount-igeldo/'}},
      {time:'12:00',title:'Peine del Viento & Ondarreta',description:'Walk down past the Peine del Viento sculptures and along Ondarreta, following the coastline towards La Concha.',icon:'🌊',speech:'Peine del Viento and Ondarreta. Walk along the coast towards La Concha, taking in Chillida’s famous sculptures.'},
      {time:'13:00',title:'La Concha & lunch',description:'Stroll the promenade beside one of Europe’s great city beaches, then settle in for lunch.',icon:'🏖️'},
      {time:'14:30',title:'Parte Vieja pintxos crawl',description:'Head into the Old Town and work through the bars around Plaza de la Constitución and the harbour — pintxo by pintxo.',icon:'🍢',special:true,speech:'Parte Vieja pintxos crawl. Head into the Old Town and work through the bars around Plaza de la Constitución and the harbour, pintxo by pintxo.',link:{label:'San Sebastián Old Town',url:'https://sansebastianturismoa.eus/en/to-do/district-by-district/centre-old-town/'}},
      {time:'16:30',title:'Old Town & harbour wander',description:'Explore the narrow streets, port and historic heart of the city, with time for another pintxo or drink.',icon:'🚶'},
      {time:'18:00',title:'Last look at La Concha',description:'Walk back towards the bay for one final sea view before heading back to Bilbao.',icon:'🌅'},
      {time:'EVENING',title:'Back to Bilbao',description:'Return to Bilbao for a relaxed final evening and dinner back in the city.',icon:'🚆'}
    ]
  },
  {
    id:'sun',
    label:'Sun 4',
    date:'Sunday · 4 October',
    title:'One last Bilbao',
    intro:'A gentle final day with food, a final wander and time to get home.',
    tip:'🧳 Keep the final morning flexible around your travel arrangements.',
    items:[
      {time:'09:30',title:'Final breakfast',description:'Coffee, pastries and a slow start.',icon:'🥐'},
      {time:'10:30 – 12:00',title:'Mercado de la Ribera',description:'Browse the food market and pick up something for the journey.',icon:'🧺'},
      {time:'12:00 – 13:30',title:'Last walk through Casco Viejo',description:'Plaza Nueva, the Seven Streets and one final pintxo stop.',icon:'🚶',speech:'Last walk through Casco Viejo. Plaza Nueva, the Seven Streets and one final pintxo stop.'},
      {time:'13:30 – 15:00',title:'Final lunch',description:'One last Basque meal together before collecting bags.',icon:'🍽️'},
      {time:'AFTERNOON',title:'Home',description:'Collect bags and head to the airport or station for the journey home.',icon:'✈️'}
    ]
  }
] satisfies DayTab[];

export function Bilbao(){return <TripPage eyebrow="1 — 4 October 2026" title={<>Bilbao<br/><em>The Usual Suspects</em></>} subtitle="Pintxos · Basque food · art · coast · bars · good company" pill="The Usual Suspects · 1–4 October 2026" days={days} countdown={{target:"2026-10-01T00:00:00",label:"Countdown to 1 October · Thursday"}} weather={{base:"Bilbao · city break",forecast:"Current forecast suggests mild to warm conditions around the start of the trip, with temperatures changing as the week approaches. Pack layers and a light waterproof.",updated:"25 September 2026"}} footer="Bilbao · 1–4 October 2026 · The Usual Suspects"/>}
