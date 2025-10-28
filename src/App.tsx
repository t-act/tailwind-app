import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='min-h-screen bg-grey-100 flex flex-col items-center p-8'>
        <h1 className='text-3xl font-bold text-grey-800 mb-8'>
          おすすめのカード一覧
        </h1>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <Card
            title='カード1'
            description='TailwindCSSはユーティリティファストなCSSフレームワークです。'
          />
          <Card
            title='カード2'
            description='Reactと組み合わせると高速にモダンなUIを作成することが可能になります。'
            />
          <Card
            title='カード3'
            description='レスポンシブデザインも簡単に実現できるのが特徴です。'
          />
        </div>
      </div>
    </>
  )
}

export default App
