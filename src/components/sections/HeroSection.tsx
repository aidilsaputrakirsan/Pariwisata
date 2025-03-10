import { cn, playFair } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface IProps {
  currentIndex: number;
  setCurrentIndex: (value: number) => void;
  setPauseAutoPlay: (value: boolean) => void;
}

function HeroSection({
  currentIndex,
  setCurrentIndex,
  setPauseAutoPlay,
}: IProps) {
  const destinations = [
    { value: "pemapak", displayName: "Air Panas Pemapak" },
    { value: "hutan-berau", displayName: "Hutan Berau" },
  ];

  const persons = [
    { value: "1", displayName: "1 Orang" },
    { value: "2", displayName: "2 Orang" },
  ];

  const checkIn = [
    { value: "Sun, 17th Sep 2025", displayName: "Minggu, 17 Sep 2025" },
    { value: "Mon, 18th Sep 2025", displayName: "Senin, 18 Sep 2025" },
  ];

  const checkOut = [
    { value: "Sun, 24th Sep 2025", displayName: "Minggu, 24 Sep 2025" },
    { value: "Mon, 25th Sep 2025", displayName: "Senin, 25 Sep 2025" },
  ];

  const handleArrowUpClick = () => {
    setPauseAutoPlay(true);
    setCurrentIndex(currentIndex === 2 ? 0 : currentIndex + 1);
  };

  const handleArrowBottomClick = () => {
    setPauseAutoPlay(true);
    setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1);
  };

  return (
    <section className="relative mb-16">
      <div className="pt-[100px] md:pt-16">
        <p
          className={cn(
            playFair.className,
            "text-[40px] md:text-[84px] text-white leading-tight",
            "mx-8 xl:mx-[184px]"
          )}
        >
          Jelajahi Keindahan Air Panas Pemapak
        </p>
        <p className="text-24 text-white font-normal mt-3 mx-8 xl:mx-[184px]">
          Rasakan sensasi berendam di sumber air panas alami di tengah hutan
          tropis Berau
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-8 md:mt-[170px] mx-4 md:mx-0">
        <div className="bg-white py-16 flex flex-col rounded-t-[16px] md:rounded-t-none md:flex-row gap-[40px] px-4 md:px-32">
          <div>
            <p className="text-customGray mb-4">Destinasi</p>
            <Select>
              <SelectTrigger className="w-full border-t-0 border-x-0 border-b border-b-black rounded-none">
                <SelectValue placeholder="Pilih Destinasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {destinations.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-customGray mb-4">Jumlah Orang</p>
            <Select>
              <SelectTrigger className="w-full border-t-0 border-x-0 border-b border-b-black rounded-none">
                <SelectValue placeholder="Pilih Jumlah Orang" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {persons.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-customGray mb-4">Check In</p>
            <Select>
              <SelectTrigger className="w-full border-t-0 border-x-0 border-b border-b-black rounded-none">
                <SelectValue placeholder="Pilih Tanggal Check In" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {checkIn.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-customGray mb-4">Check Out</p>
            <Select>
              <SelectTrigger className="w-full border-t-0 border-x-0 border-b border-b-black rounded-none">
                <SelectValue placeholder="Pilih Tanggal Check Out" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {checkOut.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.displayName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="bg-primary flex items-center justify-between py-16 gap-[40px] px-4 md:px-[20px] rounded-b-[20px] md:rounded-bl-none md:rounded-r-[20px]">
          <div
            className={cn(
              "text-white flex gap-2 md:gap-0 md:block",
              playFair.className
            )}
          >
            <p className="text-[36px]">Pesan</p>
            <p className="text-[36px]">Sekarang</p>
          </div>
          <ArrowRight color="#fff" />
        </div>
      </div>

      <div className="absolute right-16 top-[40%] hidden xl:block">
        <div className="flex flex-col gap-[24px] items-center">
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 0 && "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 1 && "bg-primary"
            )}
          ></div>
          <div
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer bg-white hover:bg-primary transition-all ease-in-out duration-300",
              currentIndex === 2 && "bg-primary"
            )}
          ></div>
        </div>

        <div className="flex flex-col mt-4">
          <ChevronUp
            color="#fff"
            className="cursor-pointer"
            onClick={handleArrowUpClick}
          />
          <ChevronDown
            color="#fff"
            className="cursor-pointer"
            onClick={handleArrowBottomClick}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
