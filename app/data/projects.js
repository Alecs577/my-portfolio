export const projects = [
/*
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js, Tailwind CSS, and motion animations.",
      image: "/projects/portfolio.webp",
      slug: "portfolio",
      technologies: ["React", "Tailwind CSS", "JavaScript", "NextJs"],
      link: "/"
    },
*/
/*
    {
      title: "Pokemon Pocket App",
      description: "A web app to browse and manage Pokémon cards. Fetches data from TCGdex API, allows building custom decks, and includes a user profile system.",
      image: "/projects/pokemon-app.webp",
      slug: "pokemon-app",
      technologies: ["React", "SolidJS", "Tailwind CSS", "JavaScript", "Firebase"],
      link: "https://ptcgp-app-d4bee.web.app/"
    },
*/
    {
      title: "Riftforge - The Ultimate Riftbound TCG Hub",
      description: "Riftforge è una PWA (Progressive Web App) avanzata e installabile sviluppata per i giocatori del gioco di carte collezionabili Riftbound TCG. Il progetto funge da hub centrale per la community, offrendo un ecosistema completo per la gestione della propria collezione e l'analisi del meta competitivo.\n\nL'applicazione permette l'autenticazione sicura tramite OAuth (Google/Discord) e integra un sistema di gestione della collezione avanzato con supporto all'importazione ed esportazione rapida tramite file Excel. Una delle funzionalità centrali è il tracciamento in tempo reale dei prezzi delle singole carte tramite integrazione diretta con Cardmarket.\n\n✨ Funzionalità Principali\n- Analisi del Meta & Tornei: Tool avanzati per l'analisi del metagame competitivo, inclusi tier list, tracking dei risultati dei tornei e dashboard statistiche interattive per monitorare i propri matchup (Matchup Matrix).\n- Tracking Prezzi & Mercato: Monitoraggio live delle fluttuazioni di mercato su Cardmarket per ottimizzare gli acquisti e tracciare il valore effettivo della propria collezione nel tempo.\n- Gestione Collezione Avanzata: Import/export massivo da Excel e un'interfaccia intuitiva per gestire le varianti e le quantità possedute.\n- PWA & Architettura Cloud: Architettura serverless moderna basata su Next.js, Prisma e NeonDB (PostgreSQL), completamente installabile come app nativa (PWA) e accessibile fluidamente su smartphone e desktop.\n\n*Il progetto è in continuo sviluppo e si aggiorna mensilmente...*",
      image: "/projects/riftforge.webp",
      slug: "riftforge",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "NeonDB (PostgreSQL)", "PWA", "NextAuth"],
      link: "https://riftforge.xyz/"
    },
    {
      title: "🍕 La Rustica - Web App per Pizzeria Tradizionale",
      description: "La Rustica è una Landing Page dinamica e curata nel dettaglio sviluppata per una pizzeria tradizionale napoletana locale. L'obiettivo principale del progetto era modernizzare la presenza online del locale trasmettendo, al tempo stesso, l'autenticità e l'artigianalità del loro prodotto. Ho realizzato un'interfaccia utente (UI) immersiva ed elegante, privilegiando l'esperienza utente sia su dispositivi mobili (mobile-first) che su desktop. Il sito offre una navigazione fluida (Single Page Application) e guida gli utenti in modo intuitivo verso le informazioni principali: il menù, la galleria fotografica, le recensioni dei clienti e la posizione geografica del locale. Un elemento chiave è il rapido e immediato accesso agli ordini d'asporto, implementato tramite integrazione diretta con WhatsApp per snellire la comunicazione tra utente e ristoratore.\n\nFunzionalità Principali (Features):\n- Design Responsive & Mobile First: Layout moderno totalmente ottimizzato per una visualizzazione perfetta su smartphone, tablet e PC.\n- Integrazione Ordini Rapidi: Call-to-action (CTA) fisse e pulsanti (Floating Action Button) ottimizzati per reindirizzamento immediato su chat WhatsApp precompilata.\n- Scroll Animato & Navigazione: Effetti di scorrimento dolce (smooth scrolling) tra le ancore della dashboard e una Top Navigation Bar dinamica con off-canvas menu.\n- Micro-interazioni UI: Hover effects e transizioni fluide su bottoni, immagini e menu card per arricchire l'interattività dell'utente.\n- Ottimizzazione Immagini & Performance: Utilizzo del componente nativo Image di Next.js e CDN (Unsplash interconnesso) per la compressione in formato moderno, ottenendo tempi di caricamento (LCP) estremamente bassi.\n- Legal & Compliance: Integrazione e sviluppo di pagine separate preformattate per policy (Privacy e Cookie) e componente personalizzato per gli errori 404 a tema col brand.\n- Deployment & CI/CD: Rollout di produzione rapido e continuo con pipeline automatizzata tramite GitHub e Vercel.",
      image: "/projects/la-rustica.webp",
      slug: "la-rustica",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "GitHub"],
      link: "https://la-rustica-app.vercel.app/"
    },
    {
      title: "Hagakure Tattoo Studio - Digital Presence & Booking",
      description: "Sviluppo e design del sito web ufficiale per l'Hagakure Tattoo Studio. Il progetto nasce con l'obiettivo di creare una presenza digitale premium e immersiva in grado di riflettere l'identità visiva e artistica dello studio. L'applicazione web funge da vera e propria vetrina digitale, strutturata per convertire i visitatori in clienti grazie a un'esperienza utente (UX) fluida e un'interfaccia (UI) curata nei minimi dettagli.\n\nOltre a presentare la storia dello studio, la piattaforma espone in modo elegante il portfolio lavori e i Resident Artists. Il cuore interattivo del sito è rappresentato da un sistema di Booking personalizzato: un modulo avanzato che permette agli utenti di richiedere appuntamenti in modo guidato e sicuro, migliorando l'efficienza organizzativa dello studio tramite l'invio automatizzato di notifiche via email.\n\n✨ Funzionalità Principali\n- Gallerie e Portfolio Interattivi: Implementazione di caroselli touch-friendly e ottimizzati per mobile per esplorare i lavori dei tatuatori, con funzionalità lightbox per la visualizzazione delle immagini ad alta risoluzione.\n- Modulo di Prenotazione Avanzato (Booking): Form di contatto strutturato con validazione dei dati lato client in tempo reale (per limitare gli errori utente) gestito tramite un'architettura Serverless per l'invio sicuro delle email.\n- Performance & SEO: Architettura basata su Server-Side Rendering (SSR) e Static Site Generation (SSG) per garantire tempi di caricamento istantanei (LCP ottimizzato), gestione dinamica della sitemap e metadati strutturati per l'ottimizzazione sui motori di ricerca.\n- Animazioni e Micro-interazioni: Utilizzo di animazioni fluide allo scroll e transizioni per rendere la navigazione dinamica senza pesare sulle performance del browser.",
      image: "/projects/hagakure.webp",
      slug: "hagakure-tattoo-studio",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod", "Nodemailer"],
      link: "https://hagakure-tattoo-app.vercel.app/"
    },
    {
      title: "🏔️ Vista Majella - B&B Booking & Experience",
      description: "Vista Majella è una piattaforma web moderna e immersiva sviluppata per un Bed & Breakfast fittizio, situato nel cuore della natura abruzzese. Il progetto nasce per dimostrare la capacità di coniugare un'estetica elegante e accogliente con funzionalità tecniche avanzate orientate all'ospitalità turistica e alberghiera. L'obiettivo principale è offrire un'eccellente esperienza utente (UX) dal primo impatto visivo fino all'esplorazione del sistema simulato di prenotazione.\n\nL'interfaccia utente (UI) è stata progettata con un rigoroso approccio mobile-first, garantendo una navigazione fluida e intuitiva su qualsiasi dispositivo. Le sezioni principali accompagnano armoniosamente il visitatore nella scoperta della struttura: le tipologie di camere, i comfort esclusivi, le attività escursionistiche e la galleria fotografica emozionale.\n\n✨ Funzionalità Principali\n- Sistema di Booking (Mockup): Interfaccia di interazione per la selezione delle date di pernottamento e gestione base della richiesta per simulare con precisione la user flow di prenotazione in un sistema reale.\n- Componenti Interattivi & Animazioni: Implementazione di gallerie immagini dinamiche, caroselli per l'esplorazione delle camere e transizioni fluide allo scroll volte a restituire un feeling premium e rilassante.\n- Design Responsive & UI Accogliente: Layout pulito, altamente accessibile e totalmente ottimizzato. Sviluppato utilizzando Tailwind CSS per richiamare una palette di colori ispirata alla natura, alla montagna e alla serenità.\n- Image Optimization & Performance: Gestione architetturale avanzata dei media tramite CDN e formati web moderni, capace di garantire tempi di caricamento istantanei (LCP ottimizzato) mantenendo un alto impatto visivo.\n- Architettura Scalabile SPA: Progettato sfruttando le ultime tecnologie dell'ecosistema React e Next.js per la costruzione di una solida Single Page Application dalle performance elevate e SEO-friendly.",
      image: "/projects/vista-majella.png",
      slug: "vista-majella",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://vista-majella.vercel.app/"
    },
  ];