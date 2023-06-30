import { useState } from "react";
import React from 'react'

export const useHover = () => {
    const [hoverClass, setHoverClass] = useState("");
  
    const handleHover = (
      e: React.MouseEvent<
        SVGPathElement | SVGTextElement | HTMLHeadingElement,
        MouseEvent
      >
    ) => {
      const { classList } = e.target as HTMLElement;
      setHoverClass(classList[0]);
    };
  
    const handleMouseLeave = () => {
      setHoverClass("");
    };
  
    return { handleHover, handleMouseLeave, hoverClass };
  };