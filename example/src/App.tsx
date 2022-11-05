import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import WavyBackground from 'wavy-header-react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <WavyBackground
        height={140}
        width={1100}
        amplitude={30}
        frequency={4}
        offset={100}
        color={'#06D6BC'}
        maxHeight={290}
        style={styles.wavesStyle}
        bottom
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wavesStyle: {
    bottom: 0,
    height: 360,
    zIndex: 100,
    width: '100%',
  },
});
