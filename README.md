# wavy-header-react-native

a wavy header background for react-native

## Installation

```sh
npm install wavy-header-react-native
```

## Usage

```js
import { WavyBackground } from 'wavy-header-react-native';

// ...

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
/>;
```

## Example

<div>
<img src="https://github.com/ShahirZain/wavy-header-react-native/tree/main/example/demo/combine_images.jpeg" alt="screens" />
</div>

## Utilization

```js
import WavyBackground from 'react-native-wavy-background';

// ...

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
/>;
```

### Props:

| Name      | Default     | Required | Description                          |
| --------- | ----------- | -------- | ------------------------------------ |
| width     | null        | yes      | width of the wave.                   |
| height    | null        | yes      | height of the wave.                  |
| frequency | null        | yes      | number of waves in the given length. |
| maxHeight | null        | yes      | maximum area covered by wave.        |
| style     | null        | yes      | style of the wave                    |
| amplitude | null        | yes      | distance from rest to crest.         |
| offset    | null        | yes      | height of two wave shapes.           |
| color     | `'#06D6BC'` | no       | Color inside the wave shape.         |
| bottom    | `'false'`   | no       | If the wave need to be in bottom.    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
