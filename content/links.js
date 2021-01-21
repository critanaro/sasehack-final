/**
 * A list of objects that describe our social media links.
 * Each object needs (1) a link, (2) a label, and (3) an
 * icon from "https://icon.now.sh/"
 * @type {{href:string, label:string, icon:string}[]}
 */
export const links = [
    {
      href: "https://www.facebook.com/saserice/",
      label: "Facebook",
      icon: "https://microicon-clone.vercel.app/facebook/ffffff"
    },
    {
      href: "mailto:Rice_SASE@mailman.rice.edu",
      label: `Email`,
      icon: "https://microicon-clone.vercel.app/email/ffffff"
    },
    {
      href: "http://www.ricesase.com/",
      label: `Website`,
      icon: "https://microicon-clone.vercel.app/web/ffffff"
    },
   
    {
      href: "https://rshack2020.devpost.com/?preview_token=H7gOZ2eFoow62A5eN2O9L%2BLkk28FH3ev9h%2BhLqIVx3M%3D",
      label: "Devpost",
      icon: "https://microicon-clone.vercel.app/disqus/ffffff"
    }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });