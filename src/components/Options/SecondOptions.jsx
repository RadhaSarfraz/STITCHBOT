import React from "react";

import "./Options.css";

const SecondOptions = (props) => {
  const options = [
    {
      text: "Ask more!",
      handler: props.actionProvider.askMore,
      id: 1,
    },
    {
      text: "Thank You!",
      handler: props.actionProvider.thankyou,
      id: 2,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default SecondOptions;
