export interface SVGProps {
  hoveredClass?: string;
  handleHover?: React.MouseEventHandler<SVGPathElement | SVGTextElement>;
  handleMouseLeave?: React.MouseEventHandler<SVGPathElement | SVGTextElement>;
}
