import { DiaryEntry, TripIdea, BlogPost } from './types';

export const DIARY_ENTRIES: DiaryEntry[] = [
  {
    id: '1',
    name: 'Bean Board',
    area: 'Ram Nagar / Chinna Waltair',
    bestTime: 'Early morning or late rainy evenings',
    note: 'The coffee here feels honest. I love sitting by the glass window watching the city wake up. It smells like roasted beans and quiet thoughts.',
    tags: ['Coffee', 'Work', 'Calm'],
    category: 'coffee',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    name: 'Starbucks',
    area: 'Dwaraka Nagar',
    bestTime: 'Mid-afternoons on weekdays',
    note: 'It is predictable, but sometimes you need that. The one here has a surprisingly nice corner for reading away from the counter noise.',
    tags: ['Coffee', 'Modern', 'AC'],
    category: 'coffee',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    name: 'Subbayya Gari Hotel',
    area: 'Diamond Park',
    bestTime: 'Before 1 PM for lunch',
    note: 'Chaos, but the good kind. The food arrives on a banana leaf like a blessing. You do not come here to talk; you come here to eat.',
    tags: ['Authentic', 'Spicy', 'Lunch'],
    category: 'food',
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    name: 'Yarada Beach',
    area: 'Yarada Village',
    bestTime: 'Golden hour (4 PM - 6 PM)',
    note: 'The drive down the hill reveals the ocean like a secret. It feels wilder here than the city beaches. The sand is cleaner, the waves louder.',
    tags: ['Beach', 'Sunset', 'Nature'],
    category: 'beach',
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: '5',
    name: 'Rushikonda',
    area: 'Beach Road End',
    bestTime: 'Sunrise',
    note: 'Go before the water sports crowd wakes up. The curve of the bay looks beautiful when the light is soft and blue.',
    tags: ['Beach', 'Walk', 'Morning'],
    category: 'beach',
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: '6',
    name: 'Araku Valley',
    area: '110km from Vizag',
    bestTime: 'Winter mornings',
    note: 'The journey is the point. The winding roads, the coffee plantations, and the sudden drop in temperature make it feel like a different world.',
    tags: ['Hills', 'Drive', 'Weekend'],
    category: 'outskirts',
    image: 'https://picsum.photos/800/600?random=6'
  },
  {
    id: '7',
    name: 'Vanajangi',
    area: 'Near Paderu',
    bestTime: '3 AM (to catch sunrise)',
    note: 'Standing above the clouds. It is cold, crowded sometimes, but for that one moment when the sun breaks the cloud ocean, it is silence.',
    tags: ['View', 'Adventure', 'Sunrise'],
    category: 'outskirts',
    image: 'https://picsum.photos/800/600?random=7'
  },
  {
    id: '8',
    name: 'Submarine Museum',
    area: 'RK Beach',
    bestTime: 'Sunset',
    note: 'Seeing a machine of war rest so quietly by the sand is poetic. It defines the coastline silhouette.',
    tags: ['History', 'Iconic', 'Walk'],
    category: 'quiet',
    image: 'https://picsum.photos/800/600?random=8'
  },
  {
    id: '9',
    name: 'Kailasagiri',
    area: 'Hilltop',
    bestTime: 'Late evening',
    note: 'Take the ropeway. The view of the city lights curving along the coast makes Vizag look like a necklace.',
    tags: ['View', 'City', 'Evening'],
    category: 'quiet',
    image: 'https://picsum.photos/800/600?random=9'
  }
];

export const TRIP_IDEAS: TripIdea[] = [
  {
    id: 't1',
    title: 'Slow weekend in Araku',
    forWho: 'Couples or Solitary Writers',
    pace: 'Slow',
    description: 'Forget the tourist spots. Stay in a coffee estate. Wake up to mist. Read a book. Drink local coffee. Do nothing else.'
  },
  {
    id: 't2',
    title: '3 calm days in Vizag',
    forWho: 'First-time visitors',
    pace: 'Relaxed',
    description: 'A mix of heritage, beach walks, and good food. No rushing from point A to point B. Just soaking in the coastal air.'
  },
  {
    id: 't3',
    title: 'Quiet Vizag away from crowds',
    forWho: 'Introverts',
    pace: 'Slow',
    description: 'Hidden beaches, library cafes, and sunrise spots where you won’t find the loud crowds. Just you and the sound of the ocean.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'why-monsoon-is-best',
    title: 'Why Monsoon is the Best Time for Vizag',
    excerpt: 'Most people visit in winter, but the city comes alive when it rains. The hills turn emerald green, and the sea roars a little louder.',
    content: [
      "Visakhapatnam changes color when the rains arrive in June. The dusty brown hills that border the city suddenly burst into a vibrant, almost impossible shade of emerald green. It’s a transformation that happens almost overnight, like the city is putting on its best dress.",
      "While tourists usually flock here in December for the cool breeze, locals know that the monsoon (June-September) is the most poetic time to be in Vizag. The humidity drops, the air clears up, and the coastline looks dramatic under grey, brooding clouds.",
      "My favorite routine during this season is a drive to Kailasagiri or a simple walk along the Beach Road near MVP Colony. The waves are rougher, crashing against the rocks with a ferocity that demands respect. You can't swim, but you can sit on a bench with roasted corn (bhutta) and just watch the power of the Bay of Bengal.",
      "If you're planning a trip, don't let the rain scare you. It usually rains in bursts, leaving behind fresh, washed streets and a cool breeze. Just pack a good raincoat and an appetite for hot idlis."
    ],
    date: 'June 15, 2025',
    readTime: '3 min read',
    image: 'https://picsum.photos/800/600?random=10',
    tags: ['Weather', 'Seasons', 'Nature']
  },
  {
    id: 'b2',
    slug: 'morning-walks-tenneti-park',
    title: 'A Morning Walk at Tenneti Park',
    excerpt: 'The sunrise here is different. It rises right out of the ocean, framed by the raw, rocky coastline that feels ancient and untouched.',
    content: [
      "There is a specific time—around 5:15 AM—when Tenneti Park is the most peaceful place on earth. The joggers haven't fully taken over yet, and the sky is a gradient of deep purple and soft orange.",
      "Tenneti Park isn't your typical manicured garden. It's rugged. It sits on a cliff overlooking the sea, with steps leading down to a small, rocky beach. The star of the show here is the view of the coastline curving north towards Rushikonda.",
      "I often come here to clear my head. There is an old, rusted ship anchor nearby that reminds you of the city's naval history. Standing on the edge of the railing, feeling the salt spray on your face, you realize how small the city feels against the vastness of the horizon.",
      "After the walk, the tradition is to grab a filter coffee from the mobile vendors parked near the entrance. It's not gourmet, but it tastes like victory."
    ],
    date: 'July 2, 2025',
    readTime: '2 min read',
    image: 'https://picsum.photos/800/600?random=11',
    tags: ['Routine', 'Morning', 'Walks']
  },
  {
    id: 'b3',
    slug: 'coffee-culture-vizag',
    title: 'The Slowly Brewing Coffee Culture',
    excerpt: 'Vizag was always a tea city. But in the last five years, a quiet revolution of roasters and brewers has taken over the quiet corners.',
    content: [
      "If you asked for coffee in Vizag ten years ago, you got instant powder mixed with too much sugar. Today, you can discuss the notes of a medium roast Arabica from Araku Valley with a barista who actually knows the farmer.",
      "The proximity to the Araku Valley plantations (just 3-4 hours away) gives Vizag a unique advantage. We are drinking coffee that was grown in our own backyard. Places like Bean Board and local roasters have championed this 'farm-to-cup' philosophy before it was a cool marketing term.",
      "My recommendation? Skip the big international chains. Go to the small cafes in Waltair Uplands or Lawsons Bay. Order a Pour-over. The taste is cleaner, and you're supporting the local ecosystem that keeps this city ticking.",
      "It's not just about the caffeine; it's about the space. These new cafes are becoming the third place for the city's youth—spaces to work, read, or just exist without the pressure to be productive."
    ],
    date: 'August 10, 2025',
    readTime: '4 min read',
    image: 'https://picsum.photos/800/600?random=12',
    tags: ['Coffee', 'Lifestyle', 'Food']
  },
  {
    id: 'b4',
    slug: 'entering-2026-vizag',
    title: 'Vizag in 2026: A City in Transition',
    excerpt: 'As we step into 2026, Visakhapatnam feels different. It’s no longer just a retirement paradise; it’s a city sprinting towards the future.',
    content: [
      "The calendars have changed, and so has the skyline. Walking down Beach Road this New Year's morning, the air felt charged with something new. Vizag is growing up. The flyovers are longer, the cafes are fuller, and the traffic... well, let's not talk about the traffic.",
      "But amidst the construction dust of 2026, the soul remains. The old fisherwomen still haggle loudly near the harbor, and the lighthouse still blinks its rhythmic warning to ships that have sailed from halfway across the world.",
      "This year feels like a tipping point. With new infrastructure projects finally taking shape, the conversation is shifting from 'what could be' to 'what is'. Yet, my hope for 2026 is simple: that we find a way to grow without losing the quiet charm that makes us love this city.",
      "Here is to a year of sunrise walks, strong coffee, and finding balance in a city that is learning to run."
    ],
    date: 'January 2, 2026',
    readTime: '3 min read',
    image: 'https://picsum.photos/800/600?random=13',
    tags: ['NewYear', 'CityLife', 'Growth']
  },
  {
    id: 'b5',
    slug: 'google-data-center-vizag',
    title: 'The Cloud Touches Down: Google in Vizag',
    excerpt: 'The massive new facility rising in Madhurawada isn\'t just steel and servers; it\'s a signal that Vizag is ready for the big leagues.',
    content: [
      "It’s official. The tech giant has planted a flag in our soil. The ongoing work at the data center park near Kapuluppada is more than just industrial expansion; it's a statement. For years, Vizag was the 'City of Destiny' waiting for its destiny. With investments like Google's data center, the narrative is shifting.",
      "I drove past the site yesterday. The scale is impressive. But beyond the physical structure, it represents a digital backbone for the region. It brings the promise of high-tech jobs and a startup ecosystem that doesn't feel the need to migrate to Hyderabad or Bangalore immediately.",
      "For a city that has always relied on heavy industry—steel and shipping—this pivot to data and digital infrastructure is refreshing. It aligns perfectly with the FinTech Valley aspirations we've heard about for years.",
      "The cloud has physically touched down in our coastal town. It will be exciting to see how the local talent pool evolves to meet this new demand."
    ],
    date: 'December 28, 2025',
    readTime: '3 min read',
    image: 'https://picsum.photos/800/600?random=14',
    tags: ['Tech', 'Development', 'Future']
  }
];