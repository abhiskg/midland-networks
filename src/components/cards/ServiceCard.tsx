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
    <div className='bg-white flex flex-col select-none w-[25.1rem] h-[31rem] justify-between rounded-xl gap-5 overflow-hidden shadow-md hover:scale-[1.015] my-1 hover:shadow-lg cursor-pointer transition-transform duration-500 ease-out  '>
      <div className='mx-7 mt-9 mb-8'>
        <h3 className='text-[#6E6E73] font-semibold'>{name}</h3>
        <h4 className='font-semibold sm:text-3xl text-2xl mt-2'>{title}</h4>
        {details && <p className='text-sm mt-2'>{details}</p>}
      </div>
      <img src={images} alt='' className='object-contains w-full h-52' />
    </div>
  );
}
