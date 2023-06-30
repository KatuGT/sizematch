export interface SVGProps {
  hoveredClass?: string;
  onMouseEnter?: React.MouseEventHandler<SVGPathElement | SVGTextElement | HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<SVGPathElement | SVGTextElement | HTMLDivElement>;
}
