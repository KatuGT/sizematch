import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React from "react";

const Valve = ({ hoveredClass, onMouseEnter, onMouseLeave }: SVGProps) => {
  return (
    <svg
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 501 931"
    >
      <path
        d="M0 0h500.996v930.286H0z"
        style={{
          fill: "none",
        }}
      />
      <path
        d="M400.432 782.675H41.845c.629-3.758 3.07-11.921 12.508-19.183.258-.2.583-.404.892-.609h331.787c.304.205.629.409.892.609 9.433 7.258 11.875 15.425 12.508 19.183Zm-296.554-35.946c21.15-5.754 45.112-12.271 60.504-19.458 32.021-14.942 33.442-38.304 33.492-39.292V167.05h46.529v520.925c.046.992 1.467 24.35 33.492 39.296 15.391 7.183 39.354 13.7 60.5 19.454 15.383 4.188 30.162 8.213 39.95 11.992H63.932c9.783-3.775 24.563-7.804 39.946-11.988m93.996-632.804h46.529v48.958h-46.529v-48.958Zm192.587 646.267c-7.266-5.592-27.521-11.104-50.971-17.488-20.983-5.708-44.766-12.179-59.833-19.208-29.612-13.821-31.046-34.829-31.087-35.613V109.758h-54.863v578.125c-.046.788-1.475 21.792-31.092 35.613-15.062 7.029-38.845 13.5-59.829 19.212-23.45 6.38-43.708 11.892-50.975 17.484-14.191 10.921-14.354 24.012-14.354 24.566v2.084H404.82v-2.084c0-.554-.167-13.65-14.359-24.566"
        style={{
          fill: "#656768",
          fillRule: "nonzero",
        }}
      />
      <path
        d="M248.649 108.307h-4.167V48.586h4.167v59.721ZM193.922 48.143h4.167v59.721h-4.167z"
        className={`sizeA`}
        style={{
          fill:
            hoveredClass === "sizeA"
              ? sizeColors.sizeAcolorLight
              : sizeColors.sizeAcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <path
        d="m226.412 76.153 15.326-13.946-15.339-13.916.007 11.125h-10.4l.007-11.125-15.339 13.916L216 76.153l.003-11.271h10.406l.003 11.271Z"
        className={`sizeA`}
        style={{
          fill:
            hoveredClass === "sizeA"
              ? sizeColors.sizeAcolorLight
              : sizeColors.sizeAcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <text
        x={204.936}
        y={45.517}
        className={`sizeA`}
          style={{
            fontFamily: "&quot",
            fontSize: 50,
            fill:
              hoveredClass === "sizeA"
                ? sizeColors.sizeAcolorLight
                : sizeColors.sizeAcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
      >
        {"A"}
      </text>
      <path
        d="M249.789 109.833h223.635V114H249.789zM406.526 782.453h66.925v4.167h-66.925z"
        className={`sizeB`}
        style={{
          fill:
            hoveredClass === "sizeB"
              ? sizeColors.sizeBcolorLight
              : sizeColors.sizeBcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <path
        d="M460.699 135.638h12.325l-13.933-19.222-13.929 19.222h12.066v625.341h-12.066l13.929 19.222 13.933-19.222h-12.325V135.638Z"
        className={`sizeB`}
        style={{
          fill:
            hoveredClass === "sizeB"
              ? sizeColors.sizeBcolorLight
              : sizeColors.sizeBcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <text
        x={468.217}
        y={458.515}
        className={`sizeB`}
          style={{
            fontFamily: "&quot",
            fontSize: 50,
            fill:
              hoveredClass === "sizeB"
                ? sizeColors.sizeBcolorLight
                : sizeColors.sizeBcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
      >
        {"B"}
      </text>
      <path
        d="M400.492 789.367h4.429v104.811h-4.429V789.367ZM37.097 789.921h4.167v105.254h-4.167V789.921Z"
        className={`sizeC`}
        style={{
          fill:
            hoveredClass === "sizeC"
              ? sizeColors.sizeCcolorLight
              : sizeColors.sizeCcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <path
        d="m398.642 880.438-18.971-13.937v12.137H60.705v-12.071L41.73 880.505l18.975 13.925v-12.146h318.962v12.083l18.975-13.929Z"
        className={`sizeC`}
        style={{
          fill:
            hoveredClass === "sizeC"
              ? sizeColors.sizeCcolorLight
              : sizeColors.sizeCcolor,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <text
        x={201.803}
        y={924.091}
        className={`sizeC`}
          style={{
            fontFamily: "&quot",
            fontSize: 50,
            fill:
              hoveredClass === "sizeC"
                ? sizeColors.sizeCcolorLight
                : sizeColors.sizeCcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
      >
        {"C"}
      </text>
    </svg>
  );
};

export default Valve;
