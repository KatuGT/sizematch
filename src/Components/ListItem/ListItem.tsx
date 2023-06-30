import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import React, { useEffect, useState } from "react";

interface ListItemProps extends SVGProps {
  text: string;
  classSize: string;
}

interface TextColor {
  [key: string]: {
    color: string;
    colorLight: string;
  };
}

const ListItem = ({
  onMouseEnter,
  onMouseLeave,
  hoveredClass,
  text,
  classSize,
}: ListItemProps) => {
  const [textColor, setTextColor] = useState<TextColor>({
    sizeA: {
      color: "text-sizeAcolor",
      colorLight: "text-sizeAcolorLight",
    },
    sizeB: {
      color: "text-sizeBcolor",
      colorLight: "text-sizeBcolorLight",
    },
    sizeC: {
      color: "text-sizeCcolor",
      colorLight: "text-sizeCcolorLight",
    },
    sizeD: {
      color: "text-sizeDcolor",
      colorLight: "text-sizeDcolorLight",
    },
    sizeE: {
      color: "text-sizeEcolor",
      colorLight: "text-sizeEcolorLight",
    },
    sizeF: {
      color: "text-sizeFcolor",
      colorLight: "text-sizeFcolorLight",
    },
  });

  useEffect(() => {
    setTextColor((prevState) => ({
      ...prevState,
      [classSize]: {
        color: `text-${classSize}color`,
        colorLight: `text-${classSize}colorLight`,
      },
    }));
  }, [classSize]);

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${classSize} text-xs ${
        hoveredClass === classSize
          ? textColor[classSize].colorLight
          : textColor[classSize].color
      }`}
    >
      {text}
    </li>
  );
};

export default ListItem;
