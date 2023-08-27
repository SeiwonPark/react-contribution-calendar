import { createTheme } from '../../utils'
import './index.css'

interface DescriptionProps {
  textColor: string
  cx: number
  theme: string | ThemeProps
}

export default function Description({ textColor, cx, theme }: DescriptionProps) {
  const themeProps = createTheme(theme)

  const isEmojiTheme = (theme: string | ThemeProps): boolean => {
    return theme === 'emoji_positive' || theme === 'emoji_negative'
  }

  const cellStyle = (theme: string | ThemeProps, level: number) => {
    if (isEmojiTheme(theme)) {
      return { fontSize: cx }
    } else {
      return { backgroundColor: themeProps[`level${level}`], outline: '1px solid #1b1f230f' }
    }
  }

  return (
    <div className="description">
      <div className="themes">
        <span style={{ color: textColor, fontSize: cx }}>Less</span>
        <div className="cell" style={{ ...cellStyle(theme, 0) }}>
          {isEmojiTheme(theme) ? themeProps.level0 : undefined}
        </div>
        <div className="cell" style={{ ...cellStyle(theme, 1) }}>
          {isEmojiTheme(theme) ? themeProps.level1 : undefined}
        </div>
        <div className="cell" style={{ ...cellStyle(theme, 2) }}>
          {isEmojiTheme(theme) ? themeProps.level2 : undefined}
        </div>
        <div className="cell" style={{ ...cellStyle(theme, 3) }}>
          {isEmojiTheme(theme) ? themeProps.level3 : undefined}
        </div>
        <div className="cell" style={{ ...cellStyle(theme, 4) }}>
          {isEmojiTheme(theme) ? themeProps.level4 : undefined}
        </div>
        <span style={{ color: textColor, fontSize: cx }}>More</span>
      </div>
    </div>
  )
}
