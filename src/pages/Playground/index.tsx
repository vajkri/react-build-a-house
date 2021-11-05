import React from "react";
import { Building } from "../../components/Building";
import { Door } from "../../components/Door";
import { Roof } from "../../components/Roof";
import { Window } from "../../components/Window";

export const Playground: React.FunctionComponent = () => {
  return (
    <>
      <Building>
        <Window />
      </Building>
    </>
  );
};
