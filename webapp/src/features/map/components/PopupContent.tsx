import ImageWithSkeleton from './ImageWithSkeleton'

export default function PopupContent({
  src,
  timestamp
}: {
  src: string
  timestamp: string
}) {
  return (
    <div className="w-full">
      {/* <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="w-48 border border-base-300 rounded-md" />
        <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
      </div> */}
      <ImageWithSkeleton src={src} timestamp={timestamp} onClick={() => {}} />
    </div>
  )
}