import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SettingIcons from "./component/SettingIcons";
import TopBarSectionItem from "./component/TopBarSectionItem";
import useWindowDimensions from "src/utils/customHook/useWindowDimensions";
import TopBarMenu from "./component/TopBarMenu";

export default function TopBar() {
  const { width } = useWindowDimensions();
  const [menuComponent, setMenuComponent] = useState(<HorizontalMenu />);

  useEffect(() => {
    if (width > 900) {
      setMenuComponent(<HorizontalMenu />);
    } else {
      setMenuComponent(<VerticalMenu />);
    }
  }, [width]);

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, bottom: "auto", opacity: "0.8" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            KANG GYEONG SEOK
          </Typography>
          {menuComponent}
          <SettingIcons />
        </Toolbar>
      </AppBar>
    </>
  );
}

const VerticalMenu = () => {
  return (
    <Stack justifyContent={"flex-end"} alignItems={"flex-end"} flex={1}>
      <TopBarMenu>
        <TopBarSectionItem to={"Intro"} top={false} />
        <TopBarSectionItem to={"Widget"} top={false} />
      </TopBarMenu>
    </Stack>
  );
};

const HorizontalMenu = () => {
  return (
    <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} flex={1}>
      <div style={{ display: "flex" }}>
        <TopBarSectionItem to={"Intro"} />
        <TopBarSectionItem to={"Widget"} />
      </div>
    </Stack>
  );
};
