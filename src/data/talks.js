// Talks data with semantic IDs independent of schedule slots
// This allows flexible scheduling and easy reorganization

export const talks = {
  // KEYNOTES
  "reaction-view": {
    id: "reaction-view",
    title: "ReActionView: An ActionView-Compatible ERB Engine",
    speakerId: "marco-roth",
    description:
      "This talk is the conclusion of a journey I’ve been sharing throughout 2025. At RubyKaigi, I introduced Herb: a new HTML-aware ERB parser and tooling ecosystem. At RailsConf, I released developer tools built on Herb, including a formatter, linter, and language server, alongside a vision for modernizing and improving the Rails view layer.",
    type: "keynote",
    status: "confirmed",
    tags: ["rails", "frontend"],
  },
  "ruby-ai-conversation": {
    id: "ruby-ai-conversation",
    title: "Ruby & AI conversation",
    speakerId: "obie-fernandez",
    description:
      "A conversation about the intersection of Ruby and AI technologies, exploring opportunities and challenges.",
    type: "keynote",
    status: "confirmed",
    tags: ["ai", "ruby", "future"],
  },
  "rails-ai-ruby-llm": {
    id: "rails-ai-ruby-llm",
    title: "RubyLLM: One API, One Person, One Machine for AI",
    speakerId: "carmine-paolino",
    description:
      "The Merchants of Complexity have sold the AI world a lie. You need their frameworks. Their SDKs. Their enterprise architectures. Bullshit. AI today is just API calls. That's it. And when the game becomes building products instead of training models, complexity is death and simplicity is everything. Rails proved it. <br><br> RubyLLM: one API for every model, every vendor. One developer on one machine serving thousands. While Python developers debug their 14-line \"Hello World,\" we're shipping. Ruby's time in AI isn't coming - it's here.",
    type: "keynote",
    status: "confirmed",
    tags: ["rails", "ai", "llm"],
  },
  "rails-x-keynote": {
    id: "rails-x-keynote",
    title: "Rails X",
    speakerId: "vladimir-dementyev",
    description: "The mysterious Rails X. Stay tuned!",
    type: "keynote",
    status: "confirmed",
    tags: [],
  },

  "play-with-code": {
    id: "play-with-code",
    title: "Play with your code",
    speakerId: "rachael-wright-munn",
    description:
      "Why are programming games more fun than our day jobs? We're going to dig into this exact question and see what lessons we can learn from them, and how we can bring it back to our developer experience. Also, we're going to talk about some rad programming games you should play!",
    type: "talk",
    status: "confirmed",
    tags: ["developer-experience", "learning", "fun"],
  },
  "opensource-rails-startup": {
    id: "opensource-rails-startup",
    title: "How to open-source your Rails startup",
    speakerId: "sam-poder",
    description:
      "As Rails developers, we develop on the shoulders of giants. We can do what we can do because of the work of thousands of open source contributors; I want to encourage more developers to give back through open sourcing their work.\n\nThis also isn't a subject talked about often and having just taken a codebase from open to closed source, I can offer a unique perspective. I remember struggling with a lack of resources of the subject when we started the project. Hopefully this talk can make it easier for the next person who open sources their codebase.",
    type: "talk",
    status: "confirmed",
    tags: ["open-source", "startups", "community"],
  },
  "rails-asset-pipeline": {
    id: "rails-asset-pipeline",
    title: "Master the Rails Asset Pipeline: Best Practices for Apps & Gems",
    speakerId: "adrian-marin",
    description:
      "I toyed around with asset handling a lot in the last 4 years. I started in the pre-webpacker era, and came all the way to importmaps, esbuild and vite.\n\nI ship a gem (Avo), which is used in hundreds of different applications with different asset pipeline configurations, and use several techniques to ship my assets.\nNow I'm developing a plugin system and have hit all the roadblocks I can hit and have a better understanding of how things work.",
    type: "talk",
    status: "confirmed",
    tags: ["rails", "assets", "gems", "frontend"],
  },
  "zjit-ruby-performance": {
    id: "zjit-ruby-performance",
    title: "ZJIT: The Future of Ruby Performance",
    speakerId: "takashi-kokubun",
    description:
      "Since Rails 7.2 enabled YJIT by default, it has been widely adopted by the Ruby community, delivering a 10-20% speedup in various production workloads. To enhance Ruby's speed even further, we're developing the next generation of YJIT for Ruby 3.5: ZJIT. In this talk, we'll delve into the exciting future of Ruby performance that ZJIT will unlock.",
    type: "talk",
    status: "confirmed",
    tags: ["performance", "ruby", "jit", "optimization"],
  },
  "realtime-collaboration-rails": {
    id: "realtime-collaboration-rails",
    title: "Real-time collaboration with Rails, AnyCable and Yjs",
    speakerId: "jp-camara",
    description:
      "Real-time collaboration is a powerful tool for web apps, but difficult to implement. Most Ruby developers lack CRDT exposure and collaborative software challenges like conflict resolution and distributed consistency. This talk shows how to leverage Rails while adding sophisticated collaborative features using AnyCable to boost ActionCable performance and Yjs to simplify collaborative editing.\nI've specifically been implementing this approach in a production Rails setting, giving me a solid perspective on the challenges involved.",
    type: "talk",
    status: "confirmed",
    tags: ["rails", "realtime", "websockets", "collaboration"],
  },
  "start-writing-ruby": {
    id: "start-writing-ruby",
    title: "Start Writing Ruby (Stop Using Classes)",
    speakerId: "dave-thomas",
    description:
      "We are writing our Ruby code wrongly. We're using classes as the unit of design; we needn't, and we shouldn't. We use design patterns as recipes; they're largely irrelevant. We come up with arcane project structures and convoluted deployment systems; we needn't.\n\nFor the last half-decade, I've been writing Ruby very differently to my previous style. Almost no classes. Creating structure as it grows, rather than before I start. Drastically cutting down dependencies. The result: my code seems drastically easier to write, maintain, and reuse.\n\nI'd like the opportunity the spread the word.",
    type: "talk",
    status: "confirmed",
    tags: ["ruby", "design", "architecture", "paradigms"],
  },
  "technical-marketing": {
    id: "technical-marketing",
    title:
      "From code to customers: technical marketing for people who'd rather be building",
    speakerId: "colleen-schnettler",
    description:
      "Too many brilliant Rails developers build great products and then quit when customers don't appear.\nThey're missing one skill: marketing. I want to change that.\nThe Rails renaissance is here (huge thanks to Evil Martians!), and I believe helping Rails builders become successful entrepreneurs is crucial for our community's future. This might be the conference's most impactful talk.\nWhy me? I'm a technical founder who's built three startups and now coach technical founders on marketing. I've lived this journey and help others navigate it daily.",
    type: "talk",
    status: "confirmed",
    tags: ["marketing", "startups", "entrepreneurship", "business"],
  },
  "thin-client-approach": {
    id: "thin-client-approach",
    title: "The Thin CLIent Approach",
    speakerId: "jeremy-evans",
    description:
      "This presentation will discuss a novel approach to CLI development, where the command line arguments are passed to an endpoint instead of being parsed by the client program, and the advantages and disadvantages doing so. It will discuss the development of a new command line argument parsing library, cross compiling client line programs, and how this approach enabled usage of the CLI without installation, by integrating support for it into a web application.",
    type: "talk",
    status: "confirmed",
    tags: ["cli", "architecture", "tools"],
  },
  "software-design-ai-world": {
    id: "software-design-ai-world",
    title: "The Role of Software Design in an AI World",
    speakerId: "sarah-mei",
    description:
      "Ruby devs, like all devs, are nervous about their worth in an AI world. This talk gives them reason to be optimistic, & will start to open for them a vista in which they are enhanced by AI rather than being replaced.\n\nFor 10+ years I've spoken, written, & thought deeply about software design. For the last 6 months I've worked with code assistants to see what they can do in real Rails codebases - not new projects or toy apps. I've got some initial conclusions that are worth sharing widely.",
    type: "talk",
    status: "confirmed",
    tags: ["ai", "design", "future", "career"],
  },
  "opensource-business-sidekiq": {
    id: "opensource-business-sidekiq",
    title: "Open source as a business with Sidekiq",
    speakerId: "mike-perham",
    description:
      "Learn how to build a successful open source business model from the creator of Sidekiq.",
    type: "talk",
    status: "confirmed",
    tags: ["open-source", "business", "sidekiq"],
  },

  // BLACKBOX THEATER TALKS
  "derailing-our-application": {
    id: "derailing-our-application",
    title:
      "Derailing Our Application: How and Why We Are Decoupling Our Code from Rails",
    speakers: ["fito-von-zastrow", "alan-ridlehoover"],
    description:
      "Successful Rails apps tend to become massive monoliths over time. Our's is no exception. Our team is over 1000 engineers. Our codebase is over 4 million lines of Ruby.\n\nBut, Rails doesn't tell you how to manage that many developers working on that large a codebase. So, we're encouraging modularization and boundaries within our codebase. Our approach is lightweight and actually producing results.\n\nWe're the right ones to talk about this because we're the one's issuing the guidance internally.",
    type: "talk",
    status: "confirmed",
    tags: ["architecture", "monolith", "modularization", "scale"],
  },
  "rails-expertise-distilled": {
    id: "rails-expertise-distilled",
    title: "Rails Expertise, Distilled: AI Agents That Get Your Monolith",
    speakerId: "brandon-weaver",
    description:
      "New developers face months of unproductive confusion when dropped into massive codebases they can't navigate or understand. What if they could get instant answers about how systems work, identify what code needs changing, and understand complex business logic without waiting for help? This talk demonstrates how Rails' built-in introspection transforms into expert AI tools that understand your specific codebase, making institutional knowledge accessible 24/7. Instead of 3-month ramp-ups, developers contribute meaningfully in days while the entire team stays productive.",
    type: "talk",
    status: "confirmed",
    tags: ["ai", "agents", "business logic", "monolith"],
  },
  "performance-starts-at-boot": {
    id: "performance-starts-at-boot",
    title: "Performance starts at boot",
    speakerId: "ben-sheldon",
    description:
      "Everyone can better understand how their Ruby code performs, regardless of whether they're using Rails or Hanami or just scripting with Ruby. As applications grow, I frequently see inside-out application performance work ignored or unacceptably tolerated (\"that's just the way it is [sigh]\").",
    type: "talk",
    status: "confirmed",
    tags: ["performance", "optimization", "ruby"],
  },
  "peace-love-crud": {
    id: "peace-love-crud",
    title:
      "Peace, Love, and CRUD: Finding Calm in the Chaos—With Ruby, AI, and a Little Garden Magic",
    speakerId: "tia-anderson",
    description:
      "This talk matters because we are enduring death by a thousand quiet cuts. The world asks us to go faster while our spirits beg us to slow down. Emotional exhaustion has become the norm, but it doesn't have to be. I built Peace of Mind not just with Rails, but with urgency and heart. As a newer dev and RailsConf Scholar, I've lived the tension between burnout and beauty. Choosing peace...in our work, our lives, and our code creates ripples. It starts with one. One you. One me.",
    type: "talk",
    status: "confirmed",
    tags: ["wellness", "burnout", "ai", "personal"],
  },
  "ai-interface-mcp-rails": {
    id: "ai-interface-mcp-rails",
    title: "AI Interface in 5 Minutes - Model Context Protocol on Rails",
    speakerId: "pawel",
    description:
      "This talk delivers a low-risk, high-value AI strategy that applies to any Rails app, new or old. It proves the ecosystem's power to modernize existing assets in the AI era without the need for expensive rewrites. It teaches one of the key aspects of the modern AI tech stack, giving a competitive advantage.\n\nI'm a CTO, a veteran Rails developer and a vetted conference speaker. My expertise on a similar topic is validated by my upcoming talks at Rails World and EuRuKo this year. I'm excited to bring this timely material to the US community",
    type: "talk",
    status: "confirmed",
    tags: ["ai", "mcp", "rails", "integration"],
  },
  "mcp-fog-ruby-inspector": {
    id: "mcp-fog-ruby-inspector",
    title: "The MCP Fog Made Me Do It: A Ruby Inspector's Unexpected Journey",
    speakerId: "enrique-mogollan",
    description:
      'MCP is still pretty foggy for most developers, and Ruby shouldn\'t be left out of the AI tooling party. This story shows how a simple "let me figure this out" project can accidentally become something fun and interesting to share. I\'ve been learning about MCP, from the official ruby SDK, and stumbled onto this idea of self-generating UI interfaces. If you\'ve ever stared a new project and wondered "how do I even start?", this talk is one example from foggy confusion to sunshine moment of "holy smokes, I didn\'t know that was possible." Besides, Ruby deserves a seat at the AI table.',
    type: "talk",
    status: "confirmed",
    tags: ["ai", "mcp", "tools", "learning"],
  },
  "cloud-data-infrastructure-ruby": {
    id: "cloud-data-infrastructure-ruby",
    title: "Building Cloud Data Infrastructure with Ruby",
    speakerId: "evgeny-li",
    description:
      "Ruby isn't just for web development. Discover why Ruby is a great choice for building and automating modern cloud data infrastructure. Learn real-world lessons from BemiDB, a data analytics platform. You'll gain practical skills and be inspired to leverage Ruby for your next infrastructure project!",
    type: "talk",
    tags: ["infrastructure", "cloud", "data", "devops"],
  },
  "shipping-solo-rails8": {
    id: "shipping-solo-rails8",
    title:
      "Shipping Solo with Rails 8: Building Dada the African Menopause Companion",
    speakerId: "naijeria-toweett",
    description:
      "This talk shows what Ruby and Rails do best: enabling solo developers to build meaningful, user-focused apps with speed, clarity, and joy. I've spent 15 years in the NGO and social impact space, where I've seen huge amounts of money wasted on overbuilt tech that communities didn't need. I'm now using Rails 8, open-source tools, and user-driven design to build DADA — a real product for a deeply underserved audience. I'm living proof that Ruby still empowers builders to move fast, stay lean, and create software that actually helps people.",
    type: "talk",
    status: "confirmed",
    tags: ["rails8", "solo-developer", "social-impact", "product"],
  },
  "operating-rails-production": {
    id: "operating-rails-production",
    title: "Operating rails: what about after you deploy?",
    speakerId: "andre-arko",
    description:
      "Running a web service requires you to do so many things that aren't included in any programming books or tutorials. We need more developers able to ship services that work, rather than expecting each developer to figure out the entire list by trial and error, one at a time, by themselves. Blog posts with individual tips about isolated problems don't cut it either, because no one is creating a field survey or a checklist of the overall process and making sure developers are aware of and ready for what they'll face in production.",
    type: "talk",
    status: "confirmed",
    tags: ["devops", "production", "operations", "deployment"],
  },
  "pack-it-up-gusto": {
    id: "pack-it-up-gusto",
    title:
      "Pack It Up: Why Packwerk Can’t Save Your Messy Rails App (But You Can)",
    speakerId: "stephan-hagemann",
    description:
      "Packwerk promised modularity in a gem install — but good architecture doesn’t come from `bundle add`. We’ll look at how Packwerk’s story reflects deeper truths about software design, organizational habits, and how we sometimes ask our tools to do our growing for us. This is a call to arms (and to our love of the craft) for teams that want to scale Rails applications by scaling their understanding first.",
    type: "talk",
    status: "confirmed",
    tags: ["modularization", "scale", "production", "rails"],
  },

  "navigating-language-evolution": {
    id: "navigating-language-evolution",
    title: "Navigating programming language evolution in the AI era",
    speakerId: "jose-valim",
    description:
      "As AI becomes increasingly integrated into software development, we find ourselves facing questions about how our programming languages and tools should evolve - questions that don't yet have clear answers. Rather than prescribing solutions, this talk explores the open questions and possible directions that developers and tooling authors should be grappling with.",
    type: "talk",
    status: "confirmed",
    tags: ["programming languages", "ai"],
  },

  "gitbutler-afterparty": {
    id: "gitbutler-afterparty",
    title: "🎉 GitButler Afterparty 🍻",
    description:
      "Join us at San Francisco Brewing Co. (3150 Polk St, San Francisco, CA 94109) for an evening of food, drinks, and great conversations with fellow Rubyists! Sponsored by our Ruby friends from GitButler!",
    type: "social",
    speakers: [],
    status: "confirmed",
    tags: ["social", "networking", "afterparty"],
    venue: "San Francisco Brewing Co.",
    address: "3150 Polk St, San Francisco, CA 94109",
  },
  "scaling-rails-to-two-million": {
    id: "scaling-rails-to-two-million",
    title: "Scaling Rails to two million MySQL requests per second",
    speakerId: "eugene-kenny",
    description:
      "I whistle stop tour of various patterns and techniques Intercom's monolith used to go from rails new intercom  to comfortably scaling to over two million MySQL requests per second. Expect practical takeaways on replication, sharding, caching, connection routing, and upgrade strategy, plus the bumps and trade‑offs we hit along the way. ",
    type: "talk",
    status: "confirmed",
    tags: ["scale", "mysql", "database", "performance"],
  },

  // WORKSHOPS
  "building-agents-rails": {
    id: "building-agents-rails",
    title: "Building Agents with Rails",
    speakerId: "justin-bowen",
    description:
      "Hands-on workshop for building AI agents using Rails framework and modern AI tools.",
    type: "workshop",
    duration: 110, // minutes
    maxParticipants: 48,
    prerequisites: [
      "Basic Rails knowledge",
      "Laptop with Ruby/Rails installed",
    ],
    status: "confirmed",
    tags: ["ai", "agents", "rails", "hands-on"],
    link: "https://lu.ma/ygn5m3pm",
    linkText: "Sign Up for Workshop",
  },
  "inertia-rails-workshop": {
    id: "inertia-rails-workshop",
    title: "Inertia Rails Workshop",
    speakers: ["brandon-shar", "svyatoslav-kryukov", "brian-knoles"],
    description:
      "Inertia.js solves a huge pain point for server side MVC frameworks: clean integration with rich client-side libraries like React, Vue, and Svelte. Inertia Rails allows both sides of this equation to shine. The Rails code looks almost exactly like vanilla Rails code (without the view layer), which keeps existing Rails teams productive. On the client, Inertia Rails takes away a lot of the headaches in gluing React and Rails together: session based auth, server side global state management, and Inertia form submissions make life much easier on teams.",
    type: "workshop",
    duration: 110, // minutes
    maxParticipants: 48,
    prerequisites: [
      "Rails experience",
      "Basic React/Vue/Svelte knowledge helpful",
    ],
    status: "confirmed",
    tags: ["inertia", "rails", "frontend", "spa"],
    link: "https://lu.ma/67m5dqr1",
    linkText: "Sign Up for Workshop",
  },
  "upskill-diving-into-rails": {
    id: "upskill-diving-into-rails",
    title: "Upskill Your Team by Diving into Rails itself & other Gems",
    speakerId: "kasper",
    description:
      "There's a ton of untapped potential in Rails and other gem source for upskilling that teams aren't leveraging because they don't know how. And there's almost no content showing how.\n\nThis problem hurts Ruby open source, because teams don't know how to contribute or make gems (exposure to real open source code is the first step IMO).\n\nI've given several Rails source deep-dive workshops over Zoom that 70+ people have attended. I've shown a live-demo of this on stage at RailsConf that attendees raved about.",
    type: "workshop",
    duration: 110, // minutes
    maxParticipants: 48,
    prerequisites: [
      "Intermediate Rails knowledge",
      "Familiarity with Ruby gems",
    ],
    status: "confirmed",
    tags: ["rails", "open-source", "gems", "learning"],
    link: "https://lu.ma/jxv24vkp",
    linkText: "Sign Up for Workshop",
  },
  "dynamic-ruby-toolkit-workshop": {
    id: "dynamic-ruby-toolkit-workshop",
    title: "The Dynamic Ruby Toolkit",
    speakerId: "noel-rappin",
    description:
      "Ruby rewards thinking about types with a dynamic mindset instead of a static one. In this workshop, we’ll show how use Ruby’s dynamism to your advantage. From the humble comment to runtime type checking, from tests to debugging techniques, from data management to true object-oriented design, this workshop will give you the tools you need to bring out Ruby’s full power.",
    type: "workshop",
    duration: 110, // minutes
    maxParticipants: 48,
    prerequisites: [],
    status: "confirmed",
    tags: [],
    link: "https://lu.ma/ekzvr472",
    linkText: "Sign Up for Workshop",
  },
  "open-mic": {
    id: "open-mic",
    title: "Open Mic",
    description:
      "Our tradition at SF Ruby is a session where anyone can grab a mic for a couple minutes to share their announcements, news, or ask  a question.",
    type: "panel",
    moderator: null,
    speakers: [],
    status: "confirmed",
    tags: ["open mic"],
  },
  "thank-you": {
    id: "thank-you",
    title: "Thank You",
    description: "Thank you for joining the SF Ruby!",
    type: "talk",
    moderator: null,
    speakers: ["irina-nazarova"],
    status: "confirmed",
    tags: ["thank you"],
  },

  "startup-demos-day1": {
    id: "startup-demos-day1",
    title: "Ruby Startup Demos",
    type: "demo",
    startupIds: ["recognize", "fin", "thatch", "angellist", "planetscale"],
    speakers: [],
    status: "confirmed",
    tags: ["startups", "demos", "products"],
  },
  "startup-demos-day2-main-part1": {
    id: "startup-demos-day2-main-part1",
    title: "Ruby Startup Demos",
    type: "demo",
    startupIds: ["bolt_new", "stepful", "nexhealth", "simple_ai", "sixfold"],
    speakers: [],
    status: "confirmed",
    tags: ["startups", "demos", "products"],
  },
  "startup-demos-day2-main-part2": {
    id: "startup-demos-day2-main-part2",
    title: "Ruby Startup Demos",
    type: "demo",
    startupIds: ["cactus", "superconductor", "aisquared", "ubicloud", "finta"],
    speakers: [],
    status: "confirmed",
    tags: ["startups", "demos", "products"],
  },
  "startup-demos-day2-blackbox-part1": {
    id: "startup-demos-day2-blackbox-part1",
    title: "Ruby Startup Demos",
    type: "demo",
    startupIds: ["accessgrid", "suppli", "tend", "sunchaser"],
    speakers: [],
    status: "confirmed",
    tags: ["startups", "demos", "products"],
  },
  "startup-demos-day2-blackbox-part2": {
    id: "startup-demos-day2-blackbox-part2",
    title: "Ruby Startup Demos",
    type: "demo",
    startupIds: ["coracomputer", "terminalwire", "chatwithwork"],
    speakers: [],
    status: "confirmed",
    tags: ["startups", "demos", "products"],
  },
  "lucas-film-walk": {
    id: "lucas-film-walk",
    title: "Yoda Fountain and Star Wars museum",
    description:
      "Join us for a short walk through Presidio to the Lucasfilm lobby: we'll see the Yoda Fountain, and a small museum: life sized Darth Vader costume, original lightsabers, and other props.",
    type: "social",
    speakers: [],
    status: "confirmed",
    tags: ["social"],
    venue: "Lucasfilm",
    address: "1110 Gorgas Ave, San Francisco, CA 94129",
  },
  "ruby-hackathon-angellist": {
    id: "ruby-hackathon-angellist",
    title: "Hack Day at AngelList",
    description:
      "Join us for a full-day Hack Day at AngelList - doors open from 9am, official Hack Day from 10 am to 4pm! Work on Ruby projects, collaborate with fellow Rubyists, and build something amazing. Whether you're working on open source contributions, personal projects, or just want to learn from others, this is the perfect opportunity to code together. All skill levels welcome!",
    type: "talk",
    speakers: [],
    status: "confirmed",
    tags: ["hackathon", "community", "coding"],
    venue: "AngelList",
    link: "https://lu.ma/sfrubyconf25hackday",
    linkText: "Sign Up",
  },
  "golden-gate-alcatraz-swim": {
    id: "golden-gate-alcatraz-swim",
    title: "Golden Gate to Alcatraz Swim",
    description:
      "What: The Golden Gate Bridge to Alcatraz swim is a 2.9-mile (4.7 km) guided route hosted by Pacific Open Water Swim Co. With a strong tidal push, calmer waters, and unbeatable views of San Francisco, it's the easiest and most stunning Alcatraz swim they offer.\n\nLocation: Travis Marina/Satterlee Breakwater Shore Parking, located at the end of Marina Rd/Sommerville Rd. in Sausalito, CA\n\nCost: $239.00",
    type: "social",
    speakers: [],
    status: "confirmed",
    tags: ["community", "sports", "swimming"],
    venue: "Travis Marina/Satterlee Breakwater Shore Parking",
    address: "Marina Rd/Sommerville Rd, Sausalito, CA",
    link: "https://www.pacificswim.co/alcatraz-swims/",
    linkText: "Register",
  },
  "golden-gate-bike-tour": {
    id: "golden-gate-bike-tour",
    title: "Golden Gate Bridge Bike Tour & Alcatraz Ferry Ride",
    description:
      "This 8-mile guided tour with Blazing Saddles will run from 10am-1pm. We'll leave from the bike shop 3 blocks away from the conference center. It includes stops at the Presidio and a ride across the Golden Gate Bridge over to Sausalito, followed by a 30-minute ferry ride back which goes right past Alcatraz and drops you off at Pier 41 near Fisherman's Wharf.\n\nYou can choose from electric or regular bike and the rental comes with helmet, lock, etc and you can keep the bike for up to 24 hours.\n\nTotal cost with rental, ferry ride, and tax is $94.71 for regular bike or $116.55 for electric bike. That price includes a 20% booking discount when you book online.\n\nRead the Luma event description for more details and or email the organizer kane@fixture.media with any questions.",
    type: "social",
    speakers: [],
    status: "confirmed",
    tags: ["community", "sports", "biking", "tours"],
    venue: "Blazing Saddles - Hyde Park location",
    address: "Near Fisherman's Wharf, San Francisco, CA",
    link: "https://luma.com/n1reh5hj",
    linkText: "Learn More & Book",
  },
  "morning-fort-run": {
    id: "morning-fort-run",
    title: "Morning Fort to Fort 10K Run",
    description:
      "Fort to fort 10k run (based on the DSE Runners route - but open to changes or suggestions). Easy pace, no pressure.",
    type: "social",
    speakers: [],
    status: "confirmed",
    tags: ["community", "sports", "running"],
    link: "https://dserunners.com/event/fort-to-fort-10k-10/",
    linkText: "Route Info",
  },
  "community-day-placeholder": {
    id: "community-day-placeholder",
    title: "Community Day Event: claim it!",
    description:
      "Day 3 is open to unofficial community events like hikes, museum walks, tours of the city, and more. Share your event idea and join fellow Rubyists for a day of community activities!",
    type: "talk",
    speakers: [],
    status: "tentative",
    tags: ["community"],
    link: "https://forms.gle/W3reGgxKUV1mb7Z39",
    linkText: "Submit an Event",
  },
};

// Helper functions
export function getTalk(talkId) {
  return talks[talkId];
}

export function getTalksByType(type) {
  return Object.values(talks).filter((talk) => talk.type === type);
}

export function getTalksByStatus(status) {
  return Object.values(talks).filter((talk) => talk.status === status);
}

export function getTalksByTag(tag) {
  return Object.values(talks).filter(
    (talk) => talk.tags && talk.tags.includes(tag),
  );
}

export function getTalksWithSpeakers(speakers) {
  return Object.values(talks).map((talk) => {
    // Handle multiple speakers
    if (talk.speakers && Array.isArray(talk.speakers)) {
      return {
        ...talk,
        speakerDetails: talk.speakers.map((id) => speakers[id]).filter(Boolean),
      };
    }
    // Handle single speaker
    else if (talk.speakerId) {
      return {
        ...talk,
        speakerDetails: speakers[talk.speakerId]
          ? [speakers[talk.speakerId]]
          : [],
      };
    }
    // No speaker assigned
    return {
      ...talk,
      speakerDetails: [],
    };
  });
}

// Get all unique tags
export function getAllTags() {
  const tags = new Set();
  Object.values(talks).forEach((talk) => {
    if (talk.tags) {
      talk.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

// Validate talk data
export function validateTalk(talk) {
  const errors = [];

  if (!talk.id) errors.push("Talk must have an ID");
  if (!talk.title) errors.push("Talk must have a title");
  if (!talk.type) errors.push("Talk must have a type");

  if (talk.type === "workshop") {
    if (!talk.duration) errors.push("Workshop must have a duration");
    if (!talk.maxParticipants)
      errors.push("Workshop must have max participants");
  }

  // Allow panels, demos, and open mic sessions to have empty speakers (they might be TBD)
  const allowEmptySpeakers =
    ["panel", "demo"].includes(talk.type) || talk.id === "open-mic";
  if (
    !allowEmptySpeakers &&
    !talk.speakerId &&
    (!talk.speakers || talk.speakers.length === 0)
  ) {
    errors.push("Talk must have at least one speaker");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Export talk types for consistency
export const TALK_TYPES = {
  KEYNOTE: "keynote",
  TALK: "talk",
  WORKSHOP: "workshop",
  PANEL: "panel",
  DEMO: "demo",
};

// Export talk status for consistency
export const TALK_STATUS = {
  CONFIRMED: "confirmed",
  TENTATIVE: "tentative",
  CANCELLED: "cancelled",
};

// Export track names for consistency
export const TRACKS = {
  MAIN: "main",
  BLACKBOX: "blackbox",
  WORKSHOP: "workshop",
};

// Helper function to get talks by speaker ID
// Handles talks with single speaker (speakerId) or multiple speakers (speakers array)
export function getTalksBySpeakerId(speakerId) {
  return Object.values(talks).filter((talk) => {
    // Check single speaker field
    if (talk.speakerId === speakerId) {
      return true;
    }

    // Check multiple speakers array
    if (talk.speakers && Array.isArray(talk.speakers)) {
      return talk.speakers.includes(speakerId);
    }

    return false;
  });
}
