export interface SVGProps {
  hoveredClass?: string;
  onMouseEnter?: React.MouseEventHandler<
    SVGPathElement | SVGTextElement | HTMLDivElement | HTMLLIElement | HTMLLabelElement
  >;
  onMouseLeave?: React.MouseEventHandler<
    SVGPathElement | SVGTextElement | HTMLDivElement | HTMLLIElement | HTMLLabelElement 
  >;
}
