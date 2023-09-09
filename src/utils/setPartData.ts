export const setPartData = (
  selectedPart: string,
  setPartSchema: (schema: any) => void,
  setPartToUpdate: (part: any) => void,
  setGroup: any,
  possibleParts: any,
  frontSprocketNarrowSplineSchema: any,
  fsNarrowSpline: any,
  frontSprocketLargeSplineSchema: any,
  fsLargeSpline: any,
  rearSprocketSchema: any,
  rearSprocket: any,
  brakeDiscSchema: any,
  brakeDisc: any,
  connectingRodSchema: any,
  connectingRod: any,
  pistonKitSchema: any,
  pistonKit: any,
  valveSchema: any,
  valve: any
) => {

  switch (selectedPart) {
    case possibleParts.FSNarrowSpline:
      //setPartSchema set the correct "yup" schema for the form
      setPartSchema(frontSprocketNarrowSplineSchema);

      //When editing a item, you will see the correct data at the inputs for make, code and link
      setPartToUpdate({
        make: fsNarrowSpline.make,
        code: fsNarrowSpline.code,
        link: fsNarrowSpline.link,
      });

      //group is needed for the "sharedValueDispatch" fuction
      setGroup(possibleParts.FSNarrowSpline);
      break;
    case possibleParts.FSLargeSpline:
      setPartSchema(frontSprocketLargeSplineSchema);
      setPartToUpdate({
        make: fsLargeSpline.make,
        code: fsLargeSpline.code,
        link: fsLargeSpline.link,
      });
      setGroup(possibleParts.FSLargeSpline);
      break;
    case possibleParts.RearSprocket:
      setPartSchema(rearSprocketSchema);
      setPartToUpdate({
        make: rearSprocket.make,
        code: rearSprocket.code,
        link: rearSprocket.link,
      });
      setGroup(possibleParts.RearSprocket);
      break;
    case possibleParts.BrakeDisc:
      setPartSchema(brakeDiscSchema);
      setPartToUpdate({
        make: brakeDisc.make,
        code: brakeDisc.code,
        link: brakeDisc.link,
      });
      setGroup(possibleParts.BrakeDisc);
      break;
    case possibleParts.ConnectingRods:
      setPartSchema(connectingRodSchema);
      setPartToUpdate({
        make: connectingRod.make,
        code: connectingRod.code,
        link: connectingRod.link,
      });
      setGroup(possibleParts.ConnectingRods);
      break;
    case possibleParts.PistonKit:
      setPartSchema(pistonKitSchema);
      setPartToUpdate({
        make: pistonKit.make,
        code: pistonKit.code,
        link: pistonKit.link,
      });
      setGroup(possibleParts.PistonKit);
      break;
    case possibleParts.Valve:
      setPartSchema(valveSchema);
      setPartToUpdate({
        make: valve.make,
        code: valve.code,
        link: valve.link,
      });
      setGroup(possibleParts.Valve);
      break;
    default:
      break;
  }
};
