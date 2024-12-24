export const Branch = () => {
  return (
    <div className="pr-16">
      <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48]">
        Yetkili Kişi Bilgileri
      </h4>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="name">
              Yetkili Kişi Adı
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ahmet"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="surname">
              Yetkili Kişi Soyadı
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Berbadov"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="email">
              Yetkili Kişi E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="deneme@gmail.com"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="phone">
              Yetkili Kişi Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+905422153253"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
        </div>
      </div>
      <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48] mt-10">
        Şube Bilgileri
      </h4>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-1 flex-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branchName">
              Şube Unvanı
            </label>
            <input
              id="branchName"
              name="branchName"
              type="text"
              placeholder="Esteworld Sağlık Tic. AŞ."
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branchEmail">
              Şube E-Posta
            </label>
            <input
              id="branchEmail"
              name="branchEmail"
              type="email"
              placeholder="ırnekadam34@gmail.com"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchTaxAddress"
            >
              Şube Vergi Dairesi
            </label>
            <input
              id="branchTaxAddress"
              name="branchTaxAddress"
              type="text"
              placeholder="Üsküdar"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branchTaxNo">
              Şube Vergi No
            </label>
            <input
              id="branchTaxNo"
              name="branchTaxNo"
              type="text"
              placeholder="Tax-9832"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-1 flex-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchContantNumber"
            >
              Şube İletişim Telefonu
            </label>
            <input
              id="branchContantNumber"
              name="branchContantNumber"
              type="text"
              placeholder="+1 (609) 933-44-22"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchCountry"
            >
              Şube Ülke
            </label>
            <select
              id="branchCountry"
              name="branchCountry"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Türkiye
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branchCity">
              Şube Şehir
            </label>
            <select
              id="branchCountry"
              name="branchCountry"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                İstanbul
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branchTaxNo">
              Şube Vergi No
            </label>
            <input
              id="branchTaxNo"
              name="branchTaxNo"
              type="text"
              placeholder="Tax-9832"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col flex-1 gap-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchDistrict"
            >
              Şube Mahalle
            </label>
            <select
              id="branchDistrict"
              name="branchDistrict"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Türkiye
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchAddress"
            >
              Şube Açık Adres
            </label>
            <input
              id="branchAddress"
              name="branchAddress"
              type="text"
              placeholder="Üsküdar"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label
              className="text-[14px] text-[#4D4A48]"
              htmlFor="branchLocation"
            >
              Şube Lokasyon
            </label>
            <input
              id="branchLocation"
              name="branchLocation"
              type="text"
              placeholder="41.32134, 2.5325"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="text-transparent flex flex-col flex-1 gap-1"></div>
        </div>
      </div>
    </div>
  );
};
