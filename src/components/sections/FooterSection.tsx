import React from "react";

function FooterSection() {
  const menus = ["Beranda", "Jelajahi", "Wisata", "Blog", "Harga"];
  const informations = [
    "Destinasi",
    "Bantuan",
    "Syarat & Ketentuan",
    "Kebijakan Privasi",
  ];

  const contacts = [
    "+62 123 456 789",
    "info@pemapak-berau.go.id",
    "Jl. Hutan Lestari No. 45, Berau",
  ];

  const socials = [
    "/images/facebook.png",
    "/images/pinterest.png",
    "/images/instagram.png",
    "/images/twitter.png",
  ];

  return (
    <section className="bg-[#1A3C2A] text-white pb-[140px] px-4 xl:px-[182px] flex flex-col gap-8 md:flex-row justify-between pt-[240px]">
      <div>
        <div>
          <img src="/images/footer_logo.png" alt="Logo Air Panas Pemapak" />
        </div>
        <p>© Air Panas Pemapak 2025. All rights reserved.</p>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Menu</p>
        <div className="flex flex-col gap-3">
          {menus.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Informasi</p>
        <div className="flex flex-col gap-3">
          {informations.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Kontak</p>
        <div className="flex flex-col gap-3">
          {contacts.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Ikuti Kami</p>
        <div className="flex gap-3 items-center">
          {socials.map((item, index) => (
            <div key={index}>
              <img src={item} alt="Sosial Media" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
