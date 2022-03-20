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
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/Actions";
import { AlertTitles, AlertTypes } from "../alert-boxes/AlertText";
import AlertBox from "../alert-boxes/AlertBox";
import { State } from "../../redux/Store";

interface IProductBox {
  clickedItem: Product;
  addToCart: (clickedItem: Product) => void;
  margin?: string;
}

const ProductBox = ({ margin, clickedItem, addToCart }: IProductBox) => {
  const cartState = useSelector((state: State) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    title: "",
  });
  let path = "";

  const handleNavigateToProductInfo = (item: Product) => {
    path = "/products/" + item._id;
    navigate(path);
  };

  const handleAddProductToCart = (product: Product) => {
    if (cartState.products.find((p) => p._id === product._id)) {
      setShowAlert({
        show: true,
        type: AlertTypes.ERROR,
        title: AlertTitles.ADD_PROD_ERROR,
      });
    } else {
      setShowAlert({
        show: true,
        type: AlertTypes.SUCCESS,
        title: AlertTitles.ADD_PROD_SUCCESS,
      });
      dispatch(addProductToCart(product));
    }
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
          className="producbox-button"
          fontSize={35}
          onClick={() => handleNavigateToProductInfo(clickedItem)}
        ></AiOutlineInfoCircle>

        {!playing ? (
          <AiOutlinePlayCircle
            className="producbox-button"
            fontSize={35}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        ) : (
          <AiOutlinePauseCircle
            className="producbox-button"
            fontSize={35}
            onClick={() => {
              handlePlayPauseSong();
            }}
          />
        )}

        <BsCartPlus
          className="producbox-button"
          onClick={() => handleAddProductToCart(clickedItem)}
          fontSize={35}
        />
      </div>
      {playing && (
        <PlayMusicAnimation>
          <Circle />
        </PlayMusicAnimation>
      )}

      {showAlert.show && (
        <AlertBox
          type={showAlert.type}
          title={showAlert.title}
          onClick={() => setShowAlert({ show: false, type: "", title: "" })}
        />
      )}
    </Wrapper>
  );
};

export default ProductBox;
