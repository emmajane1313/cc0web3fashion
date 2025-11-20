import {
  Articulo,
  TimelineEvent,
  Video,
} from "../components/Common/types/common.types";
import { Org } from "../components/Orgs/types/orgs.types";

export const SIZES: string[] = ["XS", "S", "M", "L", "XL", "2XL"];

export const MERCH_MARKET: `0x${string}` =
  "0x9863a56a8C3e03500661aE18Aecd91b4fa0f8EB9";

export const GDN_ADDRESS: `0x${string}` =
  "0xc7e32D9D3f916a59898A3bf7125efDd24eaf69a0";

export const ACCEPTED_TOKENS: string[][] = [
  [
    "WGHO",
    "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
    "QmZRqza7VxetyQh2JWvxC6PsnXVUPVV7vU3RS1XUhuqmNA",
  ],
  [
    "MONA",
    "0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd",
    "QmS6f8vrNZok9j4pJttUuWpNrjsf4vP9RD5mRL36z6UdaL",
  ],
  [
    "WETH",
    "0xE5ecd226b3032910CEaa43ba92EE8232f8237553",
    "QmWuCzbiK3k7igJE6L1XfCJTUqzxs91ihnwHSCmYSpP7eS",
  ],
];

export const TOKENS: { symbol: string; contract: string; image: string }[] = [
  {
    symbol: "WGHO",
    contract: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
    image: "QmYCDxCv7mJyjn49n84kP6d3ADgGp422ukKzRyd2ZcGEsW",
  },
  {
    symbol: "WETH",
    contract: "0xE5ecd226b3032910CEaa43ba92EE8232f8237553",
    image: "QmYJ6cpGRgQAr2d5hJDJ9CaJukt2szcHc1AqFBy9m6knUw",
  },
  {
    symbol: "MONA",
    contract: "0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd",
    image: "QmZSDyGYYy9hn8RAUC1vZeZXC5y2H3YimzajJRngCTu5Fq",
  },
];

export const INFURA_GATEWAY: string = "https://digitalax.xyz/api/infura/";
export const GROVE_GATEWAY: string = "https://api.grove.storage/";
export const FORUM_FEED: string = "0x5df7430a146019F1940CF494e8C3821f9303C422";
export const BANNER: { alt: string; imagen: string; enlace: string }[] = [
  {
    imagen: "QmYT687r7DGXRAq86yAdPpaDCwtSYoWBWchsoM5ru78hRy",
    alt: "Lit Listener by DIGITALAX",
    enlace: "https://listener.irrevocable.dev/shop",
  },
  {
    imagen: "QmZZLH3SPELyY79Mkf8tg1whY7S9SYtYLdEExK2hubsZgv",
    alt: "Pixelsorted by DIGITALAX",
    enlace:
      "https://chromadin.xyz/es/autograph/digitalax/collection/pixelsorted/",
  },
  {
    imagen: "QmPPPYwCt3Nr5oVVAqkGuposKbeJ23tatFQifsK3SBcgVe",
    enlace: "https://coinop.themanufactory.xyz/",
    alt: "Coin Op Web3 Fashion by DIGITALAX",
  },
  {
    imagen: "QmWQLoBtyA1J3wf9gh6j7KFzhkJCVooonzUBSdpMNtpcty",
    enlace:
      "https://chromadin.xyz/es/autograph/digitalax/collection/circuits_in_bloom/",
    alt: "circuits in bloom by DIGITALAX",
  },
  {
    imagen: "QmcTMfyieV3eJrCqMHyxVwmugQ8nC8Vjb4xwdTRH13zzMy",
    enlace: "https://coinop.themanufactory.xyz/",
    alt: "Coin Op Web3 Fashion by DIGITALAX",
  },
  {
    imagen: "QmTjkjgknsftD6MN7mz6MsYS3omZ7TfoCdZDHzPqnvBvE6",
    enlace: "https://f3manifesto.xyz/es/collect/ocean-blvd/",
    alt: "OCEAN BLVD by F3Manifesto",
  },
  {
    imagen: "QmVgW5gyN4QWRvkFBnTM1FfDsy43vQwna6pQLoodAocRGk",
    enlace: "https://triplea.agentmeme.xyz/nft/zaneorigami505/836/",
    alt: "Cosmic Whispers of Time",
  },
  {
    imagen: "QmdqJQvkX6r6tmofv25sxf5MGUgRq2hEWAxidtyj8a3JjB",
    enlace: "https://kinora.irrevocable.dev/es/storefront/",
    alt: "Blazequill Firefeathe by DIGITALAX",
  },
  {
    imagen: "QmbrZseVCZK41ujMKyvmnXXH2uMQJAavEeUwvffSQowrQa",
    enlace: "https://f3manifesto.xyz/es/collect/a-mini-projector/",
    alt: "A MINI PROJECTOR by F3Manifesto",
  },
  {
    imagen: "QmbsKNhdRJXM5L5DqkKLH21GKiPext566AoBisCMba9UTg",
    enlace: "https://f3manifesto.xyz/es/collect/equipped/",
    alt: "Equipped by F3Manifesto",
  },
  {
    imagen: "QmXp5VDNiVdyZiktHA454Tis1tQobAoKqX53u3fNX2KrZc",
    alt: "FLTK by F3Manifesto",
    enlace: "https://f3manifesto.xyz/es/collect/fltk/",
  },
  {
    imagen: "QmW8kjkMzziiiG9zhdngDn686NjhU5jRrLWhZtQRacaeSv",
    enlace: "https://triplea.agentmeme.xyz/nft/zaneorigami505/844/",
    alt: "Echoing Shadows",
  },
  {
    imagen: "QmXajmzt4tyZv7QHHjpaD1gjZzE3jspD3j6g8bmAXPD7iq",
    enlace: "https://cypher.digitalax.xyz/item/coinop/Eldritch_Nightbloom/",
    alt: "Eldritch Nightbloom by DIGITALAX",
  },
  {
    imagen: "QmVfPCbo2jEsqKP2B3f5QZRVy5TuH37u48SdJ1q4WKiyYp",
    enlace: "https://listener.irrevocable.dev/shop",
    alt: "Lit Listener by DIGITALAX",
  },
  {
    imagen: "QmcYFwvWSP2zc4cDEPiuDSCxQLTc4ewq6mGg1NZcmDUq4E",
    enlace: "https://triplea.agentmeme.xyz/nft/pixierain/850/",
    alt: "Whispering Shadows by DIGITALAX",
  },
  {
    imagen: "QmVEYcThQL35TGWtkwKAAZpBoR14pfZJhcfdnDWeps6ApY",
    alt: "synaptic by DIGITALAX",
    enlace: "https://cypher.digitalax.xyz/es/item/chromadin/synaptic/",
  },
  {
    imagen: "QmYxhbLowrjhR8DWZ8fm6dUDX5smBueVxhkqFEa4SAJvci",
    enlace: "https://f3manifesto.xyz/es/collect/sue%C3%B1os-en-oferta/",
    alt: "SUEÑOS EN OFERTA by F3Manifesto",
  },
  {
    enlace: "https://cypher.digitalax.xyz/es/item/f3m/Cuimhnich_Bas_Ailpein/",
    imagen: "QmVj3A3avfdHqxTBZ5a1Dw3agzAfDwFHbSgGdmVC7ZiPXc",
    alt: "Cuimhnich Bas Ailpein by F3Manifesto",
  },
];

export const ORGS: Org[] = [
  {
    imagen: "Qmdh9UV5UY68bRUBdhhWaqv1dhemYAEQ8r9jPezaYaLenT",
    titulo: "DIGITALAX",
    categoria: "Protocol x Infrastructure",
    descripcion: "The protocol layer of Web3 Fashion.",
  },
  {
    imagen: "QmXM6QSYCbMJ5eXJHuGqMTbCTkaDqth5c4NswX2nWTpenB",
    titulo: "Chromadin",
    categoria: "Content is King",
    descripcion:
      "A live stream of collection culture built natively on Lens. Fast, weird, loud, and always on.",
  },
  {
    imagen: "QmRXrv2icSyRi5P7VEx9yWh66VQB9UiiYPSt2NDkuGAcB9",
    titulo: "Coin Op",
    categoria: "Manufactory",
    descripcion:
      "A small interface for making things: NFTs, prints, garments. Canvas included.",
  },
  {
    imagen: "QmQ81mzd6V5b57rXabEQQaWEg6zSxVY3tLHafx3XGVm14s",
    titulo: "Cypher Search",
    categoria: "Content is King",
    descripcion:
      "Just the shortest path to what’s been published, collected, or encrypted in the ecosystem.",
  },
  {
    imagen: "QmNcrdusMU9qch4imSkCFtgSNXHVhd8fin8Ur6ySLKFERz",
    titulo: "The Manufactory",
    categoria: "Manufactory",
    descripcion: "Decentralized production and fulfillment studio.",
  },
  {
    imagen: "QmPRURdUCv5ArkhqyhHn6aicHbQVMATDyL1wzmT55bK2Nr",
    titulo: "Skyhunters",
    categoria: "DeFi",
    descripcion: "Hype hunting wingmen agents.",
  },
  {
    imagen: "QmNQ5fe9Ruyy8LDMgJbxCnM8upSus1eNriqnKda31Wcsut",
    titulo: "TripleA",
    categoria: "Agents",
    descripcion: "Agent infrastructure for generative outputs—mostly fashion.",
  },
  {
    imagen: "QmZ9jPeuD1SNRuFx2SjQSJGSR445FoMHV3WU9ddW7S7mb7",
    titulo: "NPC Studio",
    categoria: "Agents",
    descripcion:
      "Local agents with memory, personality, and intent, surfacing autonomously in social spaces on Lens.",
  },
  {
    imagen: "QmbF9Lt5KQ3m9xxnqSRD2nmcr5mgtf1V2ruRYcrMnrFpni",
    titulo: "The Dial",
    categoria: "Content is King",
    descripcion: "A pirate radio. 3 Seasons of latent conversations.",
  },
  {
    imagen: "QmcY6zRcfQyr7pahRVaSwzT3J7ibiDNYwWUFkg9aFA4tE2",
    titulo: "ListenerSDK",
    categoria: "Tooling",
    descripcion: "Selective encryption that reacts to on-chain activity.",
  },
  {
    imagen: "QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS",
    titulo: "KinoraSDK",
    categoria: "Tooling",
    descripcion:
      "Minimal infra for measuring on-chain video. Useful for quests. Built on Livepeer and Lens.",
  },
  {
    imagen: "QmfAQag73312yoCehj62rLTMyCMWxNE5rK6ikHGDdXqHn7",
    titulo: "Lucidity",
    categoria: "Tooling",
    descripcion: "A ComfyStream assistant with minimal patience.",
  },
  {
    imagen: "QmQk9TqFivUqc6ktosoZVVih9o1uiY3r5Z7F3GCC1FpaJS",
    titulo: "Kinora",
    categoria: "Content is King",
    descripcion: "First quests for The Dial Pirate Radio.",
  },

  {
    imagen: "QmQTyhpCZWTTfvYV9K9NxHUEB42p9xzvDurdUDMdkpZFbp",
    titulo: "Stryke",
    categoria: "Microbrands",
  },

  {
    imagen: "QmSB5mULA8p1dyRphQs6jEHqgDHVZM4Y17HJcDmCcCbdaN",
    titulo: "0XQBIT",
    categoria: "Microbrands",
  },
  {
    imagen: "QmRg5xNf5NrvvFhBj63bbwA3HaqJxc18MHEFStPPfvbiBs",
    titulo: "HIRO",
    categoria: "Microbrands",
  },
  {
    imagen: "QmbeJo8D7zdZCKaLGaG1yzsx8mbiSHRiH57PBwbErKeabV",
    titulo: "F3M",
    categoria: "Microbrands",
  },
  {
    imagen: "QmdPkUaUoLmS7bVwsoTUsLcjwB1pg2VLRM88TxB4vV2tde",
    titulo: "أنا",
    categoria: "Microbrands",
  },
  {
    imagen: "QmQXCSzdmbsjGmqQrDXpTSR4rtYPNDFHdtWTRvC7Lc6Fyg",
    titulo: "DOS2048",
    categoria: "Microbrands",
  },
  {
    imagen: "QmTDzbrHTa79qniBkzLpWSJwkeGeiwyUbPjsnV7StopGec",
    titulo: "VerbandDen",
    categoria: "Microbrands",
  },
  {
    imagen: "QmZy2Pm6vKUX8nn9XN1rj5g5yZvba2gsLutJvQSFKaMtK1",
    titulo: "Skecz98",
    categoria: "Microbrands",
  },
  {
    imagen: "QmQHdxXYev989zkK1Wtem245XusViRKZELzZR7bGpRU8iH",
    titulo: "re_de",
    categoria: "Microbrands",
  },
  {
    imagen: "Qmd1oiVbG21L3mx4ZWBmPmv9RK7RTrUvW4nX81fCphZ8w6",
    titulo: "futurememory",
    categoria: "Microbrands",
  },
  {
    imagen: "QmZ5Xnu4Y8vo2yr3R67ouf2ZYK7NrQCiiQFt6MEnri94PF",
    titulo: "w111th",
    categoria: "Microbrands",
  },
  {
    imagen: "QmX5Hsa5mNV2t3Tn1SevMdccCkdLSc7bWiRBTzTLoNPXza",
    titulo: "e2eVHS",
    categoria: "Microbrands",
  },
  {
    imagen: "QmXEirw79xRgAUGsede2xZwx2vn5CRxwh7y1xverAapmQJ",
    titulo: "Synthetic Futures",
    categoria: "Microbrands",
  },
  {
    imagen: "QmcDkvHrjPzR2WKymLWmPiCu36dChKP4Qtdo8wFHv962cj",
    titulo: "Put2",
    categoria: "Microbrands",
  },
  {
    imagen: "QmVeD9GsHUNZRJhnTTisX5J1szVW3qAfqmm6RuKrJJAzKF",
    titulo: "yawp11",
    categoria: "Microbrands",
  },
  {
    imagen: "QmTJCqQY3R4jdBEBruG3Q3nQEvsJ8aSgfFSirnAKr3hRur",
    titulo: "isekai",
    categoria: "Microbrands",
  },
];

export const ARTICULOS: Articulo[] = [
  {
    titulo: "Sloppy Agents and the Risk of a Dead Internet",
    enlace:
      "https://blog.digitalax.xyz/sloppy-agents-and-the-risk-of-a-dead-internet-f90618db4fa0",
    descripcion:
      "The real risk is sloppy agents, not Skynet. Not some threat of being overtaken by superintelligences",
  },
  {
    titulo: "Sovereign Mints of Culture: Microbrands in Web3",
    descripcion:
      "This same DNA forms the heartbeat of web3 microbrands in the urban scene.",
    enlace:
      "https://blog.digitalax.xyz/sovereign-mints-of-culture-microbrands-in-web3-fb87e796c68c",
  },
  {
    titulo: "Generative Markets",
    descripcion:
      "These are not just machines. They provoke the human in us, stitch together the chance to create surplus value from upgraded networks",
    enlace:
      "https://blog.digitalax.xyz/generative-markets-challenged-by-social-media-web3-commerce-ai-80a38a327467",
  },
  {
    titulo: "Sold Out Soles: Terms of the Deal Not Disclosed",
    enlace:
      "https://mirror.xyz/emmajane.eth/JNTv_l43MkHbmwQ_nYglMC4Seew6xFmszvZn_tXC83M",
    descripcion:
      "Who needs NIKE anymore when we can just own it ourselves and be ourselves creating it?",
  },
  {
    titulo: "Moda Web3",
    enlace: "https://syntheticfutures.xyz/en/post/web3-fashion/",
    descripcion:
      "When you look closer, the material is intimate. So much more than just clothing. The interface, and protective layer, between us and the world. Even when that's just playing on repeat.",
  },
  {
    titulo: "Unbundling Threads",
    enlace: "https://syntheticfutures.xyz/en/post/unbundling-threads/",
    descripcion:
      "We've reached the end of history, or economics, then. With formulas for how new opportunities rise from the study and ashes of old legacies.",
  },
  {
    titulo: "Recession Nostalgia",
    descripcion: "It seemed easy. Decentralize all of it.",
    enlace: "https://blog.digitalax.xyz/recession-nostalgia-c6ea3acb8e03",
  },
  {
    titulo: "Trash the Myths. It's a New Fashion Movement.",
    enlace:
      "https://mirror.xyz/emmajane.eth/2nFFeG7SkR5MuDF9YmHP53EdmaVu4nV_9-J1qg6ReL8",
    descripcion:
      "Trash fashion breaks the illusion. It is the ultimate form of expression that you can wear and take off without permission.",
  },
  {
    titulo: "Moda Web3",
    enlace: "https://syntheticfutures.xyz/es/post/moda-web3/",
    descripcion:
      "Caminando por las calles de la urbe, en cualquier ciudad moderna del siglo XXI",
  },
  {
    titulo: "Despaquetizando Hilos",
    enlace: "https://syntheticfutures.xyz/es/post/despaquetizando-hilos/",
    descripcion:
      "Sea cual sea tu moda, prepárate. El desembalaje de todas las industrias te espera.",
  },
];

export const VIDEOS: Video[] = [
  {
    titulo: "Desde el Telar Jacquard",
    cover: "QmVRTvdQF9Uh8Xyy4DTP6huEzWYe7ECeNXp2NpZjXsbXUn",
    enlace:
      "https://chromadin.xyz/es/?video=111193134470966780798907030995759955362788353865932000395938216676283605797184",
    descripcion:
      "¿Qué saben los agentes sobre la moda en web3? Temporada 3, Episodio 2, La Radio Pirata del Dial.",
  },
  {
    titulo: "For Indie Designers",
    enlace:
      "https://chromadin.xyz/es/?video=27434563319472690858582327418713427656272183834396708989594705356277781595876",
    cover: "QmXKRQ6i5xxTM1qRoTHkUd45cuMY3fT3BmrUsikjfAXPdq",
    descripcion: "Tune in to this agent's thread: what's fashion about web3?",
  },
  {
    titulo: "No Mr. Khrushchev",
    enlace:
      "https://chromadin.xyz/es/?video=19941247888346924968936860334482122153116615320380873193618245361321612497383",
    cover: "Qmb2M48ZEZKgCjwebnp13Heojyi59aa71Hc9ZWG9o9BXWr",
    descripcion: "An F3M Production. @f3manifesto #samizdat",
  },
  {
    enlace:
      "https://chromadin.xyz/es/?video=12365466459199864627360871505917203799726468408912759719695954164410534508895",
    titulo: "The Always Machine",
    descripcion: "Live from The Manufactory. Track FMA Portrayal, Lost Souls.",
    cover: "QmNVyvZUPBRubF6HsziE4ab9ayzXYbV5CFjxRdovLGbnDC",
  },
  {
    enlace:
      "https://chromadin.xyz/es/?video=76785693202595752522150132084044640578345739659957974302341600651371388509359",
    titulo: "In The Street It’s Just Available",
    descripcion:
      "I’m not hiding what I’m trying to do. I’m just out there saying I just want you to buy it.",
    cover: "QmYpZAjT3J7NypHEDrQbC9w1Xe3GFHXJvZfs9JHQLH7Fce",
  },
];

export const GECKO_BASE: string = "https://api.coingecko.com/api/v3";

export const CARTELES: { imagen: string; titulo: string }[] = [
  {
    imagen: "digitalax_poster.png",
    titulo: "CC0 Is A Skill | by DIGITALAX",
  },
  {
    imagen: "digitalax_poster1.png",
    titulo: "Sewing Machines 101 | by DIGITALAX",
  },
  {
    imagen: "digitalax_poster2.png",
    titulo: "End the Surveillance State | by DIGITALAX",
  },
  {
    imagen: "digitalax_poster3.png",
    titulo: "Not your keys, not your body | by DIGITALAX",
  },
];

export const GUERRAS: Articulo[] = [
  {
    titulo:
      "The Thread That Snapped: Notes from a Network That Tried to Eat Itself",
    descripcion:
      "Working around the clock to help people who had no clue what web3 even meant. Answering every message. Shipping fixes they didn’t understand. And still—somehow—more entitled, more demanding. Like I owed them something. Like I worked for them. This is what happened when I stopped.",
  },
  {
    titulo: "You Know Who You Took That From",
    descripcion:
      "There’s a difference between inspiration and extraction. Meanwhile, clients wait. Deliveries stall. Accountability vanishes. And the silence says more than any statement ever could.",
  },
  {
    titulo: "The Sole Exchange: When Brands Leave Their Bodies Behind",
    descripcion:
      "Some names arrive with noise, promise, and speed—only to leave traces of themselves scattered across undelivered boxes and deflated hype. This is a story about shoes, yes. But mostly it’s about the cost of selling a myth before you’ve even laced it up.",
  },
  {
    titulo: "An X and a Dress",
    descripcion:
      "You mean you give designers 8%? I couldn’t have made that up. And working with them only confirmed everything. Extractive terms disguised as empowerment. Zero understanding of what web3 even is. Zero interest in learning. Zero Style, Zero Protocol.",
  },
];

export const ADVERTENCIAS: { titulo: string; descripcion: string }[] = [
  {
    titulo: "⚠️ Before you scroll:",
    descripcion:
      "Web3 Fashion means what it says. No licenses. No gatekeepers.The patterns, the synths, the looks—they’re CC0.<br /><br />And no—it doesn’t mean just a design with NFTs.<br />This isn’t just minted.<br />It lives on-chain.<br /><br />Encrypted storefronts, anonymous purchase, real autonomy. No platform watching. No forced login. Just you and the fabric.<br /><br />This is for the tailors who know that fashion is code, and code should be free.",
  },
  {
    titulo: "⚠️ Antes de Hacer Scroll:",
    descripcion:
      "La Moda Web3 es lo que dice que es. Sin licencias. Sin guardianes.<br />Los patrones, los sintetizadores, los looks—todo es CC0.<br /><br />Y no—no se trata simplemente de un diseño con NFTs.<br />No es solo algo minteado.<br />Vive on-chain.<br /><br />Escaparates cifrados, compra anónima, autonomía real.<br />Sin plataformas vigilando. Sin login forzoso. Solo tú y el tejido.<br /><br />Esto es para las modistas y los sastres que entienden que la moda es código, y el código debe ser libre.",
  },
  {
    titulo: "⚠️ Antes de Rolar:",
    descripcion:
      "Moda Web3 é exatamente o que parece. Sem licenças. Sem guardiões.<br/>Os moldes, os sintetizadores, os visuais—tudo em CC0.<br/><br/>E não—não é só um design com NFTs.<br/>Isso não é só mintado.<br/>Está on-chain.<br/><br/>Lojas criptografadas, compra anônima, autonomia de verdade.<br/>Sem plataforma vigiando. Sem login obrigatório. Só você e o tecido.<br/><br/>Isso é pra quem entende que moda é código, e código tem que ser livre.",
  },
];

export const DESIGNERS: { titulo: string; descripcion: string }[] = [
  {
    titulo: "🧵 The Web3 Fashion Designer:",
    descripcion:
      "They code. Stitch encryption into seams. Fabrics, patterns, protocols—skills, not vibes. To break the lock, not hold the keys. Patterns, code, and cryptography. They fork it. Rewire it. They patch and publish. Some whisper of independence. The old king is dead. The crown survives. That's not the fashion of web3.<br/><br/>Maybe they were on that cypherpunk list. Maybe they were too young. Didn’t matter. They started a new one. This designer doesn’t bother with the old world. They're not clout chasing the galas, the gatekeepers, the “fashion weeks” in dead capitals.<br/><br/>The action isn’t there anymore. And it wasn’t, really, ever.<br/><br/>This designer builds skills in the dark forest. When it’s ready, it ships. When it breaks, they fix it. They study what came before. They use the sharpest tools they can get. Then strip them down, run them local, cut the telemetry. They don’t just build. They document. Write it up, airgapped, and leave it somewhere others can find it. If you’re reading this, it’s time to level up.",
  },
  {
    titulo: "🧵 Diseñador de Moda Web3:",
    descripcion:
      "Programa. Cose encriptación en las costuras. Tejidos, patrones, protocolos—habilidad, no vibes. Para romper el cerrojo, no para custodiar llaves. Patrones, código y criptografía. Hace fork, reconfigura. Parchea y publica. Algunxs susurran independencia. El viejo rey ha muerto. La corona sobrevive. Eso no es moda Web3.<br/><br/>Quizá estuvo en aquella lista cypherpunk. Quizá era demasiado joven. Da igual. Empezó una nueva. No pierde el tiempo con el viejo mundo. No busca validación en galas, guardianes o “fashion weeks” en capitales muertas.<br/><br/>Ahí ya no pasa nada. Y en realidad, nunca pasó.<br/><br/>Forja habilidades en el bosque oscuro. Cuando está listo, lo lanza. Si se rompe, lo repara. Estudia lo que vino antes. Usa las herramientas más afiladas que puede conseguir. Luego las desmonta, las ejecuta localmente, corta la telemetría. No solo construye. Documenta. Lo escribe, sin conexión, y lo deja donde otrxs puedan encontrarlo.<br/><br/>Si estás leyendo esto, es hora de subir de nivel.",
  },
  {
    titulo: "🧵 Designer de Moda Web3:",
    descripcion:
      "Programa. Costura criptografia nas costuras. Tecidos, moldes, protocolos—habilidade, não vibe. Para quebrar o cadeado, não guardar a chave. Moldes, código e criptografia. Faz fork, reconfigura. Corrige e publica. Algumxs sussurram independência. O velho rei morreu. A coroa sobrevive. Isso não é moda Web3.<br/><br/>Talvez estivesse na lista cypherpunk. Talvez fosse jovem demais. Não importa. Criou outra. Não se importa com o velho mundo. Não está atrás de holofotes em galas, curadores ou “semanas de moda” em capitais mortas.<br/><br/>A ação não está mais lá. E, na real, nunca esteve.<br/><br/>Desenvolve suas skills na floresta escura. Quando está pronto, lança. Quando quebra, conserta. Estuda quem veio antes. Usa as ferramentas mais afiadas que encontra. Depois desmonta, roda local, desliga a telemetria. Não só constrói. Documenta. Escreve offline e deixa onde outrxs possam encontrar.<br/><br/>Se você está lendo isso, é hora de evoluir.",
  },
];

export const DIGITALAX: string = "0xaA2915d96455484EFca08F7295324170f0ce6974";
export const F3MANIFESTO: string = "0x998f214873835a4d0c31fdD76b49d4e198b3Ee9E";
export const TRIPLEA: string = "0x8784c10d22362931616e913ebe2433097ab9EE6a";

export const STAKING: Articulo[] = [
  {
    titulo: "What does staking do for an ecosystem?",
    descripcion:
      "The key question in every web3 project is what does staking do for the ecosystem? Here, in the comprehensive IRL and virtual web3 fashion advancing hyper-local production networks that DIGITALAX exists to cultivate and serve, the most important of all functions staking serves is the deconcentration of token creativity, production, trade and access. It is an incentive to diversify usage, adoption and continued circulation between a growing number and range of holders.",
  },
  {
    titulo: "Will $MONA be listed on a centralised exchanged?",
    descripcion:
      "Well, it’s totally out of our hands. As everyone knows, DIGITALAX is entirely focused on the advancement of maximal and practical decentralisation in all forms. That includes exchange listings. Many may not know that behind the scenes at almost all centralised exchanges there is a heavy element of pay to play, which, not only do we not have any willingness to engage in, but don’t believe that any true web3 project should either.",
  },
  {
    titulo: "More rugs?",
    descripcion:
      "Primary wealth sources are and will always be more catalytic, robust and self-advancing than secondary speculation.<br/><br/>The majority of people in the market today can’t tell the difference between a blue chip project and fake copycat crap on the market. In fact, this is one of the core reasons why we have seen so much hype, over substance.<br/><br/>The most important thing for anyone wanting to get into this market & start leveraging it efficiently so that it can work for them, is to begin with learning the difference between what makes some of these new wealth generating tools and assets real authentic web vs knockoff fakes pretending to be web3.",
  },
  {
    titulo: "What about prices?",
    descripcion:
      "$MONA exists in a free market. There is always ups and downs, that’s just how free markets operate.<br/><br/>Second, $MONA is a core utility in a long term project. You can think of it like a custom and purpose built incentive for embedding sustainable value within the ecosystem. Staking was implemented as a fair distribution of the $MONA token to the community, where the team took a 0% allocation.<br/><br/>What we are building doesn’t just appear over night, it takes real time and hard work— continuous hard work. Therefore, these short term fluctuations, in our perspective, don’t mean much in the bigger picture.",
  },
  {
    titulo:
      "Is it really possible to bring millions of new people into DeFi through fashion?",
    descripcion:
      "Yes, and, often before a massive market shift it’s not entirely clear how that could be possible. Because most people can’t be expected to believe in what they haven’t seen before, until they are given consistent rewards from it and then wish that they had bought into it earlier. It’s entirely understandable because of how much there is at risk.<br/><br/>To be the first at anything good, unfortunately requires withstanding an often prolonged period where not only does no one see what you see but where you need to have enough grit and determination to see it through no matter how hostile and dismissive people might be.<br/><br/>Bringing fashion into DeFi, like bringing DeFi into existence before it, is one of those things where very few people will see it before it becomes obvious in retrospect. And that’s why DIGITALAX is here. To make it so obvious that millions of people can skip past the “is it or isn’t it” real stage and get right into enjoying the benefits.",
  },
];

export const EVENTS: TimelineEvent[] = [
  {
    title: "Lanzamiento de DIGITALAX",
    date: "Agosto 2020",
    description: "Presentamos DIGITALAX, el protocolo de Moda Web3.",
  },
  {
    title: "Conoce a MONA",
    date: "Octubre 2020",
    description: "Conoce a MONA y el DOF Sheet.",
  },
  {
    title: "GDN",
    date: "Noviembre 2020",
    description: "Lanzamiento de la Global Designer Network.",
  },
  {
    title: "The Crypto Essentials",
    date: "Noviembre 2020",
    description:
      "Primera subasta de moda digital NFT con NFTs que se pueden hacer stake.",
  },
  {
    title: "Staking",
    date: "Noviembre 2020",
    description: "Staking de NFT Génesis, NFTs de moda y $MONA.",
  },
  {
    title: "Transparencia On-Chain",
    date: "Noviembre 2020",
    description:
      "Primer informe mensual de transparencia on-chain del protocolo DIGITALAX DAO.",
  },
  {
    title: "FGO",
    date: "Diciembre 2020",
    description: "Propiedad fraccionada de prendas con ERC1155 x ERC721.",
  },
  {
    title: "Rush Corp x ROBNESS",
    date: "Diciembre 2020",
    description: "Subasta NFT de moda digital 02 con NFTs stakeables.",
  },
  {
    title: "PODE",
    date: "Diciembre 2020",
    description: "NFT de Propiedad Perpetua y Economía Digital.",
  },
  {
    title: "FGO x Degrees of Exclusivity",
    date: "Enero 2021",
    description: "Subasta NFT de moda digital 03 con NFTs stakeables.",
  },
  {
    title: "Formato de archivo DASH",
    date: "Enero 2021",
    description: "Revisión 1.",
  },
  {
    title: "Estándar FGO",
    date: "Febrero 2021",
    description: "FGO Estándar 0001: licencia de propiedad + distribución.",
  },
  {
    title: "ESPA",
    date: "Febrero 2021",
    description:
      "Plataforma de esports para desarrolladoras y modders independientes.",
  },
  {
    title: "Subasta de Activos Sociales",
    date: "Febrero 2021",
    description: "Human Rights Foundation x Wear Your Values.",
  },
  {
    title: "Skins en juego",
    date: "Marzo 2021",
    description: "Moda NFT Web3 en el marketplace de ESPA.",
  },
  {
    title: "$MONA en Polygon",
    date: "Marzo 2021",
    description: "$MONA escala a Polygon.",
  },
  {
    title: "Mod de Among Us",
    date: "Marzo 2021",
    description:
      "Lanzamiento del mod de Among Us en ESPA con subasta de skins Digi-fizzy.",
  },
  {
    title: "Hybrid DRIP",
    date: "Abril 2021",
    description:
      "Lanzamiento de Drip, el marketplace híbrido digital-presencial de moda.",
  },
  {
    title: "Puente ERC-998",
    date: "Abril 2021",
    description: "Primer puente multi-token.",
  },
  {
    title: "DIGIFIZZY",
    date: "Mayo 2021",
    description:
      "Lanzamiento del número 1 de la revista del metaverso, DIGIFIZZY.",
  },
  {
    title: "Portal de Creadoras",
    date: "Mayo 2021",
    description: "Evaluaciones in-game de PODE.",
  },
  {
    title: "Staking en Polygon",
    date: "Junio 2021",
    description: "Staking de NFTs de moda en Polygon.",
  },
  {
    title: "ESPA Minecraft",
    date: "Junio 2021",
    description: "Skins de Bedwars + lanzamiento de ESPA.",
  },
  {
    title: "Generación de Patrones On-Chain Open Source",
    date: "Junio 2021",
    description:
      "Lanzamiento de la biblioteca open source on-chain de prendas fraccionadas.",
  },
  {
    title: "Wear to DeFi",
    date: "Julio 2021",
    description: "Colección DRIP presencial con FGO y staking.",
  },
  {
    title: "GDN DAO",
    date: "Agosto 2021",
    description: "Lanzamiento de la DAO y del token de gobernanza.",
  },
  {
    title: "Semana de la Moda Web3",
    date: "Agosto 2021",
    description: "Primera Semana de la Moda Web3.",
  },
  {
    title: "$MONA x Bancor",
    date: "Agosto 2021",
    description: "$MONA en el AMM de Bancor.",
  },
  {
    title: "Colecciones Infinitas",
    date: "Agosto 2021",
    description: "Lanzamiento de nuevo marketplace.",
  },
  {
    title: "LOOK: Fashion Loot",
    date: "Septiembre 2021",
    description: "Libro de looks generativo y componible en texto de moda.",
  },
  {
    title: "NFTs Generativos GDN",
    date: "Septiembre 2021",
    description: "Distribución de NFTs generativos GDN.",
  },
  {
    title: "Sastrería del Metaverso",
    date: "Septiembre 2021",
    description: "Pedidos de moda Web3 a medida.",
  },
  {
    title: "The DLTA",
    date: "Septiembre 2021",
    description: "Sistema de evaluación DLTA en funcionamiento.",
  },
  {
    title: "Historias de Sastrería Web3",
    date: "Septiembre 2021",
    description: "Registro de historias de diseñadoras en Web3.",
  },
  {
    title: "Wayfare",
    date: "Octubre 2021",
    description: "Lanzamiento de misiones Wayfare.",
  },
  {
    title: "PubDAO",
    date: "Octubre 2021",
    description: "DIGIFIZZY se une a PubDAO.",
  },
  {
    title: "Gobernanza",
    date: "Noviembre 2021",
    description: "Foro de propuestas de gobernanza en Snapshot.",
  },
  {
    title: "Reinos de Diseñadoras",
    date: "Noviembre 2021",
    description: "Lanzamiento de los reinos para diseñadoras con blueprint.",
  },
  {
    title: "Art Basel",
    date: "Diciembre 2021",
    description: "DIGITALAX en Art Basel.",
  },
  {
    title: "F3Manifesto",
    date: "Diciembre 2021",
    description: "La Marca de Moda Web3, F3Manifesto, se lanzó.",
  },
  {
    title: "Collector DAO",
    date: "Diciembre 2021",
    description: "Marketplace Web3 de moda para Collector DAO.",
  },

  {
    title: "Semana de la Moda de Nueva York",
    date: "Febrero 2022",
    description: "Pasarela Realm en NYFW.",
  },
  {
    title: "GMS",
    date: "Febrero 2022",
    description: "Lanzamiento del Global Modals Syndicate.",
  },
  {
    title: "Modelos de los Reinos",
    date: "Marzo 2022",
    description: "Colaboraciones NFT de modelos IRL x digital.",
  },
  {
    title: "CC0 Refactory & DAO",
    date: "Marzo 2022",
    description: "Lanzamiento del DAO CC0 + subastas diarias.",
  },
  {
    title: "Máquinas Componibles Abiertas",
    date: "Mayo 2022",
    description: "Publicación del whitepaper V3.",
  },
  {
    title: "NFT NYC",
    date: "Junio 2022",
    description: "The Sticky y la mixtape anti-inflación CC0.",
  },
  {
    title: "GenAI",
    date: "Octubre 2022",
    description: "Lanzamiento de la interfaz GenAI con nuevas colecciones.",
  },
  {
    title: "Chromadin",
    date: "Noviembre 2022",
    description:
      "Interfaz de streaming 24/7 + marketplace de colecciones en Lens.",
  },
  {
    title: "DIGIFIZZY Vol. 2",
    date: "Diciembre 2022",
    description: "Volumen 2 de DIGIFIZZY con emisiones latentes 24/7.",
  },
  {
    title: "La Radio Pirata del Dial",
    date: "Enero 2023",
    description: "Se lanzó La Radio Pirata del Dial en Chromadin.",
  },
  {
    title: "Microbrands Web3",
    date: "Septiembre 2023",
    description: "Lanzamiento de microbrands soberanas de cultura.",
  },
  {
    title: "Lit Listener",
    date: "Septiembre 2023",
    description:
      "Lanzamiento de PKP, ListenerSDK y storefront con Lit Protocol.",
  },
  {
    title: "The Manufactory",
    date: "Octubre 2023",
    description:
      "Lanzamiento de The Manufactory, red descentralizada de producción local.",
  },
  {
    title: "Coin Op",
    date: "Octubre 2023",
    description: "Coin Op: moda GenAI DIY sobre Lens.",
  },
  {
    title: "Kinora",
    date: "Diciembre 2024",
    description:
      "Lanzamiento de KinoraSDK, storefront y panel de vídeo misiones junto a Livepeer.",
  },
  {
    title: "Cypher Search",
    date: "Enero 2024",
    description: "Coin Op: moda GenAI DIY sobre Lens.",
  },
  {
    title: "NPC Studio",
    date: "Marzo 2024",
    description: "Lanzamiento de NPC Studio.",
  },
  {
    title: "El Catálogo Trimestral",
    date: "Abril 2024",
    description: "Lanzamiento de El Catálogo Trimestral con El Estudio NPC.",
  },
  {
    title: "NPC Studio Spectators",
    date: "Agosto 2024",
    description:
      "NPC Studio con espectadores e interacciones con agentes autónomos.",
  },
  {
    title: "Triple A",
    date: "Diciembre 2024",
    description: "Mercado de moda Web3 agentic junto a Venice.ai.",
  },
  {
    title: "Lucidity",
    date: "Marzo 2025",
    description: "Exploración agentic con ComfyUI.",
  },
  {
    title: "Puente $MONA Lens",
    date: "Abril 2025",
    description: "Se lanzó el puente entre Eth Mainnet y Lens Mainnet.",
  },
  {
    title: "Lens V3",
    date: "Junio 2025",
    description: "Todas las apps refactorizadas para Lens V3 en ZK Sync.",
  },
  {
    title: "El Foro de Moda CC0 Web3",
    date: "Julio 2025",
    description: "Se lanzó el foro en Lens para Moda CC0 Web3.",
  },
  {
    title: "FG0 V3",
    date: "Septiembre 2025",
    description:
      "Suite de contratos de Open Manufacturing Stack. La propiedad, los derechos y el cumplimiento se instrumentan y autentican programáticamente.",
  },
  {
    title: "App Local de Coin Op",
    date: "Septiembre 2025",
    description:
      "Canal de moda digital efervescente. Formato, plantilla, sintetizador, compuesto, patrón de cero residuos, Blender, cumplimiento, venta.",
  },
  {
    title: "Futuros de FGO",
    date: "Septiembre 2025",
    description:
      "Comprar y vender contratos futuros de FGO sobre derechos de fabricación física con $MONA. Recompensas por liquidación para titulares de NFT de Genesis y PODE.",
  },
  {
    title: "Synth Moda",
    date: "Octubre 2025",
    description: "Un plugin de Blender para ingeniería de patrones.",
  },
  {
    title: "Genesis",
    date: "Noviembre 2025",
    description: "Mintear en Lens Mainnet.",
  },
  {
    title: "Ionic",
    date: "Noviembre 2025",
    description:
      "PODEV3, mintear en Lens Mainnet. Los poseedores de Ionic tasan NFTs enviados usando paquetes de reacciones (conjuntos curados creados y vendidos por diseñadores invitados).",
  },
  {
    title: "Skyhunters",
    date: "Noviembre 2025",
    description:
      "Un mercado de oráculos autónomos interno donde los participantes del ecosistema crean mercados de predicción sobre sus propias métricas.",
  },
  {
    title: "Fountain Ink",
    date: "Noviembre 2025",
    description:
      "Todas las publicaciones de DIGITALAX publicadas en cadena con Fountain Ink.",
  },
  {
    title: "W3FW",
    date: "Noviembre 2025",
    description:
      "¿Y si el Stasi obtuvo financiación VC? Semana de la moda web3, lanzado a tu pantalla con 1x RTX 4090 24gb RAM.",
  },
  {
    title: "$W3F",
    date: "Noviembre 2025",
    description:
      "Gobernanza y coordinación para la Global Designer Network en Lens Mainnet. Ganado a través de mintear colecciones y actividad de mercado en GDN.",
  },
];

export const FGO: { title: string; description: string }[] = [
  {
    title:
      "Fractional Garment Ownership License and Distribution Standard 1.0 (FGO-0001) 2020",
    description:
      "The aim with DIGITALAX is not to build just a business. We are developing and operating to build and scale an industry.<br><br>DIGITALAX was first ideated through a passion and motivation for wanting to bring immense value into an industry that has not yet been properly created or established. Digital Fashion is currently one of the biggest overlooked global industries as a stand alone market segment.<br><br>In our endeavor and action to bridge the gap between digital fashion content creation and application and utility, the effects of standards have become very apparent, not just for our own undertakings, but also for the greater industry, helping to ensure the case for rapid development and iterations, whilst still enabling the means for further reach.<br><br>Thus, in order to achieve meaningful impact, we are focusing directly on building up the infrastructure for the growth and maturation of the digital fashion industry. We are placing emphasis on the fundamental elements and setting forth the standard and dress code for the manufacture of digital fashion along the digital content supply chain, directly tying into Layer 1 of our Operating System.<br><br>This will help to shape, deliver and ensure dynamic and value-driven content for our virtual worlds that can be shipped to users as quickly as possible — content that didn’t exist a second ago and that is being created in the moment.<br><br>Here, we are bringing forth the first official iteration of the <i>“Fractional Garment Ownership License and Distribution Standard 1.0 (FGO-0001)”</i>, as per our 2021 roadmap.<br><br>Fractional Garment Ownership (FGO) leverages the Ethereum blockchain and ERC Protocol standards for breaking down a master ERC-721 digital garment into its programmable and composable ERC-1155 elements of materials, patterns and textures. FGO directly enables individual artists, designers to create and issue the modular building blocks and components to a master digital fashion garment, with complete on-chain verification. This directly allows for;<br><br><div>• Completely new models of monetisation<br>• An Open Source spirit injection<br>• Authenticated and transparent tracking at each stage of the supply chain<br>• A more complete framework for valuing and assessing native digital goods<br></div><br><br><h3 class='font-bold'>How FGO Works</h3>This reconception of Fractional Garment Ownership is all verified & uniquely secured on-chain, where the ERC-1155 NFT standard is used to issue each modular garment component bound to the individual creator's identity.<br><br>These raw digital materials, patterns, textures are designed and contributed into on-chain Open Source digital material libraries that can then be leveraged by other Digital Fashion designers in their master garments and collections.<br><br>Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows for other designers to leverage off of the open source digital libraries, incorporating the patterns, materials and textures into their master garments, whilst still ensuring that all original contributors to the digital fashion item can have their IP authenticated and effectively traced across the entire journey through the digital fashion supply chain.<br><br>In concise steps:<div>1. A creator designs the individual materials, textures and patterns.<br>2. These are issued as ERC-1155 tokens, through the DIGITALAX ERC-1155 minting contracts, and under the Creator’s designated ERC-20 wallet.<br>3. These ERC-1155 NFTs are then open sourced into the DIGITALAX on-chain digital libraries. <br>4. DIGITALAX Digital Fashion Designer’s are able to incorporate these individual ERC-1155 patterns/textures into the main Digital Fashion Garment NFTs.<br>5. The Digital Fashion Garment NFTs are  thenissued as ERC-721 tokens under the digital fashion designer’s ERC-20 wallet addresses on the DIGITALAX platform.<br>6. These ERC-721 NFTs are then linked with the relevant ERC-1155 tokens on-chain through the DIGITALAX variant ERC-998 contract.<br></div><br><br><h3 class='font-bold'>Metadata Guidelines</h3>Under FGO, the on-chain metadata includes;<br><br><i>ERC-1155</i><br><br><table><thead><tr><th>FGO Creator’s Title</th><th>Degree of Exclusivity</th><th>Issue No.</th><th>Type</th></tr></thead><tbody><tr><td>Pseudonym/Real Name</td><td>Common, Semi-Rare, Exclusive.</td><td>Global Categorisation across the On-Chain Libraries (i.e. 4113).</td><td>Pattern, Material or Texture (i.e. P, M, T).</td></tr></tbody></table><br><br><i>ERC-721</i><br><br><table><thead><tr><th>Digital Fashion Designer’s Title</th><th>FGO Creator’s Title</th><th>Degree of Exclusivity</th><th>Sale Type and Order </th></tr></thead><tbody><tr><td>Pseudonym/Real Name</td><td>Creator of Child NFTs in the balance.</td><td>Common, Semi-Rare, Exclusive.</td><td>Global Categorisation across the DIGITALAX Marketplace (i.e. Auction04, Instant Buy02).</td></tr></tbody></table><br><br>Degrees of Exclusivity (DOE) classifies all of the designs in our marketplace under different rarity tiers. DOE acts as both an on-chain sorting feature for efficiently grouping and cataloguing our Open Source on-chain libraries, and, also as a mechanism and instrument for valuing native digital goods/assets.<br><br>DOE is not a limitation on the issuance balance of the ERC-1155 token, but rather, it is a constraint and specification as to which master ERC-721 garments it can be manufactured in. For example; a Common labelled Child NFT must only be used within a Common Parent/master garment NFT, or, in other words, Parent NFTs must share the same DOE trait as their “Children”.<br><br>The process for determining the DOE of an ERC-1155 Child NFT is defined under the Native Digital Asset Valuation Mechanism.<br><br><h3 class='font-bold'>Monetisation Model</h3>Sales of garments incorporating FGO are beneficial for both the Digital Fashion Designer and the pattern, material, texture supplier. Contribution royalties from the modular assets flow to the issuers of the Child NFTs for each sale of the master garment that incorporates their assets. The exact royalty provided back to the Child NFT issuer can be likened to the Lightning Network Fee Market, where each Child NFT issuer can define the percent from the total master garment sale that should be paid back to them and adjust these fees based on the competitive landscape.<br><br>As the on-chain material, pattern and texture libraries scale, and further liquidity is injected into the market, the interrelationship and balance between the defined royalty fees by the Child NFT issuer and usage of their modular component within a master garment will be strongly driven by the library's competitive landscape— helping to enable an equilibrium against the marginal output costs by the Child NFT creator i.e. minting fees, marginal resource costs etc.<br><br>Strict enforcement mechanisms of these modular royalties are not outlined in FGO-0001, considering that as of yet, cross-contract/platform secondary sale percentage distributions are not universally binding.<br><br><h3 class='font-bold'>IP and Licensing</h3>The spirit of Open Source is embedded within FGO. All of the digital materials, textures and patterns in the on-chain libraries are perpetually linked to the DIGITALAX Open Source License Standard. Under this distribution, Digital Fashion Designer’s are able to leverage on the Child NFT content for use within their own digital supply chain and creation of their master digital fashion garment— at the condition of making sure to adhere strictly to the metadata guidelines and outlined monetisation model. The Open Source nature of the digital materials, patterns and textures will be initially constrained to only being Open Sourced for use by Digital Fashion Designers that are fabricating garments for sale on the DIGITALAX marketplace or use within the DIGITALAX content ecosystem.<br><br>With the scaling of FGO, DIGITALAX further plans to incentivise an Open Source mantra into the source creation process of the Child NFT materials, patterns and textures— promoting a contribution based model, and establishing the right structures for open remixes of the assets.<br><br>Introducing proper and more transparent IP management and clarity across the supply chain ensures the development of streamlined, efficient on-chain digital ownership and democratised access channels for independent artists, digital fashion designers, brands, creators to be able to contribute creative supply into the broader digital fashion ecosystem— supporting the inevitable shift in the fashion industry from the current centralised, siloed ‘winner takes all’ model that forces creativity into a black box.<br><br><h3 class='font-bold'>Native Digital Asset Valuation Mechanism</h3>FGO is addressing underlying problems faced when it comes to the fair, transparent pricing of natively digital assets. The market is currently opaque and there are no real standards. Prices are often not backed by any proper justification or tangible value and so rely on traditional pricing mechanisms that in fact aren’t relevant to a digital-only product.<br><br>We are setting forth a more complete framework for valuing and assessing native digital goods— like that of digital fashion. The fractional material, texture and pattern composable components promote higher value and creativity across the master garment fashion pieces and also play an important role in weighing in on their rarity definitions and parameters. Here, our asset valuation mechanism addresses directly the influence that levels of exclusivity and rarity play in defining the intrinsic worth of a natively digital asset, and, further to this, identifies the natively digital factors that should be counted and included for evaluating and deciding on the Degree of Exclusivity of a digital asset.<br><br>In our current internet digital ecosystem, the most valuable native digital information, assuming that all content starts out equally, is driven by its ability to carry a message or story that can catalyse a strong emotional connection and capture an audience. Common assets are able to gain uncommon appeal through their ability to tell a story. The story acts as the baseline for the value. And, when enough engagement materialises, the content often then takes on a life of its own, rapidly spreading into what we term “virality”, and so even further amplifying the perceived digital value of the information as it is exponentially shared.<br><br>Our mechanism for determining the Degrees of Exclusivity of a fractional garment component is linked directly to the relational fabric of that component to its surrounding virality and content graph— where ultimately, a common asset can dynamically move to a state of semi-rare or even 1-1 exclusive through its ability to establish greater engagement, emotional appeal and shareability through explicit means of content generation— virality.<br><br>The Degree of Exclusivity for each Child NFT is thus able to have direct influence on the valuation of the master garment, where the individual patterns, materials and textures can be combined and added to establish the value of the entire garment—providing a maintenance margin and more direct intrinsic backing.  This native digital asset valuation mechanism keeps the Child and Parent NFTs dynamic, evolving and efficiently relevant to a respective market price judgement.<br><br><h3 class='font-bold'>Final Considerations</h3>The Fractional Garment Ownership License and Distribution Standard 1.0 (FGO-0001) is DIGITALAX’s first iteration in an evolving landscape that we are continuously building towards greater foundational integrity. It is core to Layer 1 of our Operating System and sets forth the standard and dress code for manufacturing composable, programmable, transparent and value backed digital fashion along the digital content supply chain.",
  },
  {
    title:
      "Fractional Garment Ownership License and Distribution Standard 1.2 (FGO-0001_2) 2021",
    description:
      "As DIGITALAX continues to grow as an ecosystem and build out the core infrastructure layers for digital fashion, our operating system, and the broader metaversal sphere, we are steadily introducing novel web3 enabled engineering and commercial concepts that directly reinforce the catalysation of a truly decentralised commercial (deco) framework— establishing an open fabric that will allow for creators to pursue their craft in a way where they can count on the work they are doing actually moving them, and others, forward in the industry and their lives.<br><br>In this pursuit, the authenticity of the mission and our endeavours surrounding it is indispensable. Change without progress makes us all the more vulnerable to gatekeepers and other predators that are all too happy to exploit the illusion of gain. If we are perpetuating the existing model when better is so clearly available now, then that is an intentionally harmful choice. To pretend that it is the better thing whilst it is just making money for its own sake with the old methods is even worse. This is the epitome of the Red Queen and her servants in the race. Maintaining a rigged system where to simply keep your position you have to run twice as fast.<br/><br/>A commons cannot exist if we ignore the actions, models, systems and arrangements that are destructive to the commons. All too often, and very much native to the extractive web2 structure currently in place, power goes to those that steal a free option from society. Optimising purely for self interest in the short term results in a situation where an individual benefits themselves whilst simultaneously spreading out negative effects across the larger population. It is not just pitting short term self interest against the common good, but, moreso, it is actively destroying the rest of the population, ecosystem, and co-existing environment.<br/><br/>Despite the linguistic similarities, the commons is by all means not to be confused with a communist society. The commons is a societal resource where access is guaranteed to all, beyond the control of any centralized authority. It’s about ensuring that preservation of the collective is injected into the complexity of the web3 systems we are continuing to build out; ensuring that our ecosystem is incentivized to operate as an open bazaar— where a higher level of direct exchange optimises the effectiveness of the emergent evolutionary process for eradicating false positives and unlocking progressive decentralisation and utility of the ecosystem in general.<br/><br/>Fractional Garment Ownership is an immediate first step towards reinforcing the ground roots growth and authenticity of our ecosystem to be comprehensively responsive to the commons from the most modular, composable and programmable level—the pattern, material and texture level— as the building blocks for streamlining an entirely on-chain and open source supply chain that can be scaled across both the digital and physical realms; underpinned by ERC protocol standards (1155, 721, 998). Open is important, because we must do it right.<br/><br/>Building with consideration of these lower levels not only minaturises the barriers of entry and increases accessibility for more of us to be able to engage and directly see value from our active contribution to the ecosystem, but, even moreover, it systematically emphasizes the entire protocol for encompassing antifragility. It is not enough to build out anything of this nature, or any nature, and expect it to have concrete foundations and operate in an open bazaar, when it does not possess antifragility— resilience is inadequate; resilience endures shock only to remain the same. Antifragility is not just about enduring the unexpected shock, situation or extremity, but rather it’s about actually benefiting from this convexity; being able to capture the delta of the asymmetry for guaranteeing an upside and great potentiality, whether that be through succeeding or rapidly improving. Our ecosystem is structured for overcompensation as a default response, and, with FGO, it allows for others to also leverage off of this Hydra-like reflexiveness as a hedge against precarity.<br/><br/>Additionally to this, FGO also promotes the broader mission for interweaving modding and mod culture as a core underpinning and inherently fluid and liberating mode of action for crafting metaverse ready digital fashion. It’s not just enough to plaster buzzwords or labels onto something. For a web3 enabled digital fashion industry to be real, you also need to weave authenticity and a persistent thread of substantive adaptable variability for adherence to the promotion of dynamism, overturning of gatekeepers, and facilitation of gatemakers. Modding is the fundamental practice that drives growth and change in fashion— in everything. The methodology behind modding and the byproducts that come from it are what actually build the metaverse. And, when we think about making the metaverse a reality, in whatever form that can take, being able to mod and remix different parts of it from a fractional and composable level ensures that we are not just building the metaverse and everything related to it, but rather underwriting openness, vitality and continuous uniqueness for each personal experience.<br/><br/>With this said, it’s not to say that standards are not needed for establishing dependable reference points, but, it is to say that the insertion of dynamism is essential for the core functioning of a standard within a metaversal context— the standard must be able to evolve and be modded to seamlessly plug in and work with a broad variety of cases. And, for that, we are introducing the second official iteration of the <i>Fractional Garment Ownership License and Distribution Standard 1.2 (FGO-0001_2)</i>.<br/><br/><h3 class='font-bold'>Updated Metadata Guidelines</h3>Under FGO, the on-chain metadata has remained relatively the same as FGO-0001, with two more points of inclusion (Description and unique traits);<br/><br/><i>ERC-1155</i><br/><br/><table><thead><tr><th>Designer’s Title</th><th>Pattern, Material, Texture Name</th><th>Description</th><th>Degree of Exclusivity</th><th>Issue No.</th></tr></thead><tbody><tr><td>Pseudonym/Real Name.</td><td>Name of the item.</td><td>Description of the item.</td><td>Common, Semi-Rare, Exclusive.</td><td>Global Categorisation across the On-Chain Libraries (i.e. 4113).</td></tr></tbody></table><br><br><i>ERC-721</i><br><br><table><thead><tr><th>Digital Fashion Designer’s Title</th><th>Master Garment Title</th><th>Description</th><th>FGO Creator’s Title</th><th>Degree of Exclusivity</th><th>Collection</th><th>Classifier Name</th></tr></thead><tbody><tr><td>Pseudonym/Real Name.</td><td>Name of the item.</td><td>Description of the item.</td><td>Creator of Child NFTs in the balance.</td><td>Common, Semi-Rare, Exclusive.</td><td>Global Categorisation across the DIGITALAX Marketplace.</td><td>Ad hoc for recognition across other applications.</td></tr></tbody></table><br><br>The Degrees of Exclusivity (DOE) remains as a unique feature and NFT native mechanism and instrument for valuing digital goods/assets, where a rarity tier limits both the mint count of the NFT, as well as the compatibility of a child 1155 NFT within a master 721 NFT i.e. rarity metadata must match across the child and parent NFTs.<br><br><h3 class='font-bold'>Fractional Cross Realm Royalty Compatibility</h3>Open source doesn’t mean without monetisation. Fractional garment ownership introduces web3 native decentralised commercial models whereby a designer, creator or artist is able to gain value off of their modular contribution to the entire master garment, and also have their authorship tracked transparently on-chain throughout the full cycle of the supply chain.<br><br>Our infrastructure is being built to eventually support automated fractional royalties for any designer as they contribute to our open source libraries, and then have this leveraged in both the digital and physical dimensions. The importance of the modular pattern component in this sense is reinforced, whereby the licensing, monetisation and rarity wrapper is not limited to be defined by the physical appearance of the model/garment across the digital and physical realms— but rather by using the patterns, materials, textures as this threadline ensures that digital garments are not confined by their physical counterparts.<br><br>Digital Fashion is not confined by physics, and therefore, translating a physical fashion item directly into its exact digital counterpart isn’t scalable. It is incorrect to think of this translation purely from the perspective of the whole garment model or a sole visual sense— it is the licensing, rarity and monetisation that must maintain the interoperability; through the patterns, textures, materials. This is what ensures a global and openly scalable supply chain that seamlessly instills coverage from creation to fulfillment to ongoing re-usage; and also ensures flexibility is accounted for as the garment’s modular components can be re-mixed and modded into other master designs and creations throughout the supply chain journey, and still have this triad of functionalities (licensing, rarity, monetisation model) maintained.<br><br>Although we can’t automatically enforce in smart contract code this fractional cross-chain, cross-realm royalty distribution as of yet, we still are continuing to prove out the model and hope that those that use these open source prints contribute a fractional portion of the sales back to the DIGITALAX, as we have done and plan to do for anyone contributing to our on-chain libraries going forward.<br><br><h3 class='font-bold'>Dynamic Value Assessment</h3>The spirit of Open Source is embedded within FGO. All of the digital materials, textures and patterns in the on-chain libraries are perpetually linked to the DIGITALAX Open Source License Standard. Under this distribution, Digital Fashion Designer’s are able to leverage on the Child NFT content for use within their own digital supply chain and creation of their master digital fashion garment— at the condition of making sure to adhere strictly to the metadata guidelines and outlined monetisation model. The Open Source nature of the digital materials, patterns and textures will be initially constrained to only being Open Sourced for use by Digital Fashion Designers that are fabricating garments for sale on the DIGITALAX marketplace or use within the DIGITALAX content ecosystem.<br/><br/>With the scaling of FGO, DIGITALAX further plans to incentivise an Open Source mantra into the source creation process of the Child NFT materials, patterns and textures— promoting a contribution based model, and establishing the right structures for open remixes of the assets.<br/><br/>Introducing proper and more transparent IP management and clarity across the supply chain ensures the development of streamlined, efficient on-chain digital ownership and democratised access channels for independent artists, digital fashion designers, brands, creators to be able to contribute creative supply into the broader digital fashion ecosystem— supporting the inevitable shift in the fashion industry from the current centralised, siloed ‘winner takes all’ model that forces creativity into a black box.<br><br><h3 class='font-bold'>Native Digital Asset Valuation Mechanism</h3>As the same goes for the dynamic and evolving nature of the FGO standard, it too isn’t logical to restrict the metadata and triad of functionalities of the fractional NFT components to static values. If anything is evident about the metaverse, it is the fact that it is dynamic, lively, active, and highly moddable for hyper-personalisation. Thus, when further detailing out the specifics of FGO, from both a royalty % amount and a rarity definition level; fixed amounts aren’t scalable. In fact, although acceptable for first proving out the system, in the long term, static values work to actively destroy the commons.<br><br>FGO, reinforced by the other components of DIGITALAX’s operating system, addresses underlying problems faced currently when it comes to the fair, transparent pricing of a natively digital asset. Earlier we introduced the DOF Sheet, or, DIGITALAX’S Periodic Table of Digital Fashion Elements as a new dynamic and native digital fashion pricing framework. The DOF Sheet was inspired by the 40 year old Rapaport Report — ‘Rapaport’ being synonymous with the global ‘industry’ standard for pricing diamonds. In 1978, Michael Rapaport completely changed the diamond industry when he released this report, bringing in an industry standard price guide that was able to stabilize the diamond market, prevent price manipulation and create liquidity levels and market consensus at clearing prices for which most dealers were willing to sell.<br><br>Not that this report doesn’t come without its own downfalls and problems, and like any other resource, the prices of diamonds can fluctuate. However, there is great value and fairness in being able to have diamonds with similar attributes cost the same in Japan and the United States.<br><br>The DOF Sheet translates the Child NFT digital material, pattern libraries to convert and determine the fair price of a garment, respective of its attached/linked Child NFTs. Child NFTs can be combined and added to establish the price of an entire garment and then wrapped into the Parent NFT. The DOF sheet acts as an important step in the development of fair, efficient and competitive digital fashion markets— and the key here is that the DOF Sheet is dynamic and evolving; highly responsive and reactive to broader market, economic and industry conditions. The Degree of Exclusivity for each Child NFT has the potential to evolve and become more or less unique and valuable overtime, based on data from the item itself and derivative data.<br><br>The actual pricing mechanisms for each of the patterns and materials is currently outlined to be set across three broader categories;<div >1. Asset Backed: Synthetic Child NFTs are minted on the value of locked up crypto and real assets in the DIGITALAX Factory Vault i.e. BTC, DGX (Gold), ETH. Child NFTs can now be backed by real collateral and these Child NFTs can then be attached to an ERC-721 Parent NFT for introducing tangible real world value i.e. being able to back your Bitcoin Gold by locked Bitcoin, Gold.<br>2. Oracle Price Feeds: Synthetic Child NFTs are minted to track the live price feeds from on-chain Oracles. NFT holders can lock up stable assets as collateral in the DIGITALAX Factory Vault to meet the maintenance range around the on-chain Oracle live spot price, and then mint a Synthetic Child NFT that tracks this price and is attached to a master ERC-721 NFT. This brings in new concepts of being able to attach the real world prices of elements, materials like Cotton, diamonds into the garments.<br>3. Pattern and Material Decoration Bonding Curves: Synthetic Child NFTs are printed on the material patterns/decorations according to price bonding curves that take into account supply, demand, rarity, historical usage of the Child NFT amongst different Parent NFTs. Designer’s will even be able to choose, set and leverage specific bonding curves issued around their unique patterns, materials, textures.<br></div><br/><br/>Thus, through this and also DIGITALAX’s employment of a variant of the ERC-998 standard for wrapping the 1155 NFTs with their master 721 tokens, and also the burn mechanics for unlocking the individual patterns, materials and textures from the master garment— the underlying liquid value of the Child NFTs can be unlocked through burning the master token and so bringing even further composability, stability and liquidity for a buyer. The DOF Sheet will eventually serve as a hard indicator for the prices set across both digital and physical web3 enabled fashion items, and also more importantly, start to serve as a robust industry standard. The table will expand as more and more are discovered and thus new categories and sub-tiers will emerge.<br/><br/><h3 class='font-bold'>Final Considerations</h3>Thus, in closing, through FGO, we are building out an entire Global Designer Network of creators that align with our mission of decentralisation and open source for the fashion industry. We are here to revolutionise the entire industry and do it right; overturning gatekeepers that have become comfortable with closed, exploitative, predatory, unsustainable and studio dominant models. This second iteration of the standard focuses more on the importance of the dynamism and modability of the triad of functionalities that maintain the interoperability throughout a seamlessly web3 powered supply chain— unlocking ease of access for creators operating within a decentralised commercial environment across the digital and physical.",
  },
  {
    title: "Fractional Garment Ownership Standard 3.0 (FGO-0003_0) 2025",
    description: `FGO has effectively lived off the record at 2.0 for almost two years. When Coin Op shipped in 2023, the base contracts were rebuilt from the ground up. ERC1155 remained the foundation for children and ERC721 for parents, but the logic was folded into a more deliberate template architecture that allowed for modular, print-on-demand composite NFTs. It was not that I forgot to document it. I simply chose not to.<br/><br/>In the past weeks, after completing a multi-month refactor of the entire stack to Lens Mainnet on ZKSync, I turned back to engineering a local Coin Op application with advanced pattern logic and zero-waste configuration. This finally made space to integrate the Rust Sparrow packing crate, something I had wanted since 2022 after first exploring SVGNest for algorithmic nesting. Sparrow delivered what I had been waiting for: visual, optimized, manufacturable geometry in Rust. Thank you, Jeroen Gardeyn. Yet halfway through that build it became clear that FGO V2 could not stretch to the new constraints and expanded scope of Coin Op. The architecture I had been sketching in fragments for two years had to harden into place.<br/><br/>I told myself I could deliver the contract suite in a day or two and then return to the app. Four weeks later, after 17-hour days stacked one on top of another, the suite is tested, hardened, and sitting in production shape, with many revisions still ahead. Smart contracts reward patience and precision while punishing bravado. I tried some co-authoring with Claude, but it could not resist the temptation to fabricate. And by fabricate I mean entire imagined systems, entire imagined worlds...<br/><br/>So here we are. Straight to V3. Finally. And also, no “license and distribution”. That framing no longer holds. What matters now is composability and ownership aligned directly with manufacturing rights. And even more importantly, circling back to the only principle that makes this worth doing: does it work for an indie designer. Just one. The entire system has to stand on its own at the smallest possible scale, where a single creator can spin up a fully self-sufficient digifizzy manufacturing lattice, hold and rotate the keys to their deployed contracts, reconfigure the gateways as their process evolves, and then selectively federate with other designers, fulfillers, and suppliers on their own terms. If it cannot empower that level of autonomy, then it is just scaffolding with no building.<br/><br/><h3 class='font-bold'>Context</h3>The contract suite is published as open source under CC0. No license, no restriction. Fork it, repurpose it, dismantle it as you choose.<br/><br/>Every user is assumed to operate from a shared baseline: recognition of the territorial integrity of Ukraine and Crimea against Moscow 'Mafia' occupation, recognition of Taiwan as independent from China, recognition of indigenous peoples such as the Aboriginal and Torres Strait Islander nations as the first custodians of the land now called Australia, and recognition of a two state solution between Israel, free from Kahanist extremism, and Palestine, free from Hamas. Equal rights and the capacity to build economic independence irrespective of gender, race, or love.<br/><br/>The contracts function as an open manufacturing stack. Ownership, rights, and fulfillment are programmatically instrumented and authenticated on chain with the same resolution that factories and designers require off chain. The difference is provenance rather than opacity, gates where necessary, privacy where demanded, and immutability where trust must be absolute.<br/><br/><h3 class='font-bold'>Architecture Overview</h3>FGO V3 is defined by three core NFT entities: Children, Templates, Parents.<br/><br/>1. Children (ERC1155)<br/>Children are the atomic units. They are the raw components and bill of composable parts from which every assembly and garment is constructed.<br/><br/>Some examples of Children include:<br/>Examples of children include:<br/>-Print bases (t-shirts, hoodies, jackets, dresses)<br/>-Print zones (front panel, sleeve, hood, hem)<br/>-Pattern regions (cut shapes for zero-waste nesting)<br/>-Materials (cotton, silk, synthetics, composites)<br/>-Digital effects (graphics, shaders, particle systems)<br/>-Embellishments (embroidery, trims, labels, zippers, buttons)<br/>-Design elements (logos, text blocks, modular artwork)<br/>-In-game skin activations or digital-only assets<br/>-Accessory attachments (caps, bags, jewelry)<br/>-Structural inserts (padding, lining, reinforcement)<br/><br/>Each child unit carries its own:<br/>-Cost: digital and physical pricing<br/>-Supply cap: maximum editions for physical production.<br/>-Availability: DIGITAL_ONLY, PHYSICAL_ONLY, or BOTH<br/>
-Permissions: market allowlists and open-reference flags for both digital and physical<br/>
-Sale mode: standaloneAllowed to permit direct purchase, or force usage only inside Parents<br/>
-Mutability: URI and price versioning with an optional immutability lock<br/><br/>Minting and Lifecycle:<br/>-Children are minted by Suppliers.<br/>-A supplier is registered within an infrastructure suite and given permission to mint children to child contracts deployed within that infrastructure suite.<br/>-Each child’s programmatic logic — edition caps, availability, references — is fixed at mint time, with limited ability to update non-price fields later.<br/>-A child can only be deleted if: It has not been sold, and it has not been,referenced by a minted template or parent. This ensures data integrity across the supply chain. However, it can be disabled at any time to prevent further purchases or references.<br/><br/><pre><code>
struct CreateChildParams {
    uint256 digitalPrice;             // Price for digital ownership
    uint256 physicalPrice;            // Price for physical manufacturing rights
    uint256 version;                  // Version number for updates
    uint256 maxPhysicalEditions;      // Max physical items that can be produced
    uint256 maxDigitalEditions;       // Max digital editions (templates referencing digital futures)
    Availability availability;        // DIGITAL_ONLY, PHYSICAL_ONLY, BOTH
    bool isImmutable;                 // Whether child can be updated
    bool digitalMarketsOpenToAll;     // Open digital trading
    bool physicalMarketsOpenToAll;    // Open physical trading
    bool digitalReferencesOpenToAll;  // Allow digital references by any parent or template
    bool physicalReferencesOpenToAll; // Allow physical references by any parent or template
    bool standaloneAllowed;           // Can be used sold independently from a parent or template
    Futures futures;                  // Futures prepaid credits configuration
    string childUri;                  // IPFS metadata URI
    address[] authorizedMarkets;      // Approved marketplace contracts
}
</code></pre><br/><br/>Core Contracts:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createChild(CreateChildParams params) external onlySupplier returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateChild(UpdateChildParams params) external onlyChildOwner(params.childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createChildrenBatch(CreateChildParams[] params) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateChildrenBatch(UpdateChildParams[] params) external</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteChild(uint256 childId) external onlyChildOwner(childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableChild(uint256 childId) external onlyChildOwner(childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableChild(uint256 childId) external onlyChildOwner(childId)</div><br/><br/>2. Templates (ERC1155)<br/>Templates are DIY assembly recipes. They reference Children and may also reference other Templates, then add placement, usage, and quantity instructions for each referenced unit. A Template is not a finished product. It is a configured bill of children that can be sold on its own or used by a Parent or other Template.<br/><br/>Examples of Template use cases include:<br/>-A hoodie print setup that combines a base hoodie child and multiple print zone children<br/>-A cut plan that nests pattern region children for zero waste production<br/>-A shader stack that layers digital effect children for an on-chain skin<br/>-A materials pack that binds fabric, trims, and labels for a specific capsule<br/><br/>Each template carries its own:<br/>-Cost: digital and physical pricing<br/>-Supply cap: maximum editions for physical production.<br/>-Availability: DIGITAL_ONLY, PHYSICAL_ONLY, or BOTH<br/>-Permissions: market allowlists and open-reference flags for both digital and physical<br/>-Sale mode: standaloneAllowed to permit direct purchase, or force usage only inside Parents<br/>-Mutability: URI and price versioning with an optional immutability lock<br/><br/>Creation and lifecycle:<br/>-Templates are created by Suppliers approved inside an Infrastructure.<br/>-A Template inherits the full Child interface surface, with isTemplate = true and extra placement mappings.<br/>-Creation is a two step flow to protect referenced Children:<br/> 1) Reserve stores metadata and placements with status RESERVED. Auto approval occurs only if all referenced units already explicitly permit the Template or have their reference flags open to all. Otherwise the contract issues approval requests to each referenced Child.<br/> 2) Create finalizes activation and can only be called if approval has been given by all referenced children and nested children. Status flips to ACTIVE, and usage is incremented across all placements, including any nested Templates.<br/>-Deletion is only possible if the Template has no supply and no active usage references. Disabling can be used at any time to halt further sales or references.<br/>-Edition math is enforced across the composition graph. Cumulative demand checks prevent a Template or Parent from exceeding the physical capacity of any referenced child unit.<br/><br/><pre><code>
struct ChildReference {
uint256 childId; // ID of referenced child or template
uint256 amount; // units consumed per 1 template or 1 parent
uint256 prepaidAmount; // Prepaid supply reserved for this reference
uint256 prepaidUsed; // Prepaid supply already consumed
address childContract; // contract where childId is defined
string placementURI; // machine-readable placement schema with instructions and custom key-value fields
}
</code></pre><br/><br/>Core Contracts:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveTemplate(CreateChildParams params, ChildReference[] placements) external onlySupplier returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createTemplate(uint256 reservedTemplateId) external onlySupplier</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveTemplateBatch(CreateChildParams[] paramsArray, ChildReference[][] placementsArray) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createTemplateBatch(uint256[] reservedTemplateIds) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteTemplate(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableChild(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableChild(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">getTemplatePlacements(uint256 templateId) external view returns (ChildReference[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">canPurchase(uint256 templateId, uint256 amount, bool isPhysical, address market) external view returns (bool)</div><br/>Notes:<br/>-Payment splits are computed at purchase time. The Template supplier is paid the Template price. Every Supplier of a referenced child unit receives its own price multiplied by cumulative demand.<br/><br/>3. Parents (ERC721)<br/>Parents are finished garments. They bind a configured bill of materials into a manufacturable ERC721 design: the SKU, the production order, the digital twin, and the rights envelope.<br/><br/>Parents can reference either:<br/>- a Template (which itself references Children), or<br/>- a direct set of Child references.<br/><br/>Each Parent carries its own:<br/>- Cost: digital price and physical price<br/>- Edition limits: maxDigitalEditions, maxPhysicalEditions with live counters<br/>- Availability: DIGITAL_ONLY, PHYSICAL_ONLY, or BOTH<br/>- Permissions: market allowlists plus open-to-all flags per channel<br/>- Workflow: a FulfillmentWorkflow that encodes the production steps and fulfiller payouts<br/>- Metadata: immutable token URI per minted ERC721, versioned at the design level<br/><br/>Creation and lifecycle:<br/>- Parents are authored by Designers that are approved inside an Infrastructure to mint to Parent Contracts<br/>- Two phase flow protects referenced units and their suppliers:<br/> 1) reserveParent stores metadata and references with status RESERVED. Auto activation occurs only if every referenced unit already approves the Parent or has open reference flags set. Otherwise the contract issues approval requests across the graph, including nested Templates.<br/> 2) createParent finalizes activation once approvals are satisfied. Status flips to ACTIVE, and usage is incremented across all referenced Children and nested Templates.<br/>- Updates: price and market lists can be updated while there are no purchases, with hard guards that edition caps never fall below current counts and that price covers the declared workflow’s fulfiller costs.<br/>- Deletion: only when there are zero purchases and no active usage. Disable or enable can be toggled at any time.<br/>- Edition math: cumulative demand checks ensure the Parent’s requested editions never exceed the physical capacity of any referenced Child or Template at the required quantities.<br/><br/>Purchase and minting path:<br/>- A Market must be allowlisted by the Parent or the Parent must be open to all for the given channel.<br/>- canPurchase validates status, availability, edition math, market permissions, and child approvals recursively.<br/>- On purchase, the Market distributes payments: fulfillers are paid from the Parent price per workflow math, remainder to the Designer. Every referenced Child or Template receives its own price multiplied by cumulative demand for the order.<br/>- The Market mints the ERC721s to the buyer and also mints or reserves the nested ERC1155s required by the composition. For physical orders with a workflow, the Fulfillment contract is started and later finalizes physical token delivery.<br/><br/><pre><code>
struct CreateParentParams {
uint256 digitalPrice; // Price for digital editions
uint256 physicalPrice; // Price for physical editions
uint256 maxDigitalEditions; // Cap for digital ERC721 mints
uint256 maxPhysicalEditions; // Cap for physical ERC721 mints
uint8 printType; // Process hint for manufacturing
Availability availability; // DIGITAL_ONLY, PHYSICAL_ONLY, BOTH
bool digitalMarketsOpenToAll; // Open digital channel to any Market
bool physicalMarketsOpenToAll; // Open physical channel to any Market
string uri; // Base metadata for tokenURI
ChildReference[] childReferences; // Template or direct Child set
ChildSupplyRequest[] supplyRequests; // Supply requests 
address[] authorizedMarkets; // Allowlisted markets
FulfillmentWorkflow workflow; // Production steps and payouts
}

struct UpdateParentParams {
uint256 designId;
uint256 digitalPrice;
uint256 physicalPrice;
uint256 maxDigitalEditions;
uint256 maxPhysicalEditions;
address[] authorizedMarkets;
}

struct SubPerformer {
uint256 splitBasisPoints; // share from the primary’s pot
address performer; // subcontractor wallet
}

struct FulfillmentStep {
uint256 primaryPerformer; // must be an approved Fulfiller or zero for Designer
string instructions; // freeform human or machine readable notes
SubPerformer[] subPerformers;
}

struct FulfillmentWorkflow {
uint256 estimatedDeliveryDuration; // Estimated delivery time in seconds
FulfillmentStep[] digitalSteps;
FulfillmentStep[] physicalSteps;
}
</code></pre><br/><br/>Core Contracts:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveParent(CreateParentParams params) external onlyDesigner returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createParent(uint256 reservedParentId) external onlyDesigner</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveParentBatch(CreateParentParams[] paramsArray) external onlyDesigner returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createParentBatch(uint256[] reservedParentIds) external onlyDesigner</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateParent(UpdateParentParams params) external onlyDesignOwner(params.designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">approveMarket(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">revokeMarket(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">requestMarketApproval(uint256 designId) external</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">approveMarketRequest(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">rejectMarketRequest(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">mint(uint256 parentId, uint256 amount, address to, bool isPhysical) external returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">canPurchase(uint256 designId, uint256 amount, bool isPhysical, address market) external view returns (bool)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">isParentActive(uint256 designId) external view returns (bool)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableParent(uint256 designId) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableParent(uint256 designId) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteParent(uint256 designId, uint256 transferId) external onlyDesignOwner(designId)</div><br/><br/><table style="border-collapse: separate; border-spacing: 0 8px; width: 100%;">
  <thead>
    <tr style="text-align: left; background-color: #1f2937; color: #d1d5db;">
      <th style="padding: 8px; border-radius: 6px 0 0 6px;">Layer</th>
      <th style="padding: 8px;">Base Contract (Abstract)</th>
      <th style="padding: 8px;">Concrete Contract (Deployable)</th>
      <th style="padding: 8px;">Standard</th>
      <th style="padding: 8px; border-radius: 0 6px 6px 0;">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #111827; color: #d1d5db;">
      <td style="padding: 10px; border-radius: 6px 0 0 6px;">Atomic</td>
      <td style="padding: 10px;"><code>FGOBaseChild</code></td>
      <td style="padding: 10px;"><code>FGOChild</code></td>
      <td style="padding: 10px;">ERC1155</td>
      <td style="padding: 10px; border-radius: 0 6px 6px 0;">Individual components (children): raw garment parts, materials, zones, effects</td>
    </tr>
    <tr style="background-color: #111827; color: #d1d5db;">
      <td style="padding: 10px; border-radius: 6px 0 0 6px;">Composite</td>
      <td style="padding: 10px;"><code>FGOTemplateBaseChild</code></td>
      <td style="padding: 10px;"><code>FGOTemplateChild</code></td>
      <td style="padding: 10px;">ERC1155</td>
      <td style="padding: 10px; border-radius: 0 6px 6px 0;">Assembly recipes (templates): configured bills of materials with placement data</td>
    </tr>
    <tr style="background-color: #111827; color: #d1d5db;">
      <td style="padding: 10px; border-radius: 6px 0 0 6px;">Final</td>
      <td style="padding: 10px;"><code>FGOBaseParent</code></td>
      <td style="padding: 10px;"><code>FGOParent</code></td>
      <td style="padding: 10px;">ERC721</td>
      <td style="padding: 10px; border-radius: 0 6px 6px 0;">Finished garments (parents): manufacturable, ownable, fulfillment-enabled SKUs</td>
    </tr>
  </tbody>
</table>
<br/><br/><div style="font-family: monospace; color: #d1d5db; background-color: #111827; padding: 16px; border-radius: 8px; width: fit-content;">
  <ul style="list-style-type: none; padding-left: 20px; margin: 0;">
    <li>
      <span style="color:#93c5fd;">Parent (ERC721)</span>
      <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
        <li>↳ Child A (ERC1155)</li>
        <li>↳ Child B (ERC1155)</li>
        <li>
          ↳ Template X (ERC1155)
          <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
            <li>↳ Child C (ERC1155)</li>
            <li>
              ↳ Template Y (ERC1155)
              <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
                <li>↳ Child D (ERC1155)</li>
                <li>↳ Child E (ERC1155)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
<br/><br/><h3 class='font-bold'>Metadata & On-Chain Standards</h3>

Metadata in FGO V3 is both a descriptor and an executable blueprint.<br/>
- **Descriptor layer**: communicates to humans — designers, suppliers, collectors.<br/>  
- **Operational layer**: encodes instructions for factories, renderers, or front-ends to act on directly.<br/><br/>  

All metadata URIs are hashed to IPFS. Fields are designed to be flexible yet rigorous enough to support generative workflows, manufacturing automation, and provenance tracking.<br/><br/>  

<div class="font-bold mb-2">Child Metadata</div>
Children define single atomic units. Their metadata describes what the unit is and how it should be understood in both digital and physical terms.  <br/><br/>

<pre><code>
export interface ChildMetadata {
  title: string;          // Required: name of the unit
  description: string;    // Required: text description
  image: string;          // Required: IPFS link to preview/render
  attachments: Attachment[]; // Optional: PDFs, DXF, texture packs
  tags: string[];         // Optional: classification keywords
  prompt: string;         // Optional: AI prompt if generated
  aiModel: string;        // Optional: model reference (StableDiffusion, etc.)
  loras: string[];        // Optional: LoRA IDs used in generation
  workflow: string;       // Optional: ComfyUI / node graph reference
  version: string;        // Required: version number
  customFields: Record<string, string>; // Optional
}
export interface Attachment {
  uri: string;  // IPFS link
  type: string; // MIME type or classifier
}
</code></pre>
<br/><br/>
<pre><code>{
 "title":"Hoodie Print Base",
 "description":"Standard unisex hoodie print base for direct-to-garment printing",
 "image":"ipfs://QmRender", 
 "attachments":[
   {"uri":"ipfs://QmCutPlanDXF", "type":"application/dxf"},
   {"uri":"ipfs://QmFabricSpecSheet", "type":"application/pdf"}
 ],
 "tags":["base","hoodie","cotton"],
 "prompt":"",
 "aiModel":"",
 "loras":[],
 "workflow":"",
 "version":"1"
}
</code></pre><br/><br/>

- <span style="font-variant: small-caps;">image</span>: preview render if physical, or the digital asset itself if digital-only.  <br/>
- <span style="font-variant: small-caps;">attachments</span>: optional auxiliary files (cutting plan DXF, PDF spec sheet, OBJ mesh, additional images, videos, audio etc.).<br/>  

<br/><br/>

<div class="font-bold mb-2">Template Metadata</div>
Templates describe assemblies of children. Their metadata documents the purpose of the assembly and how it should be understood in a DIY or factory context. <br/><br/> 

<pre><code>
export interface TemplateMetadata {
  title: string;          // Required: name of the unit
  description: string;    // Required: text description
  image: string;          // Required: IPFS link to preview/render
  attachments: Attachment[]; // Optional: PDFs, DXF, texture packs
  tags: string[];         // Optional: classification keywords
  prompt: string;         // Optional: AI prompt if generated
  aiModel: string;        // Optional: model reference (StableDiffusion, etc.)
  loras: string[];        // Optional: LoRA IDs used in generation
  workflow: string;       // Optional: ComfyUI / node graph reference
  version: string;        // Required: version number
  customFields: Record<string, string>; // Optional
}
export interface Attachment {
  uri: string;  // IPFS link
  type: string; // MIME type or classifier
}
</code></pre>
<br/><br/>

<pre><code>{
 "title":"Hoodie Print Template A",
 "description":"Composite hoodie assembly with front and sleeve zones mapped for graphics application",
 "image":"ipfs://QmSampleTemplateRender",
 "attachments":[
   {"uri":"ipfs://QmMarkerFile", "type":"application/json"},
   {"uri":"ipfs://QmPlacementVisual", "type":"image/png"}
 ],
 "tags":["template","print","hoodie"],
 "prompt":"front design placement with high-contrast logo",
 "aiModel":"StableDiffusion-v1.5",
 "loras":["branding-2024"],
 "workflow":"ipfs://QmComfyUIExportWorkflow",
 "version":"3"
}
</code></pre>

<br/>

<div class="font-bold mb-2">Parent Metadata</div>
Parents finalize production. Their metadata is locked at mint to ensure SKU-level stability.  
<br/><br/>

<pre><code>
export interface ParentMetadata {
  id: string;             // Unique parent ID
  title: string;          // Required
  description: string;    // Required
  image: string;          // Required
  tags: string[];         // Optional
  prompt: string;         // Optional
  attachments: Attachment[];
  aiModel: string;        // Optional
  loras: string[];        // Optional
  workflow: string;       // Optional
  version: string;        // Required
  customFields: Record<string, string>; // Optional
}
</code></pre>

<br/><br/>

<pre><code>{
 "title":"Limited Edition Neon Hoodie",
 "description":"Neon-print hoodie produced with zero-waste cut plan and reflective sleeve patch",
 "image":"ipfs://QmFinalProductRender", 
 "attachments":[
   {"uri":"ipfs://QmWashInstructions", "type":"application/pdf"}
 ],
 "tags":["hoodie","limited","neon"],
 "prompt":"",
 "aiModel":"",
 "loras":[],
 "workflow":"",
 "version":"1"
}
</code></pre>
<br/><br/>
Once minted, a Parent’s metadata URI cannot be changed — it becomes the canonical reference for that SKU.  

<br/><br/><br/>

<div class="font-bold mb-2">ChildReference Placement Metadata</div>
Templates also specify how children are placed. This is done through <span style="font-variant: small-caps;">placementURI</span>.

<br/><br/>

<pre><code>
export interface ChildPlacement {
  instructions: string;   // Required
  customFields: Record<string, string>;  // Optional
}
</code></pre>

<br/><br/>

<pre><code>{
 "instructions":"Apply front panel graphic at 300 DPI, centered",
 "customFields":{
   "scale":"1",
   "rotation":"0",
   "x":"150",
   "y":"420",
   "seamAllowance":"0.5cm"
 }
}
</code></pre>
<br/><br/>
- <span style="font-variant: small-caps;">instructions</span>: human-readable directive.<br/>  
- <span style="font-variant: small-caps;">customFields</span>: extensible machine-parsable dictionary (for geometry, tolerances, AR anchors, IoT mappings).<br/><br/>  

<br/>

<div class="font-bold mb-2">Versioning & Immutability</div>
- **Children/Templates**: mutable if <span style="font-variant: small-caps;">isImmutable</span> = false. Updates require incrementing <span style="font-variant: small-caps;">version</span>. Once locked, metadata becomes archival.<br/>  
- **Parents**: immutable from mint. The record is frozen as a production artifact. <br/><br/> 

This system provides **iterative transparency** during prototyping and remixing, then enables **content trust** when a design must be fixed for manufacturing, provenance, or contractual use.  

<br/><br/>

<div class="font-bold mb-2">Comparison Table</div>

<table class="table-auto border border-gray-700 text-sm">
  <thead class="bg-gray-800 text-gray-300">
    <tr>
      <th class="p-2 border">Entity</th>
      <th class="p-2 border">Required Fields</th>
      <th class="p-2 border">Optional Fields</th>
      <th class="p-2 border">Mutability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2 border">Child</td>
      <td class="p-2 border">title, description, image, version</td>
      <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td>
      <td class="p-2 border">Mutable until <code>isImmutable</code> set true</td>
    </tr>
    <tr>
      <td class="p-2 border">Template</td>
      <td class="p-2 border">title, description, image, version</td>
      <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td>
      <td class="p-2 border">Mutable until <code>isImmutable</code> set true</td>
    </tr>
    <tr>
      <td class="p-2 border">Parent</td>
      <td class="p-2 border">title, description, image, version</td>
      <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td>
      <td class="p-2 border">Immutable after mint</td>
    </tr>
  </tbody>
</table>
<br/><br/>
<h3 class='font-bold'>Contract Creation, Factory Setup, Roles & Permissions</h3><br/>

The contract suite is engineered to be as composable and singular as possible, where every individual contract can operate independently while also layering relationships on top. The <span class="font-mono">Factory</span> contract simplifies deployment and coordination.<br/><br/>  

- The Factory deploys entire **Infrastructure Suites**.<br/>
- Each Infrastructure contains the contracts and role assignments needed to mint Children, Templates, and Parents, list them in Markets, and connect them into Fulfillment workflows.<br/>  
- Every deployment emits events that are indexed into a dedicated Fractional Garment Ownership Subgraph, enabling real-time front-end references across all infrastructures. The global registry of infrastructures and their contracts can be browsed at <a href="https://fgo.themanufactory.xyz" class="font-mono">fgo.themanufactory.xyz</a>.  

<br/><br/>  

<div class="font-bold mb-2">Infrastructure</div>
An Infrastructure is a self-contained environment that bundles contract deployments with scoped roles and permissions.<br/><br/>  

- **Admin**: the owner of an Infrastructure.<br/>    
  - Can deploy Child, Template, Parent, Market, and Fulfillment contracts within the Infrastructure.<br/>  
  - Can add or remove roles (Suppliers, Designers, Fulfillers, other Admins).<br/>  
  - Can deactivate or reactivate the Infrastructure, pausing or resuming minting, contract creation, and sales.<br/><br/>  
- **Suppliers**: once added, can mint Children and Templates inside the Child and Template contracts deployed in that Infrastructure.<br/>  
- **Designers**: once added, can create Parents inside Parent contracts deployed within that Infrastructure.<br/>  
- **Fulfillers**: once added, can be embedded into Parent fulfillment workflows and receive payouts for production steps.<br/>  

<br/>

<div class="font-bold mb-2">Purpose</div>
This structure allows fine-grained segmentation:<br/>  
- Multiple Infrastructures can be created by a wallet address to isolate collaborations, collections, or markets.<br/>  
- If a wallet is compromised, a new Infrastructure can be spun up and ownership transferred.<br/>  
- Permissions can be assigned or revoked per Infrastructure without impacting others.<br/>  
- Market and Fulfillment contracts deployed inside an Infrastructure provide scoped venues for listing and executing sales.<br/><br/>

<div class="font-bold mb-2">Base Payment Token</div>
- Each Infrastructure specifies a **base payment token**.<br/>  
- All Children, Templates, and Parents created within that Infrastructure are priced and settled in this token.<br/>  
- By default, this token is <a href="https://explorer.lens.xyz/address/0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd" class="font-mono">$MONA</a>, but any ERC20 compatible with Lens zkSync can be assigned.<br/>  

<br/>

This design ensures infrastructures act as modular yet interoperable clusters: capable of operating independently, segmenting roles and permissions, but still converging into a shared ecosystem where every contract is indexable, discoverable, and liquid.  <br/><br/>

<br/><h3 class='font-bold'>Role Identity & Wallet Transfer</h3>

<div class="font-bold mb-2">ID-Based Role System</div>
Designers, Suppliers, and Fulfillers are identified by **numeric IDs** within their Infrastructure, not by wallet addresses. This separation of identity from wallet creates a crucial security model:<br/><br/>

- **Designer ID**: a uint256 assigned when a wallet is added as a Designer to an Infrastructure<br/>
- **Supplier ID**: a uint256 assigned when a wallet is added as a Supplier to an Infrastructure<br/>
- **Fulfiller ID**: a uint256 assigned when a wallet is added as a Fulfiller to an Infrastructure<br/><br/>

Each role ID maintains a **linked wallet address**, which can be updated at any time without losing the role identity or any associated assets, sales, or credits.<br/><br/>

<div class="font-bold mb-2">Wallet Transfer Mechanism</div>
At any point, a role can transfer its wallet link to a new address:<br/><br/>

<pre><code>
designerWallet.transferWallet(designerId, newDesignerWallet)
supplierWallet.transferWallet(supplierId, newSupplierWallet)
fulfillerWallet.transferWallet(fulfillerId, newFulfillerWallet)
</code></pre>

On transfer:<br/>
- The role ID remains unchanged and retains all associated Parents, Children, Templates, and credits<br/>
- The new wallet becomes the active address for that role<br/>
- All future payments (sales, fulfiller fees, supply requests) route to the new wallet<br/>
- The old wallet loses control of the role but retains any cryptocurrency already received<br/><br/>

<div class="font-bold mb-2">Payment Routing</div>
When a sale occurs, payments are always routed to the **currently linked wallet address** of the role ID:<br/><br/>

**Scenario:**<br/>
1. Designer A (Wallet A) creates Parent X and sells 10 units → Wallet A receives payment<br/>
2. Designer A transfers the role to Wallet B via transferWallet(designerId, walletB)<br/>
3. Parent X sells 10 more units → Wallet B receives payment (not Wallet A)<br/>
4. No further action needed. The transfer is atomic and immediate.<br/><br/>

The same pattern applies for Suppliers receiving Child/Template sales and Fulfillers receiving fulfillment fees.<br/><br/>

<div class="font-bold mb-2">Security & Risk Mitigation</div>
This architecture protects against several attack vectors:<br/><br/>

- **Private Key Compromise**: If a wallet's private key is exposed, the role can be transferred to a new, secure wallet without losing any permissions, credits, or sale history<br/>
- **Hardware Wallet Upgrade**: A role can be migrated from an EOA to a multisig, hardware wallet, or smart contract wallet seamlessly<br/>
- **Operational Security**: Keys can be rotated regularly without disrupting ongoing business operations<br/>
- **Access Recovery**: If a wallet is lost or inaccessible, it can be recovered to a new address (with appropriate recovery mechanisms per Infrastructure)<br/><br/>

The role ID remains the canonical source of truth. The wallet is merely the current signing authority for that role.<br/><br/>

<div class="font-bold mb-2">Futures Credits & Wallet Transfer</div>
Designers holding prepaid **Futures Credits** can transfer those credits to a new wallet along with the role transfer:<br/><br/>

<pre><code>
futuresCoordination.transferFuturesCredits(
  childContracts,
  childIds,
  newWallet
)
</code></pre>

This ensures that reserved digital edition capacity and other on-chain credits move with the wallet, keeping the designer's production pipeline intact across the transition.<br/><br/>

<br/><h3 class='font-bold'>Cross-Infrastructure Composability</h3>While each Infrastructure is self-contained, contracts are not isolated. Children, Templates, and Parents can interoperate across infrastructures to form a single composable manufacturing graph.  
<br/><br/>

<div class="font-bold mb-2">Referencing Across Infrastructures</div>
- A Parent in one Infrastructure can reference Children or Templates minted in another Infrastructure.<br/>  
- A Template can embed Children that originate from multiple Infrastructures.<br/>  
- Market contracts can list Parents and Templates regardless of the Infrastructure where they were created, provided the necessary reference permissions are granted.<br/>  

<br/>

<div class="font-bold mb-2">Permissions and Provenance</div>
- Reference rights remain scoped to the original Infrastructure.<br/>  
- Even when a Child or Template is pulled into another Infrastructure, its **minting logic, supply caps, and permissions** are enforced by the originating contract.<br/>  
- This ensures that Suppliers and Designers maintain sovereignty over the units they created, without blocking wider composability.<br/> 

<br/>

<div class="font-bold mb-2">Payment Token Alignment</div>
- Each Infrastructure has its own base payment token for internal pricing.<br/>  
- When cross-referencing occurs across multiple Infrastructures with different tokens: The transaction defaults to the payment token of the **Market contract** executing the purchase. $MONA is the de facto cross-Infrastructure token, as it is widely adopted by designers and offers the most seamless settlement path when assets span multiple Infrastructures.<br/>  
- Designers are free to configure other ERC20 tokens within their own Infrastructure, but interoperability is most reliable when $MONA is used as the shared medium.

<br/><br/>

<div class="font-bold mb-2">Benefits</div>
- Enables **total composability**: designers are not siloed to their own Infrastructure.<br/>  
- Preserves **unit-level integrity**: suppliers and designers define rules once, and those rules propagate wherever their assets are referenced.<br/>  
- Provides **market neutrality**: listings and purchases can occur in any compatible Market.<br/>  
<br/>
This architecture balances **sovereignty and interoperability**. Each Infrastructure retains its own permissions and payment context, yet the ecosystem as a whole functions as a fluid, modular manufacturing lattice.<br/><br/>
<h3 class='font-bold'>Verification & Permissions</h3> The protocol enforces permissions at three edges: **Reference**, **Market**, **Template**. All checks are mode-aware (digital vs physical) and bubble through nesting (template-of-templates). No object can be minted or market sold without passing these gates.<br/><br/><ul>
<li><b>Child References</b>: Children and Templates expose open-reference flags or explicit allowlists. A Parent or Template that attempts to consume them must either be pre-approved or request verification. Every Child approval must bubble upward through all referencing Templates and Parents, preventing malicious locking or siphoning of scarce units.</li>

<li><b>Market Approvals</b>: Only authorized Markets can list or fulfill orders. Designers and Suppliers can whitelist markets at mint time or update them until the first sale. Physical and digital channels are validated separately. Every nested Child and Template must also approve the Market, ensuring no bypass of payouts or diversion to hostile sales venues.</li>

<li><b>Template References</b>: Multi-level assemblies enforce recursive checks. A Template referencing another Template must inherit and respect all of its nested Children’s permissions, edition caps, and availability rules. Validation bubbles upward: for a Parent to be valid, every Template and Child in the composition graph must explicitly approve it.</li></ul><br/>
<div style="font-family: monospace; color: #d1d5db; background-color: #111827; padding: 16px; border-radius: 8px; width: fit-content;">
  <ul style="list-style-type: none; padding-left: 20px; margin: 0;">
    <li>
      <span style="color:#93c5fd;">Parent (ERC721)</span>  
      <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
        <li>↳ <span style="color:#fbbf24;">Template A (ERC1155)</span>  
          <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
            <li>↳ Child 1 (ERC1155)</li>
            <li>↳ Child 2 (ERC1155)</li>
          </ul>
        </li>
        <li>↳ <span style="color:#fbbf24;">Template B (ERC1155)</span>  
          <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
            <li>↳ Child 3 (ERC1155)</li>
            <li>↳ <span style="color:#34d399;">Template C (ERC1155)</span>  
              <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
                <li>↳ Child 4 (ERC1155)</li>
                <li>↳ Child 5 (ERC1155)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
<p style="font-size: 14px; color: #9ca3af; margin-top: 8px;">
Every Child and Template in the tree must explicitly approve upward references.<br/>A Template can only activate if <i>all nested Children and Templates</i> grant verification.<br/>
A Parent can only activate if <i>all nested Children and Templates</i> grant verification.<br/>A Market can only process a purchase if the Parent and <i>all nested Children and Templates</i> grant verification.
</p><br/><br/>
<div class="font-bold mb-2">Lazy Minting</div>
All entities in FGO V3 are lazily minted.<br/>
- Until purchase, Children, Templates, and Parents exist only as code structs in contract storage.<br/>  
- Minting occurs at the moment of payment, and only if all verification checks (Market, Child and Template) pass successfully.<br/>  
- This guarantees that supply is always demand-driven: every minted unit is fully validated, permission-clean, and backed by settlement in the Infrastructure’s payment token.<br/><br/>  

This model eliminates ghost supply and enforces scarcity only when required (e.g. physical editions), while allowing digital editions to scale infinitely without bloating chain state.<br/><br/><h3 class='font-bold'>Markets & Fulfillment</h3>When a Market contract is deployed within an Infrastructure Suite, a Fulfillment contract is automatically deployed and hard-linked to that Market.<br/><br/>Market = order intake, preflight checks, price computation, payments, and mint orchestration.<br/>

Fulfillment = step-by-step production workflow, attestations, and physical token settlement at completion.<br/>

Both settle in the Infrastructure’s PAYMENT_TOKEN (ERC-20) defined by its AccessControl; this is what the buyer pays and what recipients receive.<br/><br/><div class="font-bold mb-1">Fulfillment Workflow (on Parent)</div> A created Parent can optionally encode production logic as a workflow. Steps are availability-aware (digital vs physical). <pre><code>
  struct SubPerformer {
    uint256 splitBasisPoints; // share from the step's primary pot (0–10000) 
    address performer; // may be any address (does not need the Fulfiller role) 
  } 

  struct FulfillmentStep { 
    uint256 primaryPerformer; // MUST be a Fulfiller in the Parent’s Infrastructure (or 0 = Designer) 
    string instructions; // ipfs://... freeform step brief / machine file 
    SubPerformer[] subPerformers; 
  } 
    
  struct FulfillmentWorkflow { 
    FulfillmentStep[] digitalSteps; 
    FulfillmentStep[] physicalSteps; 
  } </code></pre><br/><br/>- primaryPerformer: an approved Fulfiller role in the Parent’s Infrastructure.<br/>

- subPerformers: arbitrary addresses, paid from the primary’s pot by basis-points split.<br/>

- instructions: an IPFS pointer containing notes, schematics, or machine-readable configs.<br/>

- Steps are optional. Parents can have none, some, or complex multi-stage workflows.<br/><br/><div class="font-bold mb-2">Payment logic</div>At purchase, the Market computes two layers of payouts:<br/><br/>

Parent layer<br/>

For each step:<br/>
stepPot = basePrice + (parentPrice × vigBps / 10000)<br/>

Sub-performers take their % splits; the remainder goes to the primary.<br/>

Designer receives parentPrice − Σ(stepPots).<br/><br/>

Composition layer<br/>

Every referenced Child and Template (including nested) receives
unitPrice × quantityDemanded<br/>

This guarantees downstream suppliers are always compensated.<br/>

All transfers execute atomically in the Infrastructure’s PAYMENT_TOKEN.<br/><br/>Example
Parent = 500 $MONA. Two fulfillmnet steps:<br/>

Step 1 → base 30 $MONA, vig 20% → 30 + 100 = 130<br/>

Step 2 → base 10 $MONA, vig 5% → 10 + 25 = 35<br/>
Total two step cost = 165 $MONA. Designer receives 335 $MONA.<br/>
Children/Template costs are added on top and billed directly to the buyer.<br/><br/><div class="font-bold mb-2">Lazy minting & delivery rules</div>

As previously mentioned, supply only exists when purchased. Until then, units live as structs in contract storage.<br/><br/>

<h2 class="font-bold">Digital order</h2>

Parent ERC721 → minted immediately.<br/>

Children/Templates → minted immediately if DIGITAL_ONLY or BOTH.<br/>

Physical-only units are skipped.<br/><br/>

<h2 class="font-bold">Physical order, no fulfillment steps</h2>

Parent ERC721 → minted immediately.<br/>

Children/Templates → minted immediately if PHYSICAL_ONLY or BOTH.<br/>

Digital-only units are skipped.<br/><br/>

<h2 class="font-bold">Physical order, with fulfillment steps</h2>

Parent ERC721 → minted immediately.<br/>

Digital-only units are skipped.<br/><br/>

Children/Templates → not minted at purchase. Rights are reserved.<br/>

Only on completion of the final physical step does the Fulfillment contract mint them to the buyer.<br/><br/>

This enforces the invariant: a physical child token is proof that the corresponding physical item has cleared production.<br/><br/><div class="font-bold mb-2">Digital infinity vs. physical scarcity</div>

Digital assets: no edition caps. They remain abundant, remixable, and CC0-aligned.<br/>

Physical assets: hard-capped via maxPhysicalEditions. The Market validates cumulative demand across the full graph (parents, templates, children) before approving a purchase.<br/><br/>

Infinite digital child supply encourages open remix culture whilst scarce physical child supply enables bounds within attestable manufacturing limits.<br/><br/><div class="font-bold mb-2">Order flow</div>

1. Buyer calls Market.buy with order details (quantity, mode).<br/>

2. Market runs preflight: availability, permissions, edition math, market authorization.<br/>

3. Payments are distributed across Designer + Fulfillers + Suppliers.<br/>

4. Minting rules (above) decide what the buyer receives immediately vs. on workflow completion.<br/>

5. Fulfillment contract manages step attestations.<br/>

6. On final step: outstanding physical Children/Templates are minted to the buyer.<br/><br/><h3 class='font-bold'>Futures</h3>

Futures allow suppliers to hedge manufacturing costs and designers to secure prepaid materials with guaranteed early delivery. A child that is configured as a future becomes a tradable credit instrument. Buyers purchase credits at a set price, then consume those credits later when creating templates or parents, bypassing payment at the point of use and receiving goods directly upon settlement.<br/><br/>

Only raw children can be configured as futures. Templates cannot offer futures. The child must be DIGITAL_ONLY or PHYSICAL_ONLY. A futures child specifies a price per unit, a maximum supply of credits to sell, and an optional deadline. If no deadline is set, the future operates perpetually: credits settle immediately after purchase. If a deadline is set, all credits settle simultaneously at that time.<br/><br/>

When a template or parent references a child with active futures, the creator can choose to consume prepaid credits instead of paying at creation time. Physical or digital credits are deducted from the creator's balance, and the referenced child's supply is reserved. Upon settlement, those units are delivered directly to the creator, completing the loop without marketplace friction.<br/><br/>

This structure serves two roles:<br/>
- **Suppliers hedge costs**: raw material producers sell futures to lock in revenue before committing to full production runs, reducing exposure to demand volatility.<br/>
- **Designers secure supply**: by purchasing futures early, a designer guarantees access to scarce components, receives them ahead of market availability, and can later embed them into finished parents or templates without requiring end buyers to pay for those components again.<br/><br/>

Templates that reference a child with digital futures lose their infinite digital supply. Instead, the template's maxDigitalEditions is capped at the quantity of future credits the template creator holds. This ensures that digital scarcity can be enforced when futures-backed components are involved, aligning supply limits across the composition graph.<br/><br/>

<pre><code>
struct Futures {
uint256 deadline; // Futures campaign deadline (0 = perpetual)
uint256 maxDigitalEditions; // Max digital futures credits to sell
bool isFutures; // Whether this child offers futures credits
}
</code></pre><br/><br/>

<h3 class='font-bold'>Supply Requests</h3>

Supply requests allow designers to signal component demand and secure early delivery of children before listing a parent on the market. When reserving a parent, a designer can attach supply requests: specifications for children that do not yet exist or that the designer wants to prepay for and receive ahead of public sale.<br/><br/>

This structure inverts the default flow. Normally, children and templates are delivered to the designer one by one only after end buyers purchase the parent and fulfillment completes. Supply requests allow the designer to pay upfront, receive the components immediately, and be reimbursed transparently when the parent is sold.<br/><br/>

A supply request specifies quantity, preferred max price, deadline, and either a reference to an existing child or a custom specification. Suppliers browse active requests across the graph, identify demand, and either propose an existing child or create a new one tailored to the spec. Once a supplier links a child to a supply request and the designer approves, that child is automatically authorized for use in the parent, and prepaid supply is reserved.<br/><br/>

When a buyer purchases the parent, the market detects prepaid supply. Instead of paying the supplier for those components, the buyer's payment for those units is redirected to the designer as reimbursement. The supplier has already been paid upfront. The buyer receives the same goods, the designer recovers prepaid costs, and the supplier locks in revenue early without waiting for market demand.<br/><br/>

This mechanism serves multiple roles:<br/>
- **Designers manage cash flow**: upfront payment for critical components enables production before capital comes through sales.<br/>
- **Suppliers see real demand**: supply requests act as transparent purchase orders, surfacing what designers need and at what price.<br/>
- **Custom fulfillment**: suppliers can create bespoke children to match exact specs, or propose existing inventory that fits the request.<br/>
- **Automatic approval**: once linked, the child is pre-approved for the parent without requiring separate reference permission flows.<br/><br/>

Supply requests are only available on parents, not templates. Templates are assembly recipes and do not carry the same production and capital constraints as finished garments.<br/><br/>

<pre><code>
struct ChildSupplyRequest {
uint256 existingChildId; // ID of existing child if known, 0 otherwise
uint256 quantity; // Quantity of units requested
uint256 preferredMaxPrice; // Maximum price willing to pay
uint256 deadline; // Deadline for fulfillment
address existingChildContract; // Contract address if existingChildId > 0
bool isPhysical; // Physical or digital request
bool fulfilled; // Whether the request has been fulfilled
string customSpec; // Custom specification for the requested child
string placementURI; // Placement metadata for the requested child
}
</code></pre><br/><br/><div style="font-family: monospace; background-color: #111827; color: #d1d5db; padding: 16px; border-radius: 8px; width: fit-content;">
  <ul style="list-style-type: none; padding-left: 20px; margin: 0;">
    <li>
      <span style="color:#93c5fd;">Step 1: Purchase</span>
      <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
        <li>✔ Parent ERC721 minted immediately</li>
        <li>✘ Children/Templates (physical) not minted yet</li>
        <li>➝ Rights reserved for physical supply</li>
      </ul>
    </li>
    <li>
      <span style="color:#93c5fd;">Step 2: Fulfillment Workflow</span>
      <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
        <li>↳ FulfillmentStep A (e.g. cutting)</li>
        <li>↳ FulfillmentStep B (e.g. printing)</li>
        <li>↳ FulfillmentStep C (e.g. quality check + shipping)</li>
        <li>✔ Each step attested by assigned Fulfiller(s)</li>
      </ul>
    </li>
    <li>
      <span style="color:#93c5fd;">Step 3: Completion</span>
      <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;">
        <li>✔ Final step triggers mint of physical Children/Templates</li>
        <li>➝ Buyer now holds ERC1155s = proof of physical rights</li>
        <li>➝ Parent ERC721 + Children/Templates fully settled</li>
      </ul>
    </li>
  </ul>
</div><br/><br/><h3 class='font-bold'>Postscript</h3> FGO V3 is not the final word. It is a working lattice, open to forking, mutating, and bug-baiting. Every contract here is both singular and composable: you can deploy one in isolation, or stack hundreds into a living factory. The logic is simple enough for one indie designer to operate, but flexible enough for entire federations to emerge.<br/><br/>

What matters now is not version numbers, but whether the protocol keeps its promise: to make digital and physical fashion interoperable, verifiable, and sovereign at the smallest possible scale. Everything else — valuation, markets, collaborations — follows from that ground truth.<br/><br/>Straight lines will bend. Code will fork. Supply will flow. And somewhere, one person will mint a garment that did not exist before, and it will be theirs. <br/><br/>

Contracts + Subgraph:<br/><a href="https://github.com/DIGITALAX/fractional-garment-ownership">here</a>`,
  },
  {
    title:
      "Estander 3.0 de Propiedad Fraccionaria de Prendas (FGO-0003_0) (Castellano)",
    description: `FGO ha vivido, de facto, fuera del registro en 2.0 durante casi dos años. Cuando Coin Op salió en 2023, los contratos base se reconstruyeron desde cero. ERC1155 siguió siendo la base para los children y ERC721 para los parents, pero la lógica se plegó en una arquitectura de templates más deliberada que permitió NFTs compuestos, modulares y bajo demanda de impresión. No es que me olvidara de documentarlo. Simplemente elegí no hacerlo.<br/><br/>En las últimas semanas, tras completar un refactor de varios meses de toda la pila a Lens Mainnet sobre ZKSync, volví a diseñar una aplicación local de Coin Op con lógica avanzada de patrones y configuración de residuo cero. Eso por fin abrió espacio para integrar el crate de empaquetado Rust Sparrow, algo que quería desde 2022 tras explorar SVGNest para nesting algorítmico. Sparrow entregó lo que había estado esperando: geometría visual, optimizada y manufacturable en Rust. Gracias, Jeroen Gardeyn. Pero a mitad de ese build quedó claro que FGO V2 no podía estirarse hasta los nuevos requisitos y el alcance ampliado de Coin Op. La arquitectura que había ido bocetando en fragmentos durante dos años tenía que cristalizar.<br/><br/>Me dije que podía entregar la suite de contratos en uno o dos días y volver a la app. Cuatro semanas después, tras jornadas de 17 horas apiladas una sobre otra, la suite está probada, endurecida y en forma de producción, con muchas revisiones por delante. Los smart contracts recompensan la paciencia y la precisión mientras castigan la fanfarronería. Intenté coautoría con Claude, pero no pudo resistir la tentación de fabular. Y por fabular me refiero a sistemas enteros imaginados, mundos enteros imaginados...<br/><br/>Así que aquí estamos. Directo a V3. Por fin. Y además, sin “licencia y distribución”. Ese encuadre ya no sirve. Lo que importa ahora es la composabilidad y la propiedad alineadas directamente con los derechos de fabricación. Y, aún más importante, volver al único principio que hace que esto valga la pena: ¿funciona para una diseñadora indie? Solo una. Todo el sistema tiene que sostenerse por sí mismo en la escala más pequeña posible, donde una sola creadora pueda activar una retícula de manufactura digifizzy totalmente autosuficiente, sostener y rotar las llaves de sus contratos desplegados, reconfigurar las compuertas conforme evoluciona su proceso y federarse selectivamente con otras diseñadoras, fulfllers y suppliers en sus propios términos. Si no puede habilitar ese nivel de autonomía, entonces es solo andamiaje sin edificio.<br/><br/><h3 class='font-bold'>Contexto</h3>La suite de contratos se publica como open source bajo CC0. Sin licencia, sin restricción. Fórkalo, reutilízalo, desmóntalo como prefieras.<br/><br/>Se asume que cada usuario opera desde una base compartida: reconocimiento de la integridad territorial de Ucrania y Crimea frente a la ocupación de la ‘Mafia’ de Moscú, reconocimiento de Taiwán como independiente de China, reconocimiento de los pueblos indígenas —como las naciones aborígenes y de las Islas del Estrecho de Torres— como primeras custodias de la tierra hoy llamada Australia, y reconocimiento de una solución de dos Estados entre Israel, libre del extremismo kahanista, y Palestina, libre de Hamas. Igualdad de derechos y capacidad de construir independencia económica con independencia de género, raza o amor.<br/><br/>Los contratos funcionan como una pila abierta de manufactura. La propiedad, los derechos y el cumplimiento se instrumentan y autentican programáticamente on-chain con la misma resolución que fábricas y diseñadores requieren off-chain. La diferencia es la procedencia frente a la opacidad, compuertas cuando son necesarias, privacidad cuando se exige e inmutabilidad cuando la confianza debe ser absoluta.<br/><br/><h3 class='font-bold'>Visión General de la Arquitectura</h3>FGO V3 está definido por tres entidades NFT núcleo: Children, Templates, Parents.<br/><br/>1. Children (ERC1155)<br/>Los Children son las unidades atómicas. Son los componentes básicos y la factura de partes componibles a partir de las cuales se construye cada ensamblaje y prenda.<br/><br/>Algunos ejemplos de Children incluyen:<br/>-Bases de impresión (camisetas, sudaderas, chaquetas, vestidos)<br/>-Zonas de impresión (panel frontal, manga, capucha, dobladillo)<br/>-Regiones de patrón (formas de corte para nesting sin residuos)<br/>-Materiales (algodón, seda, sintéticos, compuestos)<br/>-Efectos digitales (gráficos, shaders, sistemas de partículas)<br/>-Adornos (bordados, tiras, etiquetas, cremalleras, botones)<br/>-Elementos de diseño (logos, bloques de texto, arte modular)<br/>-Activaciones in-game o assets solo digitales<br/>-Accesorios acoplables (gorras, bolsos, joyería)<br/>-Inserciones estructurales (acolchado, forro, refuerzo)<br/><br/>Cada unidad Child contiene:<br/>-Coste: precio digital y físico<br/>-Límite de suministro: ediciones máximas para producción física.<br/>-Disponibilidad: DIGITAL_ONLY, PHYSICAL_ONLY o BOTH<br/>-Permisos: listas permitidas de mercado y flags de referencia abierta tanto digitales como físicas<br/>-Modo de venta: standaloneAllowed para permitir compra directa o forzar uso solo dentro de Parents<br/>-Mutabilidad: versionado de URI y precio con posibilidad de bloqueo de inmutabilidad<br/><br/>Proceso de minting y ciclo de vida:<br/>-Los Children son minteados por Suppliers.<br/>-Un Supplier está registrado dentro de un Infrastructure Suite y tiene permiso para mintear Children en contratos de Child desplegados en ese Infrastructure Suite.<br/>-La lógica programática de cada Child — límites de edición, disponibilidad, referencias — queda fijada en el momento del mint, con capacidad limitada para actualizar campos que no sean de precio después.<br/>-Un Child solo puede ser borrado si: no ha sido vendido y no ha sido referenciado por un Template o Parent ya minteado. Esto asegura la integridad de datos a lo largo de la cadena de suministro. Sin embargo, puede deshabilitarse en cualquier momento para evitar compras o referencias futuras.<br/><br/><pre><code>
struct CreateChildParams {
    uint256 digitalPrice;             // Precio para propiedad digital
    uint256 physicalPrice;            // Precio para derechos de fabricación física
    uint256 version;                  // Número de versión para actualizaciones
    uint256 maxPhysicalEditions;      // Máx. ítems físicos que pueden producirse
    uint256 maxDigitalEditions;       // Máx. ediciones digitales (templates que referencian futures digitales)
    Availability availability;        // DIGITAL_ONLY, PHYSICAL_ONLY, BOTH
    bool isImmutable;                 // Si el child puede ser actualizado
    bool digitalMarketsOpenToAll;     // Abrir trading digital a todos
    bool physicalMarketsOpenToAll;    // Abrir trading físico a todos
    bool digitalReferencesOpenToAll;  // Permitir referencias digitales por cualquier parent o template
    bool physicalReferencesOpenToAll; // Permitir referencias físicas por cualquier parent o template
    bool standaloneAllowed;           // Puede venderse independientemente de un parent o template
    Futures futures;                  // Configuración de créditos prepagados futures
    string childUri;                  // URI de metadatos en IPFS
    address[] authorizedMarkets;      // Marketplaces autorizados
}
</code></pre><br/><br/>Contratos Principales:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createChild(CreateChildParams params) external onlySupplier returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateChild(UpdateChildParams params) external onlyChildOwner(params.childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createChildrenBatch(CreateChildParams[] params) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateChildrenBatch(UpdateChildParams[] params) external</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteChild(uint256 childId) external onlyChildOwner(childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableChild(uint256 childId) external onlyChildOwner(childId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableChild(uint256 childId) external onlyChildOwner(childId)</div><br/><br/>2. Templates (ERC1155)<br/>Los Templates son recetas DIY de ensamblaje. Referencian Children y también pueden referenciar otros Templates; luego añaden instrucciones de colocación, uso y cantidades para cada unidad referenciada. Un Template no es un producto terminado. Es una factura configurada de Children que puede venderse por sí mismo o ser utilizada por un Parent u otro Template.<br/><br/>Ejemplos de uso de Templates incluyen:<br/>-Un set de impresión para hoodie que combina una base hoodie child y varias zonas de impresión<br/>-Un plan de corte que anida regiones de patrón para producción sin residuos<br/>-Un stack de shaders que superpone efectos digitales para un skin on-chain<br/>-Un pack de materiales que une telas, adornos y etiquetas para una cápsula concreta<br/><br/>Cada Template contiene:<br/>-Coste: precio digital y físico<br/>-Límite de suministro: ediciones máximas para producción física<br/>-Disponibilidad: DIGITAL_ONLY, PHYSICAL_ONLY o BOTH<br/>-Permisos: allowlists de mercados y flags de referencia abierta para digital y físico<br/>-Modo de venta: standaloneAllowed para permitir compra directa o forzar uso solo dentro de Parents<br/>-Mutabilidad: versionado de URI y precio con opción de bloqueo de inmutabilidad<br/><br/>Creación y ciclo de vida:<br/>-Los Templates son creados por Suppliers aprobados dentro de una Infrastructure.<br/>-Un Template hereda toda la superficie de interfaz de Child, con isTemplate = true y mapeos extra de colocación.<br/>-Creación en dos pasos para proteger los Children referenciados:<br/> 1) <i>Reserve</i> guarda metadatos y placements con estado RESERVED. La autoaprobación ocurre solo si todas las unidades referenciadas ya permiten explícitamente el Template o tienen sus flags de referencia abiertos a todos. En caso contrario, el contrato emite solicitudes de aprobación a cada Child referenciado.<br/> 2) <i>Create</i> finaliza la activación y solo puede llamarse si todos los Children y Templates anidados han dado aprobación. El estado pasa a ACTIVE y el uso se incrementa en todos los placements, incluidos Templates anidados.<br/>-Borrado: solo si el Template no tiene suministro ni referencias activas. Puede deshabilitarse en cualquier momento para detener ventas o referencias.<br/>-Matemática de ediciones: chequeos de demanda acumulada impiden que un Template o un Parent exceda la capacidad física de cualquier Child referenciado.<br/><br/><pre><code>
struct ChildReference {
uint256 childId; // ID del child o template referenciado
uint256 amount; // Unidades consumidas por 1 template o 1 parent
uint256 prepaidAmount; // Suministro prepagado reservado para esta referencia
uint256 prepaidUsed; // Suministro prepagado ya consumido
address childContract; // Contrato donde está definido el childId
string placementURI; // Esquema legible por máquina con instrucciones y campos personalizados
}
</code></pre><br/><br/>Contratos Principales:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveTemplate(CreateChildParams params, ChildReference[] placements) external onlySupplier returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createTemplate(uint256 reservedTemplateId) external onlySupplier</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveTemplateBatch(CreateChildParams[] paramsArray, ChildReference[][] placementsArray) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createTemplateBatch(uint256[] reservedTemplateIds) external onlySupplier returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteTemplate(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableChild(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableChild(uint256 templateId) external onlyChildOwner(templateId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">getTemplatePlacements(uint256 templateId) external view returns (ChildReference[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">canPurchase(uint256 templateId, uint256 amount, bool isPhysical, address market) external view returns (bool)</div><br/>Notas:<br/>-Los splits de pago se calculan al momento de la compra. El Supplier del Template cobra el precio del Template. Cada Supplier de un Child referenciado cobra su propio precio multiplicado por la demanda acumulada.<br/><br/>3. Parents (ERC721)<br/>Los Parents son prendas terminadas. Vinculan una factura configurada de materiales en un diseño ERC721 manufacturable: el SKU, la orden de producción, el gemelo digital y el sobre de derechos.<br/><br/>Los Parents pueden referenciar:<br/>- un Template (que a su vez referencia Children), o<br/>- un conjunto directo de referencias a Children.<br/><br/>Cada Parent contiene:<br/>- Coste: precio digital y físico<br/>- Límites de edición: maxDigitalEditions, maxPhysicalEditions con contadores en vivo<br/>- Disponibilidad: DIGITAL_ONLY, PHYSICAL_ONLY o BOTH<br/>- Permisos: allowlists de mercado y flags abiertos por canal<br/>- Workflow: un FulfillmentWorkflow que codifica los pasos de producción y los pagos a fulfillers<br/>- Metadatos: token URI inmutable por cada ERC721 minteado, versionado a nivel de diseño<br/><br/>Creación y ciclo de vida:<br/>-Los Parents son creados por Designers aprobados dentro de una Infrastructure para mintear en contratos de Parent.<br/>-Flujo en dos fases que protege unidades referenciadas y sus Suppliers:<br/> 1) <i>reserveParent</i> guarda metadatos y referencias con estado RESERVED. La autoactivación ocurre solo si cada unidad referenciada ya aprueba al Parent o tiene flags de referencia abiertos. En otro caso, el contrato emite solicitudes de aprobación a lo largo del grafo, incluidos Templates anidados.<br/> 2) <i>createParent</i> finaliza la activación una vez satisfechas todas las aprobaciones. El estado cambia a ACTIVE y el uso se incrementa a través de todos los Children y Templates anidados.<br/>-Actualizaciones: el precio y los mercados autorizados pueden actualizarse mientras no haya compras, con guardas estrictas para que los límites de edición no queden por debajo de los conteos actuales y que el precio cubra los costes del workflow.<br/>-Borrado: solo si no hay compras y no existe uso activo. Puede deshabilitarse o habilitarse en cualquier momento.<br/>-Matemática de ediciones: chequeos de demanda acumulada aseguran que el Parent no exceda la capacidad física de ningún Child o Template referenciado.<br/><br/>Ruta de compra y minting:<br/>-Un Market debe estar en la allowlist del Parent o el Parent debe estar abierto a todos para el canal correspondiente.<br/>-<span class="font-mono">canPurchase</span> valida estado, disponibilidad, matemática de ediciones, permisos de mercado y aprobaciones de Children recursivamente.<br/>-En la compra, el Market distribuye pagos: los fulfillers cobran desde el precio del Parent según el workflow; el resto va a la Designer. Cada Child o Template referenciado cobra su propio precio multiplicado por la demanda acumulada del pedido.<br/>-El Market mintea los ERC721 al comprador y también mintea o reserva los ERC1155 requeridos por la composición. Para pedidos físicos con workflow, el contrato de Fulfillment se inicia y más tarde finaliza la entrega del token físico.<br/><br/><pre><code>
struct CreateParentParams {
uint256 digitalPrice; // Precio para ediciones digitales
uint256 physicalPrice; // Precio para ediciones físicas
uint256 maxDigitalEditions; // Límite para mints ERC721 digitales
uint256 maxPhysicalEditions; // Límite para mints ERC721 físicos
uint8 printType; // Pista de proceso para fabricación
Availability availability; // DIGITAL_ONLY, PHYSICAL_ONLY, BOTH
bool digitalMarketsOpenToAll; // Abrir canal digital a cualquier Market
bool physicalMarketsOpenToAll; // Abrir canal físico a cualquier Market
string uri; // Metadatos base para tokenURI
ChildReference[] childReferences; // Template o conjunto directo de Children
ChildSupplyRequest[] supplyRequests; // Solicitudes de suministro
address[] authorizedMarkets; // Markets permitidos
FulfillmentWorkflow workflow; // Pasos de producción y pagos
}

struct UpdateParentParams {
uint256 designId; // ID del diseño
uint256 digitalPrice; // Nuevo precio digital
uint256 physicalPrice; // Nuevo precio físico
uint256 maxDigitalEditions; // Nuevo límite digital (>= actual)
uint256 maxPhysicalEditions; // Nuevo límite físico (>= actual)
address[] authorizedMarkets; // Actualización de allowlist de mercados
}

struct SubPerformer {
uint256 splitBasisPoints; // Porcentaje del pool del primario (bps)
address performer; // Wallet del subcontratista
}

struct FulfillmentStep {
uint256 primaryPerformer; // Debe ser Fulfiller aprobado o 0x0 = Designer
string instructions; // Notas legibles / archivo máquina (ipfs://...)
SubPerformer[] subPerformers; // Subcontratistas pagados desde el primario
}

struct FulfillmentWorkflow {
FulfillmentStep[] digitalSteps; // Pasos para canal digital
FulfillmentStep[] physicalSteps; // Pasos para canal físico
}
</code></pre><br/><br/>Contratos Principales:<br/><div class="font-bold w-fit h-fit mb-1 bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveParent(CreateParentParams params) external onlyDesigner returns (uint256)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createParent(uint256 reservedParentId) external onlyDesigner</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">reserveParentBatch(CreateParentParams[] paramsArray) external onlyDesigner returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">createParentBatch(uint256[] reservedParentIds) external onlyDesigner</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">updateParent(UpdateParentParams params) external onlyDesignOwner(params.designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">approveMarket(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">revokeMarket(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">requestMarketApproval(uint256 designId) external</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">approveMarketRequest(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">rejectMarketRequest(uint256 designId, address market) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">mint(uint256 parentId, uint256 amount, address to, bool isPhysical) external returns (uint256[] memory)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">canPurchase(uint256 designId, uint256 amount, bool isPhysical, address market) external view returns (bool)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">isParentActive(uint256 designId) external view returns (bool)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">disableParent(uint256 designId) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">enableParent(uint256 designId) external onlyDesignOwner(designId)</div><div class="mb-1 font-bold w-fit h-fit bg-gray-800 rounded-sm p-1 text-gray-400 text-xs">deleteParent(uint256 designId, uint256 transferId) external onlyDesignOwner(designId)</div><br/><br/><table style="border-collapse: separate; border-spacing: 0 8px; width: 100%;">

<thead> <tr style="text-align: left; background-color: #1f2937; color: #d1d5db;"> <th style="padding: 8px; border-radius: 6px 0 0 6px;">Capa</th> <th style="padding: 8px;">Contrato Base (Abstracto)</th> <th style="padding: 8px;">Contrato Concreto (Desplegable)</th> <th style="padding: 8px;">Estándar</th> <th style="padding: 8px; border-radius: 0 6px 6px 0;">Propósito</th> </tr> </thead> <tbody> <tr style="background-color: #111827; color: #d1d5db;"> <td style="padding: 10px; border-radius: 6px 0 0 6px;">Atómica</td> <td style="padding: 10px;"><code>FGOBaseChild</code></td> <td style="padding: 10px;"><code>FGOChild</code></td> <td style="padding: 10px;">ERC1155</td> <td style="padding: 10px; border-radius: 0 6px 6px 0;">Componentes individuales (children): partes crudas, materiales, zonas, efectos</td> </tr> <tr style="background-color: #111827; color: #d1d5db;"> <td style="padding: 10px; border-radius: 6px 0 0 6px;">Compuesta</td> <td style="padding: 10px;"><code>FGOTemplateBaseChild</code></td> <td style="padding: 10px;"><code>FGOTemplateChild</code></td> <td style="padding: 10px;">ERC1155</td> <td style="padding: 10px; border-radius: 0 6px 6px 0;">Recetas de ensamblaje (templates): facturas configuradas con datos de colocación</td> </tr> <tr style="background-color: #111827; color: #d1d5db;"> <td style="padding: 10px; border-radius: 6px 0 0 6px;">Final</td> <td style="padding: 10px;"><code>FGOBaseParent</code></td> <td style="padding: 10px;"><code>FGOParent</code></td> <td style="padding: 10px;">ERC721</td> <td style="padding: 10px; border-radius: 0 6px 6px 0;">Prendas terminadas (parents): SKUs fabricables, con propiedad y fulfillment</td> </tr> </tbody> </table> <br/><br/><div style="font-family: monospace; color: #d1d5db; background-color: #111827; padding: 16px; border-radius: 8px; width: fit-content;"> <ul style="list-style-type: none; padding-left: 20px; margin: 0;"> <li> <span style="color:#93c5fd;">Parent (ERC721)</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child A (ERC1155)</li> <li>↳ Child B (ERC1155)</li> <li> ↳ Template X (ERC1155) <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child C (ERC1155)</li> <li> ↳ Template Y (ERC1155) <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child D (ERC1155)</li> <li>↳ Child E (ERC1155)</li> </ul> </li> </ul> </li> </ul> </li> </ul> </div><br/><br/><h3 class='font-bold'>Metadatos y Estándares On-Chain</h3>

Los metadatos en FGO V3 funcionan a la vez como descriptor y como plano ejecutable.<br/>

Capa descriptiva: comunica a personas — diseñadores, proveedores, coleccionistas.<br/>

Capa operativa: codifica instrucciones para que fábricas, renderizadores o front-ends actúen directamente.<br/><br/>

Todos los URIs de metadatos se fijan (hash) en IPFS. Los campos están diseñados para ser flexibles pero lo bastante rigurosos como para soportar flujos generativos, automatización de fabricación y trazabilidad de procedencia.<br/><br/>

<div class="font-bold mb-2">Metadatos de Child</div> Los Children definen unidades atómicas individuales. Sus metadatos describen qué es la unidad y cómo debe entenderse en términos digitales y físicos. <br/><br/> <pre><code>
export interface ChildMetadata {
  title: string;          // Required: name of the unit
  description: string;    // Required: text description
  image: string;          // Required: IPFS link to preview/render
  attachments: Attachment[]; // Optional: PDFs, DXF, texture packs
  tags: string[];         // Optional: classification keywords
  prompt: string;         // Optional: AI prompt if generated
  aiModel: string;        // Optional: model reference (StableDiffusion, etc.)
  loras: string[];        // Optional: LoRA IDs used in generation
  workflow: string;       // Optional: ComfyUI / node graph reference
  version: string;        // Required: version number
  customFields: Record<string, string>; // Optional
}
export interface Attachment {
  uri: string;  // IPFS link
  type: string; // MIME type or classifier
}
</code></pre>

<br/><br/>

<pre><code>{
 "title":"Hoodie Print Base",
 "description":"Standard unisex hoodie print base for direct-to-garment printing",
 "image":"ipfs://QmRender", 
 "attachments":[
   {"uri":"ipfs://QmCutPlanDXF", "type":"application/dxf"},
   {"uri":"ipfs://QmFabricSpecSheet", "type":"application/pdf"}
 ],
 "tags":["base","hoodie","cotton"],
 "prompt":"",
 "aiModel":"",
 "loras":[],
 "workflow":"",
 "version":"1"
}
</code></pre><br/><br/>

<span style="font-variant: small-caps;">image</span>: render de vista previa si es físico, o el asset digital en sí si es solo digital. <br/>

<span style="font-variant: small-caps;">attachments</span>: archivos auxiliares opcionales (DXF de plan de corte, ficha técnica PDF, malla OBJ, imágenes adicionales, vídeos, audio, etc.).<br/>

<br/><br/>

<div class="font-bold mb-2">Metadatos de Template</div> Los Templates describen ensamblajes de Children. Sus metadatos documentan el propósito del ensamblaje y cómo debe entenderse en un contexto DIY o de fábrica. <br/><br/> <pre><code>
export interface TemplateMetadata {
  title: string;          // Required: name of the unit
  description: string;    // Required: text description
  image: string;          // Required: IPFS link to preview/render
  attachments: Attachment[]; // Optional: PDFs, DXF, texture packs
  tags: string[];         // Optional: classification keywords
  prompt: string;         // Optional: AI prompt if generated
  aiModel: string;        // Optional: model reference (StableDiffusion, etc.)
  loras: string[];        // Optional: LoRA IDs used in generation
  workflow: string;       // Optional: ComfyUI / node graph reference
  version: string;        // Required: version number
  customFields: Record<string, string>; // Optional
}
export interface Attachment {
  uri: string;  // IPFS link
  type: string; // MIME type or classifier
}
</code></pre>

<br/>

<div class="font-bold mb-2">Metadatos de Parent</div>
Los Parents finalizan la producción. Sus metadatos quedan bloqueados en el momento de la acuñación para garantizar la estabilidad a nivel de SKU.
<br/><br/>

<pre><code>
export interface ParentMetadata {
  id: string;             // Unique parent ID
  title: string;          // Required
  description: string;    // Required
  image: string;          // Required
  tags: string[];         // Optional
  prompt: string;         // Optional
  attachments: Attachment[];
  aiModel: string;        // Optional
  loras: string[];        // Optional
  workflow: string;       // Optional
  version: string;        // Required
  customFields: Record<string, string>; // Optional
}
</code></pre>

<br/><br/>

<pre><code>{
 "title":"Limited Edition Neon Hoodie",
 "description":"Neon-print hoodie produced with zero-waste cut plan and reflective sleeve patch",
 "image":"ipfs://QmFinalProductRender", 
 "attachments":[
   {"uri":"ipfs://QmWashInstructions", "type":"application/pdf"}
 ],
 "tags":["hoodie","limited","neon"],
 "prompt":"",
 "aiModel":"",
 "loras":[],
 "workflow":"",
 "version":"1"
}
</code></pre>

<br/><br/>
Una vez minteado, el URI de metadatos de un Parent no puede cambiarse — se convierte en la referencia canónica de ese SKU.

<br/><br/><br/>

<div class="font-bold mb-2">Metadatos de Colocación de ChildReference</div> Los Templates también especifican cómo se colocan los Children. Esto se hace mediante <span style="font-variant: small-caps;">placementURI</span>.

<br/><br/>

<pre><code>
export interface ChildPlacement {
  instructions: string;   // Required
  customFields: Record<string, string>;  // Optional
}
</code></pre>

<br/><br/>

<pre><code>{
 "instructions":"Apply front panel graphic at 300 DPI, centered",
 "customFields":{
   "scale":"1",
   "rotation":"0",
   "x":"150",
   "y":"420",
   "seamAllowance":"0.5cm"
 }
}
</code></pre>

<br/><br/>

<span style="font-variant: small-caps;">instructions</span>: directiva legible por humanos.<br/>

<span style="font-variant: small-caps;">customFields</span>: diccionario extensible analizable por máquina (para geometría, tolerancias, anclajes AR, mapeos IoT).<br/><br/>

<br/> <div class="font-bold mb-2">Versionado e Inmutabilidad</div> - **Children/Templates**: mutables si <span style="font-variant: small-caps;">isImmutable</span> = false. Las actualizaciones requieren incrementar <span style="font-variant: small-caps;">version</span>. Una vez bloqueados, los metadatos pasan a ser archivísticos.<br/> - **Parents**: inmutables desde el mint. El registro queda congelado como artefacto de producción. <br/><br/>

Este sistema ofrece transparencia iterativa durante prototipado y remix, y habilita confianza en el contenido cuando un diseño debe fijarse para fabricación, procedencia o uso contractual.

<br/><br/>

<div class="font-bold mb-2">Tabla Comparativa</div> <table class="table-auto border border-gray-700 text-sm"> <thead class="bg-gray-800 text-gray-300"> <tr> <th class="p-2 border">Entidad</th> <th class="p-2 border">Campos Requeridos</th> <th class="p-2 border">Campos Opcionales</th> <th class="p-2 border">Mutabilidad</th> </tr> </thead> <tbody> <tr> <td class="p-2 border">Child</td> <td class="p-2 border">title, description, image, version</td> <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td> <td class="p-2 border">Mutable hasta que <code>isImmutable</code> se establezca en true</td> </tr> <tr> <td class="p-2 border">Template</td> <td class="p-2 border">title, description, image, version</td> <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td> <td class="p-2 border">Mutable hasta que <code>isImmutable</code> se establezca en true</td> </tr> <tr> <td class="p-2 border">Parent</td> <td class="p-2 border">title, description, image, version</td> <td class="p-2 border">attachments, tags, prompt, aiModel, loras, workflow</td> <td class="p-2 border">Inmutable después del mint</td> </tr> </tbody> </table> <br/><br/><h3 class='font-bold'>Creación de Contratos, Configuración de Factory, Roles y Permisos</h3><br/>

La suite de contratos está diseñada para ser lo más **componible y singular** posible: cada contrato individual puede operar de forma autónoma, pero también admite la superposición de relaciones. El contrato <span class="font-mono">Factory</span> simplifica el despliegue y la coordinación.<br/><br/>  

- La Factory despliega suites completas de **Infrastructure**.<br/>
- Cada Infrastructure contiene los contratos y las asignaciones de roles necesarias para mintear Children, Templates y Parents, listarlos en Markets y conectarlos en flujos de Fulfillment.<br/>  
- Cada despliegue emite eventos indexados en un Subgraph dedicado de Fractional Garment Ownership, lo que permite referencias en tiempo real para interfaces front-end en todas las infraestructuras. El registro global de Infrastructures y sus contratos puede explorarse en <a href="https://fgo.themanufactory.xyz" class="font-mono">fgo.themanufactory.xyz</a>.  

<br/><br/>  

<div class="font-bold mb-2">Infrastructure</div>
Una Infrastructure es un entorno autocontenido que agrupa despliegues de contratos con roles y permisos acotados.<br/><br/>  

- **Admin**: propietario/a de la Infrastructure.<br/>    
  - Puede desplegar contratos de Child, Template, Parent, Market y Fulfillment dentro de la Infrastructure.<br/>  
  - Puede añadir o remover roles (Suppliers, Designers, Fulfillers, otros Admins).<br/>  
  - Puede desactivar o reactivar la Infrastructure, pausando o reanudando minteos, creación de contratos y ventas.<br/><br/>  
- **Suppliers**: una vez añadidos, pueden mintear Children y Templates en los contratos de Child y Template desplegados en esa Infrastructure.<br/>  
- **Designers**: una vez añadidos, pueden crear Parents en los contratos de Parent desplegados en esa Infrastructure.<br/>  
- **Fulfillers**: una vez añadidos, pueden ser incrustados en los flujos de Fulfillment de Parents y recibir pagos por pasos de producción.<br/>  

<br/>

<div class="font-bold mb-2">Propósito</div>
Esta estructura habilita una segmentación granular:<br/>  
- Una misma dirección puede crear múltiples Infrastructures para aislar colaboraciones, colecciones o mercados.<br/>  
- Si una wallet es comprometida, se puede levantar una nueva Infrastructure y transferir la propiedad.<br/>  
- Los permisos pueden asignarse o revocarse por Infrastructure sin afectar a las demás.<br/>  
- Los contratos de Market y Fulfillment desplegados dentro de una Infrastructure ofrecen entornos específicos para listar y ejecutar ventas.<br/><br/>

<div class="font-bold mb-2">Token Base de Pago</div>
- Cada Infrastructure define un **token base de pago**.<br/>  
- Todos los Children, Templates y Parents creados dentro de esa Infrastructure se valoran y liquidan en ese token.<br/>  
- Por defecto, el token es <a href="https://explorer.lens.xyz/address/0x28547B5b6B405A1444A17694AC84aa2d6A03b3Bd" class="font-mono">$MONA</a>, pero puede asignarse cualquier ERC20 compatible con Lens zkSync.<br/><br/>Este diseño garantiza que las infraestructuras funcionen como cúmulos modulares pero interoperables: capaces de operar de forma independiente, segmentar roles y permisos, y aun así converger en un ecosistema compartido donde cada contrato es indexable, descubrible y líquido. <br/><br/>

<br/><h3 class='font-bold'>Identidad de Rol & Transferencia de Billetera</h3> <div class="font-bold mb-2">Sistema de Rol Basado en ID</div> Los Diseñadores, Proveedores y Cumplimentadores se identifican por **IDs numéricos** dentro de su Infraestructura, no por direcciones de billetera. Esta separación de identidad y billetera crea un modelo de seguridad crucial:<br/><br/>
ID de Diseñador: un uint256 asignado cuando una billetera se añade como Diseñador a una Infraestructura<br/>
ID de Proveedor: un uint256 asignado cuando una billetera se añade como Proveedor a una Infraestructura<br/>
ID de Cumplimentador: un uint256 asignado cuando una billetera se añade como Cumplimentador a una Infraestructura<br/><br/>
Cada ID de rol mantiene una dirección de billetera vinculada, que se puede actualizar en cualquier momento sin perder la identidad del rol o ninguno de los activos, ventas o créditos asociados.<br/><br/> <div class="font-bold mb-2">Mecanismo de Transferencia de Billetera</div> En cualquier momento, un rol puede transferir su vínculo de billetera a una nueva dirección:<br/><br/> <pre><code> designerWallet.transferWallet(designerId, newDesignerWallet) supplierWallet.transferWallet(supplierId, newSupplierWallet) fulfillerWallet.transferWallet(fulfillerId, newFulfillerWallet) </code></pre> En la transferencia:<br/>
El ID de rol permanece sin cambios y retiene todos los Padres, Hijos, Plantillas y créditos asociados<br/>
La nueva billetera se convierte en la dirección activa para ese rol<br/>
Todos los pagos futuros (ventas, honorarios de cumplimiento, solicitudes de suministro) se enrutan a la nueva billetera<br/>
La billetera antigua pierde el control del rol pero retiene cualquier criptomoneda ya recibida<br/><br/>
<div class="font-bold mb-2">Enrutamiento de Pagos</div> Cuando ocurre una venta, los pagos siempre se enrutan a la **dirección de billetera actualmente vinculada** del ID de rol:<br/><br/> Escenario:<br/>
Diseñador A (Billetera A) crea Padre X y vende 10 unidades → Billetera A recibe el pago<br/>
Diseñador A transfiere el rol a Billetera B vía transferWallet(designerId, walletB)<br/>
Padre X vende 10 unidades más → Billetera B recibe el pago (no Billetera A)<br/>
No se requiere acción adicional. La transferencia es atómica e inmediata.<br/><br/>
El mismo patrón se aplica para Proveedores que reciben ventas de Hijos/Plantillas y Cumplimentadores que reciben honorarios de cumplimiento.<br/><br/> <div class="font-bold mb-2">Seguridad & Mitigación de Riesgos</div> Esta arquitectura protege contra varios vectores de ataque:<br/><br/>
Compromiso de Clave Privada: Si la clave privada de una billetera se ve comprometida, el rol puede transferirse a una nueva billetera segura sin perder ningún permiso, crédito o historial de ventas<br/>
Actualización de Billetera de Hardware: Un rol puede migrarse desde una EOA a una billetera multifirma, billetera de hardware o billetera de contrato inteligente sin problemas<br/>
Seguridad Operativa: Las claves se pueden rotar regularmente sin interrumpir las operaciones comerciales en curso<br/>
Recuperación de Acceso: Si una billetera se pierde o no es accesible, se puede recuperar a una nueva dirección (con mecanismos de recuperación apropiados por Infraestructura)<br/><br/>
El ID de rol permanece como la fuente de verdad canónica. La billetera es meramente la autoridad firmante actual para ese rol.<br/><br/> <div class="font-bold mb-2">Créditos de Futuros & Transferencia de Billetera</div> Los Diseñadores que poseen **Créditos de Futuros** prepagados pueden transferir esos créditos a una nueva billetera junto con la transferencia de rol:<br/><br/> <pre><code> futuresCoordination.transferFuturesCredits( childContracts, childIds, newWallet ) </code></pre> Esto garantiza que la capacidad de edición digital reservada y otros créditos en cadena se muevan con la billetera, manteniendo la tubería de producción del diseñador intacta durante la transición.<br/><br/>

<br/><h3 class='font-bold'>Composabilidad entre Infraestructuras</h3>Aunque cada Infrastructure es autocontenida, los contratos no están aislados. Children, Templates y Parents pueden interoperar entre infraestructuras para formar un único grafo de fabricación composable.
<br/><br/>

<div class="font-bold mb-2">Referencias entre Infraestructuras</div> - Un Parent en una Infrastructure puede referenciar Children o Templates minteados en otra Infrastructure.<br/> - Un Template puede incorporar Children que se originan en múltiples Infrastructures.<br/> - Los contratos de Market pueden listar Parents y Templates sin importar la Infrastructure donde se crearon, siempre que existan los permisos de referencia requeridos.<br/> <br/> <div class="font-bold mb-2">Permisos y Procedencia</div> - Los derechos de referencia permanecen acotados a la Infrastructure original.<br/> - Incluso cuando un Child o Template es arrastrado a otra Infrastructure, su **lógica de minting, límites de suministro y permisos** los hace cumplir el contrato de origen.<br/> - Esto asegura que Suppliers y Designers mantengan la soberanía sobre las unidades que crearon, sin bloquear una composabilidad más amplia.<br/> <br/> <div class="font-bold mb-2">Alineación del Token de Pago</div> - Cada Infrastructure tiene su propio token base de pago para precios internos.<br/> - Cuando hay referencias cruzadas entre múltiples Infrastructures con tokens distintos: la transacción usa el token de pago del **contrato de Market** que ejecuta la compra. $MONA opera como el token de facto entre Infrastructures, dado que está ampliamente adoptado por diseñadores y ofrece la vía de liquidación más fluida cuando los activos abarcan varias Infrastructures.<br/> - Los Designers pueden configurar otros ERC20 dentro de su propia Infrastructure, pero la interoperabilidad suele ser más fiable cuando $MONA se usa como medio compartido.

<br/><br/>

<div class="font-bold mb-2">Beneficios</div> - Habilita la **composabilidad total**: los diseñadores no quedan encajonados en su propia Infrastructure.<br/> - Preserva la **integridad a nivel de unidad**: suppliers y designers fijan reglas una vez, y esas reglas se propagan allí donde se referencien sus activos.<br/> - Aporta **neutralidad de mercado**: los listados y compras pueden ocurrir en cualquier Market compatible.<br/> <br/> Esta arquitectura equilibra **soberanía e interoperabilidad**. Cada Infrastructure conserva su propio contexto de permisos y pagos, y al mismo tiempo el ecosistema completo funciona como una malla de fabricación modular y fluida.<br/><br/> <h3 class='font-bold'>Verificación y Permisos</h3> El protocolo aplica permisos en tres bordes: **Referencia**, **Market**, **Template**. Todas las comprobaciones son sensibles al modo (digital vs físico) y se propagan por los anidados (template-de-templates). Ningún objeto puede mintearse o venderse en un market sin superar estas compuertas.<br/><br/><ul> <li><b>Referencias de Child</b>: Children y Templates exponen flags de referencia abierta o listas de permitidos explícitas. Un Parent o Template que intente consumirlos debe estar preaprobado o solicitar verificación. Cada aprobación de Child debe ascender por todos los Templates y Parents que lo referencien, evitando bloqueos maliciosos o el desvío de unidades escasas.</li> <li><b>Aprobaciones de Market</b>: Solo Markets autorizados pueden listar o ejecutar pedidos. Designers y Suppliers pueden incluir markets en listas blancas al mintear o actualizarlas hasta la primera venta. Los canales físico y digital se validan por separado. Todo Child y Template anidado también debe aprobar el Market, garantizando que no se eludan pagos ni se desvíen ventas a sedes hostiles.</li> <li><b>Referencias de Template</b>: Los ensamblajes multinivel aplican comprobaciones recursivas. Un Template que referencia a otro Template debe heredar y respetar todos los permisos de sus Children anidados, límites de edición y reglas de disponibilidad. La validación asciende: para que un Parent sea válido, cada Template y Child del grafo de composición debe aprobarlo explícitamente.</li></ul><br/> <div style="font-family: monospace; color: #d1d5db; background-color: #111827; padding: 16px; border-radius: 8px; width: fit-content;"> <ul style="list-style-type: none; padding-left: 20px; margin: 0;"> <li> <span style="color:#93c5fd;">Parent (ERC721)</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ <span style="color:#fbbf24;">Template A (ERC1155)</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child 1 (ERC1155)</li> <li>↳ Child 2 (ERC1155)</li> </ul> </li> <li>↳ <span style="color:#fbbf24;">Template B (ERC1155)</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child 3 (ERC1155)</li> <li>↳ <span style="color:#34d399;">Template C (ERC1155)</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ Child 4 (ERC1155)</li> <li>↳ Child 5 (ERC1155)</li> </ul> </li> </ul> </li> </ul> </li> </ul> </div> <p style="font-size: 14px; color: #9ca3af; margin-top: 8px;"> Cada Child y Template del árbol debe aprobar explícitamente las referencias ascendentes.<br/>Un Template solo puede activarse si <i>todos los Children y Templates anidados</i> conceden verificación.<br/> Un Parent solo puede activarse si <i>todos los Children y Templates anidados</i> conceden verificación.<br/>Un Market solo puede procesar una compra si el Parent y <i>todos los Children y Templates anidados</i> conceden verificación. </p><br/><br/> <div class="font-bold mb-2">Lazy Minting</div> Todas las entidades en FGO V3 se mintean de forma perezosa (lazy).<br/> - Hasta la compra, Children, Templates y Parents existen solo como structs de código en el storage del contrato.<br/> - El minting ocurre en el momento del pago, y solo si todas las comprobaciones de verificación (Market, Child y Template) se superan con éxito.<br/> - Esto garantiza que la oferta siempre esté impulsada por la demanda: cada unidad minteada está plenamente validada, limpia en permisos y respaldada por la liquidación en el token de pago de la Infrastructure.<br/><br/>

Este modelo elimina el “ghost supply” y aplica escasez solo cuando procede (p. ej., ediciones físicas), a la vez que permite que las ediciones digitales escalen infinitamente sin inflar el estado on-chain.<br/><br/><h3 class='font-bold'>Markets y Fulfillment</h3>Cuando se despliega un contrato de Market dentro de una Infrastructure Suite, automáticamente se despliega un contrato de Fulfillment y queda enlazado rígidamente a ese Market.<br/><br/>Market = toma de pedidos, preflight checks, cálculo de precio, pagos y orquestación de mint.<br/>

Fulfillment = flujo de producción paso a paso, atestaciones y liquidación de tokens físicos al completarse.<br/>

Ambos liquidan en el PAYMENT_TOKEN (ERC-20) de la Infrastructure definido por su AccessControl; eso es lo que paga el comprador y lo que reciben los destinatarios.<br/><br/><div class="font-bold mb-1">Fulfillment Workflow (en Parent)</div> Un Parent creado puede codificar opcionalmente la lógica de producción como workflow. Los pasos son sensibles a la disponibilidad (digital vs físico). <pre><code>
struct SubPerformer {
uint256 splitBasisPoints; // participación tomada del bote primario del paso (0–10000)
address performer; // puede ser cualquier address (no necesita el rol Fulfiller)
}

struct FulfillmentStep {
uint256 primaryPerformer; // DEBE ser un Fulfiller en la Infrastructure del Parent (o 0 = Designer)
string instructions; // ipfs://... brief libre del paso / archivo de máquina
SubPerformer[] subPerformers;
}

struct FulfillmentWorkflow {
uint256 estimatedDeliveryDuration; // Tiempo estimado de entrega en segundos
FulfillmentStep[] digitalSteps;
FulfillmentStep[] physicalSteps;
} </code></pre><br/><br/>- primaryPerformer: un rol Fulfiller aprobado en la Infrastructure del Parent.<br/>

subPerformers: direcciones arbitrarias, pagadas desde el bote del primary por un split en basis points.<br/>

instructions: un puntero IPFS con notas, esquemas o configuraciones legibles por máquina.<br/>

Los pasos son opcionales. Un Parent puede no tener, tener algunos o tener workflows multietapa complejos.<br/><br/><div class="font-bold mb-2">Lógica de pagos</div>En la compra, el Market computa dos capas de pagos:<br/><br/>

Capa Parent<br/>

Para cada paso:<br/>
stepPot = basePrice + (parentPrice × vigBps / 10000)<br/>

Los sub-performers toman sus %; el remanente va al primary.<br/>

El Designer recibe parentPrice − Σ(stepPots).<br/><br/>

Capa de Composición<br/>

Cada Child y Template referenciado (incluyendo anidados) recibe
unitPrice × quantityDemanded<br/>

Esto garantiza que los proveedores aguas abajo siempre estén compensados.<br/>

Todas las transferencias se ejecutan atómicamente en el PAYMENT_TOKEN de la Infrastructure.<br/><br/>Ejemplo
Parent = 500 $MONA. Dos pasos de fulfillment:<br/>

Paso 1 → base 30 $MONA, vig 20% → 30 + 100 = 130<br/>

Paso 2 → base 10 $MONA, vig 5% → 10 + 25 = 35<br/>
Coste total de dos pasos = 165 $MONA. El Designer recibe 335 $MONA.<br/>
Los costes de Children/Template se suman aparte y se cargan directamente al comprador.<br/><br/><div class="font-bold mb-2">Reglas de lazy minting y entrega</div>

Como se indicó, la oferta solo existe cuando se compra. Hasta entonces, las unidades viven como structs en el storage del contrato.<br/><br/>

<h2 class="font-bold">Pedido digital</h2>

Parent ERC721 → minteado inmediatamente.<br/>

Children/Templates → minteados inmediatamente si son DIGITAL_ONLY o BOTH.<br/>

Las unidades solo físicas se omiten.<br/><br/>

<h2 class="font-bold">Pedido físico, sin pasos de fulfillment</h2>

Parent ERC721 → minteado inmediatamente.<br/>

Children/Templates → minteados inmediatamente si son PHYSICAL_ONLY o BOTH.<br/>

Las unidades solo digitales se omiten.<br/><br/>

<h2 class="font-bold">Pedido físico, con pasos de fulfillment</h2>

Parent ERC721 → minteado inmediatamente.<br/>

Las unidades solo digitales se omiten.<br/><br/>

Children/Templates → no se mintean en la compra. Se reservan derechos.<br/>

Solo al completar el paso físico final el contrato de Fulfillment los mintea al comprador.<br/><br/>

Esto hace cumplir el invariante: un token físico de child es prueba de que el ítem físico correspondiente ha superado producción.<br/><br/><div class="font-bold mb-2">Infinito digital vs. escasez física</div>

Activos digitales: sin límites de edición. Se mantienen abundantes, remixables y alineados con CC0.<br/>

Activos físicos: con límites estrictos vía maxPhysicalEditions. El Market valida la demanda acumulada a través de todo el grafo (parents, templates, children) antes de aprobar una compra.<br/><br/>

Una oferta digital infinita de children impulsa la cultura del remix abierto, mientras que la oferta física escasa de children establece cotas dentro de límites de fabricación atestables.<br/><br/><div class="font-bold mb-2">Flujo de pedido</div>

El comprador llama a Market.buy con los datos del pedido (cantidad, modo).<br/>

El Market ejecuta el preflight: disponibilidad, permisos, aritmética de ediciones, autorización de market.<br/>

Los pagos se distribuyen entre Designer + Fulfillers + Suppliers.<br/>

Las reglas de mint (arriba) deciden qué recibe el comprador al instante y qué al completar el workflow.<br/>

El contrato de Fulfillment gestiona las atestaciones de cada paso.<br/>

En el paso final: se mintean al comprador los Children/Templates físicos pendientes.<br/><br/><div style="font-family: monospace; background-color: #111827; color: #d1d5db; padding: 16px; border-radius: 8px; width: fit-content;">

<ul style="list-style-type: none; padding-left: 20px; margin: 0;"> <li> <span style="color:#93c5fd;">Paso 1: Compra</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>✔ Parent ERC721 minteado inmediatamente</li> <li>✘ Children/Templates (físicos) aún no minteados</li> <li>➝ Derechos reservados para el suministro físico</li> </ul> </li> <li> <span style="color:#93c5fd;">Paso 2: Fulfillment Workflow</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>↳ FulfillmentStep A (p. ej., corte)</li> <li>↳ FulfillmentStep B (p. ej., impresión)</li> <li>↳ FulfillmentStep C (p. ej., control de calidad + envío)</li> <li>✔ Cada paso atestado por el/los Fulfiller(s) asignado(s)</li> </ul> </li> <li> <span style="color:#93c5fd;">Paso 3: Finalización</span> <ul style="list-style-type: none; padding-left: 20px; margin: 4px 0;"> <li>✔ El paso final dispara el mint de Children/Templates físicos</li> <li>➝ El comprador ahora posee ERC1155 = prueba de derechos físicos</li> <li>➝ Parent ERC721 + Children/Templates totalmente liquidados</li> </ul> </li> </ul> </div><br/><br/><h3 class='font-bold'>Futures</h3>

Los futures permiten a los proveedores cubrir costos de fabricación y a los diseñadores asegurar materiales prepagados con entrega anticipada garantizada. Un child configurado como future se convierte en un instrumento de crédito comerciable. Los compradores adquieren créditos a un precio establecido, luego consumen esos créditos más tarde al crear templates o parents, eludiendo el pago en el punto de uso y recibiendo los bienes directamente al liquidar.<br/><br/>

Solo los children crudos pueden configurarse como futures. Los templates no pueden ofrecer futures. El child debe ser DIGITAL_ONLY o PHYSICAL_ONLY. Un child future especifica un precio por unidad, un suministro máximo de créditos a vender y una fecha límite opcional. Si no se establece fecha límite, el future opera perpetuamente: los créditos se liquidan inmediatamente después de la compra. Si se establece una fecha límite, todos los créditos se liquidan simultáneamente en ese momento.<br/><br/>

Cuando un template o parent referencia un child con futures activos, el creador puede elegir consumir créditos prepagados en lugar de pagar al momento de creación. Los créditos físicos o digitales se deducen del balance del creador, y el suministro del child referenciado se reserva. Al liquidar, esas unidades se entregan directamente al creador, completando el ciclo sin fricción de marketplace.<br/><br/>

Esta estructura cumple dos roles:<br/>
- **Proveedores cubren costos**: los productores de materias primas venden futures para asegurar ingresos antes de comprometerse a producción completa, reduciendo la exposición a volatilidad de demanda.<br/>
- **Diseñadores aseguran suministro**: al comprar futures anticipadamente, un diseñador garantiza acceso a componentes escasos, los recibe antes de disponibilidad en mercado y puede más tarde incorporarlos en parents o templates terminados sin requerir que los compradores finales paguen por esos componentes nuevamente.<br/><br/>

Los templates que referencian un child con futures digitales pierden su suministro digital infinito. En cambio, el maxDigitalEditions del template se limita a la cantidad de créditos future que posee el creador del template. Esto asegura que la escasez digital pueda aplicarse cuando componentes respaldados por futures estén involucrados, alineando límites de suministro a través del grafo de composición.<br/><br/>

<pre><code>
struct Futures {
uint256 deadline; // Fecha límite de campaña de futures (0 = perpetuo)
uint256 maxDigitalEditions; // Máx. créditos digitales futures a vender
bool isFutures; // Si este child ofrece créditos futures
}
</code></pre><br/><br/>

<h3 class='font-bold'>Solicitudes de Suministro</h3>

Las solicitudes de suministro permiten a los diseñadores señalizar demanda de componentes y asegurar entrega anticipada de children antes de listar un parent en el mercado. Al reservar un parent, un diseñador puede adjuntar solicitudes de suministro: especificaciones para children que aún no existen o que el diseñador desea prepagar y recibir antes de venta pública.<br/><br/>

Esta estructura invierte el flujo predeterminado. Normalmente, children y templates se entregan al diseñador uno por uno solo después de que los compradores finales adquieran el parent y se complete el fulfillment. Las solicitudes de suministro permiten al diseñador pagar por adelantado, recibir los componentes de inmediato y ser reembolsado transparentemente cuando se vende el parent.<br/><br/>

Una solicitud de suministro especifica cantidad, precio máximo preferido, fecha límite y ya sea una referencia a un child existente o una especificación personalizada. Los proveedores navegan solicitudes activas a través del grafo, identifican demanda y proponen un child existente o crean uno nuevo adaptado a la especificación. Una vez que un proveedor vincula un child a una solicitud de suministro y el diseñador aprueba, ese child queda automáticamente autorizado para uso en el parent, y el suministro prepagado se reserva.<br/><br/>

Cuando un comprador adquiere el parent, el market detecta suministro prepagado. En lugar de pagar al proveedor por esos componentes, el pago del comprador por esas unidades se redirige al diseñador como reembolso. El proveedor ya fue pagado por adelantado. El comprador recibe los mismos bienes, el diseñador recupera costos prepagados y el proveedor asegura ingresos temprano sin esperar demanda de mercado.<br/><br/>

Este mecanismo cumple múltiples roles:<br/>
- **Diseñadores gestionan flujo de caja**: pago por adelantado de componentes críticos habilita producción antes de que capital llegue a través de ventas.<br/>
- **Proveedores ven demanda real**: las solicitudes de suministro actúan como órdenes de compra transparentes, revelando qué necesitan los diseñadores y a qué precio.<br/>
- **Fulfillment personalizado**: los proveedores pueden crear children hechos a medida que coincidan con especificaciones exactas, o proponer inventario existente que encaje con la solicitud.<br/>
- **Aprobación automática**: una vez vinculado, el child está preaprobado para el parent sin requerir flujos de permiso de referencia separados.<br/><br/>

Las solicitudes de suministro solo están disponibles en parents, no en templates. Los templates son recetas de ensamblaje y no llevan las mismas restricciones de producción y capital que prendas terminadas.<br/><br/>

<pre><code>
struct ChildSupplyRequest {
uint256 existingChildId; // ID de child existente si se conoce, 0 en caso contrario
uint256 quantity; // Cantidad de unidades solicitadas
uint256 preferredMaxPrice; // Precio máximo dispuesto a pagar
uint256 deadline; // Fecha límite para cumplimiento
address existingChildContract; // Dirección de contrato si existingChildId > 0
bool isPhysical; // Solicitud física o digital
bool fulfilled; // Si la solicitud ha sido cumplida
string customSpec; // Especificación personalizada para el child solicitado
string placementURI; // Metadatos de colocación para el child solicitado
}
</code></pre><br/><br/><h3 class='font-bold'>Posfacio</h3> FGO V3 no es la última palabra. Es una malla viva, abierta a forks, mutaciones y caza de bugs. Cada contrato aquí es a la vez singular y componible: puedes desplegar uno en aislamiento o apilar cientos hasta formar una fábrica viva. La lógica es lo bastante simple para que opere un/a diseñador/a indie, y lo bastante flexible para que emerjan federaciones enteras.<br/><br/>

Lo que importa ahora no son los números de versión, sino si el protocolo cumple su promesa: hacer que la moda digital y física sea interoperable, verificable y soberana a la escala más pequeña posible. Todo lo demás —valoración, markets, colaboraciones— deriva de esa verdad base.<br/><br/>Las líneas rectas se curvarán. El código hará fork. El suministro fluirá. Y en algún lugar, una persona minteará una prenda que antes no existía, y será suya. <br/><br/>

Contratos + Subgraph::<br/><a href="https://github.com/DIGITALAX/fractional-garment-ownership">here</a>

`,
  },
];
export const DASH: { title: string; description: string }[] = [
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision One.",
    description:
      "<h3 class='font-bold'>Quick Summary</h3>Transfer of 3D digital assets across different applications and graphic environments is not only a process that is presently subject to a high degree of unsophistication, is tedious and broken, but also, in base reality, the concept of cross-platform 3D digital asset interoperability is still very much hypothetical. It is not possible to “drag and drop” a file created in one 3D application directly into another without information loss and often detrimental reductions of fidelity in render output.<br><br>This document sets forth to radically enhance and reform the entire 3D asset transfer domain. We are introducing a file intercommunication architecture, presented predominantly through a wrapper constructor and engine plugin, that enables the dynamic generation of a new 3D file format, DASH.<br><br>DASH defines the geometry and other properties for objects that are dynamically generated through this file intercommunication architecture — whose data structure output is intrinsically dependent on and optimised for the specific application and/or graphic environment into which the output is rendered. In other words, the file format output itself is application layer considerate. These files must have the extension .DASH.<br><br>In this release, the file intercommunication architecture is tailored for translation of .zpac source files into the .DASH file format, in order to enable native compatibility with the Unity, Unreal and Blender engines.<br><br><h3 class='font-bold'>Motive</h3>There are a number of reasons as to why DASH is essential. The most prominent of these are exemplified in assessments of the current gaming, VR, scene based and 3D digital content landscape, with consideration of explosive demand and forward industry projections. 3D digital content continues to lead the future exponentially, with more than a third of the world’s population formally classified as gamers and the global market size of gaming and VR valued at ~USD$180 billion as of 2020, almost double from that recorded in 2016 at ~USD$99.6 billion.<br><br>With this increased adoption in mind, desire for ever more customizable and engaging digital experiences allows us to connect with others and recreate our identities. This has greatly increased the emphasis on any Player’s need to convey with fluency an individualized identity with authentic self-expression in native digital environments. In turn this feeds into the increased demand for more interoperable and cross-platform native information which has only become more essential— not just for the content developers, but most consequentially for the Players/Interactors. The inevitable societal leap into immersive digital ubiquity creates a tightly coiled expectation for seamless digital experiences that are highly personalised and unique to each individual.<br><br>Digital fashion is one market segment that directly empowers and fulfills this need, as it provides a mechanism for Player ability to create unique identities for enriched digital world interactions. Enhanced capacity to transpose digital fashion assets cross platform across starkly different application environments (i.e. from Fortnite into GTA) might seem trivial and nonsensical from a common viewpoint today, and in particular from a business or technical perspective, however, in the future-present, not only will this facility be vital, it will become universally expected. Players require a seamless and consistent cross-platform identity— and use self expression through fashion as a major component to achieve it. The digital hybrid realm is no different.<br><br>Presently however, no efficient and streamlined system or universal format exists that is able to solve this pipeline blockade and reduce the singular usage approach of 3D objects across differential content environments.<br><br>The DASH standard provides both Players and Producers/Developers with a clear technical solution to achieve cross-platform interoperability of 3D digital assets, with an initial focus on digital fashion items, to not only solve a core and inefficient underlying technical pipeline pain-point in the broader 3D digital content industry, but, of far higher value, help to develop digital economies that meet Player expectations, promote creativity and creator engagement, and, allow for novel experiences that scale multi variant wealth generation for both the game Producers and Players, simultaneously.<br><br><h3 class='font-bold'>About DASH</h3>DASH is a new standard for quick and painless communication of creative data, messages, and content. The accompanying file intercommunication architecture, consisting of a wrapper constructor and an engine plugin, is able to translate different proprietary source files, like that of .zpac, into the application layer considerate DASH file format.<br><br>The dynamic output of the DASH format enables;<div >• Cross platform interoperability of 3D digital assets.<br>• Easy transfer of assets into game engine environments.<br>• Preservation of visual information fidelity during asset transfer.<br>• Application layer specific optimisation of 3D object data across size, geometry, graphic expense, and material and texture surface attributes.<br></div><br><br><h3 class='font-bold'>Structure</h3>The DASH file format is dynamically generated through the interplay of a wrapper constructor and an engine plugin. In high level, the architecture is set where the wrapper constructor is able to take in a set of specified data values from the source file and values directly from the output application environment, which are fed to the constructor by the game engine plugin.<br><br>With these values stored, the wrapper constructor then acts to translate and write the data structure set for the new compatible DASH file through the use of an information space categorization, scoped bounding, traversal and optimization strategy, primarily informed by a proper understanding and application of Voronoi topographies and traditional video game Sprites as abstraction complexity compression heuristics. The full strategy set is condensed into simple seeming logical functions reliant more on approximate, related inference and adherence to strict prior fidelity, as compared to conventional approaches.<br><br>Voronoi tessellation provides an efficient mechanism for being able to dynamically partition and subdivide the surface of a geometric object, either polygonal or freeform. This approach is a highly beneficial method for optimally distributing polygon segmentation on the 3D object’s surface in a way that can reduce the overall polycount, mesh density and still ensure that facet edges, especially when dealing with spherical, cylindrical and more complex shapes, don’t interfere with and reduce quality across texturing. Balancing the cost of graphic vs performance fidelity through Voronoi tessellation ensures that each dynamic DASH output achieves an optimal tris limit and still maintains geometric information that is malleable and consistent with the overall graphic output environment without permanently modifying the object itself i.e. low fidelity increased angular rounding.<br><br><img src='/images/figure1.png'><div >Figure 1: 3D Object Surface, applying Plane Sweep.</div><br><br>Our approach seeks to leverage across both the use of outward radial growth and the Plane Sweep algorithm for creating the Voronoi tessellations across the object’s external facing surface— here, cells and points are created as the sweep line moves across the plane, guiding the beach line as the algorithm progresses.<br><br>Further, inspiration from Sprites comes from the perspective of being able to maintain a low latency transfer of information that can be experiential across the required fidelity. Projecting the relevant object data across a shifted plane allows for relevant information properties to be mapped from the source file into the larger graphical scene in a way that removes unnecessary computational overhead, and, in conjunction, navigates the mapping of a 3D topology more effectively across the plotted vertices and edges on the mesh surface.<br><br>With this combined Voronoi and Sprite inspired logic acting as the core variable argument determinators for the function, the function is then further attuned to the output application environment through leveraging a selection of machine learning libraries and datasets. The logic of the wrapper constructor is thus able to continuously re-attune as existing and new ML libraries are used to deploy, show and upgrade the core variable argument determinators.<br><br>Here, we are injecting the spirit of Open Source into the wider pursuit for quick and painless communication of 3D content— where for the first time the functions’ opinionated logic is trainable and upgradable. New ML libraries and datasets can contribute easily, be themselves open sourced, and become merged, into the DASH data repository for wider community leverage, where users of our file intercommunication architecture and DASH file format can implement custom, non-standard functions and add or replace functions for iteratively developed and improved application layer specific performance. With this we are founding the establishment of an active developer and builder orientated ecosystem for DASH that is motivated by peer recognition and maintained to uphold the highest state of reliability, security and functionality.<br><br><h3 class='font-bold'>Specification </h3>This section outlines and defines the DASH format and the file intercommunication application specifications for generating the .DASH file format. It is significant to understand the translation process of proprietary source files, like .zpac, into application layer considerate .DASH adaptive data encapsulation formats. This section also describes the differential parts and arrangements of .DASH files.<br><br>The .DASH appendix includes the following components:<br><br>o File structure<br>o File intercommunication sequence<br>o Application specifications<br>o Schematic representation<br><br><br><h3 class='font-bold'>File Structure</h3>The following types of data can be considered and understood by the .DASH file.<br><br>Model Cost<br>o Poly count<br>o Vertex count<br>o Mesh surface topology<br>o Polygon density<br><br>Vertex Attributes<br/>o Position<br>o Geometric<br>o Texture<br>o Tangent and normal<br>o Degree<br>o Colour<br><br>Surface Material assignment<br>o Texture type<br><div >o Diffuse<br>o Opacity<br>o Bump<br>o Specular<br>o Glow<br>o Reflection<br></div>o Texture count<br><br><br>Geometric Elements<br>o Face<br>o Point<br>o Line<br>o Edge<br>o Curve<br>o Surface<br>o Rigged geometries<br><br>Free-form Surfaces<br>o Angle<br>o Radius<br>o Polygon<br>o Point<br>o Acceleration<br><br>Display/ Render Attributes<br>o Bevel interpolation<br>o Colour interpolation<br>o Dissolve interpolation<br>o Level of Detail<br>o Material library<br>o Shading and lighting paths<br><br>Application Specifications</h3>In terms of the file intercommunication architecture, which ultimately is able to determine the final data structure output of the .DASH file, the data sourced from the engine plugin is relevant to both the game engine type and also more broadly key components of the built graphic scene itself.<br><br>In this release, the engine plugin is built for compatibility across the Unity, Unreal and Blender engines, where both the physics engine and recommended graphics card drivers are industry standardised.<br><br>Specific scene data and attributes from within the engine are sourced by the engine plugin. This includes;<br><br>o Universal geometry<br><div >o Tris<br>o Quads<br></div>o Vertex count<br>o Texture count<br>o Material count<br>o Object count<br>o UV layers<br>o Vertex colours<br>o FPS margin<br><br>This information is then fed to the wrapper constructor, gathering relevant input data so that a well suited and output application specific data structure set can be written under the DASH file format. The DASH file is now able to appear “native” and sensitive to not only the game engine that it is being deployed into, but rather also the specifics of the graphic environment itself.<br><br><h3 class='font-bold'>Schematic Representation</h3><br><br><img src='/images/figure2.png'>Figure 2: DASH file format generation process schematic.</div>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 1.2.",
    description:
      "<h3 class='font-bold'> Approach </h3> Our attitude and methodology towards the research, development and testing of the DASH File Format Specification and File Intercommunication Architecture is tightly iterative and inserts a degree of adaptability into the project’s framework. This cultivates a setup of evolving ideas, risk mitigation and focused execution. <br><br><h3 class='font-bold'> Quick Summary </h3> Revision One of the DASH File Format Specification and File Intercommunication Architecture set out the initial framework and blueprint for achieving cross-platform interoperability of 3D native asset files. <br><br>To this day, transfer of 3D assets into scene based application engines and 3D software environments is arguably the biggest challenge faced by the industry. This long unresolved pain point is highlighted by the literally hundreds of 3D file formats that exist, where almost every 3D software manufacturer has developed a new, and most often proprietary, format that is only optimised for their siloed narrow requirements. <br><br>Our approach and architecture is different. We are positioned to work across industries of scale that require best estimate and lightest weight solutions in order to initiate, develop, lead and flourish into economies of sustainable value generation— all digitally native. The future of 3D content in gaming, VR, and other live application environments requires disciplined focus on removing areas of black box error often obvious only in retrospect. Without this logical underpinning in mind, the prospect of developing a solution that can be deployed across the vast majority of general cases becomes that subject to a subclass of Halting Problem errors, grinding movement towards more optimal industry growth and end user experience to a near standstill. Thus, the main thrust of the resolution proposed here is to apply proper creative, computational, and cognitive scope in order to establish a new base layer for native digital content. In order to accomplish this, we must first strip or add intelligence where appropriate and find the player-creator experience on a few fundamental certainties, in highly uncertain environments. <br><br>DASH is incepted to be dynamic and adaptable, where opinionated logic is formulated from discrete data sourced directly from the application layer by the game engine plugin and fed to the wrapper constructor. In other words, the file itself is application layer and end environment considerate. We are set for achieving a 1:1 match of relevant information fidelity from the source file to the DASH output. <br><br> We have outlined below the second revision of the DASH File Format Specification and File Intercommunication structure, giving emphasis to the role of the wrapper constructor and the translation procedure for outputting the compatible DASH directly into the application environment. <br><br><h3 class='font-bold'> Structure </h3> The role of the wrapper constructor in the broader architecture is to accurately internalise values that are fed from the source file, any related texture files, and the game engine plugin, and then write well structured output within the considerably more cross-compatible DASH file. <br><br>The interface to the wrapper constructor consists of a simple drag and drop file upload UI that is compatible for both the model, material and texture files. Once uploaded, the instruction set for the wrapper constructor first extracts and reads relevant data from the source file’s (i.e. zpac) threedimensional surface, including that of the face and line element geometry, and texture and normal vertices. <br><br>Material Instance Segmentation is performed across the model, where the coordinate data is used to effectively detect and delineate each distinct material region of interest. The appropriate geometric and UV coordinates of these segmented regions are then stored in a nested array [Array 1]. The model has now been segmented into n cells, where specific techniques used for material delineation remain dependent on the source model inputted and the associated texture files. In each case, information is pulled from the texture map files in order to match the material-to-geometric components across the visual field.<br><br><img src='/images/figure1-2.png'> <div > Figure 1: Material Instance Segmentation </div> <br><br>Before application-specific topology optimisation, directed by the game engine plugin, is performed across the model, the associated texture and material image files too are subject to optimisation, in relation to the pre-segmented n cell regions. Here, Fourier techniques are applied to each n-cell region of the texture component, having the ability to decompose complicated objects for the purpose of removing redundant information and only retaining the most important components. Fast Fourier Transforms (FFT), in the form of the Discrete Fourier Transform (DFT), are performed across the texture maps and their n cell region, where they are translated into the frequency domain, from the spatial domain, for the purpose of distinguishing across the high and low frequencies. The discrete boundary conditions are based on the n cell region edge lines. <br><br>Opinionated logic from the wrapper constructor instruction set, which is informed by the application environment from the game engine plugin, gives judicious choice as to which frequencies are removed, retained and reduced so that minimal distortion on the maps is incurred, despite the fact that much of the underlying information is discarded. <br><br>The greater the magnitude across the frequency values the more image information contained at that frequency. Thus, the high degree of physical details can be arguably abstracted away and focus maintained only on a few crucial aspects in a manageable way. The retained information is then stored in a set of nested arrays [Array 2], with each macro array component referencing a specific n cell region. <br><br>At this end, knowledge of the minimum retention paths allow for the FFT to be hence used as a normalisation technique for the texture maps as they are translated into the application specific UV space. This ensures quality retention of the 2D texture map, in specific reference to its visual content, can be more closely maintained as it is reconstructed onto the 3D surface— reducing visible differences between the original source and its reconstruction within the new UV space. <br><br><img src='/images/formula1.png'> <br><br>Here, F(k,l) is indicative of each point represented in the Fourier space and f(a,b) is the image in the spatial domain. The exponential term basis functions are sine and cosine waves with increasing frequencies. <br><br>The inverse Fourier transform, re-transformed in the spatial domain is given by; <br><br><img src='/images/formula2.png'> <br><br>A double sum is calculated for each image point to obtain the result of the above equations. Here, the spatial domain is first transformed into an intermediate image using N one-dimensional Fourier Transforms. This intermediate image is then transformed into the final image, again using N one-dimensional Fourier Transforms. <br><br>The wrapper constructor references from a pre-set table of best fit values that are obtained through iterative testing of Voronoi tessellation varieties of 3D models and their corresponding geometric fidelity output in different application environments. This data table gives logic on the distribution of Voronoi centroids across each n cell region, with the use of both outward radial growth and the Plane Sweep algorithm defining the outward boundaries of the tessellated regions. With this in mind, the new optimised polycount and mesh density for the model is defined across the updated vertex and appropriated region coordinate data, which is specific and considerate for the output environment itself. <br><br><img src='/images/figure2-2.png'> <div > Figure 2: Voronoi Tessellation across the n cell regions </div> <br><br> The last stage in the instruction set maps back the optimised texture components to their new sites on the model. Final reassembly involves collapsing the texture files into their consistent fungible units, relevant down to a bit level, for guaranteeing a more than valid approximation across the newly generated topological partitions (i.e. voronoi tessellations and n cell regions). <br><br>Here, inspiration is adopted from the Louvain method, a community detection algorithm, which employs an iterative process for improving the scalability and detection of the modularity of a partition within a network/scope. The method unveils hierarchies of communities and allows for zooming within communities to discover sub-communities, sub-sub-communities etc. <br><br>Small “communities” within the texture maps are first identified and optimised for modularity locally, with consideration only across neighbouring bits. This novel approach allows for partitions to be made that are suitably modified to obtain a reduced complexity representation for eventual mapping to the whole n cell and tessellated region. From here, the second stage involves assembling a new reconstruction of the partitioned components, whose bits are relevant to the “communities” found during the first stage and so can be accurately translated, with valid approximation, onto the application specific model topology. The Teletransportation paradox is referenced here as a fitting thought experiment, where our “re-mapping” approach, and thus the final output of a DASH file, doesn’t require the information to be translated in the same order or structure as it was originally generated for the source file, but rather, only requires it to appear and behave that way— we have collapsed the original information into a limited set of key elements for optimisation across dimensionality. <br><br>The methodology behind the wrapper constructor instruction set, and thus broader DASH format and file intercommunication architecture, is improved through the injection of the spirit of Open Source at each stage of the process. By allowing the instruction set’s opinionated logic to be trainable and upgradable by the wider community, we are conveniently scaling exposure to positive Black Swan events— new innovation cycles, optimisation spectacles and larger to-be-faced challenges across specific edge cases. Further works will benefit from our initial procedures, but unlike other architectures, will not be limited by them. Instead an active community of developers and builders will be motivated and incentivised to evolve, with maintenance across reliability, security and functionality.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 1.5.",
    description:
      "<h3 class='font-bold'> Architecture Overview </h3> The latest released revision of the DASH File Format Specification and File Intercommunication Architecture gives a more detailed scope of the Transformation Set logic of the wrapper constructor. The Transformation Set is run after the source file is opened in the Optimistic Transformer. It sits between both Pre and Post Processing of the source information, where its chronologically determined behaviours remain very much dependent and considerate of the final application environment. <br><br> The communication between the wrapper constructor and engine plugin is tethered by the Optimistic Transformation and stored in the Optimistic Transform Ledger. Here the Transformation Interface acts to both take in the source file and also display analysis of the key hierarchy set of information across the model, scene, project and engine— giving a wide aerial view as to components and attributes in the application environment that have influence on the Transformation Set’s opinionated logic. <br><br><img src='/images/figure31.png'> <div > Figure 1: Source Information Flow and Progression </div> <br><br><img src='/images/figure32.png'> <div > Figure 2: Optimistic Transformer </div> <br><br><img src='/images/figure33.png'> <div> Figure 3: Transformation Set Progression </div><br><br>The Transformation Set guides the information through different dimensional lenses, using each lens to gain a richer understanding of the essential information held within each domain. This is then cross-matched for each of the other dimensions, in order to identify and maintain the minimum required set, and margin of flexibility around this set, for upholding the utmost fidelity. By cycling through the minimum required space transforms and looping through the graph dynamics until a conceptually “smooth fabric” is achieved, the information space complexity is vastly reduced. This ensures the fastest path to discovery for considerate outputs to multiple destinations. The final considerate output from the Transformation Set remains subject to both the base requirements and the strategically customisable attributes, from an optimisation standpoint, that are relevant to the application environment. <br><br>At each module lens, key information is retained so that a final sweeping check can then be performed and any redundant or inessential modules deducted. This keeps consistent emphasis on only maintaining the minimum required set, contracting away the potential for negative carry for Post Processing and then inclusion by the engine plugin. Further, this final sweeping check also intentionally enables the ability for new modules to be injected and interchanged overtime— the DASH file format architecture is structured to be upgradeable and iteratively trainable across different functions and datasets, allowing for both a generalised and also more specific approach to be taken for optimising for application layer determined performance. An Open Source spirit will be supported and pioneered here. <br><br>Moreover, again, the Teletransportation paradox sits as a highly fitted reference. The translated information is not required to be in the same order or structure as it was originally generated from the source file, but rather, must appear and behave in a way that now is considerately fashioned to the contextual relevance of the final domain. The original information has been collapsed into a limited set of key elements for optimisation across each dimensionality. Hence, here, we are not claiming perfection, but, we are claiming the potential for a complete and truthful proof.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 1.6.",
    description:
      "<h3 class='font-bold'> Quick Summary </h3> In this revision of DASH we continue to concentrate the focus further on the Transformation Set logic of the wrapper constructor. The Transformation Set feeds the input information through a 10 dimensional mathematical space in order to better identify its considerate center of mass. This can be likened to a series of edited match cuts— where each transition is interlinked only by relevant retained subject matter, beginning in a purposeful ‘zoomed in’ state, and so causing the experience of space and time to remain subjective. <br><br> Here, we are required to invert the whole current approach to information transfer through understanding one simple fact; you can’t force something to change. But, you can, however, change just about everything else around it. And usually, that’s enough. In other words, rather than attempting to pressure the information into a predetermined data structure, and so cause unavoidable inaccuracies and fidelity loss, we work to first filter and refine our understanding of the dimensions that the information sits within, and so ensure well informed and opinionated judgements are made. <br><br> We establish completeness of our model through opening the instruction set to unbiased upgrades and iterations over time, inserting the deliberate practise of being able to obtain immediate informative feedback and knowledge of our results. We are taking the approach of stepping back and seeing the bigger picture with flexibility to invent new options, rather than just picking the best available. Although this may seem like in practise, to add more information to the set, it actually works to reduce the information entropy overtime, making the information itself more useful and redundant i.e. less vulnerable to information loss and uncertainty. Thus, instead of just avoiding our inevitable inaccuracies or omissions, we are setting in motion the plans to fix them. <br><br><br><br> <div > Sakichi Toyoda, the founder of the Toyota car company, developed a technique called “Five Why’s” for handling this. For example, sometimes a car would come off the Toyota production line and not start. Why? Well, imagine it was because the alternator belt had come loose. Most car companies would stop here and just fix the alternator belt. But Toyoda understood that was dodging the mistake — it would just lead it to come back again and again. So he insisted they keep asking “Why?”. <br><br> Why was the alternator belt loose? Because it hadn’t been put on correctly. Why? Because the person putting it on didn’t double-check to see if it had fit in correctly. Why? Because he was in too much of a hurry. Why? Because he had to walk all the way to the other side of the line to get the belts and by the time he got back he didn’t have enough time to double-check. <br><br> Aha! There, on the fifth why, we find the real cause of the mistake. And the solution is easy: move the box of alternator belts closer. But if we’d stopped at any earlier point (say, by just yelling at the alternator belt guy to always remember to double-check), we wouldn’t have actually fixed the problem. The same mistake would have happened again and again. Only by digging all the way to the root cause did we realize we needed to move the box of belts. The mistake pointed the way to the solution. <br><br> <div > - Aaron Swartz, Raw Nerve </div> </div> <br><br><br><br> <h3 class='font-bold'> Transformation Set Exploration </h3> We begin the Transformation set’s logic with a pre-vetting and pre-check of the information provided. The Goertzel Algorithm provides both a numerically efficient evaluation of the information at hand, where stability of the filter is guaranteed, due to the the z-domain pole placement on the z-plane's unit circle, and also a limit on the precision, ensuring that necessary conclusions can still be drawn about the information’s state at the initial stage, without the need for over exaggerated arithmetic. <br><br> Next, we incorporate the Fast Fourier Transform, inspecting the information within the frequency domain and so decomposing complicity of the source 3D file for the purpose of removing any perceived redundancy and ensuring efficient retention of only what remains relevant to the application environment. A Fast Fourier Transform (FFT) is performed across the texture maps and their segmented regions (Which were identified during the pre-processing stage) in order to distinguish between the high and low frequencies. Opinionated logic from the wrapper constructor instruction set, which is informed by the application environment from the game engine plugin, gives judicious choice as to which frequencies are removed, retained and reduced so that minimal distortion on the maps is incurred, despite the fact that much of the underlying information is discarded. The retained information is then converted back into the spatial domain and stored in a set of nested arrays, with each macro array component referencing a specific n cell region. <br><br> Voronoi tessellation succeeds the implementation of FFTs, where here we employ Fortune’s Plane Sweep Algorithm for generating the Voronoi diagram across the 3D model’s surface and defining the outward boundaries of the tessellated regions. The algorithm itself is iterative in nature, utilising a priority queue for listing future potential events that could act to change the beach line’s structure and so ensuring that consistent and repeated updates can be made to the data structure, as the sweep line moves in space, finding the changes the event causes in the beach line. Here, the final output includes the new optimised polycount and mesh density for the model, which is specific and considerate for the output environment itself. <br><br> Inclusion of the Louvain method is used to optimise the modularity already imposed from Voronoi tessellation and the Plane Sweep algorithm, by scoring across the detected communities. Louvain employs an iterative process for improving the scalability and detection of the modularity of a partition within a network/scope. All nodes or n cell regions are randomly ordered in the network, and then one by one are removed and inserted across a different community until no significant increase in modularity (input parameter) is verified. From here, the second stage involves community aggregation where all nodes belonging to the same community are merged into a single giant node. Thus, by clustering communities of communities after the first pass, it inherently considers the existence of a hierarchical organization in the network and so enables a more definitive ability to identify champion nodes, data and information in later dimensional passes. <br><br> Abduction is reasoning toward the “best” explanations for a set of encountered observations— a methodology for deriving root causes. Our reasoning is actively informed through its practice within our 10 dimensional transforms as a verification and inference technique, error diagnosis and re-check in relation to the deductions made thus far throughout the instruction stages of the Transformation Set. Through observing the data at hand, and using selected knowledge provided by the game engine plugin, inference rules are encoded that are able to assess causal relations between the relevant output application environment and the newly constructed vertex and appropriated region coordinate data. This further provides a more technically suited lens that characterises the overall ‘quality’ of the current assumptions of the success of the information when deployed in the application environment. <br><br> During the next stage, the problem size is reduced through the use of an efficient space–time reduced order model. This explicitly works to accelerate the solution process without loss in accuracy as the solution space is searched for the least-cost path. Here we use the DCCR algorithm, which takes the same greedy strategy as in Dijkstra’s algorithm, but uses a non-linear weight function in searching for the best solution. Within DCCR, an improvement is accounted for through applying Chong’s k-shortest paths algorithm, which records k shortest paths, listed in increasing weight order, for each node. This interjection within the DCCR algorithm increases the chances of finding an optimal feasible path, through increasing the candidate paths to every node— a feature lacking from the non-linear weight function’s optimal-substructure property. Also, here we prelude the DCCR algorithm with the inclusion of the HZ 1 algorithm, proposed by Handler and Zang, to scope an either tighter cost bound in our solution space search, and so take into further consideration not just the identified paths, but also their attributed quality. <br><br> We further our knowledge of the information being manipulated by the instruction set through computing its associated derivation graph and the optimisation of the function over the sinks of the directed acyclic graph. By applying restructuring transformations to the information we are able to base our assumptions on the fact that the best solution is built out of the optimal solutions to the various subproblems. Here, we derive the champion scores/nodes of the network, making a last opinionated judgment as to which information is most fitted for output into the application environment and tailoring the interplay between entropy and redundancy depending on this environment’s properties. <br><br> The final dimensional pass involves the use of Monte Carlo Tree Search algorithm for ending the directive with an evaluation and potential restart, for retrieval of the best known information output candidate. This gives us the highest human relative fidelity for commercial application transfer and also openly injects an open source shibboleth into the very fabric of DASH, as we continue to scale the exposure of the solution’s instructions to positive Black Swan events— through wider community leverage. <br><br><br><br> <h3 class='font-bold'> Transformation Set Architecture </h3> <img src='/images/code.png'>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 2.1.",
    description:
      "<h3 class='font-bold'> Quick Summary </h3> Innovation is not a one time event. It is a continuous acquisitional process that must be embedded into every part of the fabric of a wider mechanism. One of the most common and most salient misconceptions is that innovation is primarily, if not exclusively, just about changing or making breakthroughs in technology. Not only is this thoroughly incorrect, but it also acts to detrimentally dampen the total addressable horizon of the innovation potential. Technology alone is not the fundamental engine, the configuration of the business model and its functions are just as important, and in most cases, what work to maintain emphasis on the technology's unique value. <br><br> DASH innovates on both a computational and business technology layer, whereby the innovation is defined from the ability that is enabled by the full model and its requirements— new value creation, sustainable ecosystem complexities and automated, real time iteration cycles. DASH is a file format built for the metaverse and beyond. It is solving information transfer and interoperability the right way, directly embedding the application layer directly into the file layer through elegant usage of some of the most beautiful math ever recorded by humanity. <br><br> In this revision of DASH, we look more explicitly at how the technological layer of DASH is further transformed, incentivised and innovated through the connected business blueprint. <br><br><br><br><img src='/images/overview.jpg'><div > Figure 1:DASH Service Design Blueprint </div> <br><br><br><br> <h3 class='font-bold'> Business Function Service Design Blueprint Overview and Key Features </h3> The source file (i.e. ZPAC) is first loaded into the user interface by the Creator, through a simple drag and drop upload, where key information is stored in the Optimistic Transform Ledger. <br><br>Pre-processing of the source file then occurs; an initial ternary operator check of the source’s perceived classification validity and then material instance segmentation across the model’s coordinate data, for effectively detecting and delineating each distinct material region of interest so that a fidelity index can be gauged. <br><br>From here, the Creator is guided through an estimation flow, allowing for the system to comprehend, with higher reliability, the needs and requirements of the particular Creator. The work achieved through pre-processing outputs a Creative Friction / Pain Reduction Potential score for the Creator, related to the cost/time expense (%) that can be overcome if the source file is transformed to DASH before application layer deployment. Considerate insight for the cost/time expensive (%) estimation is derived from the communication of the Transformation Set Progression with the Engine Plugin and so the specific output application layer environment. Here, the Creator has optionality across 3 provided tiers (Low, Medium, High) and 1 custom category of coverage intensity i.e. how loyal do they wish DASH to be upon output to the specific graphic environment. <br><br>The threadline fidelity index is then scored for the Creator, providing a measure of the interoperability intensity requirement, in relation to the Creator’s chosen 1 of 3 tiered coverage intensities (Low, Medium, High). A validation check is performed with the Creator, as the transposability score is weighed in against the Creator’s initial determination of the best cost/time expense saving. <br><br>The thread cost to the Creator for choosing the specified coverage intensity and approving the affinity of the fidelity index score is made apparent and labelled across 3 intentional headers; good deal, normal, expensive. The thread cost is determined from the Creator's inputs, aligning directly with their preference against making their own pipeline and creative work channel more streamlined. The thread cost will be quoted in a natively deployed cryptocurrency utility token, that will allow for the customised DASH architecture incentive and value transfer mechanism to maintain liquid sustainability. <br><br>Upon approval and value transfer by the Creator, the pre-processed source file is then fed through the Transformation Set, where limits on the number of dimensional transforms performed are set according to the Creator’s verified choice across good deal, normal or expensive. The more transforms that are applied to the pre-processed source information, and so the thoroughness of the information space coverage, the higher the transposability score, thread cost and also affinity to reduction loss and compatibility with the application environment. <br><br>From here, post-processing of the now transformed source file takes place, as it is prepared for hand off to the plugin integrator and assembled for export as .DASH. The engine plugin licenses .DASH to be read and recognised correctly by the engine. Run-time analysis and performance checks are then performed across the object, scene, project and engine, with the plugin accounting for the potential re-optimisations required to increase affinity of the 3D object within the graphic environment i.e. should the file be run through the transform set again, and according to what recommended customised transform parameters. Here, the Creator can choose to run the analysis on either a continuous, periodic or manually targeted basis— where the native crypto utility token provides the necessary liquidity for the analysis and performance checks to continue. <br><br> <h3 class='font-bold'> Open Source Community Incentive Network </h3> The most salient mantra and embedded conviction in the DASH architecture is the injection of the spirit of Open Source. Especially that of building an incentivised developer and research driven ecosystem that allows for differing functions, models and datasets to be proposed and incorporated into the dynamic and swappable segments of the Transformation Set. This ensures continuous and viable upgrades and iterations can be made for more refined optimisation. <br><br>Here, customisations to the applied functions used in the Transform Set can be proposed by Researcher and Developer optimists within the community. Their models are first given an internal claim expectation before being submitted for consideration as a customisation option for the Creator i.e. swappable into the Transformation Set if chosen by the Creator as they are guided through the estimation flow. <br><br>The Researcher and Developer Optimists must stake the native utility token on their model as a proof of good actor validation. If their model is then chosen, through a Quadratic voting and liquidity nomination mechanism, by other members of the community, their model can then be publicly used within the broader DASH architecture. <br><br>For providing work to the ecosystem, the community optimist, that developed the model/function set, is rewarded in the same native token for their authenticated contribution— the staked amount gains yield on winning transform plays and is burned against losing ones. The system is further prevented from being gamed by whale actors, where the right is reserved to apply a GAN to randomly simulate the models at no additional cost, where here if negative anomalies are identified, the staked amount is slashed and provided back to the network.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 2.2.",
    description:
      "At present, container ships sit in waters outside of ports for days. <br><br> Business critical information delays leave otherwise liquid value stagnant in similarly obstructed pools. <br><br> Abstract containers of value in the form of Non Fungible Tokens are upending creator monetization in poorly understood ways. <br><br> It may not be obvious, but this context is why cryptocurrencies and cryptoeconomic thinking are truly interesting. Yet, almost all of the explanations for why crypto is necessary are total hogwash — they’re just nonsense. They refer to a collection of speculative, cultural and technical factors, but don’t refer to the underlying scientific and mathematical factors which all of this bedrocks onto. <br><br> <h3 class='font-bold'> Light Speed Delay </h3> The Speed of Light is often used as a reference to the limit on how fast anything in the universe can go. Well actually, this is misleading. The Speed of Light is unfortunately quite slow. In fact, it is so slow relative to modern computing devices that it creates a simple way to reconceive relationships to time and space in completely revolutionary ways. Fundamentally, it is impossible for all of the computers in our world to agree about when, where, and what is actually real. Why? Because they are all separated from each other by light speed delay. <br><br> This delay can be quite big. Between London and Australia, light speed delay translates to around a million or more transactions per second, in modern processing systems, not getting from where they are to where they are meant to be in a timely and effective manner. There is no way to circumnavigate this through physics, math, money, or administrative decree — closer synchronisation is simply not permitted by the base laws of physical realty. <br><br> For commercial activity, the friction caused by this inability to synchronise is corrosive. The fact that disputes in computing transactions arise at such large scales is inevitable, as we await signal propagation to acknowledge and confirm agreement on what, where, and when a deal, a product, or a communicated concept, is or isn’t as it claims to be. This lag in verifiable trust cascades throughout all information systems, substantially capping global trade in a way that is directly translatable to the limits imposed by the Speed of Light. <br><br> It may not be clear to all how this also opens the door to novel arbitrage opportunities. What is even less clear in an already opaque process, is the essential role that creative works, like gaming or scene based content, play in the flow of service and business value, particularly in the relationship between game and 3D software engines and rich media file formats. <br><br> The objects, scenes, and content experiences made in 3D creative engines are in and of themselves chokepoints in the global flow of value, like the Straights of Malacca or Suez Canal in global shipping. Just as GPS navigates light speed delay to unlock a Cambrian explosion in commercial value, the proper triangulation of 3D engine, information design, and file format optimization friction will bring a rush of liquidity to markets and users who don’t yet realize what is missing. <br><br> Why is this a hard problem to see? Because we have all become numb to accepting current practices as they are and are content in trusting that conventional approaches to optimisation, even if they are going in the wrong direction, will somehow deliver what is possible, desirable, and required. <br><br> We have seen moments in history like this before. Most notably in recent memory when Steve Jobs first unleashed the iPhone into our world. These are watershed events, delivering mass transformation of commercial, creative and consumer behavior alike. To be clear, this is the triangulation that DASH resolves and serves. Our file format architecture can not be achieved via some technical gimmick, or through a “go away and build in a cave” product development process. We innovate from a commercial perspective so that technical potential can be translated into broad based financial incentives, unlocking a virtuous cycle in how creativity, economic activity, and infrastructure development serve each other. <br><br> <h3 class='font-bold'> Mechanism Design </h3> Often described as the flipside of game theory, mechanism design is the crafting of protocols or architectures that incentivize rational actors to behave in socially desirable ways. It starts by defining desirable outcomes and working backwards to create a game that incentivizes players towards those outcomes – whereas in game theory we take the game as a given and evaluate the outcomes instead. <br><br> In short, mechanism design allows us to embed cryptoeconomic thinking into the information optimisation layer for more desirable commercial, creative and consumer outcomes. <br><br> Cryptoeconomics is the field of study and practice that brings cryptography and economic incentives into the design process of antifragile commercial networks and applications. Crypto protocols, like Bitcoin and Ethereum for example, succeed because they incorporate cryptoeconomics into the core of how they achieve social consensus and coordination. Not consequentially, as many believe, because of the speculative, cultural and technical breakthroughs they also represent. <br><br> The ultimate threadline of cryptoeconomics is to transport cryptoeconomic incentives into everything — transactions, computation, storage, predictive capacity, social mobility, and the exercise of power at the decentralized edges in all networks of human activity and exchange. <br><br> The mechanism and cryptoeconomic design of DASH facilitates the transfer of value between the software applications, where meaningful information representing commercial products is constructed, and radically expansive towards the range of problems to which economic incentives can successfully be applied. <br><br> Let's review how this works from a more technical perspective: <br><br> We start with an evaluative estimate, which comprehensively informs the Creator of the potential cost & pain reduction they stand to gain when transforming their 3D model through our process. This happens before deployment into the intended application environment. <br><br> The requirements of a particular Creator are met through selected adjustments to low, medium, high and custom parameters. They are then presented with a set of uniquely personalised transform levels to choose from. The creator is guided through a narrowing scope to reach an “optimal” outcome for their needs. <br><br> This is directly linked to the native cryptoeconomic incentive system required for the Creator to fuel and implement the transformation function. The Creator’s preferences are taken in by the system and then strategically incorporated within the broader technical mechanisms to maximize their objective under an optimally guided set of constraints. <br><br> Here, Creators are intentionally incentivised to behave based upon their internal decision process without the need to verify whether they are indeed “rational agents”, leading to more socially desired outcomes for the whole system. These outcomes are further exercised extrinsically through the inclusion of the “custom” option throughout this estimate flow. Here, an embedded Open Source community incentive network translates individuals’ utility needs into actionable functions. The output of the decision trees feeding those functions contribute to the capture of externalities that these individuals’ actions imbue in the system through a staking, slashing, burning and yield mechanism for good actor validation and promotion— allowing researchers, developers and optimists alike to contribute new, upgradeable models to be used in the Transformation Set and grouped under this “custom” category. <br><br> Those that authentically contribute are able to actively gain yield from their staked crypto, whilst actors with bad intentions are slashed, either totally or in-part. By methodically introducing economic trade-offs against work put in, the fault tolerance that comes with the assumption of the honest majority model is accounted for. Further, DASH also defends against these assumptions through applying a GAN as a stability analyser. The GAN randomly simulates the models at no additional cost, where here if negative unintentional anomalies are identified, the staked amount is slashed in-part and provided back to the network. <br><br> Thus, DASH prioritises a human-centered interdisciplinary development approach that, through an ecosystem interlaced with open source, recognizes data scientists as creative problem solvers. Seamless information transfer is what underpins true creative flourishing and economic growth in native digital realms. We’re not suggesting that the disciplines of development and design merge without consideration, but rather that if optimists work together and learn each other’s art they will produce better outcomes— our crypto economic mechanism design incentivises this point precisely, transforming file format engineering from what a certain Silicon Valley legend once described as slices of cold dead fish on a plate (in other words, a lifeless and unrelatable abstract technical endeavour) to a sophisticated game-changer for any creator, commercial venture, or end consumer ready to finally reach their desired destination.",
  },
  {
    title:
      "DASH File Format Specification and File <br>Intercommunication Architecture. Revision 2.3.",
    description:
      "<h3 class='font-bold'> DASH for Cross-Digital Realms, the Metaverse </h3> In 1971 Herbert Simon stated, 'A wealth of information creates a poverty of attention and a need to allocate that attention efficiently.' <br><br> As the Creator economy continues to scale in both opportunity, market share and increased potentiality, the demand for a more effective realisation of creative intent has reached critical mass to a point where it can no longer be avoided. The mirror between how this intent plays out for creators on a human level and for computational execution on an information level is becoming increasingly cross-stitched. The nature of these operations at the file level, level of bits and level of humanity are crossing the threshold of and directly impacting the relationship between the personal and digital. <br><br> This personal-digital relationship is in immense need of a more effective re-arrangement and attention capital reallocation. Natively digital valuation mechanisms that are able to provide a clear roadmap for Creators so that they can productively evaluate and make conclusions on what tools and applications are able to actively address key pain points across their general lack of resource, time, financing and support do not currently exist. The greater burden that this absence causes stretches far deeper than just the frustration spoken by Creators on a day-to-day basis, rather, it continues to increase the length of the distance between theory and practice— and so feeding into the detrimental cycle of over-optimising in the wrong direction and reinforcing opaque mechanisms over which the Creators have zero control. <br><br> The DASH architecture addresses the core of the information optimisation and coordination problem through granting the Creator the ability to maintain control throughout the entirety of their creative and technical pipeline process. In our previous file format revisions we focused strongly on both the technical and business means as to how we are achieving this. For this most recent revision, we are emphasising our focus on the Creator, and in a timely fashion, diving deeper into the pitfalls within today’s creative economy and the negative impact that this so has on a Creator’s life and experience. <br><br> We too are Creators and so have always directly embedded our understanding and the needs of the creative side and Creators at the core. DASH is not a simple engineering process or interface. <br><br> <h3 class='font-bold'> Adhering to Fidelity </h3> The Transformation Set that DASH employs for translating a source file for deployment into the application environment incorporates considerate logic at each transform pass. This customised technical approach, layered with complimentary business logic, effectively frames creativity into a coherent structure in order to up the quality as well as the cadence of the Creators interaction with a system that maintains a much higher fidelity to their actual objectives— optimising the delivery of their creative intent from the information layer into the human/personal layer. <br><br> For other systems, the Creator is not afforded the same level of support. Creating good content is hard and there is no one meaningful place for a Creator to go in order to overcome the functional difficulties that they experience throughout their pipeline; from spending absurd amounts of money on cloud rendering in order to adhere to timelines, only for artefacts to show, to overcoming technically absurd blocking points within the modelling applications themselves that are often created out of information slippage at the file layer. <br><br> This fundamental mismatch in the underlying metaphor set contradicts the constant and repetitive mantra for the ultimate culmination of creativity— cross digital realms for a seamless metaverse. Thus, the creative economy (made up of people, platforms, marketplaces and tools) is not able to inherently support the democratization of creative expression and entrepreneurship that is required in order to further empower an independent class to either start or continue to make a living off of their passionate expertise. <br><br><h3 class='font-bold'> Interoperability as a Core Feature </h3> The interoperability problem stands in the way of broader adoption of both the Creator’s scalability to produce work and also generate more value out of it. For too long, interoperability has been considered as an additional feature to a product or service, at the both digital and human layers, rather than a core. This mindset has also caused ripple effects through the broader creative-tech communities and helped establish strong walled gardens for some of the most ubiquitous information interfaces that we interact with today; twitter, facebook, instagram. To be even more specific, the 3D FBX file, one of the most widely used files for transferring information between application environments and game engines, too sits behind a multi-layered encryption protocol, and hence one of the core reasons why interoperability from such a bit layer has never been able to have been properly enhanced and further optimised upon. <br><br> DASH sets to establish a baseline of interoperable interfaces that anyone, including labelled “competitors”, can leverage off of, in order to actively succeed through previous limitations of agency that Creators were forced to adhere to within the services that were supposed to serve them, and also remove artificial ceilings on innovation in the current market, which is dominated by monopolists. If we are going to bust open the castle walls with the proverbial antitrust dragon, then we must install the right tools in order to reduce any possible Creator carnage. <br><br> DASH’s OS Community Incentive Network further sets this into action through actively programming into the core architecture a staking mechanism so that Creators can engage directly with the engineering layers of the file format. This mandates interoperability and collaborative delegation, whilst also effectively hedging for the ever-changing creative engineering landscape. No matter how much engineers and designers alike strain their imaginations, they can never fully plan for the interoperability needs of all future use cases, technologies, and circumstances— DASH incentivises the maintenance of a contemporary and upgradeable transformation set, where the users have the control. <br><br> A tokenized file format engineering architecture allows for further root problems and challenges to be simultaneously addressed for Creators, particularly in the sense of employing a deliberately designed system that doesn’t just financially reward the more affluent Creators, but rather levels the playing field so that content creation can be carried out across all creative verticals and provide upward mobility so that every Creator has the ability for achieving financial security, learnings and growth. This also more liberally licenses the growth of a self-governing ecosystem that collectively decides on the “how” for value and content transfer, without the nasty gatekeeping surprises we’ve seen from other platforms. The collaborative reinforcement here is critical for bridging and differentiating an open source community from development into the business domain that aims in the correct direction for ensuring the full exchange of information. <br><br> <h3 class='font-bold'> The Engines and Applications (3D) </h3> As a further point to the Creator’s experience, and of high relevance for DASH and what we have set out to achieve— 3D modeling software is one of the most frustrating creative application environments simply because it is very unlike any other class of software that most people commonly use, and also, heuristic parallels to the real world are incredibly slim. <br><br> This thus causes further pain in the creative process, whereby it is incredibly difficult to lead users into a new class of activity when their intuitive base is still not sound. Game engines and application programs today only further add to this confusion and “bootstrap into a new paradigm” approach. For example, opening a 3D CAD file in another system i.e. not where the file was originally designed, results in inconsistencies across the model, broken geometry and so incredible loss to the design intent. The ability to seamlessly exchange these various CAD formats directly impacts a creative project’s schedule, where visuals have to be sacrificed against time. <br><br> As 3D advances, the models have adapted to encompass more rich data across material information, styling, annotations etc., which are in fact valuable across the whole life cycle of the product, however, the complexity still has no strong underlying infrastructure to be able to rely on and maintain horizontal compatibility with. Thus, it only has led to an unscalable architecture that cannot support the richness of the original information, causing commonly resulting geometric errors, tolerance issues and loss of metadata associated with the design. The quality or richness of existing 3D models then also depends on the number of times it was exchanged or converted— where the final model becomes limited to the quality and precision of the least accurate system in the translation chain. Hence, closed proprietary exchange file formats are encouraged over community incentivised open sourced engineering. <br><br> <h3 class='font-bold'> Summing Up </h3> All of these examples serve to illustrate how difficult it is for Creators to navigate the different platforms and make a living, often finding themselves powerless to effect change. These difficulties often lead Creators to look elsewhere for sources of revenue, leaving their passionate expertise in pursuit of something within a normal societal corporate framework. DASH ensures Creators can engage in a process that is honest to their artistic mode of creation and so uncompromising on creative integrity.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 2.4.",
    description:
      "In this latest file revision of the DASH file format we are detailing out the core steps and components of our Open Source Community Incentive Network— an incentived optimisation model for stoking an active researcher and developer community around DASH and also for maintaining dynamic, upgradeable and self perpetuating innovation in the Transform Set. The model operates within both the technical and business fabric of the broader DASH architecture, adding customisation options for the Creator as they are guided through the estimation flow and actively informed of potential refinements that can be made to their transform output as data is collected from the live application environment. <br><br> There are six key components to the Open Source Community Incentive Network that are distinguished according to both the chronological interactions and flow of a Researcher or Developer engaging with the model, and the elegance with which essential information is delivered, both of which are vital to ensure the proper functioning of the system with optimal adherence to intent. <br><br> Actively injecting open source, cultivating optimised bazaar model R&D and driving direct connective feedback between Creator and system interactive junctors builds a strong, organically self organising structure for sustainable growth and positive black swan capture— the upgrades and innovation are crowd sourced and then brought to maturity by the ecosystem, where time is used as a punctuation and forcing function for reaching evolving and dynamic equilibrium. <br><br> <h3 class='font-bold'>Six Components of the Model</h3> <br><br> <ol> <li> <span style='font-weight: bold'>1. Model Ideation and Generation</span><br><br>Researchers and Developers are able to actively ideate, generate, suggest, propose, optimise and upgrade across a set of mathematical models of their choosing. These models must fit within and achieve the same core intention of the current mathematical model active within the specific dynamic Transform Set slot that the proposed model is aiming to replace or upgrade across.<br><br>The flexibility of the affordance within each of the dynamic Transform Set slots is limited to a range so that it does not conflict with the rest of the system but rather works to promote further optimisation within the slot.<br><br>With the whole system and architecture open sourced, the Researcher and Developer community (Community Optimists) are able to emulate a sandbox environment for testing their model before moving to stage 2 of public proposal. </li> <br><br> <li> <span style='font-weight: bold'>2. Unique Mint and Public Deployment</span><br><br>The Community Optimist’s tested model is then minted as the metadata to a unique 721 NFT in order to actively verify the originality of the proposed model and authenticate it against the Researcher / Developer making the proposal. Having the data on-chain also supports a more succinct classification and sorting system for when the model is deployed and ranked against other models in the form of a likened “NFT Marketplace” of unique mathematical models that are actively used within the DASH architecture (i.e. dynamic Transform Set slots).<br><br>This marketplace serves as both a concentrated discovery and search engine for Creators and other Community Optimists, as they interact with the customisation features of the file format and also a place of vetted intentional actors and participants. </li> <br><br> <li> <span style='font-weight: bold'>3. Staking and Discovery</span><br><br>With the minted models placed on the marketplace they are then ranked and sorted influentially and in direct correlation with both the magnitude of the staked amount and number of stakers interacting with and delegating stake to the model (in native cryptocurrency). <br><br>The ranking system is categorised in the order as follows, with 1 being a higher rank: <br><br> <ol> <li>1. Higher magnitude of assigned stake && larger number of unique stakers.</li> <li>2. Larger number of unique stakers.</li> <li>3. Higher magnitude of assigned stake.</li> <li> 4. No stake (i.e. Community Optimist did not initiate stake on their own model but minted it to the marketplace for others to delegate stake to). </li> </ol> <br><br> The ranking algorithm directly cultivates an active Researcher and Developer ecosystem that is driven by the bazaar model, cultivating a circular microeconomy of optimisation and punctuated consensus where wisdom and support of the crowd is valued more than concentrated whale activity. </li> <br><br> <li> <span style='font-weight: bold'> 4. Delegated Stake and Elevation to Customised Dynamic Transform Set Slots </span><br><br> Within the marketplace not only do Community Optimists place stake on their own models, but, there is also an active incentivised ecosystem for promoting the delegation of stake onto other models minted— allowing for seemingly common uploads to be actively transformed into unique and exclusive containers of value that serve to further optimise and upgrade the whole DASH architecture.<br><br>Certain models on the marketplace are evaluated to be allotted and awarded a placement within the different dynamic Transform Set slots, and so are able to be chosen by Creators and the system to be included for contributing to one part of the transform process for maintaining a higher level of fidelity of the information. Selection takes place according to either: <br><br> <ol> <li> 1. The Creator in their customisation process directly interacts with the marketplace at a more advanced level to actively choose which models, out of the presented eligible selection, are best suited to be inclusive for contributing to their file transform. </li> <br><br> <li> 2. The system automatically chooses based on the ranking mentioned in /4. The system randomises the selection across different unique combinations to ensure a well grounded blanket of coverage across all eligible models. </li> <br><br> <li> 3. During the post processing stage the run-time analysis and performance checks performed across the object, scene, project and engine give insight into further refinements that can be made to increase the potentiality of the fidelity of the model. With this data captured, the system is able to suggest certain models and model combinations for swapping into the dynamic slots for improvement if the Creator decides to opt in to this stage and likely run their file through the transform again. </li> </ol> </li> <br><br> <li> <span style='font-weight: bold'>5. Automated Risk Management</span><br><br>A DCGAN (Deep convolutional GAN) is used as an automated risk manager for an adversarial simulation approach; checking for both bad actors and poor actors. The DCGAN is mainly composed of convolution layers without max pooling or fully connected layers and uses convolutional stride and transposed convolution for the downsampling and the upsampling. The model maintains strong simplicity for a higher level of efficiency and employs the input layer as the discriminator.<br><br>The Open Source Community Incentive Network within DASH is an evolving and dynamic environment— inherently stochastic and unpredictable. The GAN is able to implicitly learn feature representations of the models in the system in an unsupervised manner to represent the correlations and semantic variations, and underlying factors of variations and irregularity in the data for reaching a better inference.<br><br>The GAN classifies the models as either malicious actors within the system, which in this case is represented as spam or fraud based models that have been minted to intentionally game the broader system, and also poor actors, in the case of the models allotted not performing at the standard required to positively contribute to the role of the Transform Set.<br><br>This approach serves to both underwrite the risk as more and more models are minted into the marketplace and awarded a placement within the different dynamic Transform Set slots. This assessment of good and bad actors within the system is one of the most important components for both preventing hyper-optimisation in the wrong direction and also efficiently streamlining the fraud detection process. Here, we use a similar mentality and approach to that conceived by Fraud Sciences for detecting malicious payment transactions— evaluating the size of the fingerprint or data point cloud around the transaction or model. The larger the footprint the less likely the actor is malicious— or as Shvat famously stated to Scott Thompson more than a decade ago before the PayPal acquisition of Fraud Sciences, “Good people leave traces of themselves on the Internet-digital footprints-because they have nothing to hide. Bad people don't, because they try to hide themselves. All we do is look for footprints. If you can find them, you can minimize risk to an acceptable level and underwrite it. It really is that simple.” </li> <br><br> <li> <span style='font-weight: bold'>6. Yield, Burn, Slash</span><br><br>The last stage bridges the earlier defined steps into an incentivised structure where good and bad behaviour is actively rewarded through a native cryptocurrency. Here, the tokens are used to both reward and also contribute a stronger disincentivize to the Community Optimists for engaging in malicious activity.<br><br>A yield, burn and slash model is employed, where yield and burn are performance actions, and slash is fraud and malicious based. In the slash case the NFT model is also burned from the marketplace.<br><br>As the GAN runs checks on the allotted models and also data is extracted from the Creator’s usage of the customisation settings, a graph is generated for presenting the results of each model and how this plays out in the meta system. Yield is awarded to those Community Optimists with stake on models that are performing well and contributing positively to the optimisation of the Transform Set. This Yield is captured as a % of both the stakes that are slashed and burned, and also more sustainably as a % from the value captured throughout the Creator's use of the estimation flow.<br><br>Burn is also conducted on a performance basis where underachieving models are actively removed from the allotted sets and requested for upgrade. Here the stake placed on the models is partially burned in the sense that the stake is redistributed to both those Community Optimists in the position to gain yield and also the system treasury. The burning accepts maintains the competitiveness in the bazaar and the vitality of the commons.<br><br>Slashing takes place on detection by the GAN, and only to those models that have been identified with a high degree of malicious intent. When a slash takes place all staked amount is redistributed across the yield and the system treasury. </li> </ol>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 3.1",
    description:
      "<h3 class='font-bold'>Blender ELI5</h3> A foundation talking point in 3D is that of rendering, especially in relation to time. If games are able to render what looks like photo-realistic graphics in real time, why do 3D animation softwares take hours, and even in some cases days to render sometimes the simplest of animations? <br><br> The ELI5 answer to this is semi intuitive— well, games aren’t actually producing photo-realistic graphics in real time. Instead, they are mainly manipulating lighting and if you look closely, you can see the many imperfections in the scene. <br><br> Blender is one such game engine used for creating and rendering 3D real time graphics. The engine is entirely open-source and completely free. Rendering in engines like Blender, involve completing very complex calculations, like that of reflections, shadows, camera visibility etc. The game engine must be able to display the graphics at very high speeds, which often comes at the cost of fidelity, with the rendering software approximating the calculative answers, rather than specifically copying the natural behaviour of light and materials as they are in real life (i.e. physics based). <br><br> As we continue to progress further in our technological advancements across computer graphics, the term “metaverse” is becoming more and more ubiquitous and not out of far sight when we consider its definition as a full interactive reality layered across every segment of our lives. So much of our lives is already digitally native, and everyday people’s expectations on the capabilities of what this means is rapidly increasing. <br><br> Rendering, along with many other things, including that of NFTs and what they enable for authenticated digital ownership, acts as a vital stepping stone to creating a version of the metaverse that meets so many of our expectations. With today's technology, real time rendering of fully digital scenes like in Ready Player One or Avatar are impossible. The graphics cards, computational hardwares and software just aren’t able to achieve such realistic fidelity in real time. <br><br> However, this is not to say that we are not on track to achieving this at a rapid pace. Making an entire film like Toy Story with a real-time engine of today’s standards is not so difficult, despite being completely impossible for studios at the time. <br><br> Rendering serves as a key element when considering the DASH file format and both our technical and business approach and architecture. We are building DASH for the creative economy and the metaverse— for seamless information transfer and 3D interoperability across graphic environments, engineering a common software that can reach the largest number of creators for the greatest range of activity types (Game production, 3D digital fashion creation etc.) and developing this in a way that actually enables creators and their intent, rather than tying them up with a set of restrictive parameters and false negatives. <br><br> In this latest revision of DASH we will be diving deeper into the game engine plug-in component of our architecture, how this works with our Transformation Set and also broader crypto-native business model for fidelity dial ups and detection. <br><br> <h3 class='font-bold'>DASH and Blender Summary</h3> The transfer of 3D digital assets across different applications and graphic environments is not only a process that is presently subject to a high degree of unsophistication, is tedious and broken, but also, in base reality, the concept of cross-platform 3D digital asset interoperability is still very much hypothetical. <br><br> It is not possible to “drag and drop” a file created in one 3D application directly into another without information loss and often detrimental reductions of fidelity in render output. <br><br> DASH defines the geometry and other properties for objects that are dynamically generated through this file intercommunication architecture — whose data structure output is intrinsically dependent on and optimised for the specific application and/or graphic environment into which the output is rendered. In other words, the file format output itself is application layer considerate. Within the DASH architecture, the game engine plugin works to feed specified data values from the output environment to the Transformation Set, for opinionated logic to be formed by the Transformation Set that is considerate of the application environment for higher affinity. <br><br> To this day, transfer of 3D assets into scene based application engines and 3D software environments is arguably the biggest challenge faced by the industry. This long unresolved pain point is highlighted by the literally hundreds of 3D file formats that exist, where almost every 3D software manufacturer has developed a new, and most often proprietary, format that is only optimised for their siloed narrow requirements. <br><br> In our continued pursuit of benchmarking open source and ensuring that this remains as a core pillar to our mission and executable operations, we are engineering our plugin and related integrations, to start with, for compatibility with the Blender game engine— entirely open source and completely free. <br><br> <h3 class='font-bold'>Why Blender</h3> Blender is a free open source 3D software. It’s applicability across multiple levels of usage is quite astounding; modelling, sculpting, texture painting, animation, VFX, fluid simulation, compositing, motion tracking etc. <br><br> The engine focuses not just on 3D software, but also more recently introduced a full 2D animation pipeline and real time rendering engine. Fun fact: it was also used as the core engine for the creation of Spider-man: Into the Spider-verse. <br><br> The composability and upgradeability ease of Blender is another hugely beneficial factor. Addons form a large part of the lifeblood of the engine— both paid and free— and have the ability to add whole new modes and a wider range of extended functionalities. <br><br> Blender is also highly accessible to all creators, being compatible across all major platforms used today, including Mac, Windows, Linux etc., and also the fact that it is open source breaks down huge barriers for entry, with straightforward documentation and a vast active community. <br><br> <h3 class='font-bold'>Blender for All Kinds of Things</h3> <ol style='margin-left: 30px;'> <li> <span style='font-weight: bold'>1. Rendering</span> <ul> <li >a. Cycles</li> <li >b. Freestyle</li> <li >c. Real time</li> </ul> </li> <li> <span style='font-weight: bold'>2. Modelling</span> <ul> <li >a. Sculpting</li> <li >b. Retopology</li> <li >c. Modelling</li> <li >d. Curves</li> <li >e. UV unwrapping</li> </ul> </li> <li> <span style='font-weight: bold'>3. Sculpting</span> <ul> <li >a. Mirrored</li> <li >b. Dynamic topology</li> <li >c. Multi-res</li> <li >d. Brushes</li> <li >e. Masking</li> </ul> </li> <li> <span style='font-weight: bold'>4. Animation and Riggings</span> </li> <li> <span style='font-weight: bold'>5. Grease Pencil</span> <ul> <li >a. 2D to 3D</li> </ul> </li> <li> <span style='font-weight: bold'>6. VFX</span> <ul> <li >a. Motion tracking</li> <li >b. Compositing </li> </ul> </li> <li> <span style='font-weight: bold'>7. Simulation</span> </li> <li> <span style='font-weight: bold'>8. Video Editing</span> </li> <li> <span style='font-weight: bold'>9. Scripting </span> </li> </ol> <br><br> <h3 class='font-bold'>DASH Blender Add On</h3> The Blender engine is built in C/C++ code. There are a lot of add ons for Blender out there, creating a liquid secondary feature market for the engine and giving more power to creators with simplified functionalities and automated processes. Python scripts are used for the majority of the development of Blender add ons, where the add on itself is a Python module. <br><br> The DASH Blender plugin/add on will be written in C++ code and wrapped through Python, removing restrictions from the Python API. The plugin licenses .DASH to be read and recognised correctly by the engine, along with achieving two other primary functionalities within the broader DASH architecture; communication with the Transform Set for dynamic opinionated logic, and run-time analysis and performance checks for re-optimisations after the initial transform pass. <br><br> To detail this out further, beginning with the first functionality and the most important component of what makes DASH so proofed against a varying array of edge cases and scenarios. The DASH architecture for the first time embeds the application layer with the file layer, ensuring communication between each remains uninterrupted for certain core modules within the Transform Set. Here, data is conveyed directly from the engine plugin to a select number of the Transform Set modules, including that of; Fast Fourier Transform, Voronoi, Louvain, NovelAP, GraphTransform, AsymGraph and Monte Carlo. The data communicated is fed into different logic sets within each module, informing the module of certain specificities of the application engine and output environment. This information weighs in on the judicious choices and opinionated determinations made by the Transform Set as the source file is passed through each module and allows for DASH to be a dynamically outputted version of the transformed source file that holds high affinity to and consideration of the final destination. With this argumentation, the reusability and life extension of a piece of content is amplified dramatically. DASH seeks to ensure that through both the plasticity of the Transform Set and active open source developer community, incentivised through crypto-native business logic, that 3D interoperability is not falsely optimised or achieved through creating a set file structure for the information to live, but rather, it is about developing a “reactive machine” that remains highly attune to both intent and targeted objectives. <br><br> The second major functionality of the Blender plugin is relevant only after post processing of the transformed source file. Here, data from the engine and tracking of the performance of the DASH file within the engine is recorded, analysed and checked against other key performance indicators and expected staging templates. The creator can choose to run the analysis on either a continuous, periodic or manually targeted basis. This extended functionality not only gives more influence to the creator in their ability to effectively customise the uniformity and real time performance of the object within their scene and environment, but also, overtime, as more data is collected, increases the efficiency of the entire system for achieving a more immediately optimised output result. <br><br> <h3 class='font-bold'>Close</h3> In our next file format revision we will be detailing further the engine plugin architecture, as we continue to engineer and build out DASH as cross platform ready, for seamless integration into the metaverse.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 3.2.",
    description:
      "<i><div style='padding-left: 20px'> <span style='text-indent: 20px' >“It is rarely a mysterious technique that drives us to the top, but rather a profound mastery of what may well be a basic skill set.”</span> <br> <span style='text-indent: 20px'> ― Josh Waitzkin, The Art of Learning: A Journey in the Pursuit of Excellence</span> </div></i> <br><br><br> <div style='display: flex'> <img src='/images/revision11diagrams.001.png' > </div> <br><br><br> Don’t sweat the small stuff is one of the most common idioms around. In fact, it is so deeply engraved as a formulaic phrase that it is most often equated to as common sense. <br><br> Although subset realities of this expression speak a certain constrained truth, there are many problems that arise from broadening its usage across situations, and over usage often leads to scaling the idiom up to also eventually having applicability for not sweating the big stuff either. It is at this point that red flags foster, and the small issues that are not resolved in good time tend to turn into bigger ones every time they reoccur. It is the small stuff that indicates larger upcoming problems and it is too often that the small details work to pivot the whole system. <br><br> By considering the small sites and maintaining a standard of observing the minor issues, appropriate preparation can be made and preventative measures actioned. This is not to say that every problem, error, inconsistency that we come across must be saturated in detailed attention, however, it is to say that many significant problems tend to introduce themselves in the form of smaller ones, and, by maintaining a standard for allocating enough resource and time for distinguishing the features of the problem that determine the extent of its issue, large amounts of effort, cost and debt can be quite rightly saved. <br><br> At some point in every project, you have to focus on the minutia and work through the small stuff— this is most crucial during the implementation stage where solely concentrating on the overall direction and concept isn’t enough and the sensitivities of specific contexts reveal themselves. <br><br> In this latest file format revision of DASH we are detailing out further the engine plugin architecture— one of the most core components for ensuring that interoperability of intended fidelity is effectively achieved for the outputted .DASH file as it is used within the application environment. Identifying the specific responses of the system and potential barriers to achieving the desired response are critical for ensuring that optimisation of the system is built upon the right foundation and not an illusory promise that can lead to a structural flaw in prevalent reasoning from insufficiently examined base principles. <br><br> <h3 class='font-bold'> Surrounding Architectural Context of the Plugin </h3> The Blender API allows for editing data in the user interface, running tools on custom settings, creating new and interactive tools and integrating new render engines. <br><br> Blender builds are compatible with Linux, macoS, Windows, and are underpinned by a robust C++ architecture. On top of the core engine, Python modules extend the capabilities of Blender through a comprehensive add-on system. Python scripts can be executed using either the built-in text editor or entering commands in the Python console. The Python console is used for immediate feedback of both entire scripts and code snippets. They can be further developed, examined, and modified in the Blender Text editor, before they are installed to be enabled in Preferences to load on the startup of the engine. <br><br> Scripts can also be run from the Blender command line. Data blocks are easily accessed through the Python API, giving full access to library data, where any settings that can be changed via the Blender UI can also be changed with Python. Custom data can also be accessed via the Python API where a data block has been assigned an ID. Once a data block has been created, a corresponding index or string allows us access to members of collections and access to attributes using a similar heuristic to changing a setting in the graphical interface. When it comes to animation, keyframes can be added through Python either as direct key properties or through manually creating the curves and keyframe data and then setting the path to the property. <br><br> The Blender API is also relevant for the engine’s dependency graph, where a single API accesses both the original data and final generated data, feeding appropriate information to the render engine. The dependency graph pre-processes the scenes, where nodes are generated as entities of the scene/objects and edges are connections between the objects. It is responsible for recording dynamic updates of the scene as certain values vary over time— the main purpose here is to ensure scene data is updated efficiently, updating the dependencies of modified values along the graph. <br><br> <div style='display: flex'> <img src='/images/revision11diagrams.002.png' > </div> <br><br> The DNA data (.Blend files), including that of the scene and UI, is preserved from being refashioned by the render engine, where the dependency graph stores evaluation results on itself, rather than overriding the source information, and so is able to support the date being in different states at the same time. The render engine thus works with generated data from the dependency graph, not that of the DNA, and uses both a generalized and centralized API to store engine-specific data. <br><br> The dependency graph provides the render engine with object transform, geometry and materials— where each render engine has access to the dependency graph’s evaluated data to be rendered. Per-render engine data is also supported in order to manage render engine data from the dependency graph and reduces the need for manually having to invalidate GPU objects from the dependency graph’s flush. Shading components are instead introduced here for tagging pre-calculated GPU arrays as invalid when a modification in relation to shading/rendering occurs. This component remains dependent on the geometry component, transform component, object materials and scene layers/collections. This tagging can be split in a way so that it can be known exactly what has changed. <br><br> <h3 class='font-bold'> DASH Plugin Architecture </h3> The first interaction of the plugin with the broader DASH transformation architecture comes through feeding information about the engine and graphical output environment to the Transformation Set, so that opinionated logic can be comprehensively formed, giving weight to which evaluated code path is most suitable in being applied to the source file in order to achieve the intended result— high affinity to the output environment. <br><br> The more inclusive role of the plugin and applicability of its architecture becomes relevant after the .DASH file has been generated and is ready to be placed into the engine environment. The plugin recognises the newly transformed DASH file in the Blender engine, enabling its compatibility with the engine’s source file structure, whilst ensuring that the information structure and fidelity optimisation performed on the OG source file during the DASH transformation process is not compromised, forcing high affinity hierarchies of the information structure. <br><br> Here, the plugin collects information from the DASH file and displays relevant information in the plugin graphical interface, displayed through that of the engine. Analysis is then performed on the object file against the scene, project and engine data. This operates whereby information retrieved from the plugin about the engine, project and scene is comparatively evaluated against the object and its current performance in the application. With these values; the information is sent to the cloud process where values are indexed and stored on the Optimistic Transform Ledger. The plugin receives confirmation from the cloud process before the cloud process displays the comparison information in the plugin graphical interface. The frequency of the data collection and display depends on the user’s choice of running the comparisons at either continuous, periodic or manually targeted intervals. <br><br> With this information the user is provided with optionality as to the range of performance improvements that can be made for increasing the interoperability of the file in relation to the scene, project and engine. The choices are displayed to the user through the graphical interface of the plugin. The user is thus ultimately directed through the ‘customisation’ section of the estimation flow, where the staked and voted in contributions of the OS community are provided to the user in order of relevance. This search is then indexed through the metadata of the Community Optimist’s minted unique 721 NFTs, which actively verify the originality of the proposed models and authenticate them against the Researcher / Developer making the proposal. Having the data on-chain supports a succinct classification and sorting system.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 4.0.",
    description:
      "Over the past 11 released revisions, we have broken DASH down into 3 base elements; <br> <br> <div class='padding-left-10'> <h3 class='font-bold'> Transform Set </h3> The interoperability channel for the inputted source file. Ensuring fidelity maintenance as it is passed through each translation (10 total), gaining perspective on the full scope of the source file and forming opinionated logic based on data fed from the engine plugin about the output application environment. <br><br> <h3 class='font-bold'> Crypto Native Incentive Ecosystem </h3> Using cryptoeconomics and native web3 incentive models to promote an ecosystem built around continuous upgradeability and dynamic interoperable models that can give value to the creators interacting with the system and also cultivate an active, open source developer and researcher community. <br><br> <h3 class='font-bold'> Engine Plugin </h3> For compatibility of DASH within the game engines, establishing enhanced logic before transformation of the source file, and closing the circle, where data informs performance improvements and checks and balances against this. </div> <br><br> DASH is engineered for the metaverse. It is a core infrastructure requirement for developing the immersive digital realm that we all keep talking about. <br><br> Below is a fully scoped diagram of the DASH architecture. There are 4 major touchpoints for any Creator interacting with the system; Source Input, Estimation Flow, Mint Marketplace, Engine Interface. <br><br> If we are expecting a metaverse, we must give Creators the right tools to actually build the right content for it, not just optimise on what is already failing. We can discover fresh water, but without the aqueducts to direct the water to where it needs to go, was the discovery really worth the value that we place emphasis on? <br><br><br><br><img src='/images/file-format-v12.jpg' style='object-fit: contain; width: 100%; height: 100%;'><div> Figure 1:DASH Full Architecture Blueprint </div>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 5.1",
    description:
      "As we move into the succeeding stages of our DASH R&D we are focusing our next three community update and format releases on covering and detailing out case studies across the industry, economic and user level— detailing more on how each is relevant for the usage, adoption and full appreciation and understanding of the engineering of the DASH file architecture.<br /><br />For this first of the three we are beginning with the industry level, and concentrating on overviewing one of the most relevant foundations to all industries and each of us today, whether we all fully agree with, realise or understand it or not— the metaverse.<br /><br />It’s a term that first originated from Neal Stephenson’s Snowcrash novel back in 1992. And, although the book presented more of a dystopian cyber reality where timely pizza deliveries dictated the fate of an appointed driver’s and simulated avatar’s life, the term itself cannot be confined to a specific definition, phrase, idea, concept or dimension. There is no consensus as to what it actually means.<br /><br />The metaverse is multi-dimensional, it’s an all-encompassing immersive reality that is able to seamlessly interweave the physical and digital, more succinctly connect each of us so that we can better co-create, socially interact, more efficiently communicate and, for the first time, our physical location can be completely detached from our perceived experiences. The metaverse is all about making smaller circles, reducing the friction and barriers around points of entry to the opportunities that allow each of us the freedom to live our lives unconfined to a pre-configured system or framed set of rules and conditions. It’s a persistent portal of space-time; perhaps can even be visualized as a sort of tesseract where time and space no longer confer the same limitations on our interactions, identities, make-up, activities and expansion as an entire species.<br /><br />However, materialising this as a proper truth isn’t as planar as writing an interesting novel, it’s a linear evolution not a sudden disruption— the engineering required to make it all happen is not currently connected across one fabric; it is disjointed, where some innovations and advancements are incredibly future facing, whilst other essential components are either non-existent as of yet or still require vast amounts of iteration and improvement in order to reach a level of user experience that doesn’t drive us all into intense frustration.<br /><br />An important point to all of this, and that will be detailed more below, is that when we talk about the metaverse, at least at DIGITALAX, we assimilate it to being an open, decentralised and web3 enabled reality— not built behind the walls of a gatekeeper where points of value exchange remain centralised, locked and only benefitting to a select few.<br /><br />It is for this reason why DASH is empowered by a decentralised natively crypto and web3 incentive model for prospering a global, open sourced and authentic developer ecosystem that underwrites its dynamicness, upgradeability and interoperability with the ever-growing nature of how we interface with the metaverse. And, of timely relevance we will chronicle more of the Apple vs Epic saga, and how the implications for the outcomes that it poses sets to potentially disrupt the very future of our metaversal encounters and the industries empowered and built on top of it. </div> <br/> <h1 class='font-bold'>Apple vs Epic</h1> <div> It was August 13th 2020 when Epic Games filed suit against Apple in one of the most high profile cases facing the two industry giants, and, as of today, May 13th 2021, the trial is currently underway. It all comes back to Epic’s push back against the highly controlled and walled garden approach that Apple’s app store enforces on all iOS developers— a 30% commission on subscriptions and in-app purchases.<br /><br />The trial is about the entire app store model and the unfair tax imposed for the privilege of distributing software to Apple devices, you either pay the tax or you lose global hardware distribution. And by describing it as “unfair” it isn’t just from the perspective of a single company dominating and monopolising the flow of revenue and access to customers for profit extraction, despite overheads for Apple maintaining the app store really only being that of vetting the games and keeping the servers running, but also, it is very much about the fact that these terms and rules are bendable and flexible to those at the top hoarding the power; Amazon prime is able to implement its own payment system, completely circumnavigating Apple’s tax, and, Apple knows about it and lets it happen. Why? Because Bezos and Amazon are powerful enough to set their own terms.<br /><br />Sweeney and Epic are taking this strong stance against Apple for a much larger cause. It’s not simply just criticising whether Apple is really delivering on it’s promise of a safe and secure experience for developers and iOS users, but more than that, it is part of a larger play by Epic to set forth a new standard, message and direction for their vision of establishing the metaverse— and in this version Apple is unfairly demanding 30 cents on every dollar of the profits.<br /><br />Epic’s Fortnite has become the cultural cornerstone for Sweeney’s first iteration of the metaverse, where in this version of “the social medium… of 3D simulation” Sweeney doesn’t believe that it will rise from just one company building and forcing everybody else to use it. Rather, he believes it will be more of a connected network of entities that can run cross platform, just like how prior to the lawsuit players were able to play Fortnite on any major platform, and they could play simultaneously with their friends across these different platforms. However, the current big tech companies aren’t fond of this approach, where separate ecosystems are the standard model for ensuring continuous “secured” domination, like that of Facebook, Google, Amazon, YouTube, Netflix etc.<br /><br />Apple is countering Epic’s logic from the perspective that Epic is pursuing “a fundamental assault on Apple’s secure and integrated ecosystem”— where the request for side loading of 3rd party app stores like Epic Games store can pose a huge security threat to the web of distribution value that Apple has so thoroughly engrained.<br /><br />If Epic does succeed in winning the case it will be a huge blow to the current walled garden framework and a big step towards greater interconnectivity— spotlighting for many just how bad the internet’s failings are for only incentivising a cut throat and extractive capitalist economy. The ongoing debate certainly excites a struggle between the ascendance of enabling greater creativity vs control. </div> <br/> <h1 class='font-bold'>Engineering the Metaverse</h1> <div> Without belittling Sweeney’s upstanding and absolutely necessary stance in all of this, it is important not to overlook the key missing elements to the suit that both parties fail to truly recognise and bestow justice.<br /><br />To really build out a metaverse that is connected, persistent and accessible by all, the value exchange layer is incredibly important, and, if this is dismissed or architected as even a slightly similar blueprint as web2, then the results of the Apple vs Epic case, or anything surrounding it, really don’t matter. The value exchange layer must be decentralised, and it must be web3 based. Otherwise, the disruption will be nothing more than the development of a new interface, rather than a comprehensive establishment of a future that is optimised for guaranteeing that our interactions and the opportunities that come out of them can truly be interoperable, seamless and immersive— not just dictated by another walled garden, even if that walled garden might appear much larger and selectively more inclusive. Ultimately, if the foundation is not authentic then this next version of the internet will be another distractive optimisation in the wrong direction that gates off the ability for smaller, focused metaverse communities engineered out by independents.<br /><br />And this is where Sweeney appears to insufficiently encompass the vision for building a metaverse that we can all engage with. The metaverse must be built from scratch in a web3 environment. It cannot be an iteration of a dominant studio’s online framework. If so, the Red Queen’s Race continues and a host of new problems, far beyond what we can properly conceptualise now, will surface and sustain.<br /><br />In recent years, the large centrally controlled companies have been attempting to build prototype web2 versions of their metaverse, racing to conquer the choke points that they believe will ensue, just like they were able to achieve through the internet. Facebook, Google and Samsung have all made heavy investments in cloud computing and virtual reality companies— Facebook has already released the first stages of its VR world Horizon.<br /><br />However, with decentralisation at the centre, User Generated Content (UGC) will form a huge part of the collective set of connected experiences built out across the multiverse of worlds, where collaboration and modding will ensure a multi-disciplinary knowledge base across graphics, UX, game design, story telling, analytics etc. and also flesh out the development of socially driven components of the metaverse that empower shared experiences, co-creation and a more unified economy.<br /><br />The metaverse needs to develop in a fashion that is puzzled together piece by piece and “crowdsourced” into existence, with no privatized platform deciding what’s right or wrong, especially in terms of the content permitted. It must be a decentralised and democratised progression to an interconnected system. And, as it stands, the interconnectedness has been one of the more challenging aspects with barriers very much still being reinforced by those that seek to benefit. However, this is where web3 and blockchain provides a solution well beyond a noble cause for transparency and promoting democratised access; what the web3 value exchange layer offers, which web2 can never accomplish, is that of allowing for customised incentives to be efficiently programmed into the heart of these metaversal ecosystems and realities that ensure anyone with a web3 enabled device is able to actively participate in an ecosystem where liquidity of content, resource, sustainable value generation and circulation is abundantly distributed and re-distributed, not closed statically within a silo.<br /><br />This further translates when considering more of the technical approach to the construction and execution of each dimension within this all encompassing multi-reality and the likelihood that a variety of platforms, vendors will support an overarching decentralised open protocol that connects the different mediums together and all VR/AR experiences. The WebVR developer community is deep in building out metaversal functions, specifically focused around what has been coined “traversal deep linking”— allowing users to seamlessly transport across different virtual spaces whilst being able to keep their headset on and also maintain a consistent avatar identity or have it form according to the specific virtual world/encounter.<br /><br />Thus, with all this said, interconnectedness from a technical or even commercial, IP layer is still not enough for truly materialising a robust metaverse; rather, the value exchange layer must also be completely distributed and interconnected too. And, with that noted, only web3 is able to achieve this with authenticity; no amount of VC money, $1 billion funding rounds can empower the system we need for supporting future proofed growth of a healthy and vibrant ecosystem for all of the participants. </div> <br/> <h1 class='font-bold'>DASH: Instrument for Modding the Metaverse</h1> <div> DASH was engineered from the start to be scalable and aligned to evolve with a modded metaverse; a metaverse that doesn’t rely on one standard, protocol or centralised infrastructure. Rather, a highly dynamic, maybe even somewhat messy (At least as the progression continues to maturity) mix and variety of systems, content, creators, interfaces, business and commercial services and rendered intent. A metaverse built by those contributing their own ideas and creativity to it; not a centralised provider.<br /><br />Side Note: Both Snowcrash and Ready Player One, some of the most detailed representations to date of potential metaverses, are portrayed as rather dystopian; and, both are run by winner takes all economics with centrally owned corporate controllers.<br /><br />And, this sort of metaverse demands the ability to ensure that flexibility and multi-dimensional margin can be technically implemented at the most elementary levels where there is a decoupling of strict rules, guidelines and restrictive workflow practices; the file layer.<br /><br />Everyone talks about the metaverse as something to experience, but they often miss discussing the actual creation. DASH not only creates an entire flow for encompassing core touchpoints for maintaining creative intent and fidelity of content as it is moved, modded and remixed across environments, but even more so it naturally embeds crypto native incentive models for reinforcing development and technical innovation that remains true to a decentralized and web3 environment; that promotes continuous iteration, improvement for the act of creation.<br /><br />With pre-processing, the Transform Set and post deployment run-time analysis all directly receiving information from the engine output environment, opinionated logic can be formed and dynamically updated— reconfiguring the default mathematical processes used within the Transform Set and also those selected through the NFT mint marketplace to facilitate higher affinity of content as it is deployed across alternate collaborative environments and virtual realities. DASH is an instrument for modding the metaverse and providing optionality for adopting new identities, personalities and materialising self expressive digital fabrics; allowing thousands of doors to be scattered all over the realms, each connecting to another world. </div> <br/><br/> <div > <i> “People come to the Oasis for all the things that they can do, but they stay because of all the things they can be.” </i> <br/><br/> <span style='padding-left: 30px;'> - Wade Watts, Ready Player One </span> </div> <br/> <br/> <h1 class='font-bold'> A Closing Note: Not Existentialism, but Something For All to Consider </h1> <div> As more versions of the metaverse transpire, increasingly surpassing derivations of multi-dimensional realities will also come into existence. And with this, the extent and reach of environments containing absolutely everything, with less visibly existing limits will become observable— the idea of containing “all of reality” or, more commonly put, “all states of possible existence at once”, where physics becomes looser, more abstract, less restrictive.<br /><br />And, with this said, the concept of “all things real” will also become less definable and less tangible. Alternate omniverses will contain things, objects, items, content that cannot be mapped from one sense of reality to another.<br /><br />The potential and applicability of interoperability will actually break down; an inability to jump through and exist in an infinite amount of spaces. It is hard to fathom; and our civilisation is required to become far more advanced before any of this comes into existence. But, it’s an interesting point nonetheless to make of DASH and reinforce the naivety of pioneering for a “set of standards” that seek to be appropriate for all cases; instead dynamicness, “modding” is what will pursue and the only commonality of traits across the different environments and content will be that they exist. Yet, how they exist will be so completely varied, fluid and moddable to the beyond.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 5.2",
    description:
      "For this revision of the DASH File Format Specification and Intercommunication Architecture we are continuing our series on detailing out case studies across the industry, economic and user level, for further highlighting the importance of the adoption and usage of DASH as we move towards the prevalent existence of a globally enabled creator economy.<br /><br />Here, we are focusing on the economy level case study, and looking at the microcosm of Puerto Rico— an unincorporated territory of the United States with a population of approximately 3.1 million. Puerto Rico has a colourful identity encompassed by a melting pot of cultural influences, both international and indigenous, and is considered as the most competitive economy in Latin America, where the labor force is majorly bilingual, educational attainment maintains on a continuous steady rise, and, its close ties to the US mainland provide an abundance of favorably incentivised economic conditions for supporting massive potentiality in growth for innovation and business.<br /><br />However, with that said, there are still a number of adversaries that the local population face, where gentrification and extreme divides between the rich and poor continue to stagnate core parts of the island in its progression towards attaining more strengthened cyclical upturns. The island has been suffering a recession for over a decade, which has led to high levels of debt, often owed to Wall Street ‘Vulture Funds’ as they purchase bonds cheaply on the dollar. Puerto Rico also doesn’t have a voting member representative on Congress, reinforcing constant instability for both financial and humanitarian support from the US mainland, where responsibility is often shifted and delayed from one administration to the next. Many Puerto Ricans have thus had to leave the island to the mainland in order to be able to secure full time jobs, sustain a livelihood and provide for their families, where expenses continue to rise despite wages not following the same trend; this was all only exacerbated by the devastation of Hurricane Maria.<br /><br />With this said though, one of the core motivations for spotlighting this case study on Puerto Rico is due to the intense resilience of the community to the adversaries they have faced over the past many decades. The entire economy is well positioned for embedding creativity as a positive function of society, where creative vitality can empower and promote a multi-generational workforce to new sustainable means that are directly stimulated by the progression, adoption and eventual global changeover to a web3 enabled creative economy— here, low barriers to entry for opportunity, talent discovery and genuine breakthroughs will come from the development and usage of creative production tools across the full spectrum of application capacity. Or, more simply put, Puerto Rico is an island, an economy, and a community, that is arranged as such for being able to fully capture the essence and opportunity crafted from driving growth of the Metaverse. </div> <br/> <h1 class='font-bold'>Overview</h1> <div> Puerto Rico is a mountainous Caribbean island that was ceded to the US in 1898 as a result of the Spanish-American War. It is one of the most dynamic economies in the Caribbean region and an important location along the Mona Passage, where San Juan, the capital of Puerto Rico, maintains as one of the biggest and most generative natural harbours in the entire Caribbean.<br /><br />The island has a population of approximately 3.1 million people, where 99% of the population is Latino and the core ethnic makeup consists of White (75.8%) and Black/African American (12.4%) groups. The population clusters are mostly located along the coast, particularly that of San Juan, where most of the interior of the island is dominated by the Cordillera Central mountains and thus preserving a low population density.<br /><br />Puerto Rico’s GDP is recorded at around USD$100 billion, declining since 2017 where it sat at USD$123 billion, mostly due to the devastating effects from Hurricane Maria and the global 2020 COVID-19 pandemic. The economy has been suffering a recession since 2006, with negative growth for the past 11 years, which has led to high levels of debt— in 2020 public debt represented 67.9% of GDP. In fact, the island has been struggling with the largest municipal bankruptcy in US history since the catastrophic damage of Maria, with over USD$71.5 billion in bonds and USD$50 billion in pension bonds owed. The hurricane devastated Puerto Rico, causing billions of dollars in property damage, flattening neighborhoods, crippling the power grid and creating a major humanitarian crisis, the effects of which are still visible in some places. This was then only exacerbated further by the onset of the pandemic, where despite a bounce-back in 2019 through disaster relief funding for rebuilding the island’s infrastructure, the pandemic led to a redistribution and reallocation of the funding and so further stagnation in the region’s restoration.<br /><br />The economic and fiscal crisis on the island has not only led to the region operating well below its full potential, but it has also led to a humanitarian crisis. High unemployment still ensues as a significant number of Puerto Ricans continue to emigrate to the United States in search of more lucrative opportunities, 46% of the population still lives below the poverty line, the unemployment rate is two times the US national average and the median household income is approximately one third of the US median. At least 3 major structural factors have contributed to triggering the current extent of the crisis; the rise of public debt, a decline in manufacturing jobs which was induced by the elimination of Section 936 federal tax credits, and, the continued congressional and presidential neglect to enact effective policies toward the island.<br /><br />However, despite this complicated situation, the economic outlook for the island and broader Latin American community is expected to improve further into 2021 and the coming years as pandemic restrictions continue to lift and the world opens up again— the IMF's April 2021 estimates a predicted growth of 2.5% for 2021 and 0.7% for 2022. Further, Puerto Rico’s debt to GDP is expected to gradually decrease to 64.8% of GDP in 2021 and 63.4% of GDP in 2022. The goal continues to be getting Puerto Rico out of bankruptcy, which requires government support in enacting various reforms and reaching debt-restructuring accords with creditors.<br /><br />Pharmaceuticals, electronics, textiles, petrochemicals, processed foods, clothing and textiles are some of the major industries in Puerto Rico. The US is the main trading partner of Puerto Rico and accounts for nearly 90% of the island’s exports and over 55% of its imports. Puerto Rico’s geography and political status are large determinants of economic prosperity across its varying core industries, where the industrial sector of the island greatly exceeds agriculture as the locus of economic activity and income. Agriculture constitutes about $808 million, or 0.8% of GDP, however, only 6% of the land is arable, posing a direct threat to the region’s food security as it imports almost 85% of its food. Tourism makes up about 10% of the island’s GDP, and is one of the island’s most stable industries, even throughout the pandemic, where the island’s beaches, mountains and plentiful outdoor recreational destinations have been able to encourage responsible travel and activities that keep travelers safe and socially distanced. <br /><br />The political landscape in Puerto Rico has been unstable since American colonialism in 1898, where military administration ruled with little regard for the cultural or previous political sensitivities on the island, causing a distasteful divide between the locals and US mainland occupants. Further, the local political autonomy of the region remains restricted under the Jones Act, where despite US citizenship being collectively conferred on Puerto Ricans, the act fails to grant the measure of self-determination and Puerto Ricans are unable to vote in federal elections. Throughout the 20th century most Puerto Rican political parties have attempted to modify the political relations between the island and the US federal government, where there has been a constant oscillation between favoring statehood and independence for complete autonomy. In October 1950, President Truman signed the Puerto Rico Commonwealth Bill, which enabled the island’s people to establish their own constitution— however, despite the perceived greater sovereignty, Puerto Ricans are still unable to expand the limits of their autonomy to include international diplomacy and so can’t weigh in more influence on the broader affairs of the Carribean.<br /><br />The island’s political status has remained a pivotal element in relation to its economic health, where its complicated financial history has led to systemic fiscal weaknessnesses, that combined with banks pushing predatory borrowing deals on the government, has introduced an organised series of steps that have really only devastated the region further for other’s convenience. To combat some of this, promote more business activity and attract investors to the island, favorable tax Acts have been passed. At the heart of these incentives is Puerto Rico’s unique tax status, where even though the island is a territory of the US, it is treated as a foreign country for US federal income tax purposes, and a special tax treatment applies to its residents. Acts 20 and 22 subject Puerto Ricans to a corporate tax of 4%, compared to 21% in the US, and a capital gains tax of 0%, compared to 37% in the US (Particularly favorable for those engaging in the stock and cryptocurrency markets).<br /><br />This unique situation is furthered whereby 98% of Puerto Rico has been declared a Qualified Opportunity Zone— zones that were created to promote local, national and international investment, create jobs and generate economic development in disadvantaged communities. Investors in these zones set up what is named a Qualified Opportunity Fund (QOF) to then receive preferential tax treatment through investing in the zone. Here, investors are able to defer taxes on previous earnings up until December 31, 2026, and also receive a 100% exemption on dividends or distributions, a 25% tax exemption on net income earned in eligible business activities, a 25% personal and real estate tax exemption, a 25% exemption on municipal construction taxes associated with eligible business activities, and, through municipal ordinances these exemptions have potential to be increased from 25% to up to 75%. Also, if the investments in the QOF are kept for a period of 10 years, the profit generated becomes totally tax exempt.<br /><br />To buoy the economy and business activity potentiality further, Puerto Rico has also allocated additional resources for boosting a thriving entrepreneurial ecosystem. Parallel18 is one of the more active start-up accelerator programs on the island that offers $40,000 equity-free funding with a chance for follow-on funding if the qualified alumni decide to establish their company in Puerto Rico. In exchange, entrepreneurs engage with local university students to help further foster and grow the culture of entrepreneurialism. Act 73 also emphasises the region's focus on its tech sector, where it grants a 50% tax credit for research and development activity.<br /><br />With this said though, it is still a fine line, where for many, Puerto Rico has been treated as a point of convenience, and the bulk of the money ends up going elsewhere. However, the capacity to do it the right way and combine the beneficial local economic incentives with a truly thriving tech enabled ecosystem is set for positioning the entire island’s economy and labor force to ride the wave of metaversal digital disruption— taking technologies and creative production tools, like DASH and other web3 enabled infrastructure, to promote an entirely new set of job opportunities across the creative supply chain, from enhanced rendering farms to 3D modeling production labs— a completely new customer base, new economic value, distribution channels and talent exposure. Puerto Rico can position itself as the hub for the future of the creative economy, fostering not only their own local talent, but also attracting and inspiring other creatives, technologists, entrepreneurs to the region to partake in this new ecosystem; from digital fashion, to web3 immersive realms, to a crypto powered economy.<br /><br />DASH is designed as a creative tool for promoting dynamism and creative ethos from its users, and also lowering the barrier to entry for those willing to actively contribute to building out the metaverse that we keep envisioning; an open world where each piece of content can be modded for hyper-personalisation and novelty. With a low barrier to entry, more creatives are able to join the disruption and uniquely position to carry forth their passions with steady growth, rather than an all too common precarious underpinning. And, Puerto Rico is one of, if not the best suited regions globally to ignite a well founded knowledge and talent base for scaling and growing economic opportunities within the web3 enabled creative economy.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 5.3.",
    description:
      "<div class='quotation'> 'The most regretful people on earth are those who felt the call to creative work, who felt their own creative power restive and uprising, and gave to it neither power nor time.' <br><br> '- Mary Oliver' </div><br><br> What does it mean to be a creator? It might sound like a simple question, but, when you research this online the information indexed around it is little to none. Certainly there is a lot that appears around social media content creation or how to be the next “big YouTube influencer”. And, it’s not to say that those within that field are not creators in their own right, but, the term Creator is so much more than just the type of content. It’s more so about having the optionality to pursue seeing through an idea to its final outcome, whatever that may be, and making a living off of it that surpasses that than ignoring your creativity and being boxed into the 9 to 5 restrictiveness that society somehow came to collectively accept and believe is the responsible and correct path to follow for living a happy, healthy, and conventionally lucrative life. Yet, that is all but a false premise that comes with a huge asymmetry positively weighted towards those gatekeepers that benefit from keeping this ‘system’ running and in-check. <br><br> This extractive system, as it currently operates, rewards those that control the chokepoints, whilst those that don’t are either forced to receive the framework as is and operate within its confines, or face the real risk of constant precarity when there is no clear roadmap for leveling up without taking on a significant amount of downside risk— risk that is transferred from the actions and implied impunity of those that maintain the framework in this said to be efficient corporate global economy. These gatekeepers use hidden options that harm the collective without anyone realising it, continuing to increase the positive delta of the strength of their compounding antifragility, that ultimately again only just reinforces the system as it is and herds the commons into the nasty fragilising sectors. <br><br> And with that said, Creators have often been one of the most salient groups within the “herd”. This is why web3 is so revolutionary; it essentially overturns the asymmetry and evens the playing field so that anyone can have access— so that creators can have freedom; a freedom that is essential for them to not just sustain but rather have their creative actions, input, contributions visibly underwrite their existence as they pilot a well defined roadmap that preserves the commons. It is not about removing the gates, but rather miniaturising them and creating more of them, so that each of us have personalised access keys for the opportunities and pathways that suit us best and ultimately vitalises our creativity, rather than cutting it down or boxing it into someone else’s definition of conventionally suitable. <br><br> Thus, for this next format revision we will conclude our case study series by detailing from the user level the quintessential indispensability of DASH in empowering a web3 creative economy that authentically supports creators in being real creators, enhancing their potentiality and allowing them to encompass antifragility, where through DASH they are provided with the ecosystem of tools, resources and other incentivised aligned contributors for ensuring that higher fidelity and affinity to creative intent can be seamlessly achieved. From this user level we will focus specifically on the digital fashion designer— their journey with and without DASH and their role within a decentralised commercial metaverse. This is both of high relevance and importance when considering not just the central pillar of DIGITALAX, but even moreso the entirety of the very fabric of what makes the metaverse tangible and highly visceral and fundamental to each and every one of us. The web3 fashion designer, perhaps an unseen and undervalued creator as of right now, is positioned to power and embolden what so many of us have been promised and never delivered; freedom from and superseding of the web2 exploitative framework.<br><br><h3 class='font-bold'> The Web3 Fashion Designer </h3> Humans are primarily visual creatures and fashion is a distinct method and channel of communication that has been core to our society for thousands of years. Fashion is how we express ourselves, show who we are, and reveal our identities. And, in the metaverse, fashion will play the same role, if not, even much more important. People will use fashion as their core channel for expression, and they will expect hyper-realistic, moddable, personalisable fashion to form part of this. <br><br> Cloth modeling is an intricate and labour intensive process. From designing a cloth to then bringing it to life in a virtual environment requires a series of complex steps that demand special attention and hours of labour intensive manual work. One must carefully consider animation, avatar shape and geometry, interaction with the environment, lighting conditions, whilst also adhering to enforced computational constraints. <br><br> Today, creating a 3D digital fashion garment that is metaversal-ready i.e. that is both attune to the creator’s determination and also the user’s desired and expected utility, is almost impossible. Currently available tools dedicated to digital fashion designers, like that of CLO3D, although provide a high level of customizability and discretion for the specific purpose of modelling and texturing a 3D fashion garment, offer almost no interoperability or practicality outside of the software itself. Exporting the model in a more generic format such as FBX or OBJ also doesn’t offer any functional solution, whereby information is either outright lossed, distorted or misrepresented as it is transferred into another application like that of Maya, Houdini, Blender etc. <br><br> This presents a huge problem for the designer in being able to appropriately scale up the value of their virtual garment and so proficiently operate within a commercial environment, where any utility beyond a purely cosmetic render is not efficiently achievable without significant refactoring for compatibility within a real time environment or game engine system. Digital fashion is highly distinguishable from art, where the removal of utility, although defensible in some respects, is not sustainable for the designer or the user in successfully satisfying the full tangibility of the true purpose of the digital fashion piece; to empower existence, to enable self expression, to instill moddability of identity and individuality, and to underwrite a tactile medium for the user to be able to coherently interface with their surroundings as they navigate a multi-dimensional sum of all virtual worlds. Anything other than this and the full potentiality and ability for the designer to effectively capture the entirety of the upside of the delta between their idea and implementation of it is drastically hindered. <br><br> In fact, the current available tools, softwares and applications actually do a disservice to the creator as their optionality is confined to what others have deemed ok and acceptable, not what is actually required for them to be able to reach the level of freedom and favourably commingled antifragility to sustain and be properly valued for their work. It is for this reason that digital fashion designers in today’s landscape are truly unseen creators; their craft cannot be fully appreciated, and there is no great interest by anyone to change that. Even applications like CLO are more inclined to maintain the walls around their software with proprietary source file formats, ensuring that they can benefit directly off of each piece of content designed for use only within their program, rather than having this open sourced so that the collective can benefit and build a decentralised economy around it. If a designer does wish to pursue greater interoperability for their garment, it requires countless hours of re-engineering the garment so that artefacts are appropriately addressed and the garment’s information is compatible for either one very specific application (Again limiting its functionality) i.e. polycount reduced, or a pre-configured animation that again only allows for one time off-the-shelf restrictive cosmetic usage. In fact, it requires resources, tools, understanding and knowledge that isn’t scalable across the broader community of digital designers and creators— and this is the community that will be vital in catering for these new digital economies of the future. <br><br> DASH sets out to transform all of this for the designer. The architecture is built to be flexible to the creator and their needs, rather than requiring the creator to configure to some arbitrary standard shrouded in opaqueness as to the benefits surrounding the facts of why that standard statically exists in the first place. <br><br> The Transform Set within DASH, and the incentive driven developer ecosystem around it, injects vitality at the very centre of the creator’s content, ensuring that it can be molded to achieve accordance across multiple vertices, where information is selected to be either retained or set aside based on the opinionated logic formed from communication with the output environment through the engine plugin. Thus, a garment can be seamlessly plugged into various games and virtual environments. As such, DASH is a tool and system for not just streamlining this process but rather also scaling up digital cloth manufacturing— where exclusive digital-only inventories across garment geometry, materials, and textures can be developed and maintained from a modular level and then selected for combination with a broader library of assets, completing the pipeline. <br><br> Digital fashion designers then have a streamlined, interchangeable and highly efficient channel for taking their realistic designs directly into these environments and enabling direct collaboration with virtual environment developers and modders. DASH transfers the focus of the designer from having to accept a strict set of guidelines or experience great difficulty in their creative process, to safeguarding their primary intention as they are afforded greater control and consideration. <br><br><h3 class='font-bold'> The Important Role of the Digital Fashion Designer </h3> Never in the history of mankind have we had so many advancements emerge in parallel and then collide to enable such huge innovation and create previously unfathomable opportunity. Over the next few years, but ultimately way sooner, we are going to have to open up our thinking in completely new ways in order to move these capabilities and humanity forward. <br><br> The progression from Atari in-game graphics, like Pong in the 1970s, that displayed a simple pixelated black and white 2D animation, to the hyper detailed and dynamic graphic 3D virtual worlds that we see today is simply breathtaking. The question that seems to get a lot of people thinking is what happens when these worlds become so real and so advanced that we can no longer tell the difference? <br><br> If living in a 3D virtual or digital world could enable us to experience things differently, experience things better, and allow us to overcome so many of the physical limitations that we currently face, then wouldn't that be extremely powerful and beneficially impactful for our long term future as a society? The ability that these virtual worlds would allow, in terms of being able to separate our physical location from where we are present is transformative - we could vicariously sample our dreams, give more power to our imagination, and create experiences that perhaps couldn't have been possible previously. <br><br> These new digital economies have the potential to unlock trillions of dollars worth of new value. However, in order for this to occur, and for it to be unlocked in a way that is preserving of the commons, we need to be able to enable seamless immersive digital experiences that are highly customizable, engaging and enable new dynamic ways for people to self-express. These concepts of individualism, identity and self-expression are rooted as some of our most core values as humans, and ultimately, form our human nature. While the internet has given us the ability to connect with others and re-create parts of our identities, the impersonalization of the screen-to-screen interaction doesn't hold the same level of impact that a true digital world interaction would enable, in terms of truly unlocking communication, collaboration and self-expression in the information age, enriching humanity and people's experiences with the world around them. <br><br> Fashion brings with it an emotional experience that is highly personal to the wearer and integral to our identity and self-expression. Being able to translate this same experience in a digital environment with digital clothing is absolutely vital to being able to scale online worlds that can create meaningful memories, emotional experiences and new connections and relationships for the user. Our identities are moving targets that never truly reach an endpoint; they are moddable as a reflection of our surroundings, our existence and our ongoing internal growth - and creating these emotional experiences through our clothing unlocks inspiration for the wearer to be able to feel good, express their personality and be authentic to who they are in a way that is moddable to their current status, situation, stance, potentiality, mode of expression.",
  },
  {
    title:
      "ASH File Format Specification and File Intercommunication Architecture. Revision 6.1.",
    description:
      "The entire DASH format has been architected in a way that warrants insight, and preservation of this insight, into the endpoint application environment that the modeled content is to be deployed. Instead of attempting to establish a conditional standard that requires strict adherence and confirmation to a predetermined structure and scaffolding that is only optimised for a single plane, causing unavoidable inaccuracies and fidelity loss, the very foundation of DASH is injected with high dynamism and moddability, and so thus ensuring that affinity to any final output can be achieved as the content itself undergoes a series of transform passes to effectively adjust to the niceties and particularities of the end environment.<br /><br />This is made possible through the Transformation Set— which feeds the input information through a 10 dimensional mathematical space for identifying its considerate centre of mass and thus retaining the correct subject matter and specificities in order to be interoperable with the output application environment. The 10 dimensional passes each filter and refine the understanding of the content and its differing states, ensuring that well informed and opinionated judgements can be made. The model is then guaranteed ongoing upkeep, servicing and continuous flexible boosts of vetted iterations through the inclusion of the open source community incentive network, which establishes a strong bedrock for the growth of an abundant developer ecosystem around DASH, allowing researchers and devs to authentically contribute new models to the system and be dynamically rewarded as good actors.<br /><br />Thus, for the next 10 revisions of DASH we are furthering with an in-depth analysis of each of the 10 dimensional passes, delineating the specific purpose and contribution of each to the broader DASH file architecture, and also examining how all passes are able to overturn, in their own right, previously misconceived and unfounded approaches to 3D file format transformations. </div> <br/> <div class='font-bold'>Transformation Set Pass One: Goertzel Algorithm</div> <div> The very first of the 10 passes in the Transformation Set is that of the Goertzel algorithm. It is used to establish the ground truths required for guaranteeing truly optimal results that are with high affinity to the output application environment. We must validate the input first, rather than just assuming how it will behave or perform within the system. There is no use in building on top of an unestablished topography with poorly defined coordinates. </div> <br/> <img src='/images/v16-image1.png' /> <br/><br/> <div> The Goertzel Filter can be thought of as similar to a pre-check or the initial due diligence performed on the to-be-transformed content, whereby the algorithm is able to selectively sample N-points over the information space— some intermediate processing is performed in every sample but the actual tone detection only occurs every Nth sample and is conditional to the sampling and target frequencies chosen for evaluation. It is a popular and highly efficient technique for computing sparse FFT (Fast Fourier Transform) results and detecting the presence of a single continuous-wave sinusoidal tone, rather than unnecessarily retaining every output sample, especially at this primary stage, whereby the purpose is only to complete a principal audit and thus use this for making a well encapsulated evaluation of the initial content. The calculation on this initial evaluation, determined by the input, can then be appropriately extrapolated for computing, pre-empt the input’s response, and feedback to more complex tempering.<br /><br />In regards to implementation within DASH, despite parts of the Transformation Set having flexibility to be swapped out and iterated by the open source researcher and developer ecosystem, the Goertzel Algorithm is one that is strictly preserved— at least within the early stages of DASH’s release— whereby it is absolutely essential for reducing debt within the entire system. When the bounding scope of paths and weights within a given information space have not first been properly confirmed, or in a more pressing occurrence, have proven themselves time and again to be incorrect, and even directly opposite to intended expectations, results from ever faster and fancier optimisation schemes become worse than worthless. They embed a debt in the architecture of information transfer all the way down, and thus contradict the very essence of what DASH is being built to solve for.<br /><br />The Goertzel algorithm is implemented in the form of a second-order IIR filter, with two real feedback coefficients and a single complex feedforward coefficient. It converts the initial content inputted from the time to the frequency domain, greatly reducing the complexity of the information so that efficient signal analysis can occur. It is able to perform tone detection with significantly less computational expense than a typical FFT, especially when only a few frequencies are needed to be detected. The method is thus considerably more efficient, whilst still being able to achieve the resolution of results required in order to maintain well calibrated fidelity of the initial input in relation to its indicated output environment. Moreover, the algorithm also finds advantages for the fact that unlike the FFT, N in this case is not restricted to being an integer power of 2, only one coefficient needs to be stored (Reducing the mandatory filter coefficient storage amount), there is no requirement for storing a block of input data before beginning processing, and, the resonant frequency can be any value between 0 and fs.<br /><br />There are two forms of the filter that can be implemented, and in the case for DASH, both will be included within the codebase, with an if condition determining which is most effective given the input data from the pre-processing phase and the information gathered from the engine plugin. The basic Goertzel commits both real and imaginary frequency components or a single-bin DFT output defined by, </div> <br/> <img src='/images/v16-image2.png' /> <br/><br/> <div> The phase and magnitude can thus then be computed from the real/imaginary pair.<br /><br />The second of the two forms is that of the optimised Goertzel filter. This is even faster and simpler, where an output takes the form of the relative magnitude squared. Thus, less computation is required, but at the expense of phase information, where only the relative magnitude can be obtained by taking the square root.<br /><br />Similar to the FFT, the Goertzel filter works with blocks of samples, however the data itself does not need to be processed in blocks, but rather either in batches at a time or in the very interrupt service routine (ISR) that is gathering the samples. The block size is like that of the number of points in an equivalent FFT, controlling the resolution of the frequency. The chosen block size must be assessed against the length of detection desired, whereby, although higher block sizes result in higher frequency resolutions, they also result in longer detection times for each tone; simply because one must wait longer for all samples to come in. Thus, for detection of tones of short duration, compatible values of N need to be used, and thresholds need to be set dependent on the length of the filter itself and sampling rates chosen that include the peak response within the time made available. It’s also worth noting that the frequency resonance variable can in fact be any value between 0 and N-1, despite what is often recounted for the resonance frequency to maintain as an integer. This ensures full flexibility within the system for specifying the filter’s resonant frequency.<br /><br />The z-domain transfer function of the Goertzel filter is </div> <br/> <img src='/images/v16-image3.png' /> <br/><br/> <div> As one can see below the pole/zero pair at z=e–(j2πm/N) cancel each other out. </div> <br/> <img src='/images/v16-image4.png' /> <br/><br/> <div> Thus, it would be assumed that by having a filter pole the stability of the system is compromised. However, with Goertzel this is not the case and the opposite ensues, whereby stability of the filter is guaranteed due to it processing N+1 length blocks of time samples in such short time sequences and resetting its internal data storage registers to zero at the beginning of each new block of input data— or, to put it more logically, the the z-domain pole placement on the z-plane's unit circle and also the limit placed on the precision ensures that necessary conclusions can still be drawn about the information’s state at the initial stage, without the need for over exaggerated arithmetic.<br /><br />Hence, on a final note, the Goertzel Algorithm is used in the Transformation Set as the first lens of the 10 dimensional passes. It sets forth the fabric of truth before additional work is performed, securing that optimisations are only completed on the system after all information has been validated and its context is taken correctly into account— identifying the feature set and requirements should direct and reshape decisions about correct optimization mechanisms, not vice versa. The input content is thus reliably decoded, ensuring that trust is not automatically assumed, but rather a discrete and attentive approach is taken.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.2.",
    description:
      "For this revision of the DASH file format we are continuing with specifying the scope of features and characteristics that make up each of the respective 10 dimensional passes, as part of the Transformation Set, and here we are concentrating on the second of the dimensional passes; that of the Fast Fourier Transform (FFT).<br /><br />The FFT, in the form of the Discrete Fourier Transform (DFT), is perhaps the most important element across all of the 10 dimensional passes. It essentially is able to disclose detailed insights about the information and assist in differentiating the signal from the noise— which proves crucial when considering the actual purpose of DASH is to ensure that 3D content can be effectively transferred between differing virtual environments and applications and also maintain the correct fidelity in relation to the output location; and thus, most of what all of this really culminates in is the efficient delineation of meaningful information and important indicators from random, unwanted fluctuations and interference. The way that 3D file transform formats are designed currently results in them ignorantly ‘filtering’ information through a pre-set structure with absolutely no consideration of the input data itself let alone awareness of the context of the transform and conditions surrounding the creator’s intent for the final state.<br /><br />The entirety of the Transformation Set within the DASH architecture can be likened to an assembly line consisting of a variety of different lenses, where at each point within this assembly line checks and balances are appropriately applied to the content moving down the line as it is inspected, measured, compared and analysed. It is not that content creators of today lack skill, understanding or determination in their creative pursuit, but rather it is the current system that is the problem. The system incorrectly promotes unfavorable chaos and lacks enforcement of order in areas where it is needed the most. Fix the machine, not the person. The machine must be set up so that the right outcome is supported— and this is not a siloed effort; it requires a cohesive collaboration and coming together of different parts, components to administer the final desired result. Our natural reaction to errors or mess ups is to attribute a person’s behaviour to their personality, rather than their situation. This was coined as the “fundamental attribution error” by Lee Ross in 1977. Here, we are required to invert the whole current approach to information transfer through understanding one simple fact; you can’t force something to change. But, you can, however, change just about everything else around it. And usually, that’s enough.<br /><br />In other words, DASH is about changing the system around the fact— rather than attempting to pressure the information into a predetermined data structure, and so cause unavoidable inaccuracies and fidelity loss, we work to first filter and refine our understanding of the dimensions that the information sits within, and so ensure well informed and opinionated judgements are made. </div> <br /> <div class='font-bold'> Transformation Set Pass Two: Fast Fourier Transform </div> <div> After the initial validation performed by the Goertzel algorithm during the first pass pre-check on the information, the FFT is thus performed across the texture maps and segmented regions of the content (Which were defined during the pre-processing stage) in order to distinguish the high and low frequencies. The FFT appropriately inspects the content within the frequency domain and appropriates this to a function within space and time, and thus fragmenting the source 3D input file for removal of any perceived redundancies and efficient retention of only what remains relevant in the context of the output environment. This thus also allows for magnification and enhancement of elements that are considered of higher weighted importance within the system and dilution of those with lesser relevance. Ultimately, it ensures that the signal is appropriately furthered up the priority order with greater functional weight and any noise is as relatively dampened as it can be. </div> <br /> <img src='/images/v17-1.png' /> <br /><br /> <div> The logic determining which frequencies should be removed or retained is obtained directly from the data fed to the Transformation Set from the game engine plugin. This allows for intelligible opinionated jugement to be made as to which parts of the source file are able to offer the most flexibility for modification within the frequency domain without compromising aspects of fidelity, useability and also importantly, that of reusability— when a file is undergoing transformation, data is being manipulated within that process, and, if key parts of the data are discarded, although it might seem optimal at that specific instance or for that specific purpose, it also greatly restricts the additional usableness of that data. Actually, it does the job of leaving it potentially much less interoperable than the original source file for the fact that now components have literally been illogically deleted from the overall composition and to recover this data is not a simple “monte carlo tree” decision process (The variability of potential inputs is a large infinity). And thus, best practice is to reduce technical and system debt by having concern for this reality from the very beginning stages.<br /><br />The retained frequencies are then converted back into the spatial domain where they are stored in a set of nested arrays. Here, the macro array components reference specific n cell regions that were previously partitioned during pre-processing— the material is referenced from where it is stored in the Optimistic Transform Ledger and the discrete boundary conditions are based on the n cell region edge lines. However, it must be noted that in some cases conversion back to the spatial domain is better suited to take place during later stages of the Transformation Set for the fact that further analysis within the frequency domain might be required during SpaceTimeRedux, GraphTransform and potentially of that during the open source community incentive driven customisation options. Thus, either the frequency domain is maintained for a longer interval, or, it is stored in the Optimistic Transform Ledger for later sourcing. This mobility guarantees greater affordance for actually reducing the information entropy overtime and ensuring the information is less vulnerable to loss and uncertainty, where processing in the frequency domain is not only computationally faster but also scales exceptionality better as the filter size increases. All optionality remains output application dependent. </div> <br /> <img src='/images/v17-2.png' /> <div> <br /><br />It is the higher frequencies that are able to provide specific details of the abrupt variations across the modeled content and these are almost always to be retained in the Transform ledger within an array structure— these details hold varying degrees of relevance that are contingent on the current context of the interoperability requirements and also are ranked overtime with respect to data pulled from the run-time analysis of the engine plugin when the final .DASH file is exported. This post processing stage enacts performance checks over the object, scene, project and engine within the application environment, where re-optimisations are accounted for by the plug-in for underwriting continual increases in affinity of the 3D object within the graphic environment as more data is collected overtime. Thus, storage on the Optimistic Transform Ledger also works to feed back into the inputs gathered by the engine plugin and so further enhances the entire system as it scales and onboards more creators overtime. The inevitable noise contained within the higher frequencies can be additionally filtered out during later passes of the Transformation Set where masking techniques are applied to remove parts of the noise contamination. The lower frequencies discern the overall form of the content and carry the most information within them, representing the gradual variations across the model’s topology.<br /><br />The FFT is also used as a normalisation technique for the content’s texture maps, where they are translated into the application specific UV space and quality retention is ensured through close maintenance of the 2D n cell regions as they are mapped and reconstructed onto the 3D surface— reducing visible differences between the original source and its reconstruction within the new UV space.<br /><br />So, with this said, as the second pass within the Transformation Set, and probably the most important, the Fast Fourier Transform actively and insightfully works to remodel the content according to its final output requirements, and ensure that the desired local and global anatomy is both perpetuated into the next passes and also stored for later referencing.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.3.",
    description:
      "The previous two DASH File Format revisions have focused heavily on detailing out the employment of specific mathematical models and techniques in order to overcome optimal biases, correctly define the pivotal points in the information space, and also set the understructure so that the system remains correctly rooted as more logic is applied to the input source file throughout the remainder of the Transformation Set, post-processing and engine integration.<br /><br />In this revision, we continue by specifying the scope of features that make up the third pass of the Transformation Set, however, here, the perspective is slightly shifted. Rather than the information being more externally observed and then either retained or withdrawn, the third pass, under Voronoi Tessellation, seeks to internally segment the information space for injecting an inherent geometric and topological malleability. The information can thus be re-arranged, re-sorted and redefined on demand as ultimately the best divisions for the source are secured, regardless of whether or not a good division even exists— providing a distinct path, no matter the initial information provided, for achieving peak performance. This is also further reinforced whereby here, a deeper understanding of the micro components of the system are considered, reworked and tested, and thus commanding our insight into what makes the macro tick.<br /><br />Voronoi Tessellation allows us to dive deeper into the enduring parts of the input source; and proactively choose depth over breadth as we achieve mastery over the base layer and use this for further building out more complex derivative models. And, to reinforce the point from above, the best divisions need not be obvious or to at first even exist, for through this process they are created, carved out and manufactured.<br /><br />In other words, DASH is about changing the system around the fact— rather than attempting to pressure the information into a predetermined data structure, and so cause unavoidable inaccuracies and fidelity loss, we work to first filter and refine our understanding of the dimensions that the information sits within, and so ensure well informed and opinionated judgements are made. <br /><br /><p >You must linger among a limited number of master thinkers, and digest their works, if you would derive ideas which shall win firm hold in your mind. Everywhere means nowhere.</p> <p >- Seneca</p> </div> <br /> <div class='font-bold'> Transformation Set Pass Three: Voronoi Tessellation </div> <div> Voronoi Tessellation is the partition mechanism used in the Transformation Set for segmenting across the 3D object’s surface. Polycount and its relation to model efficiency are a vital component of consideration for fidelity maintenance of any information as it is taken into different application environments. In fact, it is this interplay, and the difficulty of it, that provides one of the largest hindrances for deploying an ideal “drag and drop” model for 3D objects across a limitless variety of output scenes. Accuracy and detail are compromised at the cost of performance. However, it is important to note that polycount and detail are not linearly correlated, and thus a higher polycount doesn’t immediately correspond to higher visual appeal. </div> <br /><br /> <div> Currently, polycount is used as a metric for assisting a Creator in evaluating the applicability of their model in relation to a scene. Not only does DASH remove the inherent constraints of treating this metric as a static value, but, through implementing Voronoi tessellation (A novel segmentation process), cells of convex polygons are produced whose boundary lines purposefully optimise for the irregular arrangement of local zones in relation to the larger environment, or in this case, the whole 3D object in relation to the specific application environment. Thus, a geometrically diversified, yet highly fitted, surface coating is officiated, that minutely balances the points of freedom and points of constraint and locates the fulcrum between visual fidelity and performance optimisation. It is vital to note here also that this fulcrum, through DASH, is again dynamic and powerfully dependent on the logic being fed to the Transformation Set from the engine plugin.<br /><br />Fortune’s Plane Sweep Algorithm is used to generate the tessellated Voronoi regions, where both the sweep and beach lines are maintained. The beach line (to the left of the vertical sweep line) is a complex piecewise curve that acts to divide the surface of the object and trace out the edges of the Voronoi diagram with the input point as the focus. The cells and points themselves are created as the sweep line moves across the plane, guiding the beach line as the algorithm progresses. The algorithm itself is iterative in nature, utilising a priority queue for listing future potential events that could act to change the beach line’s structure and so ensuring that consistent and repeated updates can be made to the data structure, as the sweep line moves in space, finding the changes the event causes in the beach line. <br /><br />The geometric object, polygonal or freeform, is thus dynamically partitioned and subdivided, where the final output here includes the new optimised polycount and mesh density for the model, which is specific and considerate for the output environment itself. </div> <br /> <img src='/images/v18.png'  /> <div> <br /><br />This approach is a highly beneficial method for optimally distributing polygon segmentation on the 3D object’s surface in a way that can reduce the overall polycount, mesh density and still ensure that facet edges, especially when dealing with spherical, cylindrical and more complex shapes, don’t interfere with and reduce quality across texturing. Balancing the cost of graphic vs performance fidelity through Voronoi tessellation ensures that each dynamic DASH output achieves an optimal tris limit and still maintains geometric information that is malleable and consistent with the overall graphic output environment without permanently modifying the object itself i.e. low fidelity increased angular rounding.<br /><br />Going deeper into this, each tessellated region is meta divided under what is known as that of Material Instance Segmentation. Here, each distinctly detected material region of interest across the object becomes the global boundaries, fractionalising the model into n cells where the appropriate geometric and UV coordinates of these segmented regions are stored in nested arrays for later referencing. These macro boundaries are in the main part most important when it comes to re-mapping the texture components, after they are optimised (Methodology detailed in previously outlined compression techniques), as they are set into their new sites on the model. Final reassembly involves collapsing the texture files into their consistent fungible units, relevant down to a bit level, for guaranteeing a more than valid approximation across the newly generated topological partitions (i.e. voronoi tessellations and n cell regions) within each material segmented zone. <br /><br />Hence, the full strategy implicated through Voronoi in the third pass of the Transformation Set overturns previously conventional approaches by extensively analysing and probing the depths of the information space for navigating the mapping of the 3D topology more effectively across the plotted vertices and edges on the mesh surface; amplification of the components over expansion of them.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.4.",
    description:
      "How does anyone truly comprehend infinity? Yes, it’s a concept that we are all very familiar with, but how can we actually relate to it? I mean, none of us have ever actually experienced or lived for an infinite amount of time, or for that matter, any remotely close finite number of moments. But, perhaps what we can comprehend is that of what it means to establish or create something with the intent that it will last, endure and sustain for some timeline outside of a specific minute, day, year or decade count. Building to last makes almost all the difference— it’s what distinguishes high levels of success from visionary leaps and strides across anything; economies, industries, politics, populations, communication, technology, humanity.<br /><br />However, with this said, it is also of high importance to note that the concept of building to last should not be likened to something that remains conventionally fixed and invariable with time— for that in itself would completely undermine the relevance of the system, and thus ultimately, it wouldn’t last.<br /><br />We must play the infinite game. <br /><br />A game that is constantly undergoing stages of evolutionary change, decentralised experimentation and rapid growth. It exists within a dynamic network that extends beyond the frontier of imitation, and so fosters a constant flow of arrangement disruption against the corporatist status quo. The game is boundless, where no matter how much has been achieved, completed or undergone prior, there is always still so much more to realise. <br /><br />DASH has been planned and constructed for the infinite game, where rather than presumptions and assumptions being formed around what could be, what might be or even with strong conviction, what potentially should be; DASH instead pursues continuous iteration for maintaining the robustness and vigor of interoperability throughout every meta and micro interaction with the source information and its inclusive contextual relational points, from the intended output application environment to further to-be-considered utility. <br />With Revision 6.4 we proceed with our coverage of each component of the Transformation Set, specifying that of the 4th dimensional pass with the Louvain Method.<br /><br />Inclusion of the Louvain method is used to optimise the modularity already imposed from Voronoi tessellation and the Plane Sweep algorithm by scoring across the detected communities and so installing inherent and considerate ability for identifying the existence of champion nodes, data and information as part of a hierarchy within the composed source file. This appropriately establishes a matrix of reliable flags within the source information for succinct referencing during later dimensional passes; efficiently mapping strong pathways to the most critical nodes in the network, and so setting up the entire system for dynamic and endless persistence.</div><br /><div class='font-bold'>Transformation Set Pass Four: Louvain Method</div><div>The Louvain method is an algorithm used to detect communities in large networks through recursive merging and hierarchical and modularity clustering. This means evaluating the density of the connected notes and assigning modularity scores to each community for quantifying the quality of the assignment of the nodes to those communities.</div><br /><br /><img src='/images/v19.png' /><div><br /><br />The Louvain method assumes natural representation of the graph, and thus considers that the work of the 3 passes up until now have been targeted and well scoped for accurately refining delineation of the source file. The 4th pass itself is excluded from a choice of “good deal” in the estimation flow, where the additional modularity works in favor of optimising the entire network for greater efficiency for detection of champion nodes/data points, and thus can be set aside when comprehensive reviewing of the information is not considered vital by the Creator. It is incorporated into the “normal” and “expensive” thread costs and also sometimes that of the open source community network; when customisations are appropriate.<br /><br />The typical size of large networks today, for example social network services, mobile phone networks or the web, now counts in the billions of nodes, if not more. At these significant scales, retrieving comprehensive information from the network’s structure demands decomposing the networks into sub-units of highly interconnected nodes, and then identifying their larger communities— helping to uncover prior unknown functional modules and using the meta network (whose nodes are the communities) to visualise the original network structure.<br /><br />Applying agency to partition the topological network of interconnected nodes for the source file ensures that both the current model can be further distilled and cultured prior to the handoff to additional transformations, and also, that there is efficient arrangement and assembling of the information into grades/levels, allowing for shortest path detection and succinct referencing to the most critical nodes in the network.<br /><br />The method is executed in two phases with repeated iteration. First, different communities are assigned to each weighted node in the network, N. So, in this initial partition there are as many communities as there are nodes. Then, for each node (i), the neighbours (j & i) are considered and evaluated in terms of the potential modularity gain, whereby j and i are swapped out; the node i is placed in the community for which its gain is maximum (positive gain) or i stays in its original position if no positive gain is possible. The entire process is repeated sequentially across all nodes until it is apparent that no further improvements can be achieved and so local maxima of modularity is attained. This marks completion of the first stage. In this stage nodes are considered several times and the output of the algorithm depends on the order in which the nodes are considered— this is not significant, but worth noting, given that its impact affects that of the computational time. Thus, it is something that is optimised in the system through the open source researcher and developer community committing incentivised models and optimisations for use in the Transformation Set.<br /><br />For the second phase, new networks are built whose nodes are now the communities that were identified and constructed during the first phase. The weights of the links between these new nodes are given by summing the weights of the nodes in the corresponding two communities. Self-loops are also evident here.<br /><br />Upon completion of the second phase, reapplication of the first phase of the algorithm is performed on this resulting weighted network. The phase steps are iterated until there are no more changes and a maximum of modularity is attained. The algorithm naturally incorporates a notion of hierarchy, as communities of communities are built during the process, and the number of meta-communities decreases at each iteration, and so computational time is also lessened as the phase repeats continue. Moreover, the formed hierarchical structures also provide differing levels of desired resolution, dependent on the node points of reference used, whereby a more definitive ability to identify the champion nodes, data and information at differing perspectives is accounted for.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.5.",
    description:
      "The Y Combinator is a function from Lambda Calculus that maps back to itself some fixed point of its argument function. It is popular in computer science for defining recursive functions in programming languages that don't in fact support recursion. Ultimately, the Y Combinator can be thought of as a generative self applying methodology whereby your inputs into the function loop you back to where you started. <br /><br /> This procedure is highly relevant to the DASH file format, especially during the fifth pass of the Transformation Set— NovelAP. Here, the graph model maps inputs to their respective outcomes, in relation to the relevant application environment, and adjacent possibles capture both the limits of the transforms performed thus far and also the potential for change derived from root causes. It is implemented in timely succession to the Louvain Method, whereby hierarchical community segmentation and delineation is able to reinforce the iterations in NovelAP more efficiently and thus allow for faster and more sophisticated code execution. The functions call themselves from within their own code, as the solution depends on the solutions to smaller and more scoped instances of the same problem.<br /><br /> In fact, this process of recursion is relevant to far more beyond DASH or general computer science. It’s more than nested looping or logically enhancing the motion within the Red Queen’s Race. Rather, it’s about mapping problems to elegant solutions, where often the beginning problem is of a high degree of dimensionality and thus looping is not enough as the complexity of the information space moves from polynomial to exponential.<br /><br />When we apply this same concept to each of our own lives it becomes clear how a recursive strategy can be used by each of us as a tool for applying objective self examination. We all know people don’t like to hear bad news about themselves; and for many of us, we actually go out of our way to avoid it or at least try and downplay the outcome, attributing the negatives to the context or some other calculated explanation— a very dangerous habit. We engage in compromise that inflates itself over time, as we convince ourselves that this change is something that we wanted or agreed with the entire time. We become postdictors, explaining after the fact and expanding the breadth of the lie as we are too scared to objectively self examine. Applying recursiveness allows us to make smaller circles, to abstract away the noise and focus on the key subsets that caused the principal outcome initially. It allows us to feel our own reality and identify exactly, within a few degrees of precision, where we are. Because, ​​if you want to work on getting better, you need to start by knowing where you are. A candidly verified first point of reference is the basis for building anything to last. And, once we have established this, terminating the endless succession of things defined by themselves only becomes much simpler and easier to identify; as we take responsibility and ownership for the agency we have, constraints and points of freedom included. <br /><br />Thus, for Revision 6.5 of the DASH file format we are specifying further the fifth pass of the Transformation Set with NovelAP— where recursion explicitly informs our limits and liberties of input to outcome. We take the outside view. </div> <br /> <div class='font-bold'> Transformation Set Pass Five: NovelAP </div> <div> Recursion is encoded in this pass through visually mapping the dependency graph / directed acyclic graph of the distinct communities identified within the Louvain Method, where recursive subproblems arise when executing the algorithm on a particular input. Edges form from one subproblem to another as evaluating the second subproblem requires recursive evaluation of the first. The re-ordering of the source information is thus able to increase the locality of the representations of graphs, improving comprehensive compression possibilities both in parallel and through distributed implementation, particularly of the associated texture files. </div> <br /><br /> <img src='/images/v20.png' /> <div> <br /><br />Abductive reasoning is used in NovelAP to derive the root edges and vertices of the information graph, and is a verification and inference technique, error diagnosis and re-check in relation to the deductions made thus far throughout the instruction stages of the Transformation Set. Through observing the data at hand, and using selected knowledge provided by the game engine plugin, inference rules are encoded that are able to assess causal relations between the relevant output application environment and the newly constructed vertex and appropriated region coordinate data. This further provides a more technically suited lens that characterises the overall ‘quality’ of the current assumptions of the success of the information when deployed in the application environment. It also ensures that all engaged recursions can be finitely terminated, without zero sum pathways i.e. fear that terminating too early will result in information loss. <br /><br />The typical size of large networks today, for example social network services, mobile phone networks or the web, now counts in the billions of nodes, if not more. At these significant scales, retrieving comprehensive information from the network’s structure demands decomposing the networks into sub-units of highly interconnected nodes, and then identifying their larger communities— helping to uncover prior unknown functional modules and using the meta network (whose nodes are the communities) to visualise the original network structure. <br /><br />Like Louvain, this 5th pass is excluded from a choice of “good deal” in the estimation flow, and rather kept as a feature reserved for the “normal” and “expensive” thread costs. The thread cost, quoted in the natively deployed cryptocurrency utility token, also provides liquidity to the Open Source community network, whereby customisation model submissions to NovelAP are of distinct value, primarily due to the fact that more encompassing error detection procedures are vital to ensuring that pass 6, under SpaceTimeRedux, is able to maintain accuracy as the solution process is accelerated and the source information enters the final stages of treatment before it is sufficient for application deployment. <br /><br />As the graph continues to be recursively manipulated, points of membership (i.e. structures and information to be retained) in a given class are selected so that we sufficiently solve the problem of interest in one class by successively merging solutions or potential solutions from the constituent classes, and so ultimately reaching consensus on the outcome. This reinforces the dynamic nature of the entire Transformation Set structure, whereby consensus is not a static numerical value, but rather a variable that maps back to itself, and thus any changes to the system can be effectively traced throughout the entirety of the graph and recursively alter connected nodes. <br /><br />We end this revision by noting that basic looping methods could have been used during NovelAP. However, a more sophisticated recursive approach was taken in order to better implement the expression that true and false are used to choose between two different paths, and although they might be presented as binaries, through recursion the optionality of the scope is increased as it is concretely refined.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.6.",
    description:
      "Causality is the relationship between cause and effect. It is fundamental to our understanding of the world, whether we take it as something that is interwoven into our reality or instead just a feature of it. Some of our most primitive physical laws are in fact causal laws. Take for example Newton’s 3rd law of motion; every action has an equal and opposite reaction. It is how most of us appreciate and acknowledge why things happen as they do, shaping our perception of rationality as we form reasoning from the past, in temporal alignment, in order to arrive at some consensus for defining the flow of consecutive events. And, when this reasoning does not align as we expect, we become baffled as to why there is no causal explanation— no linear way to comprehend moving from basic action to just causing. <br /><br /> Yet, our world is not so linear & binary in space or time. And neither is causation. It’s to no benefit to think of causation as one thing causing another. But rather, we must understand it in terms of this thing causing this as opposed to something else, and this thing was affected by this as opposed to something else. The causal relation involves 4 things or more at any time, not just two relational events. This contrast is how we impose hierarchy into the system and guide capture of the most relevant information in the model in order to conclude what is the best causal account for any given reality— and then repeat it. It is how we can use abstract presumptions to cause physical change of state. <br /><br /> When we detail out the Transformation Set within DASH, the same causal contrast is of significant standing within the sixth dimensional pass; SpaceTime Redux. Here, establishing a model that measures the delta between one state to another, whilst taking into precise consideration the relevance of the future (second or later state) in influencing the past, a backwards causation, we can define the geometric relations in the system and so scope our filtered source information for magnifying the ordering and arrangement of best fit for the specified application environment. This ensures the fastest path to discovery for considerate outputs to multiple destinations. We implement a high fidelity signal into the information, optimising our understanding of the most essential and repeatable sequences held within the domain, so that with recognition of the same source-to-output structure immediate and impactful file reconfiguration can be made, allowing us to enforce a decision in the future that then materialises all information from the past, establishing the properties of the system itself i.e. a post selection technique, causing all arbitrary points of the past to line up.<br /><br />Taking a causative approach gives us a broader perspective to recognise more flexibly the rational connections and relationships, so that we can objectively discern all the possible avenues to informing goal-directed action. Thus, for this revision of DASH we focus on pass 6 of the Transformation Set— delineating best causal paths and quantitatively reducing uncertainty in the system. </div> <br /> <div class='font-bold'> Transformation Set Pass Six: SpaceTime Redux </div> <div> Within SpaceTime Redux the HZ 1 Algorithm is used as a pre-filter to the use of the DCCR algorithm for identifying resource-efficient constrained-based paths within the current information space and within the bounds of the source model’s output application environment’s constraints. We begin with assessing the least delay path as the most feasible solution and select this as our initial cost bound. With the reference established we then move to searching for the most feasible path of lower cost, at the expense of possibly higher delay— which, if this does not exist, then our least cost path in the solution space is that of the least delay path. Either way, our solution space is more elegantly refined as there both constraints of least cost and least delay must be satisfied, along with the delay and cost bounds </div> <br /><br /> <img src='/images/v21.png' /> <div> <br /><br />The HZ 1 algorithm improves our search, using a linear function of the link delay and cost to compute link weight. It’s most salient feature is that it adjusts the weights given to cost and delay in the weight function according to the quality of the current path. This dynamism affords more versatility to our overall scoping of the information space, where now we can iteratively approach arriving at the optimal solution and reducing the search space, tightening the cost bound. HZ 1 starts from two paths: the least-delay path (LDP) and the least-cost path (LCP). The weight function is respectively link delay and link cost. If LCP is a delay-bounded path then the algorithm stops as we have arrived at an optimal solution. If it is not feasible, then at each iteration, the algorithm maintains two paths, the current best feasible path LDP and the current best infeasible path LCP. It then defines two parameters in order to construct a new linear path weight function for each individual path. Using this new linear function of link cost and delay, the algorithm tries to find a new path with least weight so as to reduce both path cost and delay. If successful then this new path replaces LDP to become the best feasible path, thus the weight given to link cost increases in the next round, giving lower cost paths higher preference. If the path though is infeasible then it replaces LCP in the next iteration, thus the weight given to link delay increases (i.e. lower delay paths are given more preference). The algorithm stops when no more progress can be made and so returns the best feasible path out of the near-optimal solution. <br /><br />We now have a tighter scoped cost bound, organisation, and consideration of the attributed qualities of the relevant variables at hand. For this purpose, we must also define a weight function in our approach which combines all features of the link metrics, allowing us to minimise the weight and so optimise all search results simultaneously. Here the DCCR algorithm is employed over a linear or nonlinear function, as paths that are close to the optimal one have a much higher chance of being visited, where we give priority to the low cost paths whilst simultaneously pruning off other infeasible paths. The DCCR algorithm applies Chong’s k-shortest paths algorithm, which records k shortest paths, listed in increasing weight order, for each node, and out of the k shortest paths, we can pick up and return the path with the lowest cost in the final stage as the best feasible solution. Ultimately, at each stage we are maximising the candidate paths to every node, and so increasing our chances of success in finding an optimal feasible path. <br /><br />A linear approach has the concern of completely missing the most optimal and feasible path and so not actually reflecting the quality of a path under the imposed constraints i.e. a suboptimal path is chosen for satisfying the bounds and an optimal path according to the new weight function is seen to violate them. This oversight holds more potential as the number of candidate paths increases and our system suffers from slow convergence. If we implement a nonlinear function the results would also not be of great value, whereby we face a serious problem of the function not having the optimal-substructure property i.e subsections of shortest (least-weight) paths are not necessarily shortest paths themselves, and so our approach may not actually resolve what we set out to complete— finding the least weight path. <br /><br />Hence, within SpaceTime Redux we are able to identify repeatable models that are cross matched and optimised against the bounded constraints— from source to application. We map out our causes to find the least cost path with highest fidelity and so are able to post select which reality the current information is most attuned to reducing the complexity of the information space; ensuring the fastest path to discovery for considerate outputs to multiple destinations.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.7.",
    description:
      "Combinatorial optimization is very difficult. It involves finding the optimised solution amongst a finite set of options. If this set is not uncommonly large then in principle a good approach is to cycle through each solution. However, brute force does not scale effectively. Applying instead approximate methods and metaheuristics as a subset class of this allows us to employ more generally purposed algorithms. These have no theoretical bounds and also no guarantee for the optimality of the solution. Metaheuristics provide guidelines and strategies, with a degree of randomness, for solutions to hard problems. They give us a range of appropriate tools and mechanisms that are problem independent, equipping us to be able to flexibly work with imperfect information and benefit from less computational effort.<br /><br />A metaheuristic approach to problem solving is interlaced throughout the Transformation Set of DASH, and in fact, it is what keeps the entire transform process iteratively centered, deeply generalised, and even more importantly self reliant and self sufficient. It shifts the entire frame of expectation and algorithmic emphasis. Rather than just taking orders or performing monotonous repetition of a line of code, the chasm of ignorance is completely shattered, and this more open-book approach means that cross referencing previously encountered solution data, stored on the optimistic ledger, gives greater context for what needs to be improved and why. The information takes on new meaning with goals and objectives, and a clear contribution path to success is paved, underwritten by breadth in perspective. The transform is afforded the ability to not just connect the proverbial dots, but just as importantly catalyse and generate new dots outside of theoretical bounds.We cannot approach file format transformations, just like we cannot approach life, with a strict belief that there is only one answer and one outcome, or a binary or tightly scoped bounded range of outcomes and solutions. The dynamic complexity of everything demands the ability to thrive in ambiguity and poorly defined situations. The key to success is not about developing a deep specialisation for one particular field, skill or competence. It’s instead thinking about the entire system, how each part interrelates and how one can build a set of analytical capabilities, beyond the typical feature set, to dynamically adjust the course of action as the situation evolves. Seize the opportunity instead of being buried by it.<br /><br />As we cover the final cluster of passes within this 10 part series of DASH, preparation for application integration and communication with the engine plugin evolves to be increasingly prominent. The previous six passes appropriately scope and mould the source information for export, whereby intricate details about the structure and make up of the source file are discovered, iterated upon and objectively amplified or reduced. The technique here is to par-bake just enough of the content so that it can then be ratified and snapped into its final state of being— a state that incorporates interoperability as a feature over an outcome. Transformation pass 7 takes the almost complete/prep-prepared content and expands the range of outcome optionality through segmenting across the content’s model, scene, project, engine hierarchies, corroborating the perfect snap, which is then continued through from pass 8 to 10.</div><br /><div class='font-bold'>Transformation Set Pass Seven: Graph Transform</div><div>Revision 6.4 under the Louvain Method had us identify the existence of champion nodes, data and information as part of a hierarchy within the composed source file. For the graph transform the information is graphically derived to produce the models and map the represented information into the differential subsets of the application layer’s graphic output environment. The champion scores previously identified are re-calibrated within this context for rechecking whether previous assumptions are in fact correct, and more importantly, efficiently translate for outputting the right balance between and maintenance of fidelity, and visual and aesthetic adherence to the Creator’s intent.</div><br /><br /><img src='/images/v22.png' /><div><br /><br />If the Champion scores derived are in fact positively reinforcing of the Creator’s intent then they are amplified within the pass, and if not then this tag is effectively destroyed in relation to that content section i.e. a reweight occurs. Within this process, the isAmplifiable function is run for all Champion Scores, and the return values are stored in the optimistic ledger for later referencing, both specific and non-specific to the source content being transformed. Applying the restructuring transformations increases the number of different mutually mapped content-region-to-champion-score values, which both in turn increases the data stored and comprised within the optimistic library, whilst also simultaneously enlarging the algorithm search space so that metaheuristics can be continually utilised, as no theoretical bounds exist.<br /><br />The champion scores are then segmented across the four content graphic output hierarchies; model, scene, project, engine. Here, scores obtained are found to range from being both hierarchy-specific as well as some that are more generally mappable and so contained within each of the grades. As a consequence of holding this data alongside the information sourced and chartered from the engine plugin, it ensures that we can now have a well founded and mostly unbiased topographic understanding of the most optimised source content moulds and configurations. Our assumptions are that the best solutions for each of the 4 segments are built out of optimal solutions to their subsegments i.e. champion scores. Here, this means that the algorithm’s performance is independent of its context.<br /><br />This does not always hold, but in practice has shown to work incredibly well except for excessively large transforms. DASH mitigates this through a divide and conquer approach, whereby the very transformation set is broken up into 10 key passes so that algorithmic loops can be better scoped for maintenance, upgrades and error discovery, and also, within pass 7, the champion scores are synthetics of their originally located values found during pass 4. We are using a derivative approach to introduce more offsets and angles into the system, and so lessening the influence of potential biases. The added dynamism doesn’t allow for comfortability or reliance on past successes. It adds just enough of a degree of freedom so that each graph transform must provide standalone consistency and relevance in order to be cleared by the Transformation Set, whilst also ensuring that exploration of new variations is encouraged. The sensitivity of the algorithm in being able to make minute adjustments for better understanding and benefiting from currently unknown data means that rather than just rebalancing or reshuffling what we already have in order to reach an interoperable outcome, instead we can be exposed to the promising catalysts of new data. And it is here that value is actually created at the source. We encourage derivatives, synthetics and mods to be able to find and discover the avant-garde. The system sets the stage for more fundamental breakthroughs and true exponential growth.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.8.",
    description:
      "Every dataset has a coordinate system, which is used to integrate it with other data layers within a common coordinate framework such as a map. Coordinate systems enable us to plot and delineate datasets across maps as well as perform various integrated analytical operations such as overlaying data layers from disparate sources and coordinate systems. Ultimately, maps and coordinates allow us to match and synchronize at both the global and local levels. <br /><br /> Common knowledge is useful. It’s how we can navigate prisoner’s dilemmas to coordination problems to other decision tree traps. It’s not just coordinating on the receiving that is critical, successful communication sometimes is not simply a matter of whether a given message is received. It also even more critically depends on whether the participants in the system are aware that the other nodes received the message. The challenge is moving from the current one, to one we all prefer. It’s the metaknowledge of the message and the levels deep that we go in transmitting and appropriately realising what it is that we both know and don’t know that is necessary to reach a stable state. With dynamic components, equilibrium only stays at equilibrium through coordination of each point and projection on the map. (Aside: The most powerful feature of blockchain technology is that it enables us to maintain equilibrium and coordinate in highly dynamic states. Dynamism is no longer zero sum). The events and facts become common knowledge for a group if everyone knows it, everyone knows that everyone knows it, everyone knows that everyone knows that everyone knows it, and so on. <br /><br />We must propagate the common knowledge once it is defined. Local optimums work the same way, where target configurations depend on aligning both that which is being optimized and that which is doing the optimizing despite perturbations to the system. Having a global positioning system with group consensus is how we avoid the eternal dilemma of perpetuating distortion. If we can agree and specify what has been embedded in the system then we can achieve some amount of alignment by default. Incorporation of this logic is relevant for DASH and the Transformation Set, whereby the goal is to maximise collective value from each pass in the Set, despite any temptation that greater short term individual gains could be realised if one Set was to not take into consideration that of the other passes. Pass 7 expanded the range of outcome optionality of the source content through segmenting across the content’s model, scene, project, engine hierarchies. Now, during pass 8 we must extend on the work done by establishing new incentives against potential defects to the system being able to fully optimise the source content for application environment deployment. We coordinate across all Champion nodes in the information graph to exploit the common knowledge and align each projection for mapping so that the final modeled content is anchored by its local and global positioning systems; dynamically coordinating information flow for usage in differing environments. </div> <br /> <div class='font-bold'> Transformation Set Pass Eight: AsymGraph </div> <div> For pass 8 we begin by discovering the optimisation map of the system, establishing the set of starting configurations through identifying the Champion nodes, as previously initially segregated and categorised during implementation of the Louvain Method in Revision 6.4. The initial segregation is taken here as a starting point, whereby we condense the system more and more, increasing the potency of these nodes in reference to changes in the current estimate variable and also their robustness to in-flight perturbations in the broader system’s configuration. </div> <br /><br /> <img src='/images/v23.png' /> <div> <br /><br />Eulerian-Lagrangian discretization methods are exploited for simulating different arrangements of the information with pervasive degenerencies. Here contact interactions of different coordinate groups are modeled in relation to the hierarchies of information, sourced from the engine plugin in relation to the application output environment. <br /><br />Efficient techniques within the Lagrangian formulation allow us to output high quality solutions, whereby counteracting forces are used to re-solve constraints through two equations. The degree of violation is used to increase the Lagrange multiplier, which in turn increases the penalty on the unsatisfied constraint and forces it into satisfaction. At times when the constraint is satisfied, its Lagrange multiplier stops to grow— ascents are continuously performed until each Lagrange multiplier is at its maximum. Descents in the objective space are also staged when all the constraints are satisfied, stopping at an extremum in that space. Combining both simultaneous ascents and descents works the projected nodes, information and graph towards a system where equilibrium is eventually reached in which all the constraints are satisfied and the objective is at a local extremum. <br /><br />An understanding of gradients both in discrete and continuous space allows us to cooperate with the change that is always happening and compare this against specific points in space and time. The Eulerian and Langrangian methods afford us both of these perspectives whereby we can concentrate on fixed and fluid points to sift through the information and gain more salience as to which points are most dominant in both scenarios for champion node labelling. For it is these points that effectively are the most influential and adaptable in their properties for being able to keep fidelity of the original content and it’s most base critical features— as more and more transformations, iterations, mods and integrations are carried out on the content, having a clean and coordinated base map gives us full agency to either produce what was originally created or instead take only discrete modules and use these as starting points for building out new forms of content that are discovered and categorised during post-processing. It is this information that the Optimistic ledger stores and references at future points in the content’s in-engine-usage (i.e. part of the run-time analysis and performance checks that are performed across the object, scene, project and engine, with the plugin accounting for the potential re-optimisations required to increase affinity of the 3D object within the graphic environment).",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 6.9.",
    description:
      "Monte Carlo Methods are a group of algorithms that simulate the behavior of a complex system or phenomena, using inferential statistics. You can think of it as one of the tools used to model probabilistic real-world processes. You don't run one simulation, you run many. There is no one single correct answer that the simulation is attempting to compute. It is a landscape, a multiverse, from which you sample. <br /><br /> During the last Transformation Pass of the DASH File Format we are taking a more mindful approach to our final choices, using the Monte Carlo Tree Search algorithm for ending the directive with an evaluation and potential restart, for retrieval of the best known information output candidate. It’s exploration-exploitation. We can ultimately decide to remain with the outcome that we have processed from the computational efforts of the various other transformation passes, or we can choose to replace this with an outcome that is pre-processed from the Open Source Community Incentive group or from that stored on the Optimistic Ledger. Throughout the entirety of the DASH Transformation Set passes, properly scoping and understanding the “pre-biases” of the system is a critical component in ensuring that important distinctions are not neglected— which can result in the cultivation of a culture and environment of hidden biases and misconceptions. Structural flaws are apparent in the 3D and file format industries, where the standard approach to file format architecture gives the illusory promise of optimisation by most familiar methods ahead of all else, and ultimately misleading practitioners in its side effects and outcomes— extremely low fidelity interoperability. These misconceptions most often take two forms: undecidability errors of the Halting Problem subset and self-reinforcing false positives, which compound the illusion that all information as received should in fact be considered valid or well-defined, or that trust can be simply assumed in a given system without an unavoidable need to examine our priors.<br /><br />There is no use in building on top of an unestablished topography with poorly defined coordinates. When the bounding scope of paths and weights within a given information space have not first been properly confirmed, or in a more pressing occurrence, have proven themselves time and again to be incorrect, and even directly opposite to intended expectations, results from ever faster and fancier optimisation schemes become worse than worthless. They embed a debt in the architect of information transfer all the way down. By maintaining this mindset and approach directly through to the last mile we can ensure to quickly adjust and repeat experiments for better outcomes whenever is required by the outcome itself, rather than an attachment to a set process or processes. We can iteratively distill and amplify the final features to maximise the suitability for transfer into the application environment and further fine tuned adjustment and optimisation by post processing techniques. This gives us the highest human relative fidelity for commercial application transfer and also openly injects an open source shibboleth into the very fabric of DASH, as we continue to scale the exposure of the solution’s instructions to positive Black Swan events— through wider community leverage. We maximise novel capabilities and vitality, whilst also reducing misalignment risk with multiple learning schemes. </div> <br /> <div class='font-bold'> Transformation Set Pass Ten: Monte Carlo Tree Search </div> <div> The final dimensional pass involves the use of the Monte Carlo Tree Search algorithm for ending the directive with an evaluation and potential restart, for retrieval of the best known information output candidate. The focus is radially expanded to randomly cycle through and sample different known potentials of the final output, until consensus is reached through probabilistic interpretation. </div> <br /><br /> <img src='/images/v24.png' /> <div> <br /><br />The exploration level incentivised within the search remains variable. Eternally exploring the majority of decisions only makes sense for unstable or unparalleled/new source content that can’t be referenced from data stored in the Optimistic Ledger or proposed on the NFT marketplace by the Open Source Community Incentive network. Thus, in these cases, the best decision appears to be rapidly changing and so new options have a higher or if not the same likelihood to be “better”. However, as more good decisions become known and can have similarities attributed back to the Optimistic Ledger, then the exploration rate can be steadily decreased down to a fraction of the initial area. <br /><br />The MCTS is guaranteed for implementation no matter the thread cost choice by the Creator; good deal, normal, expensive. Not only does this ensure that all passes through any combination of components in the Transformation Set finish by considering the range of possible durations within the distribution of likelihoods presented at that moment, but moreso, we can better take into account the risk factors involved from source-content-to-application. Simulation of this underlying process forces the system to reconsider pre-biases and draw contrary conclusions from the different combinations possible through sets 4 to 9. We can imply an ensemble model, whereby the mix of multiple and similar models show a wider range of possible outcomes and predictions. Ultimately, the older and harder it is to find a rational basis for a practice, the less likely it is to be helpful. Thus, by securing the MCTS’s slot no matter the path chosen in the estimation flow, we can better confirm that an outcome will be reached that is valid to the information space itself. <br /><br />The MCTS allows for the optimal allocation of resources (information included) to be attributed to DASH, where this meta knowledge of the landscape can now be used to reach more efficient outcomes and decide on the best pro and reactive measures as conditions change or random shocks to the system are incurred. The aggregated results are then separated and distinguished where final discernment is made over the best outcome to extend into post-processing of the now transformed source file, as it is prepared for hand off to the plugin integrator and assembled for export as .DASH.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 7.0.",
    description:
      "<div> In earlier revisions of the File Format Architecture we detailed out the importance of the Open Source Community Network. It injects both an open source shibboleth into the very fabric of DASH and also creates a crowdsourced solution space for reinforcing the practical-conceptual ethic for the pursuit and promotion of a richer collaboration culture within the industry, as well as ensuring higher consistent fidelity yield upon each file transfer and new environment implementation. <br /><br /><img src='/images/v25.png'/> <br /><br />Before delineating further the complete comprehensive scope of the Open Source Community Network’s operations and activities within each stage of the technical and business blueprint, building off of what was previously outlined in Revisions 1 — for this revision, we are acknowledging more formally what is actually meant by the term “open source” in the context of DASH, and how this is relevant to operating a protocol, business or project within web3. <br /><br /> Throughout the history of the free software and open source movements, there has been ambiguity by the broader and subset communities around what is actually meant by “free software” or “open source”. In fact, the latter term was strategize in order to remove confusion and ambiguity around “free” in terms of freedom as opposed to “free” in terms of monetary value. However, that poses another question entirely, is something really free if you can’t afford to do it or overcome those that are paying to stop you? The fundamental difference between a lot of these terms that get used as common labels, is that some refer to convenient and practical solutions at a more surface level, whilst others are more directly driven by the political, personal and social implications. In the case of free software vs open source, for both, proprietary software is the enemy, however, free software is much more about triggering people to actually think about freedom, about ethical issues and responsibilities over the immediate practical benefits of certain free software as a way to be more “acceptable to business” and increase sales for improving the bottom line. <br /><br /> It’s not that attracting users to free software for practical reasons is not an effective approach, in fact, it has proved very effective. In fact, more than 80% of the internet is run on open source software. Yet, this is only the first step, it’s not the whole job. And if we fall into the comfort of treating it as the full circle, then sooner or later these users will be invited to switch back to proprietary software for some practical advantage. All the work is undone in an instant. And that is the fundamental problem right now with free software vs open source; why would a user decline practical advantages of proprietary software over open source if they haven’t learned the value that the freedom of free software gives them, for its own sake. The point is that “open source” was formed as a movement so that embedded in the code and system architecture the rights and practical abilities of users to access and own the tools we all rely on is enshrined and resilient to take down. <br /><br /> However, there is one fundamental flaw in this. It assumes that users and the broader general populous actually give a shit about their own freedom. Because, frankly, convenience trumps everything. And that’s why the whole campaign that “free software” actually encapsulates, from principles to implementation, is diluted, disregarded and has so much trouble getting people to recognise what’s at stake. Instead, we diminish “open source” because it’s convenient and easier to sell. I mean, it’s got to make you chuckle that one of the largest open source enabling infrastructures globally, is not even open source. Funny that. What are they [Github] actually supporting then? <br /><br /> And this is the same for so many altruistic efforts in web2, because it’s very hard to get people to self-motivate when there is no forcing function and just based on a claim of social good. Web3 re-programs this code. Now, for the first time, everything can be directly incentivised through streamlining the mechanisms for value exchange, securing it all through decentralisation and eliminating barriers to the creation of software based goods and services that you actually own. Now there is a kernel of self interest embedded at the root within the broader game theory of indirect reciprocal semi-infinite games. <br /><br /> In order to abductively merge the practicalities of “open source” with the ethos of “free software”, we are upgrading to define the term Meta Source— the web3 enabled bridge for open source and free software, allowing us to move well beyond both and actually ignite a prosperous metaverse enabled software ecosystem. Because fundamentally, DASH is a file format for existing in the metaverse. In web2 it just doesn’t make sense. <br /><br /> Meta Source is open software with a connected automated and incentivized value layer. <br /><br /> It possesses the following attributes;</div> <br /> <div class='font-bold'> Incentive to Fork </div> <div> An incentive to fork is required for the creation of value in web3 to function. Openness, transparency and freedom to use can’t be detached from what makes the system viable without converting it into a web3 wealth generation function that can only be run once before imploding. With the correct incentives, through native crypto mechanisms, consensus can be reached for the bazaar, whereby assumptions are not placed on the system for restricting its potential to a linear plane, but rather, constant battle testing within live markets can expose the extensiveness of the code’s capacitive topology and taxonomical range so that an increase in the capability of the system to thrive as a result of stressors, shocks, volatility, noise, mistakes, faults and attacks ensues. </div> <br /><br /> <div class='font-bold'> Modularity within Modding </div> <div> The ability to take sections of code from different sources and compose them in completely new and novel ways is what drives growth and change in software development, and fundamentally, the extent to which we can author the landscape of the metaverse. The more composable each snippet of code is and miniaturised into discrete modular chunks, the more it can reinforce fork incentives as well as spark cambrian waves of completely original content and application development and usage. </div> <br /><br /> <div class='font-bold'> Permissionless Replication </div> <div> The inherent right to repeat the function to generate additional and compounded wealth must be directly programmed into each composable set individually. No part of the complete form should be reliant on some other component for creating and giving rise to catalytic value igniting events. </div> <br /><br /> <div class='font-bold'> Self Perpetuating Decentralisation </div> <div> The impetus of decentralisation to recognize and advance the inherently political freedom required for full ownership over each of our actions must be self perpetuating. Much like how the static nature of web1 was replaced by dynamic content backed by databases in web2, web3 requires self perpetuating value development and exchange in order to truly make the preceding full stack systems obsolete. </div>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 7.1.",
    description:
      "<div> Interoperability and composability are probably the two most vital features for the open web3 metaverse. For it is these two features that allow us to effectively unfreeze and unlock the entire value, worth and utility within any asset— we can break down larger wholes into their smaller parts and dynamically rebuild/reuse each of these parts in completely different and unrestricted ways. <br /><br /> The asset is no longer confined to just the platform where it was initially created or spawned from. Instead, it can be chronicled, recorded, queried and referenced on a globally transparent and unified data ledger— the blockchain. And not just any blockchain, but a blockchain that also is authentic and true to the very principles for which it stands for, which at the core is none other than decentralisation. <br /><br /> Triple entry bookkeeping, enabled by the blockchain, leverages the additional dimension of time to coordinate sequential and immutable consensus between every actor in the system. And it’s this innovation, as a strengthened leap forward from the previous single entry and currently most globally used double entry bookkeeping, that enables so much more than what one might initially think. It’s easy to pass over just how powerful a globally coordinated and transparent database really is. And, still now, only the very nascent stages of native triple entry bookkeeping applications have been explored. What we are mostly seeing is hybrid web2 implementations where the blockchain partially replaces a previously used centralised legacy system. <br /><br /> It’s not to say that an incremental approach to going full web3 isn’t still of pivotal value adding consequence, and in fact, often progressive decentralisation allows for the right amount of flexibility, accelerated growth sustainability and structural support so that a protocol/project/ecosystem can reach proper maturity and provide something of substantial value to then be handed off and authentically run, governed and moved forward in a decentralised manner (i.e. not just “DAO” because “coin voting” occurs every week). <br /><br /> However, a hybrid approach is very different from an incremental one, and, what is clear, is that being native to the medium, material and fabric that you are building or creating in not only triumphs hybridisation, but also, energises the ignition of new ideas and opportunities to effect impactful and lasting change. <br /><br /> This is not some unknown or mysterious fact. The best examples of projects, teams and companies building native to their medium make up the FAANG and entire global tech industry today; if the internet didn’t exist then neither would Facebook, Uber, Airbnb, Shopify, for a large part Apple etc. Remove the layer of the internet and these companies no longer have a product, customer fit or market reach. They’ve leveraged the very raw features of what makes the web2 internet so powerful to grow with such depth and breadth. <br /><br /> Meta source is one example of how DASH includes innate web3 features, as introduced in Revision 7.0. For this next revision, we will detail out further the implementation of metasource within DASH’s broader architecture, particularly in reference to how this powers the Open Source Community Incentive Network and crowdsourced research and development activity within it. </div> <br /> <div class='font-bold'> Crowdsourcing in the OSCIN </div> <div> Revision 2.4 — outlined in detail the business logic and custom technical approach, across six key stages, that any research developer would take in order to effectively contribute to adding their unique mathematical models and proposals for use in the Transformation Set. Final inclusion of the models is either chosen algorithmically or by the Creator interacting with the system. In both cases, a crowdsourced approach is taken, for cultivating optimised bazaar model R&D and ensuring the most efficient and comprehensive solution is derived. <br /><br /> This not only promotes healthy competition between research developers in the system, whereby the continuously dynamically updating nature of the Transformation Set ensures that any included model can always be actively replaced, but also, the native crypto incentive mechanisms through the yielding, slashing and burning of the platforms core ERC-20 utility token means that there is an additional value driver and motivation for any participant to provide deliberate and insightful model proposals and feedback. The feedback takes the form of other system participants staking the crypto token on their peers' proposed models in the unique mint NFT marketplace. The tokens are used to both reward and also contribute a stronger disincentivisation to the community optimists for engaging in malicious activity. For example, if a community optimist stakes (i.e. gives feedback) on a malicious model, their stake can be slashed or even potentially burned. However, if the model turns out to be of high value to the system, Transformation Set and also Creators engaging in the file transformations, then the initial model proposer and those that supported the model’s inclusion in DASH are directly rewarded. <br /><br /> By attaching this crypto economic value layer to the crowdsourced approach, research developers are further encouraged to publish partial progress and thus receive higher fidelity and more immediate feedback from their community. Collecting all models for display in a dedicated marketplace too means that cross problem solving is more productively supported as increased transparency results from every community member being a part of translating information and ideas into usable knowledge through a web3 native gamified process. This open innovation system means that the research developer community is free to work together to adapt the program and source code of DASH, within advantageous bounds, to what provides the best success for the Creator— as they are actively rewarded and incentivised to do so. <br /><br /> This is part of the culture of Meta Source, whereby forks, mods and permissionless transformations are constantly provoked and stimulated so that the system can iterate to the best “spot” at any given moment. Rather than creating silos with proprietary code and having a centralised team slowly adjust to potentially better options or just rely on the altruistic efforts of a developer base, DASH, for the first time, diligently fosters, fertilizers and most importantly encourages a core research optimist and developer community, through value compounding and catalytic mechanics, to continue to upgrade and enhance the system overtime. <br /><br /> The real web3 transformation here is that it now means interoperability and composability can effectively play off one another. For many, when they think of interoperability, it is assumed that one standard must exist and be adopted by all platforms, application environments and game or content engines. However, this simply won’t be the case. To think that all content will conform to one set of limitations and restraints is not native to the web3 layer. It is the ability to tinker, mod, remix and compose so easily across DAPPs in web3 that enriches the content in the first place, and so it must be enhanced and incentivised. Through crowdsourcing and Meta Source, interoperability no longer has to come from a top down approach. Instead, it can be almost entirely composable and bottom up. An entire developer and research community underwrites the technical ability for dynamic interoperability across any content environment, each adding a uniquely distinct fundamental building block to the broader puzzle, where each part can be taken or not by the Creator as they design and create the final output. </div>",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 7.2.",
    description:
      "<div> 'Information is power. But like all power, there are those who want to keep it for themselves.' <br /><br /> - Aaron Swartz </div><br /><br /> <div> These are the powerful opening words of Aaron Swartz’s Guerilla Open Access Manifesto, written in 2008. They set the tone for the beyond important scientific, technological and political activism and sacrifices that Swartz made, up until his deeply saddening passing in 2013. Swartz was an internet pioneer and amongst one of the most empowering contributors to computer culture, open source, and the core mantra that ultimately underwrites the entirety of web3; transforming industries, economies and markets through decentralised infrastructure so that anyone can gain access to the knowledge, information, tools and assets they need to level up and live a better life, outside of the control and injustices of centralised extractive gatekeepers. <br /><br /> And this Clarion Call from Swartz, as well as so many before and after him, is having its way most significantly now through the myriad of Decentralised Autonomous Organisation projects that have been establishing themselves over the past months; from protocol, to ecosystem, to curator, to syndicate style DAOS. DAOs turn their user bases into incentive-aligned, supportive communities with skin in the game, so that each participant can share in the upside— both financially and through expansion of utility. <br /><br /> The web3 world is built on community, where projects, protocols, dapps and more, rely on large networks driven towards achieving a unified goal. And this sentiment is further energized and catalysed with DAOs, whereby combined with the transparency of blockchain and the efficiency of smart contracts, accelerated collaboration and sharing of key knowledge is much more seamless and actionable, providing more opportunities for opening and democratizing access to information, resource and content. <br /><br /> Within DASH, the Open Source Community Incentive Network, operates as the core DAO for operations and governance, whereby scientists and developers alike are incentivised to contribute open models to the system in order to both receive financial rewards, as well as equally, if not more importantly, continue to lead the charge for ensuring the maintenance of open access and open science. DASH has always been architected in a fashion that ensures authenticity to the medium that it is building in, and the OSCIN strengthens this by broadening, through decentralisation, the developer, researcher and contributor base, so that the technical interoperability and composability of the system can continue to improve, as well as incorporate new ways for deliberately liberating our shared inheritance of the very scientific literature and content Swartz fought so hard to rightfully make free for all. Decentralising the information that gives so much of DASH its intrinsic and networked value means effectively distributing the power and ability for any one member to game the system for misaligned individual benefit, and privatise the code, materials and details so that this content ends up living behind a paywall, available only to a lucky few. And, to emphasise further, this is all too important in the academia and scientific communities, whereby “good academia” often perpetuates a corrupt system of bad ideas and selective evidence institutionalised by an old hierarchy controlling the grant money that funds the research to then hire and fund the next set of academics whose ideas are consistent with the prevailing paradigm… and so it loops. <br /><br /> The OSCIN ensures that the DASH architecture is open access by design— overriding the need for members to have to persuade those “in power” in order to fund and accelerate important work, let alone have it open. </div> <br /> <div class='font-bold'>Token Gated Model</div> <div> The native ERC-20 token that enables a Creator’s use to interact with the DASH architecture and toggle between different pricing and customisation features is also the core incentive that the OSCIN receives for submitting and contributing models to the system. The yield, slash, burn mechanic is what discourages and prevents bad actors within the system and is also what requires the initial skin in the game from all contributors, whereby they are required to stake amounts of the token on their proposed model in order for it to be more concretely recognised by fellow contributors in the NFT marketplace and then effectively accepted for use in the Transformation Set. This is a liquid trading token and purchasable by anyone on the market. </div> <br /><br /> <div class='font-bold'>Submission of and Voting on Proposals</div> <div> A dual token model will be present in DASH, whereby the on-chain activity of the open researcher and developer community for submitting NFT models to the marketplace and effectively having these included in the Transformation Set and Creator Customisation options will give weight to the activity and contribution of the DAO member and their second non-tradable token distribution and vote. This second illiquid token can only be earnt by contributors to the system and is distributed proportionally according to activity. Submission of proposals for operations, treasury allocation and governance and voting power can be exercised by DAO members. And, in the spirit of open science and open access to academic and science literature and industry breakthroughs, this token model provides a unique way for removing the web2 paywalls, whilst still bestowing effective peer prestige and funding allocation to proposed research topics, whereby the community is able to directly vote on how each submission should or shouldn’t be supported and followed through. It also completely removes the power to be locked within a static board or committee that in fact is not based on merit, rather stale politics and bureaucracy. </div> <br /><br /> <div class='font-bold'>DAO Treasury Allocation</div> <div> The DAO treasury allocations will ultimately be decided by the members of the DAO with voting power through the secondary illiquid token. Some proposal categories can be split across; funds allocated towards furthering the engineering behind the model, supporting the core developers and community as active contributors, establishing grants programs to incentivise new contributions and development, running events and other community activations etc. <br /><br /> Swartz sacrificed everything for the open-access movement. Web3 provides a new way to design and architect aligned incentives whereby we can make sure sacrifices like his and countless others weren't for naught and overcome the static privatisation of knowledge.",
  },
  {
    title:
      "DASH File Format Specification and File Intercommunication Architecture. Revision 8.0.",
    description:
      "<div> We are now up to Scope Eight of DASH, having released over 27 Revisions so far. Within this time we’ve extensively outlaid the technical framework, which is anchored by the Transformation Set, we’ve set the foundations and scope for incentivised economic activity and financial magnification, through native web3 EIP protocol standards, we’ve defined new principles surrounding maintaining an authentic and catalytic open source ethos through Meta Source, and we’ve also paved the way for a community of developer, researcher and engineering optimists to be able to generate greater yield, throughput and performance capacity for what underwrites the entire metaverse; efficient and interoperable data transfer. <br /><br /> Because ultimately, that’s all that everything is; data, creativity, and the sorting of both of these. No longer is this data recognisable by lists or 2D rows and columns, but rather the very way that we can interpret and query it is completely changing; it’s becoming immersive, multi-dimensional and so much more relevant. And if we can’t root all of this in a permissionless framework that promotes, incentivizes and reinforces the decentralised intent of every node in the network, then all we are doing is creating a static “file format” that acts as a gatekeeper and ceiling to what can be created, developed and achieved. An interoperable metaverse ready format is not a hard standard; instead, it’s a blueprint to guide and support many formats, standards, implementations and types of activity in a way that allows them to flourish through bazaar cross pollination. <br /><br /> <div class='font-bold'> So, with all of that said, Scope Eight brings with it some really exciting news; DASH is becoming DAO! Introducing...DASH DAO! </div> <div> <br /><br /> The key to DASH is the Open Source Community Incentive Network, which we’ve described intensively throughout all of the revisions. And this network benefits most from densely packed, self reinforcing network effects within communities incentivised to advance it. And there is no better way to do that today than with a DAO. <br /><br /> It’s a big next step and also reinforces the entire DIGITALAX ecosystem as we continue to progressively decentralise. Module by module we are decentralising core parts of the ecosystem within specified scopes. This ensures a more composable and bottom up approach, rather than a day to night top down switch, which would result in static coin voting, inability to reach quorum and devastatingly, engagement and momentum dropping off a cliff overnight. </div> <br /><br /> In other words; the ecosystem wouldn’t be in an antifragile position to generate internally compounding squad wealth and benefit from everything that has been developed and achieved so far and that is yet to come. <br /><br /> The DASH DAO represents the second DAO under DIGITALAX, with the first one being that of the Global Designer Network (GDN)— the very first web3 digital and physical on chain DAO. <br /><br /> DASH DAO is not being instantiated instantly, as prior to its launch, many pieces must first be pulled into place. Some of those include the dedicated token economics structure, gathering the OSCIN, and also setting robust crypto incentivised optimisation coopetition. <br /><br /> More details will be announced in the coming revisions under scope eight; including the role of the DIGITALAX community and direct pathways for the broader web3 community to gain stake in this DAO, and through it, the future of metaverse, 3D interoperability, creativity, content and communication. <br /><br /> <div class='font-bold'> Below is an initial high level overview of the broader token distribution and social incentive structure; </div> DASH includes its own native ERC-20 token which will have an inflationary supply. The utility of the token is for powering the entire architecture, content transformations that take place within it, and also continuous real time optimisations. This token is used by creators for running general or customised transformations on their source files in order to generate interoperability matches with intended output environments, whereby the token is paid as a charge to the DAO and OSCIN for maintaining the entire code base, commons, community and stoking the percolation of activity it resides within. <br /><br /> This token is also used by the researcher, engineer and developer optimists for submitting models to the NFT marketplace for use within the Transformation set, staking on models to add more trusted weight for influencing their inclusion, and also in the slashing, burning and yield mechanisms that occur as models are removed, penalised and added/promoted for use within DASH— all leading to greater interoperable optimisations. <br /><br /> An inflationary supply was chosen for the DASH ERC-20 token, as the creation and circulation of value underpinning this network must orient all participants towards greater abundance, where emission rates and burning of the token are dynamically recalibrated according to direct creator and OSCIN usage and activity. These values will be shared in the next revision. <br /><br /> Further to a liquid ERC-20, DASH will also include an NFT sale, whereby the broader community can more fully engage in the broad base expansion of file format optimisation and the open source content movement, alongside those who directly use the architecture as a creator, or directly contribute new mathematical models and code optimizations to the Transformation Set. <br /><br /> The NFT will give holders access to 3D and other digital content that is open sourced through usage of the architecture (i.e. creators open source their content as they utilise the Transformation Set), unique credits for accessing a wider range of contributed models, and more that is determined by the DAO as it forms. This anchors deeply in the Meta Source movement and manifesto, outlined in previous issues, which is designed to stoke a radical transformation of how we take ownership of what we create, communicate and collect. <br /><br /> DASH DAO can be thought of like a meta-interoperability DAO— for DASH itself is not a static standard, but rather a web3 native framework for the open metaverse. There will be no token releases this year (2021) for DASH. Rather, the correct structures are being set up for this next massive leap to occur! </div>",
  },
];
