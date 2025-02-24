import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/t_1.png",
      review:
        "Saya sangat terkesan dengan suasana alam di Air Panas Pemapak. Air panasnya benar-benar menyegarkan dan masyarakat lokalnya ramah. Pasti akan berkunjung lagi!",
      name: "Siti Aminah",
      position: "Wisatawan dari Samarinda",
    },
    {
      imageUrl: "/images/t_2.png",
      review:
        "Paket edukasi konservasi di Pemapak benar-benar membuka wawasan saya. Menanam bibit pohon di hutan Berau memberi pengalaman tak terlupakan.",
      name: "Andi Pratama",
      position: "Mahasiswa Pecinta Alam",
    },
    {
      imageUrl: "/images/t_3.png",
      review:
        "Kolaborasi KLHK dan Pemda Berau patut diacungi jempol. Fasilitas cukup memadai dan lingkungan terjaga. Semoga makin berkembang!",
      name: "Dewi Lestari",
      position: "Penikmat Wisata Alam",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Pengalaman Wisatawan"
            description="Beberapa testimoni seru dari pengunjung Air Panas Pemapak"
            isLongUnderline
          />
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TestimonialCard {...item} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-16 md:mt-[100px]">
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              className="w-[40px]"
              alt="Navigasi Kiri"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="/images/right_icon.svg"
              alt="Navigasi Kanan"
              className="w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
