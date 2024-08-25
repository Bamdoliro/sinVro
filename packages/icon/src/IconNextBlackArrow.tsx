import React, { SVGProps } from 'react';
import { Svg, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const IconNextBlackArrow = ({ width, height }: SVGProps<SVGSVGElement>) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 65 47" fill="none">
      <Rect width="65" height="47" fill="url(#pattern0_4440_428)" />
      <Defs>
        <Pattern
          id="pattern0_4440_428"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use href="#image0_4440_428" transform="scale(0.0153846 0.0212766)" />
        </Pattern>
        <Image
          id="image0_4440_428"
          width="65"
          height="47"
          href="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export default IconNextBlackArrow;
