import { PlayArrow, ThumbDownAltOutlined } from "@material-ui/icons";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 225px;
  height: 120px;
  background-color: #0b0b0b;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.pm4";
  return (
    <ItemContainer
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MainImage
        src="https://cdn.cloudfare.steamstatic.com/steam/apps/1265780/capsule_616x353.jpg?t=1618237900"
        alt="trailer"
      />
      {isHovered && (
        <>
          <Video src={trailer} autoPlay={true} loop />
          <ItemInfo>
            <IconsContainer>
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </IconsContainer>
            <InfoTop>
              <span>2 hour 14 mins</span>
              <span className="limit">13+</span>
              <span>2022</span>
            </InfoTop>
            <Description>
              The Lord of the Rings: Gollum is an upcoming action-adventure game
              developed by Daedalic Entertainment.
            </Description>
            <Genre>Adventure</Genre>
          </ItemInfo>
        </>
      )}
    </ItemContainer>
  );
};

export default MovieItem;
