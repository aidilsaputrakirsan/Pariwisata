import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  imageUrl: string;
  location: string;
  description: string;
  amount: string; // string: "1.500.000"
}

function SpecialOfferCard({ imageUrl, location, description, amount }: IProps) {
  return (
    <div className="w-full">
      <div>
        <img
          src={imageUrl}
          alt="Gambar Penawaran Khusus"
          className="h-[286px] w-full rounded-t-[26px] object-cover"
        />
      </div>
      <div className="bg-[#FFF8F1] py-[40px] px-[24px]">
        <p>{location}</p>
        <div>
          <img src="/images/star_group.png" alt="Rating" />
        </div>
        <p className="py-[24px]">{description}</p>

        <div className="flex flex-col gap-2 md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <p className="text-customGray">Mulai</p>
            {/* Ubah simbol dari Euro => Rupiah */}
            <p className="text-primary text-[40px]">Rp {amount}</p>
          </div>

          <MainButton text="Lihat Detail" classes="w-[130px]" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOfferCard;
