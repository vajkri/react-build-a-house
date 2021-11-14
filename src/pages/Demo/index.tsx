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
        <Cloud baseSize="4.8vh" />
        <Cloud baseSize="7vh" topOffset="7.5vh" delay="3s" />
        <Cloud baseSize="5.6vh" topOffset="5vh" delay="8s" />
        <Cloud baseSize="8.6vh" topOffset="10vh" delay="13s" />
        <Cloud baseSize="3vh" topOffset="6.5vh" delay="17s" />
      </div>

      <Building width="31.2vh" height="33.6vh">
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

      <Building width="28.8vh" height="48vh" pattern="masonry">
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
