import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 150px;
  background-color: yellow;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      {/* <Slider {...settings}>
        <div style={{ backgroundColor: "yellow" }}></div>
        <div style={{ backgroundColor: "blue" }}></div>
        <div style={{ backgroundColor: "green" }}></div>
      </Slider> */}
    </Wrapper>
  );
}
