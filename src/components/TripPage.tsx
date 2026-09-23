import {DayContent} from './DayContent';
import {DayTabs} from './DayTabs';
import type {DayTab} from './DayTabs';
import {TripHeader} from './TripHeader';
import {TripFooter} from './TripFooter';
import {WeatherCard} from './WeatherCard';
import {Countdown} from './Countdown';
import type {ReactNode} from 'react';

type Props={eyebrow:string;title:ReactNode;subtitle:string;pill?:string;days:DayTab[];countdown?:{target:string;label:string};weather?:{base:string;forecast:string;checked:string};footer:string};
export function TripPage({eyebrow,title,subtitle,pill,days,countdown,weather,footer}:Props){return <section className="trip-page"><TripHeader eyebrow={eyebrow} title={title} subtitle={subtitle} pill={pill}/>{countdown&&<Countdown {...countdown}/>}<DayTabs days={days} render={day=><DayContent day={day}/>} />{weather&&<WeatherCard {...weather}/>}<TripFooter>{footer}</TripFooter></section>}