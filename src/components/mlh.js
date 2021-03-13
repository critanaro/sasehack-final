import React from "react";

const linkStyle = {
    display : "block",
    maxWidth : "250px",
    minWidth : "60px",
    position : "fixed",
    right : "0px",
    top : "0",
    width : "10%",
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
       style={linkStyle} href="https://riceuniversity.zoom.us/rec/share/R6tRDqJGKGDQv5LYqf1UdEP_Fzd1s6U9urovNzUjfXS7o6CFpeQ6OhO8v8HEN6Bu.TbPYvtgNP1DS5vfy"
       target="_blank">
        <img src="../static/header2.svg"
             alt="Major League Hacking 2020 Hackathon Season"
             style={imgStyle} />
    </a>
);

export default Mlh;
