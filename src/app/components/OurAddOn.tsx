import Image from "next/image";
import React from "react";
 
const OurAddOn = () => {
  return (
    <div className="md:py-[76px] md:pl-[193px] md:pr-[193px] pt-10 lg:mt-0">
      <p className="text-[40px] font-semibold text-center mb-[50px]">
        Our Add-On
      </p>
      <div className="flex flex-wrap gap-[48px] justify-center lg:justify-normal">
        <div className="flex flex-col lg:flex-row gap-[35px]">
          <div className="md:py-[25px] py-8 flex flex-col gap-[10px] bg-[#FEFFF0] rounded-[8px]">
            <Image
              width={38}
              height={38}
              src="./first-svg-addon.svg"
              alt="custom-template-image"
              className="mx-auto"
            />
            <div className="flex flex-col gap-3 w-[328px] h-[74px]">
              <p className="text-[18px] font-semibold text-center">
                Custom Template
              </p>
              <div className="flex justify-center">
                <p className="font-semibold">$345</p>
                <p className="text-[#545556]">&nbsp;per document</p>
              </div>
            </div>
          </div>
          <div className="md:py-[25px] py-8 flex flex-col gap-[10px] bg-[#F0FFF1] rounded-[8px]">
            <Image
              width={38}
              height={38}
              src="./signature.svg"
              alt="custom-template-image"
              className="mx-auto"
            />
            <div className="flex flex-col gap-3 w-[328px] h-[74px]">
              <p className="text-[18px] font-semibold text-center">
              Authenticity Verification of Documents
              </p>
              <div className="flex justify-center">
                <p className="font-semibold">$345</p>
                <p className="text-[#545556]">&nbsp;per document</p>
              </div>
            </div>
          </div>
          <div className="md:py-[25px] py-8 flex flex-col gap-[10px] bg-[#F0F0FF] rounded-[8px]">
            <Image
              width={38}
              height={38}
              src="./artificial-intelligence-04.svg"
              alt="custom-template-image"
              className="mx-auto"
            />
            <div className="flex flex-col gap-3 w-[328px] h-[74px]">
              <p className="text-[18px] font-semibold text-center">
              AI Voice Minutes
              </p>
              <div className="flex justify-center">
                <p className="font-semibold">$345</p>
                <p className="text-[#545556]">&nbsp;per document</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:mx-[180px] gap-[35px] pb-20">
          <div className="md:py-[25px] py-8 flex flex-col gap-[10px] bg-[#F0FFFE] rounded-[8px]">
            <Image
              width={38}
              height={38}
              src="./file-validation.svg"
              alt="custom-template-image"
              className="mx-auto"
            />
            <div className="flex flex-col gap-3 w-[328px] h-[74px]">
              <p className="text-[18px] font-semibold text-center">
              Notarized Documents
              </p>
              <p className="text-[#929292] text-[20px] text-center">Coming Soon</p>
            </div>
          </div>
          <div className="md:py-[25px] py-8 flex flex-col gap-[10px] bg-[#F9F0FF] rounded-[8px]">
            <Image
              width={38}
              height={38}
              src="./timer-02.svg"
              alt="custom-template-image"
              className="mx-auto"
            />
            <div className="flex flex-col gap-3 w-[328px] h-[74px]">
              <p className="text-[18px] font-semibold text-center">
              Blockchain Timestamp
              </p>
              <div className="flex justify-center">
                <p className="font-semibold">$345</p>
                <p className="text-[#545556]">&nbsp;per document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAddOn;
