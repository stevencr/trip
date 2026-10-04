import {TripPage,DayTab} from '../components/TripPage';

export function Munich(){
  return <TripPage
    title="Munich · The Usual Suspects"
    date="20–23 May 2027"
    summary="Beer halls · Bavarian food · city exploring · Kilians Irish Pub · good company"
    intro="Three nights in Munich for The Usual Suspects — a proper Bavarian beer-and-food weekend with plenty of wandering, drinking and time to enjoy the city."
  >
    <DayTab day="Thursday 20 May" title="Arrival · first beers">
      <p>Arrive in Munich, check in and get your bearings around the old town.</p>
      <ul>
        <li>Walk through Marienplatz and see the Neues Rathaus and Frauenkirche.</li>
        <li>Easy first dinner with Bavarian food and a proper Munich beer.</li>
        <li>Finish at Kilians Irish Pub on Frauenplatz for Guinness, Augustiner, live music and a few drinks together.</li>
      </ul>
    </DayTab>
    <DayTab day="Friday 21 May" title="Munich · beer · food · bars">
      <p>A full day to get stuck into Munich without over-planning it.</p>
      <ul>
        <li>Breakfast and coffee before exploring Viktualienmarkt and the old town.</li>
        <li>Visit a traditional beer hall for lunch, with sausages, schnitzel and local beer.</li>
        <li>Afternoon around the English Garden, including the Eisbach wave and a beer garden if the weather is good.</li>
        <li>Back into the centre for dinner, then a proper Friday night around Munich's bars.</li>
      </ul>
    </DayTab>
    <DayTab day="Saturday 22 May" title="Bavaria day">
      <p>Keep Saturday flexible so the group can choose between more Munich or a short trip out of town.</p>
      <ul>
        <li>Option 1: explore the Residenz, Königsplatz and central Munich.</li>
        <li>Option 2: take a day trip towards the Alps or Neuschwanstein if everyone fancies getting out of the city.</li>
        <li>Return for a long Bavarian dinner and beers.</li>
        <li>Finish the night around Werksviertel-Mitte or back at Kilians/Ned Kelly's for live sport, music and late drinks.</li>
      </ul>
    </DayTab>
    <DayTab day="Sunday 23 May" title="Last beers · home">
      <p>Slow final morning, breakfast and one last wander before heading to the airport.</p>
      <ul>
        <li>Grab a final Weissbier or coffee.</li>
        <li>Last look around the old town before travelling home.</li>
      </ul>
    </DayTab>
  </TripPage>;
}
