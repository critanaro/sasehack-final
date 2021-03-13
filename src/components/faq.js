import React from "react";
import Collapse, { Panel } from "rc-collapse";
import defaultCss from "rc-collapse/assets/index.css";
import customCss from "../styles/collapse.css";
import { Flex, Box } from "rebass";
import { title, questions } from "../content/faq";
import colors from "../styles/colors.json";
import { Element } from "react-scroll";
import * as Scroll from "react-scroll";

/**
 * React component that contains our frequently asked questions. These
 * are manifested as cards that (by default) display the question, and
 * then also display the answers onClick.
 * @param props
 */
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
    }

    // represent state in the components
  state = {
    accordion: true,
    activeKey: null,
    questions: questions
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    let state = this.state;
    let shift = questions.length / 3;

    let cols = [];

    for (let i = 0; i < this.props.questions.length; i += shift) {
      cols.push(
        <Flex flexWrap="wrap" flexDirection="column" width={[1, 1 / 2, 1]}>
          {this.props.questions.slice(i, i + shift).map(({ key, question, answer }) => (
            

            <Box width={[1]}>
          <a >
            <div className="card">
              <h3>
                <span className="spacer" />
                <span className="cardTitle">{question}</span>
              </h3>
              <p>{answer}</p>
            </div>
          </a>
        </Box>

          ))}
          <style jsx global>
            {defaultCss}
          </style>
          <style jsx global>
            {customCss}
          </style>
        </Flex>
      );
    }

    return (
      <Element name="faq">
        <Flex mt={4} justifyContent="center">
          <h2 className="title">{this.props.title}</h2>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" mt={2} mb={5} pt={2}>
          {cols}
        </Flex>
        <style jsx>
          {`
            .title {
              display: inline-block;
              text-transform: uppercase;
              background: ${colors["pink"]};
              border: 3px solid rgba(255, 255, 255, 0.1);
              font-family: "Overpass Mono", monospace;
              padding: 5px 10px 2px 10px;
              box-sizing: content-box;
              margin-left: auto;
              margin-right: auto;
              height: 40px;
              font-family: "Overpass Mono", monospace;
            }
          `}
        </style>
      </Element>
    );
  }
}
