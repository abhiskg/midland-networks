type TestimonialDataType = {
  id: string;
  name: string;
  image: string;
};

export default function TestimonialCard({
  data,
}: {
  data: TestimonialDataType;
}) {
  const { image, name } = data;
  return (
    <div className='bg-white flex  justify-between rounded-xl gap-5 md:p-14 p-7 overflow-hidden '>
      <div className='flex flex-col justify-between'>
        <div>
          <h2 className='md:text-3xl text-2xl font-medium'>{name}</h2>
          <p className='font-medium text-primary-100 text-sm md:mt-4 mt-2'>
            Watch Video
          </p>
        </div>
        <div className='sm:flex hidden items-center gap-5'>
          <img
            src={image}
            alt=''
            className='object-contain md:w-20 w-14 h-auto '
          />
          <div>
            <h3 className='font-medium'>Adrian Scoyne</h3>
            <p className='text-primaryText-200 text-sm'>
              INFRASTRUCTURE ENGINEER
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt=''
          className='object-contain md:w-96 sm:w-64 w-44 h-auto'
        />
      </div>
    </div>
  );
}
