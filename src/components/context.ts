import { createContext, useContext } from 'react'
import type { CSSObject } from '../types'

export interface GroupContext {
  styles: {
    element: CSSObject
  }
  elementSize: string
}

// - GroupContext型もしくはundefinedを受け付ける
// - デフォルト値はundefined
const GroupContext = createContext<GroupContext | undefined>(undefined)

// 子コンポーネントにコンテキスト値を提供するために使用
export const GroupProvider = GroupContext.Provider

export const useGroup = () => {
  // useContextでGroupContextの値を取得
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroup must be used within GroupProvider')
  }
  return context
}
