import React from "react";
import { CustomSection } from "./../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const CircleImage = styled(Image)({
  borderRadius: "100%",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, ${theme.palette.primary.light} 50%)`,
  paddingInline: "1px 2px",
  fontWeight: "500" as any,
  letterSpacing: "-1px",
}));

const IntroSection = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("gyeongseok.kang@gmail.com");
    openCopySuccessSnackBar();
  };

  const [copySuccessSnackBar, setCopySuccessSnackBar] = React.useState(false);
  const openCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(true);
  };
  const closeCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(false);
  };
  const IntroSectionVAProp: IntroSectionVAProp = {
    copyEmailToClipboard: copyEmailToClipboard,
    copySuccessSnackBar: copySuccessSnackBar,
    closeCopySuccessSnackBar: closeCopySuccessSnackBar,
  };
  return <IntroSectionView {...IntroSectionVAProp} />;
};

interface IntroSectionVAProp {
  copySuccessSnackBar: boolean;
  copyEmailToClipboard: () => void;
  closeCopySuccessSnackBar: () => void;
}
const IntroSectionView = ({
  copySuccessSnackBar,
  copyEmailToClipboard,
  closeCopySuccessSnackBar,
}: IntroSectionVAProp) => {
  return (
    <CustomSection id={"Intro"}>
      <CustomSectionTitle title={"Intro"} />
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} sx={{ padding: "1rem" }}>
        <Typography variant="subtitle1" gutterBottom component="div">
          RIW 프로젝트란?
          <br />
          React Interactive Widget 이란 오픈소스 프로젝트이며, 그냥 제가 개발하면서 동적인 컴포넌트들 구현해서
          오픈스소화 시킬 목적으로 합니다.
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <IconButton onClick={() => copyEmailToClipboard()}>
          <Image src={`/icons/gmail.svg`} height={40} width={40} />
        </IconButton>
        <Link href={"https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton>
              <Image src={`/icons/linkedin.svg`} height={40} width={40} />
            </IconButton>
          </a>
        </Link>
        <Link href={"https://open.kakao.com/o/sxdXxTMd"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton>
              <Image src={`/icons/kakao.svg`} height={40} width={40} />
            </IconButton>
          </a>
        </Link>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={copySuccessSnackBar}
        autoHideDuration={5000}
        onClose={closeCopySuccessSnackBar}
        message="Copy gyeongseok.kang@gmail.com"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeCopySuccessSnackBar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </CustomSection>
  );
};

export default IntroSection;
