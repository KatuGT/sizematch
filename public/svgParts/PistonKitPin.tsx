import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React from "react";

const PistonKitPin = ({
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: SVGProps) => {
  return (
    <svg
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 413 1128"
    >
      <path
        d="M0 0h412.739v1127.89H0z"
        style={{
          fill: "none",
        }}
      />

      {/* Medida B */}
      <g>
        <path
          d="M161.106 170.76c-47.409 0-85.987 38.573-85.987 85.986 0 47.405 38.578 85.978 85.987 85.978 47.408 0 85.982-38.573 85.982-85.978 0-47.413-38.574-85.986-85.982-85.986m0 179.059c-51.325 0-93.077-41.752-93.077-93.073 0-51.325 41.752-93.077 93.077-93.077 51.32 0 93.077 41.752 93.077 93.077 0 51.321-41.757 93.073-93.077 93.073"
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
          d="M252.955 506.759h-4.166v-4.237h4.166v4.237Zm0-8.473h-4.166v-8.473h4.166v8.473Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.474h4.166v8.474Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.473h4.166v8.473Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-4.237h4.166v4.237ZM71.384 506.759h-4.167v-4.237h4.167v4.237Zm0-8.473h-4.167v-8.473h4.167v8.473Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.474h4.167v8.474Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.473h4.167v8.473Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-4.237h4.167v4.237ZM99.034 116.412l.111 15.035-23.998-15.816L98.91 99.465l.087 11.83h121.598l.087-11.83 23.762 16.166-23.997 15.816.11-15.035H99.034Z"
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
          x={131.236}
          y={94.338}
          className={`sizeB`}
          style={{
            fontFamily: "&quot",
            fontSize: 70,
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
      </g>

      {/* Medida F */}
      <g>
        <path
          d="M252.957 479.914v436.675H66.815V479.914h186.142Zm-4.166 3.478H70.982v429.719h177.809V483.392ZM259.232 484.092v-3.478h4.805v3.478h-4.805Zm9.61 0v-3.478h9.61v3.478h-9.61Zm14.415 0v-3.478h9.61v3.478h-9.61Zm14.415 0v-3.478h9.61v3.478h-9.61Zm14.415 0v-3.478h9.61v3.478h-9.61Zm14.415 0v-3.478h9.61v3.478h-9.61Zm14.415 0v-3.478h4.805v3.478h-4.805ZM259.387 916.843v-3.479h4.805v3.479h-4.805Zm9.61 0v-3.479h9.61v3.479h-9.61Zm14.415 0v-3.479h9.61v3.479h-9.61Zm14.415 0v-3.479h9.61v3.479h-9.61Zm14.414 0v-3.479h9.61v3.479h-9.61Zm14.415 0v-3.479h9.61v3.479h-9.61Zm14.415 0v-3.479h4.805v3.479h-4.805ZM328.278 512.365H314.91l15.075-21.517 15.074 21.517h-12.614v373.597h12.614l-15.074 21.517-15.075-21.517h13.368V512.365Z"
          className={`sizeF`}
          style={{
            fill:
              hoveredClass === "sizeF"
                ? sizeColors.sizeFcolorLight
                : sizeColors.sizeFcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <text
          x={340.06}
          y={714.12}
          className={`sizeF`}
          style={{
            fontFamily: "&quot",
            fontSize: 70,
            fill:
              hoveredClass === "sizeF"
                ? sizeColors.sizeFcolorLight
                : sizeColors.sizeFcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {"F"}
        </text>
      </g>
    </svg>
  );
};

export default PistonKitPin;
