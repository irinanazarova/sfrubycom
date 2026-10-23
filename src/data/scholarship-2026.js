// The 2026 scholarship program: the facts and the FAQ. Rendered by
// src/pages/scholarship.astro and by the page's Markdown twin
// (src/lib/llm-content.js), so the two can't disagree about a date.

export const SCHOLARSHIP_APPLICATION_URL =
    "https://forms.fillout.com/t/mfmadgSVT8us";
export const SCHOLARSHIP_EMAIL = "conference@sfruby.com";
// End of Oct 30 in San Francisco (still PDT: DST ends Nov 1).
export const DEADLINE = "2026-10-30T23:59:59-07:00";
export const DEADLINE_DISPLAY = "October 30, 11:59 pm Pacific";
export const DEADLINE_SHORT = "Oct 30";

// Single source of truth for the FAQ: drives the visible section, the
// FAQPage structured data, and the Markdown twin. `answer` is a trusted,
// hand-authored HTML string (rendered with set:html) so an answer can carry a
// link; the page and the twin each derive plain text.
export const FAQ_ITEMS = [
    {
        question: "Who can apply?",
        answer: "The program is for students first: high school, college, or bootcamp. Recent grads, career changers, and self-taught developers are welcome to apply too.",
    },
    {
        question: "Do I need Ruby experience?",
        answer: "No. Many scholars have never written a line of Ruby. Curiosity is enough.",
    },
    {
        question: "What does the scholarship cover?",
        answer: "A free ticket to all three days of the conference, November 10–12, 2026 at SFJAZZ. Travel, lodging, and meals are not included.",
    },
    {
        question: "When will I hear back?",
        answer: `We review applications as they come in and reply to everyone within a few days of the deadline, ${DEADLINE_DISPLAY}.`,
    },
    {
        question: "Do I need to live in the U.S.?",
        answer: "No. You can apply from anywhere, as long as you can be in San Francisco for the conference.",
    },
    {
        question: "I'll need a U.S. visa to attend. Can you help?",
        answer: "Unfortunately, we're unable to support the visa process this year, including invitation letters. You're welcome to apply from outside the U.S. if you can already travel here, for example with a valid U.S. visa or through the Visa Waiver Program (ESTA).",
    },
    {
        question: "I have accessibility needs. Can you accommodate them?",
        answer: "Yes. Tell us in your application and we'll do our best.",
    },
    {
        question: "Know someone who'd love this?",
        answer: "Send them this page. Most scholars hear about it from a friend, classmate, or teacher.",
    },
];
