---
name: add-trip
description: Create or extend a trip itinerary in this travel-planning React app. Use this skill whenever the user asks to add another trip, create a new destination itinerary, or substantially extend an existing trip. It covers trip research, countdowns, weather, itinerary structure, shared components, styling, routing, and deployment.
---

# Add a trip

Treat every new trip as a complete product feature, not just a new content file.

## Before changing code

1. Inspect the current repository structure and existing trip implementations.
2. Reuse the established shared architecture. Do not create a parallel page/component system.
3. Inspect the shared trip components, trip registry, routing, and styles before coding.
4. Look at the closest existing trip for conventions.
5. Preserve the current visual language and responsive behaviour unless the user explicitly asks for a redesign.

## Research first

For a dated trip, research the destination and dates before writing the itinerary.

Check, where relevant:
- opening days/hours and booking requirements
- travel time between activities
- restaurants/cafes/pubs and reservation advice
- walking routes and approximate difficulty
- local events/festivals relevant to the dates
- official attraction/tourism sources
- current weather forecast for the exact trip dates

Do not invent specific opening hours, events, booking status, travel times, or weather.

## Trip data

Create a trip module under src/trips/ using the existing DayTab structure.

Each day should have:
- stable id
- concise tab label
- full date
- engaging title
- short intro
- ordered timeline items
- optional practical tip

Each timeline item should normally contain:
- time
- title
- useful, specific description
- appropriate icon
- speech text when the existing audio feature is used
- tag for useful qualifiers such as booking/admission
- link only when a useful external destination or booking link exists
- special only for genuinely notable items

Build realistic pacing. Avoid stuffing every day with attractions. Leave breathing room for food, walking, browsing, and delays.

## Countdown

If the trip has a known start date/time, add a countdown through the shared TripPage countdown prop.

Use an explicit local UK date/time for UK trips, for example 2026-09-26T09:00:00, and a clear label such as Countdown to 9:00am · Saturday 26 September.

Do not create a bespoke countdown component for an individual trip.

The existing Countdown component is intentionally UK-local for this site. Do not introduce unnecessary UTC-offset conversion or a timezone library.

If the trip start time is unknown or inappropriate, omit the countdown rather than inventing one.

## Weather

For dated trips, research weather near the trip date and include the shared WeatherCard when a useful forecast is available.

Pass:
- base: accommodation/base information if relevant
- forecast: concise forecast covering the trip dates, including temperature and precipitation/rain information when useful
- updated: the actual date/time the forecast was checked

Weather copy must clearly be a forecast, not a guarantee.

Do not hard-code weather as permanent. If the forecast is too far in the future to be meaningful, omit detailed forecast data or make the limitation explicit.

## Shared architecture

Prefer:
- TripPage for the page shell
- TripHeader for the hero
- DayTabs and DayContent for days
- Timeline and TimelineItem for activities
- Countdown for countdowns
- WeatherCard for weather
- TripFooter for the footer

Update src/trips.tsx so the new trip appears on the home page and navigation.

Update src/App.tsx only where established routing/navigation requires it. Do not duplicate route logic.

Keep trip-specific content in src/trips/<TripName>.tsx; keep reusable UI in src/components/.

## Links and sources

Prefer official attraction, venue, tourism, or booking sources when adding links. Use real URLs only. Do not fabricate URLs.

For external research, favour authoritative and current sources.


## Social metadata

Every trip must have a dedicated static HTML entry point so social crawlers receive trip-specific metadata before JavaScript runs.

Create:
- <slug>/index.html for the trip, alongside the existing root index.html
- Open Graph metadata: og:title, og:type=website, og:url, og:image, og:image:alt, og:description, og:site_name
- Twitter card metadata: twitter:card=summary_large_image, twitter:title, twitter:description, twitter:image
- A trip-specific <title> and meta description

Use a clean canonical URL such as https://stevencr.github.io/trip/<slug>/ and an absolute HTTPS image URL suitable for social previews. Prefer a stable, appropriately licensed destination image; record attribution/licensing requirements when applicable.

The trip HTML entry must load /src/main.tsx and be added to the multi-page Vite inputs in vite.config.ts. Do not rely on runtime document.title or client-side meta-tag updates alone: social crawlers may inspect the initial HTML without executing the React application.

When adding a trip, cross-check the slug, title, dates, description, social image, canonical URL and visible trip content so they all describe the same trip.

## Dates and consistency

Cross-check:
- trip dates
- day labels
- countdown target
- weather dates
- footer dates
- home-page card dates
- navigation labels

A new trip must not contain stale dates copied from another trip.

## UX and accessibility

Maintain:
- responsive mobile layout
- keyboard-accessible buttons and links
- meaningful link text
- semantic headings
- existing reduced-motion behaviour
- no unnecessary loading spinners or layout shifts

Use the existing visual system rather than introducing a new design language for one trip.

## Validation

After implementing a trip:
1. Run the production build with npm run build.
2. Check TypeScript/build errors.
3. Inspect changes for accidental modifications to existing trips.
4. Verify the new route is registered and the home-page card works.
5. Verify countdown and weather props match their current TypeScript types.
6. If GitHub Actions is configured, check the latest deployment run after pushing.

## Quality bar

A good new trip should feel researched, realistic, and cohesive with the existing site. A request such as "add a trip to X on these dates" should automatically cover content, routing, countdown, weather, links, responsive UI, and deployment conventions without creating one-off architecture.
