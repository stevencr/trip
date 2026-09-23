import {DayContent} from './DayContent';
import {DayTabs} from './DayTabs';
import type {DayTab} from './DayTabs';
import {TripHeader} from './TripHeader';
import {TripFooter} from './TripFooter';
import {WeatherCard} from './WeatherCard';
import {Countdown} from './Countdown';

type Props={eyebrow:string;title:string;subtitle:string;pill?:string;days:DayTab[];countdown?:{target:string;label:string};weather?:{forecast:string;checked:string};footer:string};
export function TripPage({eyebrow,title,subtitle,pill,days,countdown,weather,footer}:Props){return <section className="trip-page"><TripHeader eyebrow={eyebrow} title={title} subtitle={subtitle} pill={pill}/>{countdown&&<Countdown {...countdown}/>}<DayTabs days={days} render={day=><DayContent day={day}/>} />{weather&&<WeatherCard {...weather}/>}<TripFooter>{footer}</TripFooter></section>}