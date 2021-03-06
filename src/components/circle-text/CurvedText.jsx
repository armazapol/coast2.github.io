import React from "react";
import styled from "styled-components";

const CurvedText = ({
  text,
  objectSize = 120,
  spacing = 12,
  offset = 30,
  overlap = false,
}) => {
  const d = objectSize + spacing * 2;
  const r = objectSize / 2 + spacing / 2;

  // const CurvedComponents = () => {
  //   const Curved = styled.div`
  //     margin-bottom: ${overlap ? `-${r}px` : "0"};
  //     width: ${d + offset * 2}px;
  //     height: ${r + offset}px;
  //     path {
  //       fill: transparent;
  //     }
  //     text {
  //       fill: currentColor;
  //       text-anchor: middle;
  //     }
  //   `;
  //   return <Curved />;
  // };

  const CurvedComponent = ({ children }) => (
    <div
      style={{
        marginBottom: overlap ? `-${r}px` : "0",
        width: `${d + offset * 2}px`,
        height: `${r + offset}px`,
      }}
    >
      {children}
    </div>
  );

  return (
    <CurvedComponent className="curved-text">
      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
        <path
          id="curve"
          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${
            r + offset
          }`}
          fillOpacity="0"
        />
        <text width="500" textAnchor="middle">
          <textPath xlinkHref="#curve" startOffset="50%">
            {text}
          </textPath>
        </text>
      </svg>
    </CurvedComponent>
  );
};

export default CurvedText;
