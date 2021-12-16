import * as React from "react";
import ScrollAnimatedNumberSection from "src/widget/scrollAnimatedNumber/ScrollAnimatedNumberSection";

const WidgetSection = () => {
  const WidgetSectionVAProp: WidgetSectionVAProp = {};
  return <WidgetSectionView {...WidgetSectionVAProp} />;
};

interface WidgetSectionVAProp {}
const WidgetSectionView = ({}: WidgetSectionVAProp) => {
  return (
    <>
      <ScrollAnimatedNumberSection />
    </>
  );
};

export default WidgetSection;
