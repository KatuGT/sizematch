import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React from "react";

const RearSprocketSide = ({
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
      viewBox="0 0 1089 1253"
    >
      <path
        d="M0 0h1088.64v1252.65H0z"
        style={{
          fill: "none",
        }}
      />
      <path
        d="M597.913 349.868v670.622l-9.375 8.796v137.571l10.7 16.433-12.738 29.262h-48.404l-12.733-29.262 10.7-16.433v-137.571l-9.375-8.796V900.932h.025l-.001-551.064V230.306l9.375-8.796V83.943l-10.7-16.433 12.733-29.262h48.404l12.738 29.262-10.7 16.433V221.51l9.375 8.796v119.562h-.024Zm-66.471 0v551.064h42.95l.158-.167.159.167h18.475V349.868h-18.451l-.159.163-.158-.163h-42.974Zm52.929 789.747-25.183 24.825h25.183v-24.825Zm-53.517-208.867v75.125l32.163-19.521v-35.7l-32.163-19.904ZM583.8 1208.29l10.7-24.588-9.771-15h-44.858l-9.775 15 10.704 24.588h43Zm9.946-223.45v-33.258h-26.562v33.258h15.85l.295-.288.263.288h10.154Zm0 18.492v-14.225h-9.05l-44.467 42.97v24.921l53.517-53.666Zm-17.604-98.13-29.296 30.459 14.083 8.716 32.817-31.029v-8.146h-17.604Zm17.604 113.417v-9.317l-53.517 53.667v24.558l44.142-44.079v-16.033l9.375-8.796Zm-54.375-113.417h-8.517v9.917l8.517-9.917Zm54.375 42.113v-28.163l-29.104 27.521 1.037.642h28.067Zm-53.517 170.071 44.142-44.088v-23.891l-44.142 44.083v23.896Zm12.946 47.054 31.196-30.746v-23.375l-44.142 44.079v10.042h12.946Zm-12.946-15.996 44.142-44.083v-25.109l-44.142 44.084v25.108Zm30.063-243.242h-25.375l-14.063 16.371v5.184l.43-.721 11.895 7.354 27.113-28.188Zm-39.438 113.417 8.742 8.2 39.029-37.712h-11.966l-35.805 21.72v7.792Zm.025-698.572 32.162-19.899v-35.7l-32.162-19.517v75.116Zm53.841-58.349h9.05v-14.234l-53.516-53.662v24.916l44.466 42.98Zm-53.841-29.517v7.792l35.804 21.725h11.966l-39.029-37.721-8.741 8.204Zm62.891 105.271-32.816-31.025-14.084 8.712 29.296 30.463h17.604v-8.15Zm0-33.967h-28.066l-1.038.642 29.104 27.52v-28.162Zm-9.375-186.379-31.196-30.742h-12.945v10.038l44.141 44.079v-23.375Zm0 29.329-44.141-44.079v25.108l44.141 44.079v-25.108Zm0-60.071h-25.183l25.183 24.821V86.364Zm-39.454 259.238h25.375l-27.112-28.196-11.896 7.362-.429-.725v5.179l14.062 16.38Zm39.454-168.1-44.141-44.08v23.892l44.141 44.079v-23.891Zm-45 168.1-8.516-9.921v9.921h8.516Zm44.429-303.088h-43L530.12 67.098l9.775 14.999 44.859.001 9.77-15-10.7-24.584Zm-.47 223.738-.296-.288h-15.85v33.254h26.562v-33.254h-10.154l-.262.288Zm1.041-42.867v-16.033l-44.141-44.084v24.563l53.516 53.667v-9.317l-9.375-8.796Z"
        style={{
          fill: "#656768",
        }}
      />
      {/* Medida C empieza */}

      <g>
        <path
          d="M101.883 280.612h407.812v3.646H101.883zM101.883 964.808h407.812v3.65H101.883z"
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
          d="m120.289 939.609 13.842 19.475 14.02-19.337-12.412-.059V306.676l12.587-.063-14.02-19.333-13.842 19.471 11.496-.054v632.97l-11.671-.058Z"
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
          x={45.227}
          y={619.161}
          className={`sizeC`}
          style={{
            fontFamily: "&quot",
            fontSize: 82,
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
      {/* Medida D empieza */}
      <g>
        <path
          d="M619.941 345.887h368.921v3.646H619.941zM619.941 898.842h368.921v3.646H619.941z"
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
          d="m943.112 869.305 14.021 19.337 13.841-19.475-12.445.058V372.659l12.62.062-13.845-19.471-14.021 19.334 11.979.058v496.6l-12.15.063Z"
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
          x={970.61}
          y={619.161}
          className={`sizeD`}
          style={{
            fontFamily: "&quot",
            fontSize: 82,
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

export default RearSprocketSide;
