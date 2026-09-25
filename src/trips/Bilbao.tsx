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
    title:'Bridge, coast & sunset',
    intro:'Get out to the estuary, cross a UNESCO-listed bridge and come back for Saturday night in Bilbao.',
    items:[
      {time:'09:30',title:'Breakfast',description:'Coffee and something substantial before heading for the coast.',icon:'☕'},
      {time:'10:30',title:'Metro to Getxo',description:'Head towards the mouth of the Nervión for a change of scenery.',icon:'🚇'},
      {time:'11:00 – 13:00',title:'Bizkaia Bridge & Portugalete',description:'Cross the 1893 transporter bridge by gondola, then explore the waterfront and historic Portugalete.',icon:'🌉',special:true,speech:'Bizkaia Bridge and Portugalete. Cross the 1893 transporter bridge by gondola, then explore the waterfront and historic Portugalete.',link:{label:'Bridge information',url:'https://www.visitbiscay.eus/en/-/the-puente-colgante-bizkaia-s-triumphal-arch'}},
      {time:'13:15 – 15:00',title:'Lunch in Getxo',description:'Seafood, pintxos and a relaxed lunch near the estuary.',icon:'🍤'},
      {time:'15:00 – 17:00',title:'Getxo waterfront',description:'Walk the coast around Ereaga and the elegant old villas before heading back into Bilbao.',icon:'🌊'},
      {time:'18:00',title:'Artxanda viewpoint',description:'Take the funicular up for panoramic views over Bilbao before dinner. From 1 October it runs until 22:00.',icon:'🚠',speech:'Artxanda viewpoint. Take the funicular up for panoramic views over Bilbao before dinner.'},
      {time:'20:30',title:'Saturday night dinner',description:'A long Basque dinner back in the city.',icon:'🍷',tag:'BOOK AHEAD'},
      {time:'22:30+',title:'The Usual Suspects · Saturday night',description:'Pintxos, bars and cocktails around Casco Viejo or the city centre. No fixed route.',icon:'🍻',special:true,speech:'The Usual Suspects Saturday night. Pintxos, bars and cocktails around Casco Viejo or the city centre. No fixed route.'}
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

export function Bilbao(){return <TripPage eyebrow="1 — 4 October 2026" title={<>Bilbao<br/><em>The Usual Suspects</em></>} subtitle="Pintxos · Basque food · art · coast · bars · good company" pill="The Usual Suspects · 1–4 October 2026" days={days} weather={{base:"Bilbao · city break",forecast:"Current forecast suggests mild to warm conditions around the start of the trip, with temperatures changing as the week approaches. Pack layers and a light waterproof.",updated:"25 September 2026"}} footer="Bilbao · 1–4 October 2026 · The Usual Suspects"/>}
