import {
  BrakeDisc,
  ConnectingRod,
  FSLargeSpline,
  FSNarrowSpline,
  PistonKit,
  RearSprocket,
} from "@/Components";
import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { possibleParts } from "@/types-enums-interfaces/partEnum";

interface DisplaySVGProps extends SVGProps {
  control: any;
  errors: any;
  part: possibleParts;
}

export const DisplaySVG = ({
  part,
  control,
  errors,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: DisplaySVGProps) => {
  switch (part) {
    case possibleParts.FSNarrowSpline:
      return (
        <FSNarrowSpline
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    case possibleParts.FSLargeSpline:
      return (
        <FSLargeSpline
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    case possibleParts.RearSprocket:
      return (
        <RearSprocket
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    case possibleParts.BrakeDisc:
      return (
        <BrakeDisc
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
      case possibleParts.ConnectingRods:
      return (
        <ConnectingRod
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    case possibleParts.PistonKit:
      return (
        <PistonKit
          control={control}
          errors={errors}
          hoveredClass={hoveredClass}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    default:
      break;
  }
};
