import { css } from 'styled-components/native';

const fontGenerator = (
  fontFamily: string,
  weight: number,
  size: number,
  lineHeightMultiplier: number,
  letterSpacing: number
) => css`
  font-family: ${fontFamily};
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${size * lineHeightMultiplier}px;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
  H1: fontGenerator('Diphylleia-Regular', 400, 32, 1.6, -0.3),
  H2: fontGenerator('Diphylleia-Regular', 400, 24, 1.6, -0.3),
  H3: fontGenerator('Diphylleia-Regular', 400, 20, 1.6, -0.3),
  H4: fontGenerator('Diphylleia-Regular', 400, 18, 1.6, -0.3),
  H5: fontGenerator('Diphylleia-Regular', 400, 16, 1.6, -0.3),
  H6: fontGenerator('Diphylleia-Regular', 400, 14, 1.6, -0.3),
  H7: fontGenerator('Diphylleia-Regular', 400, 12, 1.6, -0.3),

  B1: fontGenerator('RIDIBatang', 400, 32, 1.6, -0.2),
  B2: fontGenerator('RIDIBatang', 400, 24, 1.6, -0.2),
  B3: fontGenerator('RIDIBatang', 400, 20, 1.6, -0.2),
  B4: fontGenerator('RIDIBatang', 400, 16, 1.6, -0.2),
  B5: fontGenerator('RIDIBatang', 400, 14, 1.6, -0.2),
  B5Letter: fontGenerator('RIDIBatang', 400, 14, 2.0, -0.2),
  B6: fontGenerator('RIDIBatang', 400, 12, 1.6, -0.2),

  caption: fontGenerator('AppleSDGothicNeoR00', 400, 12, 1.6, -0.2),
  cursive1: fontGenerator('NanumEongGeongKwiCe', 400, 24, 1.2, -0.2),
  cursive2: fontGenerator('NanumEongGeongKwiCe', 400, 20, 1.4, 1.0),
  letterHeon: fontGenerator('Onglyph_alz_sanghee-Rg', 400, 18, 1.6, 0),
  letterSol: fontGenerator('Ownglyph_Summerinmyhouse-Rg', 400, 20, 1.4, 0),
  kakao: fontGenerator('Pretendard-Bold', 700, 14, 1.6, -0.2),
  splash: fontGenerator('Nelna_Yesam-Rg', 400, 48, 1.6, 1.0),
};

export default font;
