import React from "react";

export const MeasurementDistributionTips = () => {
  return (
    <div className="rounded-lg border border-gray-700 p-4 text-white">
      <p>
        💡 Please note that the measurement distributions in our illustration
        may differ from the distribution of the original product. For instance,
        what we refer to as size A may correspond to their size C
      </p>
    </div>
  );
};

export const ReutilisableTip = ({ text }: { text: string }) => {
  return (
    <div>
      <p>💡 {text} </p>
    </div>
  );
};
