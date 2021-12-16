import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CustomSectionTitle } from "src/component/SectionTitle";
import ScrollAnimatedNumber from "src/widget/scrollAnimatedNumber";
import TextField from "@mui/material/TextField";
import { CustomSection } from "src/component/CustomSection";
import { Typography } from "@mui/material";
import MuiInput from "@mui/material/Input";

const ScrollAnimatedNumberSection = () => {
  const ScrollAnimatedNumberSectionVAProp: ScrollAnimatedNumberSectionVAProp = {};
  return <ScrollAnimatedNumberSectionView {...ScrollAnimatedNumberSectionVAProp} />;
};

interface ScrollAnimatedNumberSectionVAProp {}
const ScrollAnimatedNumberSectionView = ({}: ScrollAnimatedNumberSectionVAProp) => {
  const [randomNumber, setRandomNumber] = React.useState<number | string>(10000);
  const [fontSize, setFontSize] = React.useState<number>(60);
  const [prefix, setPrefix] = React.useState<string>("$");
  const [suffix, setSuffix] = React.useState<string>("원");
  const [bgColor, setBgColor] = React.useState<string>("#888888");

  const handleFontSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value);
  };
  const handlePrefix = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };
  const handleSuffix = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuffix(event.target.value);
  };
  const handleBgColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value);
  };

  return (
    <CustomSection id={"ScrollAnimatedNumber"}>
      <CustomSectionTitle subTitle={"ScrollAnimatedNumber"} />

      <Stack spacing={5} direction="column">
        <Stack spacing={5} direction="row" alignItems={"center"}>
          <Button
            variant="contained"
            onClick={() => {
              setRandomNumber(Math.floor(Math.random() * 10000001));
            }}
          >
            랜덤 수 생성
          </Button>
          <ScrollAnimatedNumber text={randomNumber} />
        </Stack>
        <Stack spacing={5} direction="row" alignItems={"center"}>
          <MuiInput
            value={fontSize}
            size="small"
            onChange={handleFontSize}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <ScrollAnimatedNumber text={randomNumber} fontSize={fontSize} />
        </Stack>
        <Stack spacing={5} direction="row" alignItems={"center"}>
          <TextField id="outlined-name" label="BgColor" value={bgColor} onChange={handleBgColor} />
          <ScrollAnimatedNumber text={randomNumber} fontSize={40} backgroundColor={bgColor} />
        </Stack>
        <Stack spacing={5} direction="row" alignItems={"center"}>
          <TextField id="outlined-name" label="Prefix" value={prefix} onChange={handlePrefix} />
          <ScrollAnimatedNumber text={randomNumber} fontSize={20} prefix={prefix} />
        </Stack>
        <Stack spacing={5} direction="row" alignItems={"center"}>
          <TextField id="outlined-name" label="Suffix" value={suffix} onChange={handleSuffix} />

          <ScrollAnimatedNumber text={randomNumber} fontSize={20} suffix={suffix} />
        </Stack>
      </Stack>
    </CustomSection>
  );
};

export default ScrollAnimatedNumberSection;
