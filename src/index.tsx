import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Polygon, Svg } from 'react-native-svg';

interface Props {
  frequency: number;
  amplitude: number;
  width: number;
  height: number;
  offset: number;
  maxHeight: number;
  bottom?: boolean;
  color?: string;
  style?: object;
}

const WavyBackground = (props: Props) => {
  const {
    frequency,
    amplitude,
    width,
    height,
    offset,
    color = '#06D6BC',
    bottom = false,
    style,
    maxHeight,
  } = props;

  const [path, setPath] = useState<string | undefined>();

  const getWave = useCallback(() => {
    const units = (frequency * width) / 100;
    let wavePath = '100 0, 0 0 ';

    for (let i = 0; i <= 100; i++) {
      let val = (
        ((offset + amplitude * Math.cos(i / units)) / height) *
        100
      ).toFixed(2);
      wavePath += `, ${i} ${val}`;
    }

    setPath(wavePath);
  }, [amplitude, frequency, height, offset, width]);

  useEffect(() => {
    getWave();
  }, [
    path,
    frequency,
    amplitude,
    width,
    height,
    offset,
    bottom,
    color,
    getWave,
  ]);

  return (
    <View
      style={{
        transform: [{ rotate: bottom ? '180deg' : '0deg' }],
      }}
    >
      <Svg
        style={style}
        width="100%"
        height={maxHeight}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Polygon points={path} fill={color} />
      </Svg>
    </View>
  );
};

export default WavyBackground;
