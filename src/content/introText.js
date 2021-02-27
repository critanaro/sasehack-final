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
    href: "https://docs.google.com/presentation/d/19FlCx_SI5YmvQXL43AJu6T0oQTEFLoU__4W_kItfIQ0/edit?usp=sharing",
    note: "view the slides from the opening ceremony!"
  },

  {
    icon: "https://microicon-clone.vercel.app/calendar/ffffff",
    button: "March 13-14, 2021",
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