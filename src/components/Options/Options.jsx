import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Where's my order?",
      handler: props.actionProvider.orderAnswer,
      id: 1,
    },
    {
      text: "What's your refund policy?",
      handler: props.actionProvider.refundPolicy,
      id: 2,
    },
    {
      text: "Do you offer any discounts or Coupons?",
      handler: props.actionProvider.discounts,
      id: 3,
    },
    {
      text: "When are you guys open today?",
      handler: props.actionProvider.availableTime,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
