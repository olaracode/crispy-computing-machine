import { APIkey } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
  key: APIkey,
});

async function findCourts(city) {
  const { Place } = await google.maps.importLibrary("places");

  const request = {
    textQuery: `Tennis courts in ${city}`,
    fields: ["displayName", "location", "businessStatus", "photos"],

    language: "en-US",
    maxResultCount: 8,
    minRating: 3.2,
    region: "us",
  };
  //@ts-ignore
  const { places } = await Place.searchByText(request);

  if (places.length) {
    const filteredPlaces = places.map((place) => filterPlace(place));
    //console.log(">>>", filteredPlaces);
    return filteredPlaces;
  } else {
    console.log("No results");
  }
}

const filterPlace = (place) => {
  const displayName = place.displayName;
  const id = place.id;
  const imageUrl =
    `https://places.googleapis.com/v1/${place.photos[0].name}/media?maxHeightPx=400&maxWidthPx=400&key=${APIkey}` ||
    "https://unsplash.com/photos/green-tennis-court-4gqELewld-A";

  return { id, displayName, imageUrl };
};

export { findCourts };
