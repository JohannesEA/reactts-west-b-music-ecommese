import { useRef, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlinePauseCircle,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { Product } from "../../types/Product";
import { Wrapper } from "./CartItemBox.styles";

interface ICartItemBox {
  product: Product;
  onDelete: (product: Product) => void;
}

const CartItemBox = ({ product, onDelete }: ICartItemBox) => {
  const [playing, setPlaying] = useState(false);

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
    <Wrapper>
      <audio ref={audioPlayer} src={product.mp3} preload="metadata"></audio>

      <img
        className={"cart-product-img"}
        src={product.image}
        alt={product.title}
      />
      <h4>{product.title}</h4>
      <p>Pris: {product.price} kr</p>

      <div className="button-container">
        {!playing ? (
          <AiOutlinePlayCircle
            className="producbox-button"
            fontSize={25}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            className="producbox-button"
            fontSize={25}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        )}
        <AiOutlineDelete
          onClick={() => {
            onDelete(product);
          }}
          size={25}
          color="red"
        />
      </div>
    </Wrapper>
  );
};

export default CartItemBox;
