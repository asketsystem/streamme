import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  Title,
} from "@material-ui/icons";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const MoviesList = () => {
  return (
    <ListContainer>
      <Title>Continue to watch</Title>
      <Wrapper>
        <ArrowBackIosOutlined className="sliderArrow left" />
        <MovieContainer>
          <MovieItem index={0} />
          <MovieItem index={1} />
          <MovieItem index={2} />
          <MovieItem index={3} />
          <MovieItem index={4} />
          <MovieItem index={5} />
          <MovieItem index={6} />
          <MovieItem index={7} />
          <MovieItem index={8} />
          <MovieItem index={9} />
        </MovieContainer>
        <ArrowForwardIosOutlined className="sliderArrow right" />
      </Wrapper>
    </ListContainer>
  );
};

export default MoviesList;
