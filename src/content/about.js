/**
 * The title of our about section.
 *
 * @type {string} title
 */
export const title = "What is RSHack?";

/**
 * An array of lines, to be placed in separate <p> blocks. Represents the main
 * content of our about section.
 *
 * @type {React.Fragment[]} lines
 */
export const lines = ([
  <>
    RSHack is a new annual hackathon at Rice University, sponsored by <a href="www.ricesase.com">Rice SASE</a>. 
    Following a tumultuous 2020, the first RSHack will invite all students to {" "}
    <span style={{ fontWeight: "600" }}>
      innovate, learn, and create.
    </span>
    for the betterment of our community, and the chance to win some {" "}
    <span style={{ fontWeight: "600" }}>
      awesome prizes.
    </span>
  </>,

  <>
    {" "}
    <span style={{ fontWeight: "600" }}>Teams of up to 4</span> will work on a
    project involving software (and hardware too, if they want) and present what
    they've developed after
    <span style={{ fontWeight: "600" }}> 24 hours</span> of hacking. 
    
</>,

<>
    Hacking and cool prizes aside, RSHack will offer participants an exclusive chance to{" "}
    <span style={{ fontWeight: "600" }}> network with other innovative minds</span>,
    talk to <span style={{ fontWeight: "600" }}> currently employing sponsors </span>{" "}
    who haven't attended other Rice events, and a medium to learn and expose themselves to{" "}
    <span style={{ fontWeight: "600" }}>new technology.</span>
  </>]
);