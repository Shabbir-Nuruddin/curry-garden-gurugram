import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Curry Garden",
  sub: { en: "Garden dining under fairy lights · Atul Kataria Chowk", hi: "फ़ेयरी लाइट्स के नीचे गार्डन डाइनिंग · अतुल कटारिया चौक" },
  banner: { en: "Open till 2 AM, garden and AC seating", hi: "रात 2 बजे तक खुला, गार्डन और एसी सीटिंग" },
  phone: "918178403858",
  phoneDisplay: "+91 81784 03858",
  lat: 28.483161,
  lon: 77.0501917,
  hours: [[14, 26], [14, 26], [14, 26], [14, 26], [14, 26], [14, 26], [14, 26]],
  price: { en: "₹400–600 per person", hi: "₹400–600 प्रति व्यक्ति" },
  theme: {
    dark: false,
    bg: "#ffffff",
    bg2: "#f5f3f8",
    panel: "#ffffff",
    ink: "#16121c",
    ink2: "#4a4552",
    ink3: "#857f8e",
    line: "#e5e1ea",
    accent: "#5b3a8c",
    onAccent: "#ffffff",
    display: "Playfair Display",
    weight: 800,
    upper: false,
  },
  scene: "feast",
  align: "right",
  hero: {
    title: [
      { en: "Dinner under", hi: "फ़ेयरी लाइट्स के" },
      { en: "the fairy lights.", hi: "नीचे डिनर।" },
    ],
    proof: {
      en: "4.6 on Google from 1,262 reviews. An open garden full of lights, AC seating inside, paneer and dal makhni, near Atul Kataria Chowk till 2 AM.",
      hi: "गूगल पर 1,262 रिव्यू से 4.6। रोशनी से भरा खुला गार्डन, अंदर एसी सीटिंग, पनीर और दाल मखनी, अतुल कटारिया चौक के पास रात 2 बजे तक।",
    },
    fallback: "/img/p11.jpg",
    slides: ["/img/p11.jpg", "/img/p9.jpg", "/img/p5.jpg"],
  },
  marquee: ["Paneer", "Dal Makhni", "Garden Seating", "Fairy Lights", "Birthdays", "Date Nights", "Open till 2 AM"],
  dishes: {
    title: { en: "Why people come, in their words", hi: "लोग क्यों आते हैं, उन्हीं के शब्दों में" },
    body: { en: "Every line is a real Google review.", hi: "हर लाइन असली गूगल रिव्यू है।" },
    layout: "list",
    items: [
      { name: { en: "Paneer & Dal Makhni", hi: "पनीर और दाल मखनी" }, quote: "Food quality is great and taste awesome. Specially Paneer and Daal Makhni.", img: "/img/p5.jpg" },
      { name: { en: "The garden", hi: "गार्डन" }, quote: "Great ambience and taste...open garden sitting...light music..peaceful place..really enjoyed", img: "/img/p10.jpg" },
      { name: { en: "The lights", hi: "रोशनी" }, quote: "Fairy light environment is best for camera lovers. indoor n outdoor sitting." },
      { name: { en: "Three kinds of seating", hi: "तीन तरह की सीटिंग" }, quote: "Open sitting , Outside sitting area and Air conditioned sitting area also available." },
    ],
  },
  gallery: { title: { en: "", hi: "" }, layout: "strip", photos: [] },
  feature: {
    kind: "occasions",
    title: { en: "Made for the evenings you remember", hi: "उन शामों के लिए, जो याद रहें" },
    body: { en: "What guests booked it for, word for word.", hi: "मेहमानों ने किस लिए बुक किया, उन्हीं के शब्दों में।" },
    img: "/img/p9.jpg",
    items: [
      { label: { en: "Date night", hi: "डेट नाइट" }, quote: "A good place to go on a dinner date as the outside space is full of lights." },
      { label: { en: "Birthday", hi: "बर्थडे" }, quote: "I have booked this place for my son's birthday party and we were all enjoyed. Food, decor, services everything were amazing" },
      { label: { en: "Anniversary", hi: "एनिवर्सरी" }, quote: "Best place for a date, or birthday, anniversary celebration." },
      { label: { en: "The hosts", hi: "मेज़बान" }, quote: "amazing food with amazing host like prateek n rahul ji." },
    ],
  },
  reviews: {
    title: { en: "1,032 of 1,262 reviews are five stars", hi: "1,262 में से 1,032 रिव्यू पांच स्टार" },
    rating: 4.6,
    dist: [1032, 102, 53, 18, 57],
    quotes: [
      { quote: "Great ambience and taste...open garden sitting...light music..peaceful place..really enjoyed", stars: 5 },
      { quote: "Food quality is great and taste awesome. Specially Paneer and Daal Makhni.", stars: 5 },
      { quote: "Best place for a date, or birthday, anniversary celebration.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Near Atul Kataria Chowk", hi: "अतुल कटारिया चौक के पास" },
    img: "/img/p7.jpg",
    alt: "Curry Garden sign lit up at night",
    address: { en: "Near Atul Kataria Chowk, Old Delhi Gurgaon Rd, next to Sapna Nursery, Gurugram 122015", hi: "अतुल कटारिया चौक के पास, ओल्ड दिल्ली गुड़गांव रोड, सपना नर्सरी के बगल में, गुरुग्राम 122015" },
    note: { en: "2 PM to 2 AM, every day.", hi: "हर दिन दोपहर 2 से रात 2 बजे तक।" },
  },
  pour: { from: "pan", into: "kadhai", liquid: "#6e2a12", foam: "#a65a2a", thick: 2.3, hot: true, butter: true, extras: "candles" },
  story: [
    { kicker: { en: "The garden", hi: "गार्डन" }, title: { en: "Full of lights.", hi: "रोशनी से भरा।" }, quote: "A good place to go on a dinner date as the outside space is full of lights." },
    { kicker: { en: "The food", hi: "खाना" }, title: { en: "Paneer and dal makhni.", hi: "पनीर और दाल मखनी।" }, quote: "Food quality is great and taste awesome. Specially Paneer and Daal Makhni." },
    { kicker: { en: "The party", hi: "पार्टी" }, title: { en: "Birthdays done right.", hi: "बर्थडे, सही तरीके से।" }, quote: "I have booked this place for my son's birthday party and we were all enjoyed. Food, decor, services everything were amazing" },
  ],
  build: {
    title: { en: "Book your evening in a few taps", hi: "कुछ टैप में अपनी शाम बुक कीजिए" },
    body: { en: "Pick the seating, how many and when. It goes to WhatsApp exactly as you see it.", hi: "सीटिंग, कितने लोग और कब, चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Seating", hi: "सीटिंग" }, options: [
      { name: { en: "Garden, under the lights", hi: "गार्डन, लाइट्स के नीचे" } },
      { name: { en: "AC hall", hi: "एसी हॉल" } },
      { name: { en: "Birthday or party", hi: "बर्थडे या पार्टी" } },
    ] },
    people: true,
    when: true,
    hello: { en: "Hi Curry Garden, I'd like to book:", hi: "नमस्ते करी गार्डन, मुझे बुक करना है:" },
  },
  waHello: {
    en: "Hi Curry Garden, I'd like to book a table. Seating: , people: , date and time: ",
    hi: "नमस्ते करी गार्डन, मुझे टेबल बुक करनी है। सीटिंग: , लोग: , तारीख और समय: ",
  },
  order: ["build", "dishes", "feature", "reviews", "visit"],
};
