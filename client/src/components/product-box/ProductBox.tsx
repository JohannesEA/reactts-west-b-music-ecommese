import { useState, useRef } from "react";
import { Wrapper } from "./Productbox.styles";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineInfoCircle,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { Product } from "../../types/Product";
import { Circle, PlayMusicAnimation } from "../../animations/Animations";

interface IProductBox {
  clickedItem: Product;
  addToCart: (clickedItem: Product) => void;
  margin?: string;
}

const ProductBox = ({ margin, clickedItem, addToCart }: IProductBox) => {
  const [playing, setPlaying] = useState(false);
  let path = "";
  const navigate = useNavigate();

  const handleNavigateToProductInfo = (item: Product) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const handlePlayPauseSong = () => {
    if (playing) {
      if (audioPlayer.current) {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
        setPlaying(false);
      }
    } else {
      if (audioPlayer.current) {
        setPlaying(true);

        audioPlayer.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <Wrapper style={{ margin: margin }}>
      <audio ref={audioPlayer} src={clickedItem.mp3} preload="metadata"></audio>

      <img
        className="productbox-img"
        src={clickedItem.image}
        alt={clickedItem.title}
      />
      <h4>{clickedItem.title}</h4>
      <p>[{clickedItem.categories}]</p>
      {clickedItem.description !== undefined && (
        <p>{clickedItem.description}</p>
      )}
      <p>Pris: {clickedItem.price} NOK</p>
      <div className="producbox-button-container">
        <AiOutlineInfoCircle
          fontSize={35}
          onClick={() => handleNavigateToProductInfo(clickedItem)}
        ></AiOutlineInfoCircle>

        {!playing ? (
          <AiOutlinePlayCircle
            fontSize={35}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            fontSize={35}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        )}

        <BsCartPlus onClick={() => addToCart(clickedItem)} fontSize={35} />
      </div>
      {playing && (
        <PlayMusicAnimation>
          <Circle />
        </PlayMusicAnimation>
      )}
    </Wrapper>
  );
};

export default ProductBox;
