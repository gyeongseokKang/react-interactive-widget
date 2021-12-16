import * as React from "react";
import TopBar from "../src/topBar/TopBar";
import IntroSection from "src/section/IntroSection";
import WidgetSection from "src/section/WidgetSection";
import ScrollToTopBtn from "src/component/button/ScrollToTopBtn";

export default function Index() {
  return (
    <>
      <TopBar />
      <IntroSection />
      <WidgetSection />
      <ScrollToTopBtn />
    </>
  );
}
