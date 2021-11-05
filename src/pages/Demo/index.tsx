import React from "react";
import { Building } from "../../components/Building";
import { Cloud } from "../../components/Cloud";
import { Door } from "../../components/Door";
import { Roof } from "../../components/Roof";
import { Window } from "../../components/Window";
import { PageProps } from "../types";

export const Demo: React.FunctionComponent<PageProps> = () => {
  return (
    <>
      <div className="m-cloud-wrapper">
        <Cloud baseSize="48px" />
        <Cloud baseSize="70px" topOffset="75px" delay="3s" />
        <Cloud baseSize="56px" topOffset="50px" delay="8s" />
        <Cloud baseSize="86px" topOffset="100px" delay="13s" />
        <Cloud baseSize="30px" topOffset="65px" delay="17s" />
      </div>

      <Building width="312px" height="336px">
        <Roof />
        <div className="m-window-row">
          <Window frameColor="#002057" />
          <Window frameColor="#002057" />
          <Window frameColor="#002057" />
          <Window frameColor="#002057" />
        </div>
        <Door hasStairs />
      </Building>

      <Building pattern="stripes">
        <Roof shape="hip" roofColor="#707561" />
        <div className="m-window-row">
          <Window />
          <Window />
        </div>
        <Door doorColor="#707561" />
      </Building>

      <Building width="288px" height="480px" pattern="masonry">
        <Roof roofColor="#643120" />
        <div className="m-window-row">
          <Window />
          <Window />
          <Window />
        </div>
        <div className="m-window-row">
          <Window />
          <Window />
          <Window />
        </div>
        <div className="m-window-row">
          <Window />
          <Window />
          <Window />
        </div>
        <Door doorColor="#40423d" hasStairs />
      </Building>
    </>
  );
};
