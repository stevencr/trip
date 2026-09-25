import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'thu',
    label:'Thu 1',
    date:'Thursday · 1 October',
    title:'Bilbao begins',
    intro:'Four men, one city and a very loose definition of “just one drink”.',
    tip:'🍻 Poteo rules · Small food, small drinks, move on. Repeat until someone suggests another bar. Useful: “Kaixo!” = hello · “Zer moduz?” = how are you? · “Topa!” = cheers.',
    items:[
      {time:'AFTERNOON',title:'Check in & hit Casco Viejo',description:'Drop the bags, explore the Seven Streets and get straight into Bilbao mode around Plaza Nueva.',icon:'🚶',speech:'Check in and hit Casco Viejo. Drop the bags, explore the Seven Streets and get straight into Bilbao mode.'},
      {time:'17:00',title:'Pintxos & txakoli warm-up',description:'Start the trip properly with a few pintxos and glasses of txakoli. No romantic candlelight — just four lads finding out how dangerous a “quick one” can be.',icon:'🍢',special:true,speech:'Pintxos and txakoli warm-up. Four lads, some food, some drinks, and absolutely no need to rush.'},
      {time:'19:30',title:'Big Basque dinner',description:'Go for something substantial: txuleta, grilled fish, croquettes, peppers and plenty of local wine or beer.',icon:'🥩'},
      {time:'21:30+',title:'The Usual Suspects · opening night',description:'Start the bar crawl around Casco Viejo. Plaza Nueva and the Seven Streets are packed with bars, so keep moving and see where the night ends.',icon:'🍻',special:true,speech:'The Usual Suspects opening night. Start in Casco Viejo, keep moving between the bars and see where the night ends.'},
      {time:'LOCAL LINGO',title:'Break the ice',description:'“Aupa!” is a casual Bilbao/Basque hello. “Kaixo” is hello, “Zer moduz?” is how are you? and “Laster arte!” means see you later. Try one on someone at the bar and see where the conversation goes.',icon:'🗣️',tag:'USEFUL PHRASES',speech:'Aupa! Kaixo! Zer moduz? Laster arte!'}
    ]
  },
  {
    id:'fri',
    label:'Fri 2',
    date:'Friday · 2 October',
    title:'Art, booze & bad decisions',
    intro:'A bit of culture, a long lunch, then a proper Friday night with nowhere to be.',
    tip:'🍺 Pace yourselves · Friday is the big one. “Bi garagardo, mesedez” means “two beers, please”. “Topa!” means cheers.',
    items:[
      {time:'09:30',title:'Hangover breakfast',description:'Coffee, carbs and whatever is required to make the previous evening seem like a sensible idea.',icon:'☕'},
      {time:'10:30 – 13:00',title:'Guggenheim Museum Bilbao',description:'A couple of hours of art, architecture and Puppy — assuming everyone is functioning.',icon:'🏛️',tag:'BOOK AHEAD',special:true,speech:'Guggenheim Museum Bilbao. A couple of hours of art, architecture and Puppy, assuming everyone is functioning.',link:{label:'Museum',url:'https://www.guggenheim-bilbao.eus/en/'}},
      {time:'13:15 – 15:30',title:'Long lunch & wine',description:'Forget the quick sandwich. Settle in for a proper Basque lunch with wine, beer and plenty of food.',icon:'🍷',special:true},
      {time:'15:30 – 17:00',title:'Riverside recovery walk',description:'Walk along the Nervión and let lunch settle. Ideally without anyone ordering another round immediately.',icon:'🌊'},
      {time:'17:15 – 19:00',title:'Poteo around Abando',description:'Vermouth, beer or txakoli before dinner. Bilbao tourism describes the city centre as easy to explore on foot between bars. The local idea is poteo/txikiteo: move from bar to bar, drink a little and socialise.',icon:'🍺',speech:'Poteo around Abando. Vermouth, beer or txakoli before dinner. Keep moving, meet people and see who talks everyone into the next round.'},
      {time:'20:00',title:'The big boys’ dinner',description:'A serious group meal before the serious drinking begins. Steak, grilled food, Basque specialities and a table full of bottles.',icon:'🥩',tag:'BOOK AHEAD',special:true},
      {time:'22:00+',title:'The Usual Suspects · Friday night',description:'Casco Viejo → Ledesma → wherever looks lively. Bars, pubs and late-night venues are concentrated around the centre.',icon:'🌙',special:true,speech:'The Usual Suspects Friday night. Casco Viejo, Ledesma, and wherever looks lively. Keep going until the sensible people have gone home.'},
      {time:'LOCAL LINGO',title:'Order like you mean it',description:'“Una cerveza, por favor” is easy Spanish. For a Basque touch, “Bi garagardo, mesedez” means two beers, please. A small beer is a “zurito”; a small glass of wine is a “txikito”. Raise it and say “Topa!”',icon:'🍺',tag:'DRINKING LINGO',speech:'Bi garagardo, mesedez. Topa!'}
    ]
  },
  {
    id:'sat',
    label:'Sat 3',
    date:'Saturday · 3 October',
    title:'San Sebastián · sun, sea & sangria',
    intro:'A full day in Donostia — spectacular coast, pintxos, drinks and then back to Bilbao for one final big night.',
    tip:'🌊 Donostia · Coast first, pintxos second, drinks whenever the opportunity presents itself. “Salud!” works in Spanish; “Topa!” in Euskara.',
    items:[
      {time:'MORNING',title:'Travel to San Sebastián',description:'Head east from Bilbao for a full day in Donostia / San Sebastián. Check the latest public-transport timetable before leaving.',icon:'🚌',tag:'CHECK TIMETABLE'},
      {time:'10:30',title:'Monte Igueldo viewpoint',description:'Take the historic funicular up Monte Igueldo for the classic panorama over La Concha Bay and the city.',icon:'🚠',special:true,speech:'Monte Igueldo viewpoint. Take the historic funicular up for the classic panorama over La Concha Bay and San Sebastián.',link:{label:'Monte Igueldo',url:'https://sansebastianturismoa.eus/en/to-do/hills/mount-igeldo/'}},
      {time:'12:00',title:'Peine del Viento & Ondarreta',description:'Walk past the Peine del Viento sculptures and along Ondarreta towards La Concha.',icon:'🌊',speech:'Peine del Viento and Ondarreta. Walk along the coast towards La Concha, taking in Chillida’s famous sculptures.'},
      {time:'13:00',title:'La Concha & lunch',description:'Beach views, a long lunch and the first opportunity to turn the afternoon into a drinking session.',icon:'🏖️',special:true},
      {time:'14:30',title:'Parte Vieja pintxos crawl',description:'Work through the Old Town bar by bar around Plaza de la Constitución and the harbour. One pintxo, one drink, then keep moving.',icon:'🍢',special:true,speech:'Parte Vieja pintxos crawl. One pintxo, one drink, then keep moving through the Old Town bars.',link:{label:'San Sebastián Old Town',url:'https://sansebastianturismoa.eus/en/to-do/district-by-district/centre-old-town/'}},
      {time:'16:30',title:'Harbour drinks & Old Town',description:'Explore the port and historic streets with plenty of opportunities for another pintxo, beer or glass of wine.',icon:'🍺'},
      {time:'18:00',title:'Last look at La Concha',description:'One final sea view, then make tracks back to Bilbao before the night starts again.',icon:'🌅'},
      {time:'EVENING',title:'Back to Bilbao · final night',description:'Return to the city, eat something substantial and head back out. Saturday night is not for an early bedtime.',icon:'🚆',special:true,speech:'Back to Bilbao for the final night. Eat something substantial, get back out and make Saturday count.'},
      {time:'LOCAL LINGO',title:'Meet the cuadrilla',description:'A “cuadrilla” is a close-knit group of friends who socialise together — a useful word for what The Usual Suspects are becoming. “Kaixo!” to meet someone, “Zer moduz?” to start the chat, then “Topa!” when the drinks arrive.',icon:'🤝',tag:'MEET PEOPLE',speech:'Kaixo! Zer moduz? Topa!'}
    ]
  },
  {
    id:'sun',
    label:'Sun 4',
    date:'Sunday · 4 October',
    title:'Survival Sunday',
    intro:'Food, fresh air, questionable recollections and eventually getting everyone home.',
    tip:'🧳 Sunday rules · Hydrate, eat, move slowly. “Eskerrik asko” = thank you · “Agur” = goodbye.',
    items:[
      {time:'10:00',title:'The recovery breakfast',description:'Coffee, eggs, pastries and a full assessment of who actually remembers Saturday night.',icon:'☕',speech:'The recovery breakfast. Coffee, food and a full assessment of who actually remembers Saturday night.'},
      {time:'11:00 – 12:30',title:'Mercado de la Ribera',description:'Browse the market, grab food for the journey and pretend this was always the plan.',icon:'🧺'},
      {time:'12:30 – 13:30',title:'Last pintxos & one final round',description:'One last wander through Casco Viejo, with a final pintxo and — if everyone is still standing — one strictly final drink.',icon:'🍻',special:true},
      {time:'13:30 – 15:00',title:'Final big lunch',description:'Forget the romantic meal. This is a noisy final feast: meat, fish, chips, beer and stories that will improve with every retelling.',icon:'🍽️',speech:'Final big lunch. A noisy feast, plenty of food, a few beers and stories that will improve with every retelling.'},
      {time:'AFTERNOON',title:'Home, somehow',description:'Collect bags, head for the airport or station and try to look like respectable travellers.',icon:'✈️'},
      {time:'LAST WORDS',title:'Leave like a local',description:'“Eskerrik asko” = thank you. “Agur” = goodbye. If someone says “Laster arte”, they mean see you later. And if the weekend went well: “Topa!”',icon:'👋',tag:'FINAL PHRASES',speech:'Eskerrik asko. Agur. Laster arte. Topa!'}
    ]
  }
] satisfies DayTab[];

export function Bilbao(){return <TripPage eyebrow="1 — 4 October 2026" title={<>Bilbao<br/><em>The Usual Suspects</em></>} subtitle="Pintxos · txakoli · beer · late nights · questionable decisions" pill="The Usual Suspects · 4 men · 1–4 October 2026" days={days} countdown={{target:"2026-10-01T00:00:00",label:"Countdown to 1 October · Thursday"}} weather={{base:"Bilbao · city break",forecast:"Current forecast suggests mild to warm conditions around the start of the trip, with temperatures changing as the week approaches. Pack layers and a light waterproof.",updated:"25 September 2026"}} footer="Bilbao · 1–4 October 2026 · The Usual Suspects · 4 men"/>}
