export const title = "Generously Sponsored by";

export const files = [
  {
    name: "echoAR.png",
    height: "50px",
    link: "https://www.echoar.xyz/",
    blurb:
        "echoAR is a cloud platform for augmented and virtual reality (AR/VR) that provides tools and server-side infrastructure to help developers & companies quickly build and deploy AR/VR apps and experiences. We are backed by Remagine Ventures and Techstars, and received grants from Y Combinator, Verizon, and NYC Media Lab. We were named AR/VR finalists for SXSW 2020, won the DevProject Award 2019, named among the 2019 Most Fundable Companies, named one of the Top 25 finalists in Sir Richard Branson's Extreme Tech Challenge (XTC) 2019, and featured on The Hill and Bold TV."
  },
  {
    name: "cdk.svg",
    height: "50px",
    link: "https://www.cdkglobal.com/us",
    blurb:
        "CDK is a technology company with a singular focus. Our priority is to make it easier for car   dealerships of all types to excel, and we do it by developing integrated technology that optimizes, streamlines, and assists daily operations — all backed by data-derived business insight."
  },
  {
    name: "lilie.svg",
    height: "50px",
    link: "https://entrepreneurship.rice.edu/lilie-lab",
    blurb:
        "The Liu Idea Lab for Innovation and Entrepreneurship (Lilie) is the home of experiential learning and co-curricular activities in entrepreneurship and innovation at Rice University. Our mission is to equip Rice students with both entrepreneurial skills and the entrepreneurial mindset to prepare them to be entrepreneurs and innovators in whatever industry they choose, be it a technology startup, government, civic group, non-profit, small business, or large corporation. Lilie is comprised of experiential courses, co-curricular opportunities, a state-of-the-art on-campus lab space, and an array of resources to support student learning."  
      },

  {
    name: "sase.svg",
    height: "50px",
    link: "http://www.ricesase.com/",
    blurb:
      "SASE - Society of Asian Scientists and Engineers - is a national organization dedicated to helping STEM majors excel in their pursuits and positively impact the world around them. Rice University's chapter was established in 2014."  
    },

  {
    name: "rcel.svg",
    height: "50px",
    link: "http://www.rcelconnect.org/",
    blurb:
        "RCEL’s mission is to inspire, educate, and develop, ethical leaders in technology who will excel in research, industry, non-engineering career paths, or entrepreneurship. RCEL’s programing enhances a traditional engineering education by providing skills not typically covered in the Rice engineering curriculum. Through a series of curricular and co-curricular learning experiences, RCEL students learn to create and communicate a vision, build a high-performing team, form and execute collaborative plans, and create innovations that endure."}
].map(item => {
  item.key = `image-${item.name}`;
  return item;
});
