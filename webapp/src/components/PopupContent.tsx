import { getJPDateTime } from '@/utils/datetime'

export default function PopupContent({
  imageUrl,
  position,
  timestamp,
}: {
  imageUrl: string
  position: [number, number]
  timestamp: string
}) {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <img src={imageUrl} alt="photo" className="rounded shadow" />
        <div className='text-center'>
          <p className="text-sm font-semibold" style={{ margin: 0 }}>{position[0]}, {position[1]}</p>
          <p className="" style={{ margin: 0 }}>{getJPDateTime(timestamp)}</p>
        </div>
      </div>
    </div>
  )
}