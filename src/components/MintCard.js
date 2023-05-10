import React, { useState } from "react";
import "./mintCard.scss";
import { BsTwitter, BsDiscord, BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
const MintCard = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else setCount(count - 1);
  };
  const increment = () => {
    if (count === 10) {
      setCount(10);
    } else setCount(count + 1);
  };
  return (
    <div className="mintCard__container">
      <div className="mintCard__card__container">
        <div className="mintCard__icons">
          <span>
            <BsDiscord />
          </span>{" "}
          <span>
            <BsTwitter />
          </span>
        </div>
        <div className="mintCard">
          <div className="mintCard__title">
            <h1>NftMontana MINT Template</h1>
            <span>Total supply:667 NFTs</span>
          </div>
          <div className="mintCard__profile">
            <div>
              <img src="https://i.ibb.co/6gj5F17/men.png" alt="" />
            </div>
            <div className="mint__info">
              <span>Price Per NFT</span>
              <h4>0.05 ETH + gas</h4>
              <span>per sale available</span>
              <span>24.04.2022</span>
            </div>
          </div>
          <div className="mint__btn">
            <button>
              <div>
                {" "}
                <BiMinus onClick={decrement} />
                <span>{count}</span>
                <BsPlus onClick={increment} />
              </div>
              <span>10 Max</span>
            </button>
          </div>
          <div className="total__mint">
            <h6>Total</h6>
            <h4>0.05 ETH + gas</h4>
          </div>
          <div className="connect__btn">
            <button>Connect Metamask</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintCard;
