export const FormInput = ({ label, placeholder, type, id }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[16px] leading-[18px] text-primary" htmlFor="name">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        className="border border-[#D8D6DE] rounded-md px-4 py-2 text-[14px] leading-[24px]  placeholder:black/50 "
      />
    </div>
  );
};
