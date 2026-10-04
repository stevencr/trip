import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'thu',label:'Thu 24',date:'Thursday · 24 June 2027',title:'Porto starts pouring',
    intro:'Four of The Usual Suspects arrive in Portugal. Bags down, glasses up.',
    tip:'🎉 São João · Porto’s big São João celebrations happen on the night of 23 June into the 24th. You may catch the festive atmosphere, but the main night is the night before. As 24 June is a municipal holiday, check opening times and transport.',
    items:[
      {time:'AFTERNOON',title:'Arrive & check in',description:'Drop the bags and head into the historic centre. Porto is hilly, so take the first wander at an easy pace and save some energy for the evening.',icon:'🧳'},
      {time:'16:00',title:'First round around Aliados',description:'Find a terrace near Avenida dos Aliados and order a cold beer or vinho verde. Toast to the trip and let the weekend begin.',icon:'🍺',special:true,speech:'First round around Aliados. Four of The Usual Suspects have made it to Porto. Find a terrace, order something cold and raise a glass.'},
      {time:'17:30',title:'Ribeira riverside wander',description:'Explore the colourful riverfront, take in the Douro and look across to Vila Nova de Gaia. There are plenty of places to pause for a drink or a photo.',icon:'🌉'},
      {time:'19:30',title:'Francesinha & a proper feed',description:'Try Porto’s famously substantial francesinha: layers of meat and cheese under a rich sauce, usually served with chips. Not a delicate first-night meal, and that is the point.',icon:'🥪',special:true},
      {time:'21:30+',title:'The Usual Suspects · opening night',description:'Explore the nightlife around Galerias de Paris, Rua de Cândido dos Reis and Clérigos. Follow the music, find a busy bar and see where the night takes you.',icon:'🍻',special:true,speech:'The Usual Suspects opening night. Explore the bars around Galerias de Paris and Clérigos. Keep the group together and let Porto do the rest.'},
      {time:'LOCAL LINGO',title:'Get the first drinks in',description:'“Uma cerveja, por favor” means “a beer, please”. “Quatro cervejas” gets four beers, and “Saúde!” is cheers.',icon:'🗣️',tag:'PORTUGUESE PHRASES',speech:'Uma cerveja, por favor. Quatro cervejas. Saúde!'}
    ]
  },
  {
    id:'fri',label:'Fri 25',date:'Friday · 25 June 2027',title:'Tiles, towers & tawny port',
    intro:'A little culture, river scenery, a port tasting and a Friday night with no early alarm.',
    tip:'🍷 Port wine cellars are across the river in Vila Nova de Gaia. Choose a tasting and check tour times in advance.',
    items:[
      {time:'09:30',title:'Coffee & recovery breakfast',description:'Find a café for coffee, pastries and something substantial. Reconstruct last night’s events before anyone starts editing the story.',icon:'☕'},
      {time:'10:30',title:'São Bento & the old centre',description:'See São Bento station’s famous blue-and-white tile panels, then explore the historic streets towards the cathedral and Rua das Flores.',icon:'🚉',special:true},
      {time:'12:00',title:'Clérigos Tower',description:'See the baroque tower and, if everyone is up for the steps, climb for a panorama over Porto’s rooftops. Check access and opening details first.',icon:'🏛️',tag:'CHECK OPENING TIMES',link:{label:'Clérigos Tower',url:'https://www.torre-dos-clerigos.pt/en/'}},
      {time:'13:30',title:'Long lunch in Baixa',description:'Settle in for grilled meat, seafood, petiscos or another local speciality. Add a carafe of vinho verde and give the afternoon plenty of time.',icon:'🍽️',special:true},
      {time:'15:30',title:'Cross the Dom Luís I Bridge',description:'Walk across to Vila Nova de Gaia for classic views back over Porto. The bridge makes a memorable connection between the old town and the wine lodges.',icon:'🌉'},
      {time:'16:30 – 18:30',title:'Port lodge tasting in Gaia',description:'Book a cellar tour and tasting to learn about port and try a few styles. Check availability in advance and plan the route back.',icon:'🍷',special:true,tag:'BOOK AHEAD'},
      {time:'19:00',title:'Jardim do Morro viewpoint',description:'Take in the Douro and old-town skyline from the Gaia viewpoint. A drink nearby is a fine way to finish the sightseeing.',icon:'🌇'},
      {time:'21:30+',title:'Friday night · round two',description:'Head back into central Porto for dinner, bars and live music if something catches your eye. Galerias de Paris is a natural starting point.',icon:'🌙',special:true}
    ]
  },
  {
    id:'sat',label:'Sat 26',date:'Saturday · 26 June 2027',title:'Atlantic air & one last big night',
    intro:'Markets, the coast, seafood and a final evening for The Usual Suspects.',
    tip:'🌊 Foz and Matosinhos make an easy change of scene from the centre. Check transport options and leave time to get back for the evening.',
    items:[
      {time:'10:00',title:'Bolhão Market & brunch',description:'Browse the market and its food stalls, then find brunch or a café nearby. Take it slowly; there is a coastal detour and a final night ahead.',icon:'🥐',link:{label:'Mercado do Bolhão',url:'https://mercadobolhao.pt/'}},
      {time:'11:30',title:'A wander through central Porto',description:'Explore Santa Catarina, the tiled churches and streets around Clérigos. Stop for coffee whenever the mood takes you.',icon:'🚶'},
      {time:'13:00',title:'Head out towards Foz',description:'Make your way west to where the Douro meets the Atlantic. Enjoy the sea air, promenade and a slower pace away from the steep lanes.',icon:'🌊'},
      {time:'14:00',title:'Seafood lunch in Matosinhos',description:'Matosinhos is known for its seafood and grilled fish. Settle in for a long lunch and enjoy the change of scene.',icon:'🐟',special:true},
      {time:'16:00',title:'Seafront stroll & a drink',description:'Walk off lunch along the coast, then stop for a cold drink with an ocean view before heading back into town.',icon:'🍺'},
      {time:'19:30',title:'Final group dinner',description:'One last proper meal together. Keep it hearty, order a few local favourites and get the stories straight before the final night out.',icon:'🍽️',special:true},
      {time:'21:30+',title:'The Usual Suspects · final night',description:'Return to the central bars for one last Porto crawl. Keep the plans flexible, look after one another and make the most of the last evening.',icon:'🍻',special:true,speech:'The Usual Suspects final night in Porto. One last crawl, plenty of stories and no need to overcomplicate the plan.'}
    ]
  },
  {
    id:'sun',label:'Sun 27',date:'Sunday · 27 June 2027',title:'Survival Sunday',
    intro:'Coffee, a final wander and getting everyone home in roughly the right direction.',
    tip:'🧳 Check out and airport transfer times before the final night. Leave a little buffer for the hills, luggage and Sunday travel.',
    items:[
      {time:'10:00',title:'Recovery breakfast',description:'Coffee, eggs, pastries and a full assessment of who remembers Saturday night. Hydration is strongly encouraged.',icon:'☕'},
      {time:'11:00',title:'Last look around Porto',description:'Take a gentle final stroll, pick up souvenirs or sit by the river for one last view of the city.',icon:'🚶'},
      {time:'12:30',title:'One final petisco',description:'Grab a light lunch or a few small plates before collecting the bags. Keep the final round genuinely final.',icon:'🍢'},
      {time:'AFTERNOON',title:'Home, somehow',description:'Collect luggage and head to the airport or station. The Usual Suspects have survived Porto; the group chat will handle the rest.',icon:'✈️'},
      {time:'LAST WORDS',title:'Saúde & adeus',description:'“Obrigado” means thank you (spoken by a man); “por favor” is please; “adeus” is goodbye. Saúde to the next one.',icon:'👋',tag:'FINAL PHRASES',speech:'Obrigado. Por favor. Adeus. Saúde!'}
    ]
  }
] satisfies DayTab[];

export function Porto(){return <TripPage eyebrow="24 — 27 June 2027" title={<>Porto<br/><em>The Usual Suspects</em></>} subtitle="Petiscos · port wine · beer · Atlantic air · late nights" pill="The Usual Suspects · 4 men · 24–27 June 2027" days={days} countdown={{target:"2027-06-24T00:00:00",label:"Countdown to 24 June · Thursday"}} weather={{base:"Porto · city break",forecast:"Forecast to be checked closer to departure. Pack for changeable Atlantic conditions and bring comfortable shoes for Porto’s hills.",updated:"Planning note · October 2026"}} footer="Porto · 24–27 June 2027 · The Usual Suspects · 4 men"/>}