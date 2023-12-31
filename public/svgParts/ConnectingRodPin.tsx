import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React from "react";

const ConnectingRodPin = ({
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
      viewBox="0 0 1680 429"
    >
      <path
        d="M0 .456h2000.31v427.652H0z"
        style={{
          fill: "none",
        }}
      />

      {/* Medida H */}
      <g>
        <path
          d="M717.388 49.459c55.561 0 100.67 45.109 100.67 100.67 0 55.562-45.109 100.67-100.67 100.67s-100.67-45.108-100.67-100.67c0-55.561 45.109-100.67 100.67-100.67Zm0 4.167c-53.262 0-96.504 43.242-96.504 96.503 0 53.262 43.242 96.504 96.504 96.504 53.262 0 96.503-43.242 96.503-96.504 0-53.261-43.241-96.503-96.503-96.503Z"
          className={`sizeH`}
          style={{
            fill:
              hoveredClass === "sizeH"
                ? sizeColors.sizeHcolorLight
                : sizeColors.sizeHcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <path
          d="M567.821 53.634v-4.166h4.178v4.166h-4.178Zm8.355 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.532 0v-4.166h8.355v4.166h-8.355Zm12.533 0v-4.166h8.354v4.166h-8.354Zm12.531 0v-4.166h8.355v4.166h-8.355Zm12.533 0v-4.166h8.354v4.166h-8.354Zm12.531 0v-4.166h8.355v4.166h-8.355Zm12.533 0v-4.166h4.177v4.166h-4.177ZM567.902 250.666v-4.167h4.177v4.167h-4.177Zm8.354 0v-4.167h8.355v4.167h-8.355Zm12.532 0v-4.167h8.355v4.167h-8.355Zm12.532 0v-4.167h8.355v4.167h-8.355Zm12.532 0v-4.167h8.355v4.167h-8.355Zm12.533 0v-4.167h8.354v4.167h-8.354Zm12.531 0v-4.167h8.355v4.167h-8.355Zm12.532 0v-4.167h8.355v4.167h-8.355Zm12.533 0v-4.167h8.354v4.167h-8.354Zm12.531 0v-4.167h8.355v4.167h-8.355Zm12.533 0v-4.167h8.354v4.167h-8.354Zm12.532 0v-4.167h8.354v4.167h-8.354Zm12.532 0v-4.167h4.177v4.167h-4.177ZM577.267 68.662h-6.975l8.995-12.776 8.995 12.776h-6.848v160.609h6.848l-8.995 12.776-8.995-12.776h6.975V68.662Z"
          className={`sizeH`}
          style={{
            fill:
              hoveredClass === "sizeH"
                ? sizeColors.sizeHcolorLight
                : sizeColors.sizeHcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <text
          x={531.837}
          y={163.338}
          className={`sizeH`}
          style={{
            fontFamily: "&quot",
            fontSize: 50,
            fill:
              hoveredClass === "sizeH"
                ? sizeColors.sizeHcolorLight
                : sizeColors.sizeHcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {"H"}
        </text>
      </g>

      {/* Medida I */}
      <g>
        <path
          d="M1464.46 52.329v196.272c0 1.15-.932 2.083-2.083 2.083H946.711a2.084 2.084 0 0 1-2.083-2.083V52.329c0-1.15.933-2.083 2.083-2.083h515.666c1.151 0 2.083.933 2.083 2.083Zm-4.166 2.083H948.795v192.105h511.499V54.412ZM1460.15 255.116h4.167v4.276h-4.167v-4.276Zm0 8.553h4.167v8.554h-4.167v-8.554Zm0 12.83h4.167v8.554h-4.167v-8.554Zm0 12.831h4.167v8.553h-4.167v-8.553Zm0 12.83h4.167v8.553h-4.167v-8.553Zm0 12.83h4.167v4.277h-4.167v-4.277ZM944.254 255.116h4.167v4.276h-4.167v-4.276Zm0 8.553h4.167v8.554h-4.167v-8.554Zm0 12.83h4.167v8.554h-4.167v-8.554Zm0 12.831h4.167v8.553h-4.167v-8.553Zm0 12.83h4.167v8.553h-4.167v-8.553Zm0 12.83h4.167v4.277h-4.167v-4.277ZM975.935 307.175l.193 10.894-21.166-11.957 20.729-12.699.17 9.596h458.614l.17-9.596 20.729 12.699-21.166 11.957.193-10.894H975.935Z"
          className={`sizeI`}
          style={{
            fill:
              hoveredClass === "sizeI"
                ? sizeColors.sizeIcolorLight
                : sizeColors.sizeIcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <path
          d="M1211.9 346.638h-8.626v-3.974h8.626v-.064h4.736v.064h8.431v3.974h-8.431v28.493h8.431v3.974h-21.793v-3.974h8.626v-28.493Z"
          className={`sizeI`}
          style={{
            fill:
              hoveredClass === "sizeI"
                ? sizeColors.sizeIcolorLight
                : sizeColors.sizeIcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </g>
    </svg>
  );
};

export default ConnectingRodPin;
