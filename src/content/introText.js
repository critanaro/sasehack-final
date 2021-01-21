/**
 * The text that appears at the top of the hackrice web page.
 * @type {string}
 */
export const intro = "RSHack: Coming soon March 2021!";

/**
 * A list of bullet points that introduce the event.
 * @type {{icon : string, button : string, href : string, note : string}[]}
 */
export const bullets = [
  {
    icon: "https://microicon-clone.vercel.app/slideshow/ffffff",
    button: "view opening slideshow",
    href: "https://docs.google.com/presentation/d/13nDqdmwK4NWyTBz4_O8f1gm7KlQJN_QAd4FeqJN4ac8/edit?usp=sharing",
    note: "view the slides from the opening ceremony!"
  },

  {
    icon: "https://microicon-clone.vercel.app/calendar/ffffff",
    button: "March 6-7, 2021",
    href:
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=Mm0zMTU5bHJqbzJ0b2ZxNnJ0MnJndHJqaTMgY3c3NEByaWNlLmVkdQ&tmsrc=cw74%40rice.edu",
    note: "A 24 hour hack to bring us together after spending so much time apart."
  },
  {
    icon: "https://microicon-clone.vercel.app/wb_sunny/ffffff",
    button: "held VIRTUALLY",
    note: "Sponsored and organized by Rice SASE"
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});