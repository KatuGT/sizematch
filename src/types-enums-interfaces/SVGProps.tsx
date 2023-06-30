export interface SVGProps {
  hoveredClass?: string;
  onMouseEnter?: React.MouseEventHandler<
    SVGPathElement | SVGTextElement | HTMLDivElement | HTMLLIElement
  >;
  onMouseLeave?: React.MouseEventHandler<
    SVGPathElement | SVGTextElement | HTMLDivElement | HTMLLIElement
  >;
}
