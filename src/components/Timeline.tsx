import {TimelineItem} from './TimelineItem';
export type Item={time:string;title:string;description:string;icon:string;tag?:string;special?:boolean;speech?:string;link?:{label:string;url:string}};
export function Timeline({items}:{items:Item[]}){return <div className="timeline">{items.map((item,i)=><TimelineItem key={item.time+'-'+item.title+'-'+i} item={item}/>)}</div>}