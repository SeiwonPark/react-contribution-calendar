interface KeyValuePair {
  [key: string]: number | string
}

interface InputDataProps {
  level: number
  data?: object
}

interface InputData {
  [key: string]: InputDataProps
}

interface ThemeProps {
  level0: string
  level1: string
  level2: string
  level3: string
  level4: string
}

interface Theme {
  [key: string]: ThemeProps
}
