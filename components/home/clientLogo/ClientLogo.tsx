import Image from "next/image";
import Marquee from "react-fast-marquee";

const ClientLogo = () => {
  const imageFiles = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.jpg",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.png",
    "10.png",
    "11.jpg",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg",
    "35.png",
    "36.png",
    "37.png",
    "38.png",
    "39.jpg",
    "40.jpg",
    "41.png",
    "42.png",
    "43.jpg",
    "44.png",
    "45.png",
    "46.jpg",
    "47.png",
    "48.png",
    "49.png",
    "50.png",
    "51.png",
    "52.png",
    "53.png",
    "54.png",
    "55.jpg",
    "56.png",
    "57.png",
    "58.jpg",
    "59.png",
    "60.jpg",
    "61.jpeg",
    "62.png",
    "63.jpg",
    "64.png",
    "65.png",
    "66.jpg",
    "67.png",
    "68.jpg",
    "69.jpg",
    "70.jpg",
    "71.jpg",
    "72.jpg",
    "73.jpg",
    "74.jpg",
    "75.jpg",
    "76.png",
    "77.png",
    "78.jpg",
    "79.jpg",
    "80.jpg",
  ];
  return (
    <div className="w-full overflow-hidden py-16">
      <Marquee
        gradient={true}
        gradientColor="#F1F1F1"
        gradientWidth={560}
        speed={150}
      >
        {imageFiles.map((fileName, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            {/* Show Image */}
            <Image
              src={`/client/${fileName}`}
              alt={`Image ${fileName}`}
              width={100}
              height={100}
              className="object-contain"
            />
            {/* Show Name */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogo;
