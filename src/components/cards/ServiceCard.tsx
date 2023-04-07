type ServiceDataType = {
  id: string;
  name: string;
  title: string;
  images: string;
  details?: string;
};

export default function ServiceCard({ data }: { data: ServiceDataType }) {
  const { images, name, title, details } = data;
  return (
    <div className='bg-white flex flex-col justify-between rounded-xl gap-5 overflow-hidden h-96 shadow-md hover:scale-[1.015] hover:shadow-lg cursor-pointer transition-transform duration-300 ease-out '>
      <div className='mx-7 mt-7 mb-8'>
        <h3 className='text-[#6E6E73] font-medium'>{name}</h3>
        <h4 className='font-semibold text-2xl'>{title}</h4>
        {details && <p className='text-sm'>{details}</p>}
      </div>
      <img src={images} alt='' className='object-contains w-full h-52' />
    </div>
  );
}
