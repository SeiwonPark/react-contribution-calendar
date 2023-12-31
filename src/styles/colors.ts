/**
 * This is an object containing predefined themes for the ContributionCalendar
 * component. Each theme has a string key as name and five color strings should
 * be defined from `level0` to `level4`.
 */
export const THEMES: Theme = {
  // light themes
  empty: {
    level0: '#ffffff',
    level1: '#ffffff',
    level2: '#ffffff',
    level3: '#ffffff',
    level4: '#ffffff',
  },
  grass: {
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39',
  },
  cherry: {
    level0: '#fff0f6',
    level1: '#ffdeeb',
    level2: '#faa2c1',
    level3: '#f06595',
    level4: '#a61e4d',
  },
  cherry_blossom: {
    level0: '#dedad2',
    level1: '#e4bcad',
    level2: '#df979e',
    level3: '#d7658b',
    level4: '#c80064',
  },
  pink: {
    level0: '#ffeffc',
    level1: '#ffc2f6',
    level2: '#ffa4f1',
    level3: '#ff86ed',
    level4: '#ff68e9',
  },
  ocean: {
    level0: '#ccf6ff',
    level1: '#80d0ff',
    level2: '#00d1ff',
    level3: '#00ffff',
    level4: '#0040ff',
  },
  sky: {
    level0: '#ffffff',
    level1: '#badbdb',
    level2: '#98d1d1',
    level3: '#76c8c8',
    level4: '#54bebe',
  },
  halloween: {
    level0: '#ebedf0',
    level1: '#ffee4a',
    level2: '#ffc501',
    level3: '#fe9600',
    level4: '#03001c',
  },
  winter: {
    level0: '#ebedf0',
    level1: '#b6e3ff',
    level2: '#54aeff',
    level3: '#0969da',
    level4: '#0a3069',
  },
  purquoise: {
    level0: '#dee6ee',
    level1: '#bdcddc',
    level2: '#9db4cb',
    level3: '#7c9bb9',
    level4: '#5b82a8',
  },
  mustard: {
    level0: '#cc7b00',
    level1: '#f5b40d',
    level2: '#f9d26e',
    level3: '#fbe19e',
    level4: '#fdf0cf',
  },
  gray: {
    level0: '#FFFFFF',
    level1: '#D4D4D4',
    level2: '#B4B4B4',
    level3: '#909090',
    level4: '#494848',
  },
  vomit: {
    level0: '#badbdb',
    level1: '#669999',
    level2: '#666699',
    level3: '#663399',
    level4: '#660099',
  },
  neonpunk: {
    level0: '#FFFFFF',
    level1: '#B6FFFE',
    level2: '#48FDFE',
    level3: '#F20BF8',
    level4: '#EE018F',
  },
  citypop: {
    level0: '#c2b3ff',
    level1: '#5B33FE',
    level2: '#b84dff',
    level3: '#d52dff',
    level4: '#FA43F9',
  },
  coral: {
    level0: '#fef3e7',
    level1: '#f7b267',
    level2: '#f79d65',
    level3: '#f4845f',
    level4: '#f25c54',
  },
  emoji_positive: {
    level0: '🫥',
    level1: '😢',
    level2: '😞',
    level3: '🙂',
    level4: '😃',
  },
  emoji_negative: {
    level0: '🫥',
    level1: '😃',
    level2: '🙂',
    level3: '😕',
    level4: '😢',
  },
  // dark themes
  dark_empty: {
    level0: '#000000',
    level1: '#000000',
    level2: '#000000',
    level3: '#000000',
    level4: '#000000',
  },
  dark_grass: {
    level0: '#161b22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  },
  dark_cherry: {
    level0: '#1b1819',
    level2: '#250e16',
    level3: '#2e0513',
    level1: '#5d0926',
    level4: '#a21043',
  },
  dark_cherry_blossom: {
    level0: '#1b1819',
    level1: '#5d0926',
    level2: '#a22a52',
    level3: '#c80064',
    level4: '#ffb094',
  },
  dark_pink: {
    level0: '#000000',
    level1: '#33142e',
    level2: '#7f3474',
    level3: '#cc53ba',
    level4: '#ff68e9',
  },
  dark_ocean: {
    level0: '#00004d',
    level1: '#0000b3',
    level2: '#0040ff',
    level3: '#00bfff',
    level4: '#00ffff',
  },
  dark_sky: {
    level0: '#303636',
    level1: '#616b6b',
    level2: '#99a3a3',
    level3: '#86b6b6',
    level4: '#54bebe',
  },
  dark_halloween: {
    level0: '#161b22',
    level1: '#631c03',
    level2: '#bd561d',
    level3: '#fa7a18',
    level4: '#fddf68',
  },
  dark_winter: {
    level0: '#161b22',
    level1: '#0a3069',
    level2: '#0969da',
    level3: '#54aeff',
    level4: '#b6e3ff',
  },
  dark_purquoise: {
    level0: '#303636',
    level1: '#7c8288',
    level2: '#8d9caa',
    level3: '#7c9bb9',
    level4: '#5b82a8',
  },
  dark_mustard: {
    level0: '#2a2722',
    level1: '#4d2e00',
    level2: '#cc7b00',
    level3: '#dca009',
    level4: '#ffc905',
  },
  dark_gray: {
    level0: '#333333',
    level1: '#555555',
    level2: '#777777',
    level3: '#999999',
    level4: '#D4D4D4',
  },
  dark_vomit: {
    level0: '#261339',
    level1: '#663399',
    level2: '#666699',
    level3: '#669999',
    level4: '#66cc99',
  },
  dark_neonpunk: {
    level0: '#3E1340',
    level1: '#EE018F',
    level2: '#FF00FE',
    level3: '#41FEFF',
    level4: '#BFFFFC',
  },
  dark_citypop: {
    level0: '#514c67',
    level1: '#5B33FE',
    level2: '#B74FFB',
    level3: '#D52DE5',
    level4: '#FA43F9',
  },
  dark_coral: {
    level0: '#504949',
    level2: '#df6d68',
    level3: '#f25c54',
    level1: '#f79d65',
    level4: '#f7b267',
  },
}
