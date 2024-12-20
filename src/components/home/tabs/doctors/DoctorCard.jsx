export const DoctorCard = ({ doctor, setSelectedDoctor }) => {
  return (
    <div className="flex flex-col max-w-[110px] items-center justify-center">
      <img
        src="./home/doktor1.png"
        alt="doctorImg"
        className=" object-cover object-center"
      />
      <button
        onClick={() => setSelectedDoctor(doctor)}
        className="text-[14px] flex flex-col items-center gap-2 leading-[17px] whitespace-wrap relative w-full bg-primary text-white pt-2 pb-4  px-4  h-[114px]"
      >
        <span className="font-semibold">{doctor.name}</span>
        <span>{doctor.expertise}</span>
      </button>
    </div>
  );
};
