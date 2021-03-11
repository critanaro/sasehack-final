export const title = "Schedule";

//export const dayOne = "Friday, 3/06";
export const dayTwo = "Saturday, 3/13";
export const dayThree = "Sunday, 3/14";

export const saturday = [
  {
    time: "10:00 AM – 2:45 PM",
    title: "Hacker Check in",
    detail: "A google form on this site will be made available for hackers to check in the day of the event! Please stay up to date with the site as well as the Slack!"
  },
  {
    time: "12:00 - 1:00 PM",
    title: "Networking with Sponsors ",
    detail: "Sponsors, including Rice SASE will open Zoom rooms where hackers can chat with sponsor representatives. Links will be posted here at the time of the event"
  },
  {
    time: "1:00 PM",
    title: "Opening Ceremonies",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors about their tracks."
  },
  {
    time: "2:00 PM",
    title: "Hacking Begins",
    detail:
      "Start hacking! RSHack admins will be available to answer any questions."
  },
  {
    time: "3:30 PM",
    title: "Sponsor Event 1!",
    detail: "First giveaway."
  },
  {
    time: "5:35 PM",
    title: "Sponsor Event 2!",
    detail: "Switch giveaway raffle draw. Hackers that signed up are automatically entered into this raffle, so be sure to attend for your chance to win!"
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const sunday = [
  {
    time: "12:00 PM",
    title: "Sponsor Event 3!",
    detail: "Event 3 TBD"
  },
  {
    time: "2:00 PM",
    title: "Hacking Ends",
    detail: "Get those submissions in! Don't forget the video and the devpost!"
  },
  {
    time: "2:00 - 3:00 PM",
    title: "Grace Period for Uploading",
    detail: "Though hacking ends at 2:00 PM, submissions will be accepted until but no later than 3:00 PM."
  },
  {
    time: "3:00 PM",
    title: "Round 1 Judging Begins",
    detail: "Video submissions for the general track will be assessed by our judges. Certain tracks may have live presentations at this point."
  },
  {
    time: "3:40 PM",
    title: "Round 2 Notification",
    detail: "Teams that will be advancing to Round 2 will be notified"
  },
  {
    time: "3:50 PM",
    title: "Round 2 Judging",
    detail: "Live presentations will take place for Round 2 judging."
  },
  {
    time: "4:30 PM",
    title: "Winner Reveal and Closing Remarks",
    detail: "The top three teams will be announced, and the winning general track team will do a small presentation."
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});
