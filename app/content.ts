/*
 * זה הקובץ היחיד שצריך לערוך כדי לשנות את הטקסטים והתמונות באתר.
 *
 * לתמונות משלך:
 * 1. שים את הקבצים בתיקייה public/photos
 * 2. החלף כתובת ברשימה photos, לדוגמה: "/photos/01.jpg"
 */

export const content = {
  opening: {
    smallTitle: "A LITTLE SOMETHING FOR YOU",
    titleLine1: "יש לי משהו קטן",
    titleLine2: "בשבילך...",
    noteLine1: "לא הצלחתי לשלוח לך פרחים עד לשם,",
    noteLine2: "אז בניתי לך אותם בעצמי.",
    button: "פתחי",
    footer: "נבנה במיוחד בשבילך",
  },
  flowers: {
    firstMessage: "הלוואי שיכולתי לשלוח לך את זה באמת...",
    secondMessageLine1: "אז בינתיים הכנתי לך משהו",
    secondMessageLine2: "קצת יותר שלנו",
    button: "לזיכרונות שלנו",
  },
  recap: {
    dates: "03.03.2026 — 03.09.2026",
    titleLine1: "שישה חודשים",
    titleLine2: "איתך",
    intro: "שישה חודשים של רגעים קטנים, צחוקים, דייטים, שטויות וזיכרונות שאני אף פעם לא רוצה לשכוח.",
    scrollHint: "תגללי לסיפור שלנו",
    sections: [
      { eyebrow: "חודש 1", title: "ההתחלה שלנו", text: "מי היה מאמין שהרגעים הקטנים האלה יהפכו להתחלה של הסיפור האהוב עליי.", photos: [0, 1, 2] },
      { eyebrow: "הרגעים הקטנים", title: "הפעמים שבהן פשוט נהנינו", text: "לא צריך תוכנית גדולה כשאני איתך. איכשהו גם הרגעים הכי רגילים הופכים לזיכרון.", photos: [3, 4] },
      { eyebrow: "רק אנחנו נבין", title: "השטויות שלנו 😂", text: "כל הפרצופים, הבדיחות הלא מצחיקות והצחוקים שאי אפשר להסביר לאף אחד אחר.", photos: [5, 6, 7] },
      { eyebrow: "אוספים מקומות", title: "המקומות שלנו", text: "כל מקום שהיינו בו קיבל פתאום צבע אחר, פשוט כי היית שם איתי.", photos: [8, 9] },
      { eyebrow: "הלב של הסיפור", title: "הרגעים האהובים עליי", text: "אלה שאני חוזר אליהם בראש, אלה שאני רוצה לזכור, ואלה שעוד מחכים לנו.", photos: [10, 11, 12] },
    ],
    continueText: "יש עוד משהו קטן שחיכה בסוף...",
    continueButton: "המשיכי",
  },
  final: {
    smallTitle: "OUR FIRST SIX MONTHS",
    titleLine1: "וזה רק",
    titleLine2: "חצי מהסיפור.",
    firstLine: "6 חודשים עברו...",
    secondLine: "אבל תמיד אבחר בך.",
    dates: "03 · 03 · 2026 — 03 · 09 · 2026",
    mainTitle: "חצי שנה שמח, אהובה שלי",
    lastLine: "ולעוד אינסוף זיכרונות שניצור יחד ♥",
  },
};

export const photos = [
  "https://picsum.photos/seed/us-start-1/1100/1300",
  "https://picsum.photos/seed/us-start-2/1100/1300",
  "https://picsum.photos/seed/us-start-3/1100/1300",
  "https://picsum.photos/seed/our-date-1/1300/1000",
  "https://picsum.photos/seed/our-date-2/1100/1300",
  "https://picsum.photos/seed/funny-us-1/1100/1300",
  "https://picsum.photos/seed/funny-us-2/1100/1300",
  "https://picsum.photos/seed/funny-us-3/1100/1300",
  "https://picsum.photos/seed/trip-together-1/1300/1000",
  "https://picsum.photos/seed/trip-together-2/1100/1300",
  "https://picsum.photos/seed/love-memory-1/1100/1300",
  "https://picsum.photos/seed/love-memory-2/1100/1300",
  "https://picsum.photos/seed/love-memory-3/1100/1300",
  "https://picsum.photos/seed/final-us-main/900/1100",
  "https://picsum.photos/seed/final-us-left/700/900",
  "https://picsum.photos/seed/final-us-right/700/900",
];
