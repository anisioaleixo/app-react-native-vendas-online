import { useMemo } from 'react';
import { TextProps as TestPropsNative } from 'react-native';

import { ContainerText } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TestPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const handlefontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);
  return <ContainerText fontSize={handlefontSize} color={color} {...props} />;
};
export default Text;
