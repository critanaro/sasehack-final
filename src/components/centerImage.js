import { Box, Image } from "rebass";

/**
 * A react component that displays an image in the middle of the page.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const CenterImage = props => (
  <Box>
  <a
  href = "https://rshack2020.devpost.com/?preview_token=H7gOZ2eFoow62A5eN2O9L%2BLkk28FH3ev9h%2BhLqIVx3M%3D"
    >
  <Image
      src= { props.pathToImage }
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        marginBottom: "10%",
        width: "25%"
      }}
    />
    </a>

    <style jsx>{`
      @media (max-width: 575px) {
        .note {
          display: block;
          margin-top: 1em;
        }
      }
    `}</style>
  </Box>
);

export default CenterImage;
