import type { CSSObject } from '../types'
import { GroupProvider } from './context'

interface GroupProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Group: React.FC<GroupProps> = ({ children, size = 'md' }) => {
  // 1. baseStylesオブジェクトが作成される
  const baseStyles: { element: CSSObject } = {
    element: {
      color: 'blue',
      fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px'
    }
  }

  // 2. GroupProviderがレンダリングされ、valueがセットされる
  return (
    <GroupProvider
      value={{
        styles: baseStyles,
        elementSize: size === 'sm' ? '24px' : size === 'md' ? '32px' : '40px'
      }}
    >
      <div className="group">
        {/* 3. この時点でchildrenはまだ実行されない */}
        {children}
      </div>
    </GroupProvider>
  )
}
