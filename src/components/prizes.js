import { places, trackWinners, title } from "../content/prizes";
import { Box, Flex } from "rebass";
import { Element } from "react-scroll";
import colors from "../styles/colors.json";

const Prizes = () => (
    <Element name="prizes">
        <Box bg={colors["white"]} color={colors["white"]}>
            <Box px={3}>
                <h2 className="title" style={{"marginBottom":"0.5em"}}>{title}</h2>
                <p style={{"color":colors["base"], "marginLeft":"0.8em"}}>Each team member will receive one of the mentioned prizes.</p>
            </Box>
            <Flex justifyContent="flexStart" flexWrap="wrap" mx={2}>
                {places.map(({ place, prize, link, key }) => (
                    <div className="prize">
                    <a href = {link} style={{ textDecoration: "none", color: colors["dark"]}}>
                        <h3 className="itemTitle">{place}</h3>
                        <span className="item">{prize}</span>
                        </a>
                    </div>
                ))}
                {trackWinners.map(({ place, prize,prize2,prize3, link, key }) => (
                    <div className="prize">
                    <a href = {link} style={{ textDecoration: "none", color: colors["base"]}}>
                        <h3 className="itemTitle">{place}</h3>
                        <span className="item">{prize}</span>
                        <span className="item">{prize2}</span>
                        <span className="item">{prize3}</span>
                      </a>
                    </div>
                ))}
            </Flex>
        </Box>
        <style jsx>{`

    h3 {
        margin-bottom: 5px;
    }
      .title {
        display: inline-block;
        font-family: Overpass Mono;
        text-transform: uppercase;
        background: ${colors["base"]};
        padding: 2px 10px;
        margin-left: 0.5em;
      }

      .prize {
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: ${colors["dark"]};
        padding: 10px 25px;
        transition: border 0.3s ease-in-out, transform 0.3s ease-in-out,
          background 0.3s ease-in-out;
          margin: 0.8em 0.8em 0.8em 1.2em;
      }

      .prize:hover {
        transform: scale(1.03);
        border: 2px solid ${colors["base"]};
      }

      .itemTitle {
        margin-top: 5px;
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold;
        color: ${colors["base"]};
      }

      .item {
          display: block;
          margin-bottom: 8px;
      }
    `}</style>
    </Element>
);

export default Prizes;
