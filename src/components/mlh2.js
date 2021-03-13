import React from "react";

const linkStyle = {
    display : "block",
    maxWidth : "800px",
    minWidth : "30px",
    position : "fixed",
    mid : "0px",
    top : "0",
    width : "100%",
    zIndex : "10000"
};

const imgStyle = {
    width : "100%"
};

/**
 * React component that places an MLH logo in the top right corner of the
 * screen. Provided by mlh. See: https://mlh.io/brand-guidelines
 *
 * @returns {React.Component}
 * @constructor
 */
const Mlh = () => (
    <a id="mlh-trust-badge"
       style={linkStyle} href="https://forms.gle/3zTTSwe1LDeKrr4j7"
       target="_blank">
        <img src="../static/header1.svg"
             alt="Major League Hacking 2020 Hackathon Season"
             style={imgStyle} />
    </a>
);

export default Mlh;
