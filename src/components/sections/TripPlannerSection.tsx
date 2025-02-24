import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import TripPlannerCard from "../cards/TripPlannerCard";

function TripPlannerSection() {
  const data = [
    {
      imageUrl: "/images/tp_1.jpg",
      title: "Paket Petualangan",
      description: "Jelajahi Hutan Berau",
      amount: "99",
      duration: "4 Hari",
    },
    {
      imageUrl: "/images/tp_2.jpg",
      title: "Paket Relaksasi",
      description: "Nikmati Air Panas Pemapak",
      amount: "120",
      duration: "3 Hari",
    },
    {
      imageUrl: "/images/tp_3.jpg",
      title: "Paket Budaya",
      description: "Wisata Kuliner & Adat Lokal",
      amount: "80",
      duration: "2 Hari",
    },
    {
      imageUrl: "/images/tp_4.jpg",
      title: "Paket Komplit",
      description: "Edukasi + Petualangan + Relaksasi",
      amount: "200",
      duration: "5 Hari",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <Header
          title="Rencana Perjalanan"
          description="Temukan paket wisata yang sesuai dengan minat Anda, mulai dari konservasi, relaksasi, hingga petualangan hutan."
        />
        <div className="relative inline-block z-10 mt-[35px]">
          <MainButton text="Lihat semua rencana" classes="w-[180px]" />
          <div className="absolute -top-4 -left-4 w-[43px] h-[43px] bg-[#1A3C2A] -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-[43px] h-[43px] bg-[#9EB7A2] -z-10"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TripPlannerCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default TripPlannerSection;
