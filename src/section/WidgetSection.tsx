import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CustomSection } from "../component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";
import ScrollAnimatedNumber from "src/widget/scrollAnimatedNumber";
import TextField from "@mui/material/TextField";

const WidgetSection = () => {
  const WidgetSectionVAProp: WidgetSectionVAProp = {};
  return <WidgetSectionView {...WidgetSectionVAProp} />;
};

interface WidgetSectionVAProp {}
const WidgetSectionView = ({}: WidgetSectionVAProp) => {
  const [randomNumber, setRandomNumber] = React.useState<number | string>(10000);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRandomNumber(event.target.value);
  };

  return (
    <CustomSection id={"Widget"}>
      <CustomSectionTitle
        title={"Widget"}
        // subTitle={"혁신적이고 가치있는 서비스를 개발하고, 의미있고 제대로된 제품을 만들고 있습니다."}
      />
      <Stack spacing={5} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            setRandomNumber(Math.floor(Math.random() * 10000001));
          }}
        >
          랜덤 수 생성
        </Button>
        <TextField id="outlined-name" label="랜덤수생성" value={randomNumber} onChange={handleChange} />
        <ScrollAnimatedNumber text={randomNumber} fontSize={40} backgroundColor={"red"} />
        <ScrollAnimatedNumber text={randomNumber} fontSize={30} />
        <ScrollAnimatedNumber text={randomNumber} fontSize={20} prefix={"$"} />
        <ScrollAnimatedNumber text={randomNumber} fontSize={20} suffix={"원"} />
      </Stack>
    </CustomSection>
  );
};

export default WidgetSection;
