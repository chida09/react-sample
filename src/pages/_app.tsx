import "@/styles/globals.css";
import { Element, Group } from '../components';

/**
 * 実行順序を時系列で示すと次の順になる
 * Group コンポーネントの関数本体が実行
 * baseStyles オブジェクトが作成
 * GroupProvider がレンダリング（コンテキスト値を設定）
 * children（Element）が実行
 * Element内のuseGroup()が実行
 * 最終的なdiv要素がレンダリング
 */

/**
 * 最初に <Group size="md"> が実行される
 * 次に <Element />が実行される
 */
export default function App() {
  return (
    <>
      <div>
        <span>Group size=md</span>
        <Group size="md">
          <Element />
        </Group>
      </div>
      <div>
        <span>Group size=lg</span>
        <Group size="lg">
          <Element />
        </Group>
      </div>
    </>
  );
}
