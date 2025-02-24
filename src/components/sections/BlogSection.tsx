import React from "react";
import Header from "../common/Header";
import { cn, playFair } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function BlogSection() {
  return (
    <section>
      <div>
        <Header
          title="Blog & Artikel"
          description="Dapatkan info seputar wisata, konservasi, dan perkembangan Air Panas Pemapak"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-[80px]">
        <div className="w-full">
          <img
            src="/images/blog.jpg"
            alt="Foto Blog Feature"
            className="h-[500px] rounded-[26px] w-full object-cover"
          />
        </div>
        <div>
          <p
            className={cn(
              playFair.className,
              "leading-tight text-[30px] md:text-[54px]"
            )}
          >
            Melihat Lebih Dekat Kekayaan Hutan di Berau
          </p>
          <p className="py-4">
            Kawasan Air Panas Pemapak dikelilingi hutan tropis dengan kekayaan
            flora dan fauna yang menakjubkan. Melalui blog ini, kami akan
            berbagi tips merencanakan perjalanan, kisah para wisatawan,
            serta perkembangan upaya konservasi yang dilakukan oleh KLHK
            bersama Pemerintah Daerah Kabupaten Berau.
          </p>

          <div className="text-primary flex items-center gap-3">
            Baca Selengkapnya
            <ArrowRight color="#FF7757" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
