export const ServicesCard = ({ service, onSelectService, selectedService }) => {
  const isCardActive = selectedService.name === service.name;
  return (
    <div className="flex flex-col">
      <div className="w-[185px]">
        <img src={service.image} draggable={false} />
      </div>
      <button
        onClick={onSelectService}
        className={`${
          isCardActive ? "bg-[#A00070] font-bold" : "bg-primary font-normal"
        } cursor-pointer py-4 text-center text-white text-[16px] leading-[20px] hover:font-bold hover:bg-[#A00070] transition duration-100`}
      >
        {service.name}
      </button>
    </div>
  );
};
