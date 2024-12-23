export const DashboardHeader = () => {
  return (
    <div
      className="shadow-xl rounded-lg flex justify-end items-center px-4 py-3
    "
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img alt="flag" src="./dashboard/flag.png" />
          <span className="text-[16px] leading-[21px] text-[#6E6B7B]">
            English
          </span>
        </div>
        <button className="relative">
          <img alt="cart" src="./dashboard/cart.png" />
          <p className="absolute -top-2 -right-2 rounded-full w-[18px] flex items-center justify-center text-white h-[18px] text-sm bg-[#7367F0]">
            8
          </p>
        </button>
        <button className="relative">
          <img alt="cart" src="./dashboard/notification.png" />
          <p className="absolute -top-2 -right-2 rounded-full w-[18px] flex items-center justify-center text-white h-[18px] text-sm bg-[#EA5455]">
            4
          </p>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[16px] leading-[21px] text-[#6E6B7B]">
              John Doe
            </span>
            <span className="text-[14px] leading-[18px] text-[#B9B9C3]">
              Admin
            </span>
          </div>
          <div className="relative">
            <img
              alt="user"
              src="./dashboard/person.png"
              className="bg-[#1B998B] rounded-full"
            />
            <div className="w-2 h-2 rounded-full p-1 absolute -bottom-0 -right-0  bg-green-400 border-2 border-white">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
