import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React from "react";

const PistonKitFront = ({
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
      viewBox="0 0 955 1122"
    >
      <path
        d="M0 .579h954.92v1121.08H0z"
        style={{
          fill: "none",
        }}
      />
      <path
        d="M802.913 908.323h-69.008c-2.871-1.716-13.933-8.804-29.925-24.804-17.788-17.792-24.329-28.271-25.842-30.917l-.071-148.112c.109-.546 2.575-13.35-6.912-22.842-8.633-8.646-24.525-8.158-25.1-8.171h-316.5c-.579.013-16.471-.475-25.104 8.171-9.492 9.492-7.025 22.296-6.913 22.842l-.071 148.112c-1.508 2.646-8.054 13.125-25.837 30.917-15.996 16-27.058 23.088-29.929 24.804h-69.009V270.627c.042-.587.48-3.07 1.796-4.133.675-.537 3.796-2.137 6.567-3.442h613.496c2.771 1.305 5.891 2.905 6.566 3.442 1.317 1.063 1.755 3.546 1.796 4.133v637.696Zm-.441-666.883c0 13.012-6.367 14.483-6.021 14.483H179.155c.346 0-6.017-1.471-6.017-14.483 0-11.788 5.384-13.404 6.279-13.592h616.771c.9.188 6.284 1.804 6.284 13.592m-630.005-41.658c0-12.996 5.925-17.284 7.717-18.28h615.238c1.791.996 7.716 5.284 7.716 18.28 0 12.525-5.983 18.991-8.162 20.937H180.63c-2.179-1.946-8.163-8.412-8.163-20.937m137.08-59.609c40.37-5.721 156.479-5.187 176.712-5.041v.025c.075 0 .642-.009 1.542-.013.904.004 1.466.013 1.546.013v-.025c20.233-.146 136.341-.68 176.708 5.041 66.037 9.35 102.142 25.367 117.954 34.2H191.597c15.812-8.833 51.916-24.85 117.95-34.2m496.05 120.771c-.492-.396-1.271-.879-2.184-1.392 3.113-2.941 6.184-8.32 6.184-18.112 0-10.588-3.659-15.775-7.121-18.308 3.462-4.196 7.791-11.759 7.791-23.35 0-17.938-9.637-23.705-12.162-24.909-3.858-3.062-38.467-28.654-131.042-41.758-42.566-6.029-163.454-5.225-179.262-5.1-15.809-.125-136.692-.929-179.254 5.1-92.58 13.104-127.188 38.696-131.046 41.758-2.525 1.204-12.163 6.971-12.163 24.909 0 11.591 4.329 19.154 7.792 23.35-3.463 2.533-7.121 7.72-7.121 18.308 0 9.792 3.067 15.171 6.179 18.112-.908.513-1.691.996-2.175 1.392-4.033 3.254-4.416 8.879-4.446 9.508l-.004 645h77.988l.787-.429c.517-.271 12.875-7 32.329-26.462 21.713-21.717 27.338-33.021 27.567-33.492l.363-.742v-150.55c-.146-1.087-1.838-10.354 4.895-17.083 5.392-5.392 16.321-6.217 19.934-6.087H646.18c3.612-.13 14.542.695 19.933 6.087 6.734 6.729 5.042 15.996 4.896 17.083v150.55l.363.742c.225.471 5.854 11.775 27.566 33.492 19.454 19.462 31.813 26.191 32.329 26.462l.784.429h77.991l-.004-645c-.029-.629-.412-6.254-4.441-9.508"
        style={{
          fill: "#656768",
          fillRule: "nonzero",
        }}
      />
      <path
        d="M492.07 337.731h-6.299v-2.871h6.299v2.871Zm0 24.439h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.439h-6.299v-12.22h6.299v12.22Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.438h-6.299V618.77h6.299v12.219Zm0 24.438h-6.299v-12.219h6.299v12.219Zm0 24.439h-6.299v-12.219h6.299v12.219Z"
        style={{
          fill: "#656768",
          fillRule: "nonzero",
        }}
      />
      {/* Medida A */}
      <g>
        <path
          d="m374.247 136.983.005-7.129-295.295-.525-.004 7.129 295.294.525Z"
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
          d="M74.721 481.234h84.311v7.129H74.721z"
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
          d="M108.233 440.076V177.145h21.166l-25.404-35.115-24.058 35.115h20.937v262.931h-20.05l24.063 35.115 25.404-35.115h-22.058ZM172.05 488.363h-14.258v-7.129h14.258v7.129Zm28.525 0h-14.263v-7.129h14.263v7.129Zm28.517 0h-14.259v-7.129h14.259v7.129Zm28.525 0h-14.263v-7.129h14.263v7.129Zm28.512 0h-14.258v-7.129h14.258v7.129Zm28.525 0h-14.262v-7.129h14.262v7.129Zm28.521 0h-14.263v-7.129h14.263v7.129Zm28.517 0h-14.259v-7.129h14.259v7.129Zm28.52 0H385.95v-7.129h14.262v7.129Zm28.521 0h-14.258v-7.129h14.258v7.129Zm28.525 0h-14.262v-7.129h14.262v7.129Zm28.513 0h-14.259v-7.129h14.259v7.129Z"
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
          x={34.984}
          y={320.886}
          className={`sizeA`}
          style={{
            fontFamily: "&quot",
            fontSize: 70,
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
      </g>

      {/* Medida B */}
      <g>
        <path
          d="M489.192 399.86c-47.666 0-86.454 38.783-86.454 86.454 0 47.663 38.788 86.446 86.454 86.446 47.667 0 86.45-38.783 86.45-86.446 0-47.671-38.783-86.454-86.45-86.454m0 180.033c-51.604 0-93.583-41.979-93.583-93.579 0-51.604 41.979-93.583 93.583-93.583 51.6 0 93.584 41.979 93.584 93.583 0 51.6-41.984 93.579-93.584 93.579"
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
          d="M583.272 487.184h-4.167v-4.236h4.167v4.236Zm0-8.473h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.474h4.167v8.474Zm0-12.711h-4.167v-8.474h4.167v8.474Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.473h4.167v8.473Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.474h4.167v8.474Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.709h-4.167v-8.474h4.167v8.474Zm0-12.711h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-8.473h4.167v8.473Zm0-12.71h-4.167v-4.236h4.167v4.236ZM401.7 487.184h-4.166v-4.236h4.166v4.236Zm0-8.473h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.474h4.166v8.474Zm0-12.711h-4.166v-8.474h4.166v8.474Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.473h4.166v8.473Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.474h4.166v8.474Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.709h-4.166v-8.474h4.166v8.474Zm0-12.711h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-8.473h4.166v8.473Zm0-12.71h-4.166v-4.236h4.166v4.236ZM429.351 96.838l.11 15.035-23.997-15.816 23.762-16.167.087 11.83h121.598l.087-11.83 23.763 16.167-23.998 15.816.11-15.035H429.351Z"
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
          x={461.553}
          y={74.763}
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

      {/* Medida C */}
      <g>
        <path
          d="M869.301 220.561h20.942l-24.063-36.542-25.404 36.542h21.167v221.025h-22.058l25.404 36.541 24.062-36.541h-20.05V220.561Z"
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
          d="M810.064 172.584h78.351v7.129h-78.351zM811.338 481.292h71.446v7.129h-71.446z"
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
          d="M510.012 488.455H495.75v-7.13h14.262v7.13Zm28.517 0h-14.258v-7.13h14.258v7.13Zm28.525 0h-14.262v-7.13h14.262v7.13Zm28.517 0h-14.263v-7.13h14.263v7.13Zm28.521 0h-14.259v-7.13h14.259v7.13Zm28.52 0H638.35v-7.13h14.262v7.13Zm28.521 0h-14.258v-7.13h14.258v7.13Zm28.517 0h-14.258v-7.13h14.258v7.13Zm28.525 0h-14.263v-7.13h14.263v7.13Zm28.521 0h-14.263v-7.13h14.263v7.13Zm28.521 0h-14.263v-7.13h14.263v7.13Z"
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
          x={872.672}
          y={343.009}
          className={`sizeC`}
          style={{
            fontFamily: "&quot",
            fontSize: 70,
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
      </g>

      {/* Medida D */}
      <g>
        <path
          d="M165.822 917.471h7.129v141.821h-7.129zM802.989 920.235h7.129v141.821h-7.129z"
          className={`sizeD`}
          style={{
            fill:
              hoveredClass === "sizeD"
                ? sizeColors.sizeDcolorLight
                : sizeColors.sizeDcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <path
          d="m799.936 1033.71-34.691-24.396v21.167H209.931v-21.092l-34.695 24.4 34.695 24.954v-21.354h555.314v21.275l34.691-24.954Z"
          className={`sizeD`}
          style={{
            fill:
              hoveredClass === "sizeD"
                ? sizeColors.sizeDcolorLight
                : sizeColors.sizeDcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <text
          x={468.457}
          y={1105.29}
          className={`sizeD`}
          style={{
            fontFamily: "&quot",
            fontSize: 70,
            fill:
              hoveredClass === "sizeD"
                ? sizeColors.sizeDcolorLight
                : sizeColors.sizeDcolor,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {"D"}
        </text>
      </g>
    </svg>
  );
};

export default PistonKitFront;
