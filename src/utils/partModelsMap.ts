import BrakeDisc from "@/models/BrakeDiscModel";
import ConnectingRod from "@/models/ConnectigRodModel";
import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import RearSprocket from "@/models/RearSprocketModel";
import Valve from "@/models/ValveModel";
import PistonKit from "@/models/pistonKitModel";
import { Model, Document } from "mongoose";

import { possibleParts } from "@/types-enums-interfaces/partEnum";
type PartModel = Model<Document<any, any, any>, {}, {}, {}>;

export const partModelArray: Record<possibleParts, PartModel> = {
    [possibleParts.FSLargeSpline]: FrontSprocketLargeSpline,
    [possibleParts.FSNarrowSpline]: FrontSprocketNarrowSpline,
    [possibleParts.RearSprocket]: RearSprocket,
    [possibleParts.BrakeDisc]: BrakeDisc,
    [possibleParts.ConnectingRods]: ConnectingRod,
    [possibleParts.PistonKit]: PistonKit,
    [possibleParts.Valve]: Valve,
  };