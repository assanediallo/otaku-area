import React from "react";

function Rating(props) {
  const { ratingValue, value } = props;
  const range = [1, 2, 3, 4, 5];
  return (
    <div>
      {ratingValue === "rate" ? (
        range.map((element) =>
          value >= element ? <span key={element.toString()}>★</span> : "☆"
        )
      ) : (
        <span>({value} reviews)</span>
      )}
    </div>
  );
}

export default Rating;
