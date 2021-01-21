/**
 * The title of the section.
 * @type {string}
 */
export const title = "QUESTIONS & ANSWERS";

/**
 * A list of questions and answers.
 * @type {{question : string, answer : string}[]}
 */
export const questions = [
    {
    question: "Will this hack be virtual?",
    answer:
        "Yes! but we'll still have some swag for our hackers to pick up, along with givewaays and other events."
    },
  {
    question: "How long is RSHack?",
    answer:
      "The event is held from Saturday, March 6th, 12:00 PM to Sunday, March 7th at 4:00 PM. Participants hack for 24 hours."
  },
  {
    question: "How many hackers per team are permitted?",
    answer:
      "Teams may have at most 4 hackers. You're welcome to hack solo or with a smaller team if you'd like!"
  },
  {
    question: "Is there a RSHack Facebook event?",
    answer: (
      <>
        Yes there is! RSVP here! Click{" "}
        <a className="styledlink" href="https://www.facebook.com/events/376743706956254/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22page_admin_consolidated_entry_buttons_row%22%2C%22surface%22%3A%22page%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22create_dialog%22%7D]%7D&onload_action=online_event_upsell_dialog">
          here
        </a>{" "}
        to access it!
      </>
    )
  },
  {
    question: "Who is eligible to participate in RSHack?",
    answer: (
      <>
        Any current student age 18 or older is eligible to apply to RSHack.
      </>
    )
  },
  {
    question: "What if I'm not very experienced?",
    answer:
      "We'll have a track exclusive to beginner hackers (if at least half the team members have never participated in a hackathon before, or have <1 year of programming experience)."
  },
  {
    question: "What if I don't have a team before the event?",
    answer:
    (
        <>
          No worries; click {" "}
          <a className="styledlink" href="https://docs.google.com/spreadsheets/d/1_Nwj1MvfOK-BXkn7_RiHie_FRr0yi8MfmlHK0Zys_ts/edit#gid=0">
            here
          </a>{" "}
          to take a look at our team registration sheet, which has other hackers looking for teams. 
        </>
      )
  },
  {
    question: "When does the event start? When will it end?",
    answer: "Opening ceremonies will start at 1:00 pm on Marc 6, and the event should be completely finished by 4:30 PM on March 7."
  }
].map(item => {
  item.key = `faq-${item.question}`;
  return item;
});
