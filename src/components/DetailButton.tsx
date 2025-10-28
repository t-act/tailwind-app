type Props = {
  detailDescription: string
}

export default function DetailButton ({ detailDescription }: Props) {
  return (
    <div className='p-4'>
        <p className='text-sm text-gray-600'>{detailDescription}</p>
    </div>
  )
}