type Props = {
  title: string
  description: string
}

export default function Card({ title, description }: Props) {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-md bg-white'>
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
        <button className='mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'>
          詳細
        </button>
      </div>
    </div>
    )
}