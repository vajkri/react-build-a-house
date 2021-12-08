import React from "react";
import { Building } from "../../components/Building";
import { Roof } from "../../components/Roof";
import { buildings } from "./data";

export const Solution: React.FunctionComponent = () => {
  return (
    <>
      {buildings.map((b) => (
        <Building pattern={b.pattern} key={b.id}>
          <Roof shape={b.roof} />
        </Building>
      ))}
    </>
  );
};
