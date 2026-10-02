/**
 * Personalizza il biglietto da qui.
 * Puoi anche passare il nome nell'URL: /auguri?per=Giulia
 */
export const CARD = {
  recipientName: "",
  senderName: "Alex",
  timezone: "Europe/Rome",
  // Mezzanotte del 3 ottobre 2026, ora italiana (CEST).
  birthdayISO: "2026-10-03T00:00:00+02:00",

  intro: {
    kicker: "Stanotte",
    title: "Per te.",
    subtitle: "Un piccolo cielo, da aprire a mezzanotte.",
    cta: "Entra",
  },

  countdown: {
    waiting: "Manca poco",
    arrived: "È mezzanotte.",
    skip: "Non voglio aspettare",
    open: "Apri il cielo",
  },

  envelope: {
    hint: "C'è una lettera.",
    cta: "Tocca il sigillo",
  },

  letter: {
    greeting: (name) => (name ? `${name},` : "Ehi,"),
    paragraphs: [
      "Non so se a mezzanotte sarai sveglia, se festeggerai in mezzo a troppa gente o in un silenzio tutto tuo. So solo che volevo lasciarti qualcosa di bello da aprire.",
      "Grazie per l'amicizia che hai scelto di tenere. Per le risate, per le cose dette e per quelle che restano tra le righe. Per il modo in cui il mondo, quando ci sei tu, diventa un po' più gentile.",
      "Oggi non ti chiedo niente. Ti auguro soltanto che quest'anno ti somigli: coraggioso, luminoso, un po' imprevedibile. E che tu abbia sempre un posto sicuro dove tornare.",
    ],
    closing: "Buon compleanno. Di cuore.",
    continue: "Ho acceso qualche stella",
  },

  wishes: {
    title: "Desideri appesi",
    hint: "Toccane una.",
    continue: "Continua",
    items: [
      "Che tu rida con quella risata che riempie la stanza.",
      "Che i giorni difficili ti trovino già un po' più forte.",
      "Che qualcuno, quest'anno, ti capisca al volo.",
      "Che tu non dimentichi quanto sei capace.",
      "Che i tuoi sogni smettano di aspettare il momento giusto.",
    ],
  },

  finale: {
    kicker: "Ed è il tuo giorno",
    title: "Buon compleanno",
    afterName: "Che quest'anno ti somigli.",
    lanternIdle: "Accendi una lanterna",
    lanternDone: "Ecco. Adesso è tua.",
    signoff: (sender) => `Un amico. Sempre.\n— ${sender}`,
    replay: "Rivedi tutto",
  },
};

export function resolveRecipientName(searchName) {
  const fromUrl = typeof searchName === "string" ? searchName.trim() : "";
  return fromUrl || CARD.recipientName.trim();
}

export function getBirthdayDate() {
  return new Date(CARD.birthdayISO);
}
