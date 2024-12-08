import React from 'react'
import { useGroup } from './context'

export const Element: React.FC = () => {
  // 4. useGroup()が実行され、GroupProviderから値を取得
  const { styles, elementSize } = useGroup()

  // 5. 最後にdiv要素がレンダリング
  return (
    <div
      style={{
        ...styles.element,
        width: elementSize,
        height: elementSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      ◆
    </div>
  )
}
