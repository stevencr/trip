import {TripPage} from '../components/TripPage';
import type {DayTab} from '../components/DayTabs';

const days=[
  {
    id:'sat',
    label:'Sat 26',
    date:'Saturday · 26 September',
    title:'The weekend begins',
    intro:'Arrival, food, riverside walking and a castle.',
    tip:'🌙 Evening idea · Stroll to Devil’s Bridge under the moonlight.',
    items:[
      {time:'09:00 – 10:30',title:'Arrival & breakfast at The Orange Tree',description:'Cosy café, Cumbrian breakfast & homemade scones.',icon:'☕',speech:'Arrival and breakfast at The Orange Tree. Cosy café, Cumbrian breakfast and homemade scones.'},
      {time:'10:45 – 12:30',title:'Ruskin’s View & River Lune wander',description:'Iconic view, riverbank walk & heron spotting.',icon:'🌳',speech:'Ruskin’s View and River Lune wander. Iconic view, walk along the riverbank, spot herons.'},
      {time:'12:45 – 13:45',title:'Kirkby Lonsdale town stroll',description:'Independent shops, antiques & the old Market Cross.',icon:'🛍️',speech:'Kirkby Lonsdale market town stroll. Independent shops, antiques and the old Market Cross.'},
      {time:'14:00 – 15:30',title:'Lunch at Lunesdale Deli',description:'Local cheeses, artisan sandwiches & Cumbrian ale.',icon:'🍽️',speech:'Lunch at Lunesdale Deli. Local cheeses, artisan sandwiches and Cumbrian ale.'},
      {time:'15:45 – 17:30',title:'Sizergh Castle & Gardens',description:'10 min drive · medieval tower, lake views & gardens.',icon:'🏰',speech:'Sizergh Castle and Gardens, National Trust. Ten minute drive. Medieval tower, lake views and borders.'},
      {time:'19:00 – late',title:'Dinner at The Royal Barn',description:'Seasonal British menu · book a window table.',icon:'🍷',speech:'Dinner at The Royal Barn. Seasonal British menu, book a window table.'}
    ]
  },
  {
    id:'sun',
    label:'Sun 27',
    date:'Sunday · 27 September',
    title:'Walk, tea & sunset',
    intro:'A slower second day through the Lune Valley.',
    tip:'🎒 Pack walking boots & a raincoat · Cumbrian weather is part of the charm.',
    items:[
      {time:'08:30 – 09:30',title:'Breakfast at The Cobbles',description:'Sticky buns & locally roasted coffee.',icon:'🥐',speech:'Leisurely breakfast at The Cobbles. Famous sticky buns and locally roasted coffee.'},
      {time:'10:00 – 12:30',title:'Radstone & Casterton circular',description:'Moderate 4-mile loop · panoramic Lune Valley views.',icon:'⛰️',speech:'Walk to Radstone and Casterton circular. Moderate 4 mile loop, panoramic Lune Valley views.'},
      {time:'13:00 – 14:30',title:'Pub lunch at The Plough',description:'Traditional Sunday roast · booking advised.',icon:'🍺',speech:'Pub lunch at The Plough. Traditional Sunday roast, booking advised.'},
      {time:'15:00 – 17:00',title:'Leck Beck & Fairy Steps',description:'Woodland, limestone pavements & waterfall.',icon:'🚶',speech:'Leck Beck and Fairy Steps. Woodland walk, limestone pavements and waterfall.'},
      {time:'17:15 – 18:00',title:'Tea at Farrer’s Tea Room',description:'Scones, clotted cream & homemade jam.',icon:'🍰',speech:'Afternoon tea at Farrer’s Tea Room. Scones, clotted cream and homemade jam.'},
      {time:'18:30 – 19:30',title:'Sunset at Top o’ th’ Hill',description:'Panoramic views over the Howgill Fells.',icon:'🌅',speech:'Sunset at Top o’ th’ Hill. Panoramic view over the Howgill Fells.'}
    ]
  }
] satisfies DayTab[];

export function KirkbyLonsdale(){
  return <section className="trip-page">
    <header className="trip-hero">
      <div className="eyebrow">26 — 27 September 2026</div>
      <h1>Kirkby Lonsdale</h1>
      <p>Good food · beautiful walks · Cumbrian countryside · no need to hurry</p>
      <span className="pill">For Karen & Steven · staying at The Red Dragon</span>
    </header>

    <div className="countdown">
      <span>Countdown to 9:00am · Saturday 26 September</span>
      <span>Trip starts Saturday</span>
    </div>

    <DayTabs
      days={days}
      render={day=><div className="trip-content">
        <div className="day-head">
          <div className="date">{day.date}</div>
          <h2>{day.title}</h2>
          <p>{day.intro}</p>
        </div>
        <Timeline items={day.items}/>
        <div className="tip">
          {day.id==='sat'
            ? '🌙 Evening idea · Stroll to Devil’s Bridge under the moonlight.'
            : '🎒 Pack walking boots & a raincoat · Cumbrian weather is part of the charm.'}
        </div>
      </div>}
    />

    <div className="info-bar">
      <div><strong>🏨 Base</strong>The Red Dragon · your cosy Kirkby Lonsdale base</div>
      <div><strong>⛅ Weather forecast</strong>26 Sept · around 13°C · overcast, with a 43% chance of rain. 27 Sept · around 11°C · overcast, with a 35% chance of rain.</div>
    </div>
    <div className="trip-footer">Kirkby Lonsdale · 26–27 September 2026 · forecast checked 21 September</div>
  </section>;
}