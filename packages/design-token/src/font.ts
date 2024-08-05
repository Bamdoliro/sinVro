import { css } from 'styled-components/native';

const fontGenerator = (
  fontFamily: string,
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-family: ${fontFamily};
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
  H1: fontGenerator('Diphylleia-Regular', 400, 32, 160, -0.3),
  H2: fontGenerator('Diphylleia-Regular', 400, 24, 160, -0.3),
  H3: fontGenerator('Diphylleia-Regular', 400, 20, 160, -0.3),
  H4: fontGenerator('Diphylleia-Regular', 400, 18, 160, -0.3),
  H5: fontGenerator('Diphylleia-Regular', 400, 16, 160, -0.3),
  H6: fontGenerator('Diphylleia-Regular', 400, 14, 160, -0.3),
  H7: fontGenerator('Diphylleia-Regular', 400, 12, 160, -0.3),

  B1: fontGenerator('RIDIBatang', 400, 32, 160, -0.2),
  B2: fontGenerator('RIDIBatang', 400, 24, 160, -0.2),
  B3: fontGenerator('RIDIBatang', 400, 20, 160, -0.2),
  B4: fontGenerator('RIDIBatang', 400, 16, 160, -0.2),
  B5: fontGenerator('RIDIBatang', 400, 14, 160, -0.2),
  B6: fontGenerator('RIDIBatang', 400, 12, 160, -0.2),
  B6_letter: fontGenerator('RIDIBatang', 400, 12, 200, 2.0),

  caption: fontGenerator('AppleSDGothicNeoR00', 400, 12, 160, -0.2),
  cursive1: fontGenerator('NanumEongGeongKwiCe', 400, 24, 120, -0.2),
  cursive2: fontGenerator('NanumEongGeongKwiCe', 400, 20, 140, 1.0),
};

export default font;
