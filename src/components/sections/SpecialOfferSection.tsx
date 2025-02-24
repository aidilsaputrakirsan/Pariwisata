import React from "react";
import Header from "../common/Header";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function SpecialOfferSection() {
  const data = [
    {
      imageUrl: "/images/so_1.jpg",
      location: "Paket Edukasi Konservasi",
      description:
        "3 hari 2 malam: Jelajahi hutan tropis, belajar menanam bibit pohon, dan mengenal satwa liar. Termasuk penginapan sederhana di dekat Air Panas Pemapak.",
      amount: "1.500.000",
    },
    {
      imageUrl: "/images/so_2.jpg",
      location: "Paket Relaksasi & Terapi",
      description:
        "2 hari 1 malam: Berendam di sumber air panas alami, terapi pijat tradisional, dan wisata kuliner lokal. Cocok untuk melepas penat.",
      amount: "1.000.000",
    },
    {
      imageUrl: "/images/so_3.jpg",
      location: "Paket Budaya & Kuliner",
      description:
        "2 hari 1 malam: Mengunjungi desa sekitar Pemapak, mencicipi masakan tradisional Berau, serta belajar kesenian lokal.",
      amount: "800.000",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between items-end">
        <div>
          <Header
            title="Penawaran Spesial"
            description="Lihat paket wisata unggulan dan diskon terbatas di Air Panas Pemapak."
          />
        </div>
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

      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <SpecialOfferCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SpecialOfferSection;
