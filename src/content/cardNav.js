/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
export const cards = [
  {
    icon: "https://microicon-clone.vercel.app/send/FFB9BA",
    title: "Submissions",
    href: "https://rshack2020.devpost.com/?preview_token=H7gOZ2eFoow62A5eN2O9L%2BLkk28FH3ev9h%2BhLqIVx3M%3D",
    text: "Submit your project through the RSHack Devpost →"
  },
  {
    icon: "https://microicon-clone.vercel.app/compose/FFB9BA",
    title: "Registration",
    href: "https://l2t01bpksu2.typeform.com/to/iViUtXfr",
    text: "Are you a college student? Register now for RSHack →"
  },
  {
    icon: "https://microicon-clone.vercel.app/attach_money/FFB9BA",
    title: "Sponsor",
    href: "./static/sponsorships.pdf",
    text: "Thanks for your interest! Check out our sponsorship packet →"
  },
  {
    icon: "https://microicon-clone.vercel.app/calendar/FFB9BA",
    title: "Schedule",
    to: "calendar",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: "https://microicon-clone.vercel.app/question_answer/FFB9BA",
    title: "FAQs",
    to: "faq",
    text: "First timer? We've answered some common questions for you →"
  },
  {
    icon: "https://microicon-clone.vercel.app/done_all/FFB9BA",
    title: "Sponsor Challenges",
    to: "tracks",
    text: "Not feeling the general track? Commpete to win a sponsor challenge →"
  },
  {
    icon: "https://microicon-clone.vercel.app/casino/FFB9BA",
    title: "Prizes",
    to: "prizes",
    text: "We promised awesome prizes, didn't we? Take a look at what you can win →"
  },
  {
    icon: "https://microicon-clone.vercel.app/phone/FFB9BA",
    title: "Contact",
    href: "mailto:rice@saseconnect.org",
    text: "Have a question? Reach out via email →"
  },
  {
    icon: "https://microicon-clone.vercel.app/slack/FFB9BA",
    title: "Slack",
    href: "https://join.slack.com/t/rshack/shared_invite/zt-l2ni8aok-965Sm5aam6_kNWAZh8U~nA",
    text: "Join our Slack channel for the latest updates →"
  },
  {
    icon: "https://microicon-clone.vercel.app/accessibility/FFB9BA",
    title: "Register a Team",
    href: "https://docs.google.com/spreadsheets/d/1_Nwj1MvfOK-BXkn7_RiHie_FRr0yi8MfmlHK0Zys_ts/edit#gid=0",
    text: "Looking to register a team or find one to hack with? Click here →"
  },
  {
    icon: "https://microicon-clone.vercel.app/help_outline/FFB9BA",
    title: "What is Rice SASE?",
    href: "https://www.ricesase.com",
    text: "Learn more about the club behind the hackathon! →"
  },
  {
    icon: "https://microicon-clone.vercel.app/perm_device_information/FFB9BA",
    title: "Release Form",
    href: "https://drive.google.com/file/d/17gO7XTUijsszPNElVD1zI3o57kfvjzyl/view?usp=sharing",
    text: "Please read our release form here →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});