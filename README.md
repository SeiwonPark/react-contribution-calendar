# react-contribution-calendar

![npm](https://img.shields.io/npm/v/react-contribution-calendar?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact-contribution-calendar) ![NPM](https://img.shields.io/npm/l/react-contribution-calendar)

A GitHub-like contribution calendar component for React, built with Vite and TypeScript. This provides a visual representation of contribution activity, similar to the contribution graph seen on a GitHub profile.

<br />

## Installation

```bash
$ npm i react-contribution-calendar
```

> **Note**  
> Add --save if you are using npm < 5.0.0

<br />

## Demo

[Live Demo](https://codepen.io/yaeheechoe/pen/wvRwJbP)

<br/>

## Usage

```js
import { ContributionCalendar } from 'react-contribution-calendar'

const data = [
  {
    '2020-04-20': {
      level: 2,
    }
  },
  {
    '2023-07-08': {
      level: 1,
    },
  },
  {
    '2023-07-09': {
      level: 4,
      data: {},
    },
  },
  {
    '2023-03-31': {
      level: 3,
      data: {
        myKey: 'my data',
      },
    },
  },
]

<ContributionCalendar
  data={data}
  start="2020-04-04"
  end="2023-05-19"
  textColor="#000000"
  includeBoundary={true}
  theme="grass"
  onCellClick={(e, data) => console.log(data)}
/>
```

<br />

## APIs

### `ContributionCalendar`

`ContributionCalendar` is the main component of this library. It takes a data property, which is an array of objects representing the contribution data, and a theme property to customize its appearance.

- **`data`**: An array of objects, where each object has a date string(`YYYY-MM-DD` format) as key, and an `InputDataProps` object as value. Defaults to `[]`.

  - An example data is as follows:
    ```javascript
    const data = [
      {
        '2023-07-08': {
          level: 3,
          data: {
            myKey: 'my data',
          },
        },
      },
      {
        '2023-07-09': {
          level: 1, // `data` attribute could be omitted
        },
      },
    ]
    ```

- **`start`**: Optional. The starting date for the calendar to start, defaults to current year's January 1st(`YYYY-MM-DD` format).
- **`end`**: Optional. The ending date for the calendar to end, defaults to current year's December 31st(`YYYY-MM-DD` format).
- **`textColor`**: Optional. The color of indexes. String color code format.
- **`includeBoundary`**: Optional. Whethere to include the boundary cells in the starting or ending date column, defaults to `true`.
- **`theme`**: Optional. A string that represents a predefined theme name, or an object with custom theme colors. Defaults to `grass`.
- **`onCellClick`**: Optional. An onClick mouse event on each table cell.

<br />

### `createTheme`

`createTheme` is a helper function to create custom themes. It takes a string representing a predefined theme name or an object containing custom theme colors. This returns a theme object(`ThemeProps`).

<br />

## Themes

You can customize the appearance of the `<ContributionCalendar />` with the theme property. We provide several built-in themes.

```javascript
// Replace `theme` attribute with belows
<ContributionCalendar data={[]} theme={'grass'} />
```

### Light Themes

#### `grass`

<img src="./images/grass.png" alt="grass" with=600 />

#### `pink`

<img src="./images/pink.png" alt="pink" with=600 />

#### `halloween`

<img src="./images/halloween.png" alt="halloween" with=600 />

#### `winter`

<img src="./images/winter.png" alt="winter" with=600 />

#### `cherry`

<img src="./images/cherry.png" alt="cherry" with=600 />

#### `cherry_blossom`

<img src="./images/cherry_blossom.png" alt="cherry_blossom" with=600 />

#### `sky`

<img src="./images/sky.png" alt="sky" with=600 />

#### `purquoise`

<img src="./images/purquoise.png" alt="purquoise" with=600 />

#### `blue_pop`

<img src="./images/blue_pop.png" alt="blue_pop" with=600 />

#### `mustard`

<img src="./images/mustard.png" alt="mustard" with=600 />

<br />

### Dark Themes

#### `dark_grass`

<img src="./images/dark_grass.png" alt="dark_grass" with=600 />

#### `dark_pink`

<img src="./images/dark_pink.png" alt="dark_pink" with=600 />

#### `dark_halloween`

<img src="./images/dark_halloween.png" alt="dark_halloween" with=600 />

#### `dark_winter`

<img src="./images/dark_winter.png" alt="dark_winter" with=600 />

#### `dark_blue`

<img src="./images/dark_blue.png" alt="dark_blue" with=600 />

#### `dark_ocean`

<img src="./images/dark_ocean.png" alt="dark_ocean" with=600 />

#### `dark_vomit`

<img src="./images/dark_vomit.png" alt="dark_vomit" with=600 />

<br />

### Custom Theme

```javascript
import { ContributionCalendar, createTheme } from 'react-contribution-calendar'

function App() {
  /* Define your custom theme */
  const customTheme = createTheme({
    level0: '#ebedf0',
    level1: '#9be9a8',
    level2: '#40c463',
    level3: '#30a14e',
    level4: '#216e39',
  })

  return <ContributionCalendar data={[]} theme={customTheme} />
}
```

Or you can set theme properties directly,

```javascript
import { ContributionCalendar } from 'react-contribution-calendar'

function App() {
  return (
    <ContributionCalendar
      data={[]}
      theme={{
        /* Assign theme properties directly */
        level0: '#ebedf0',
        level1: '#9be9a8',
        level2: '#40c463',
        level3: '#30a14e',
        level4: '#216e39',
      }}
    />
  )
}
```
