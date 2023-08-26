import { createTheme } from '../../utils'
import './index.css'

interface DescriptionProps {
  textColor: string
  cx: number
  theme: string | ThemeProps
}

export default function Description({ textColor, cx, theme }: DescriptionProps) {
  const themeProps = createTheme(theme)

  return (
    <div className="description">
      <div className="themes">
        <span style={{ color: textColor, fontSize: cx }}>Less</span>
        <div className="cell" style={{ backgroundColor: themeProps.level0 }} />
        <div className="cell" style={{ backgroundColor: themeProps.level1 }} />
        <div className="cell" style={{ backgroundColor: themeProps.level2 }} />
        <div className="cell" style={{ backgroundColor: themeProps.level3 }} />
        <div className="cell" style={{ backgroundColor: themeProps.level4 }} />
        <span style={{ color: textColor, fontSize: cx }}>More</span>
      </div>
    </div>
  )
}
