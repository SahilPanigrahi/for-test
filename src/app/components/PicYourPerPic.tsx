"use client";
import Image from "next/image";
import React, { useState } from "react";

const PicYourPerPic = () => {
    const [isToggle, setIsToggle] = useState(true);

  const toggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="bg-[url('/bg-image-subscription.svg')] xl:h-[1300px] bg-cover">
      <div>
        <p className="text-[40px] font-semibold text-center pt-[51px]">
          Pick Your perfect plan
        </p>
        <div className="mt-10 mb-[51px]">
          <p className="text-[#545556] text-center ">Select Billing Cycle</p>
          <div className="flex justify-center mt-5">
            <p className={`cursor-pointer px-4 py-2 rounded-tl-[7px] rounded-bl-[7px] ${isToggle ? 'text-black border border-[#1644E9] bg-gradient-to-r from-[#1644E933] to-[#D92EF533]' : 'border border-[#DDDCDC]'}`}
          onClick={() => setIsToggle(true)}>Monthly</p>
            <p className={`cursor-pointer px-[19px] py-2 rounded-tr-[7px] rounded-br-[7px] ${!isToggle ? 'text-black border border-[#1644E9] bg-gradient-to-r from-[#1644E933] to-[#D92EF533]' : 'border border-[#DDDCDC]'}`}
          onClick={() => setIsToggle(false)}>Anually</p>
          </div>
        </div>

        <div className="xl:px-[100px] sm:mx-44 lg:mx-72 xl:mx-0 p-2 flex flex-col pb-10 lg:flex-row justify-center gap-6">
          <div className="flex flex-col w-[397px] h-[919px] z-10 bg-white rounded-t-[6px] mt-[16px]">
            <p className="px-[130px] text-[#1745E9] bg-[#D9E8FE] py-3 z-30 rounded-t-[6px]">
              BUISNESS PLAN
            </p>
            <div className="rounded-b-[6px] bg-white">
              <div className="flex flex-col gap-3 w-[328px] h-[74px] mx-[48px] mt-[35px]">
                <p className="text-[20px] text-center">
                  Buisness Plan
                </p>
                <div className="flex justify-center items-center">
                  <p className={`font-semibold text-[32px] ${isToggle ? 'block' : 'hidden'}`}>$19</p>
                  <p className={`font-semibold text-[32px] ${!isToggle ? 'block' : 'hidden'}`}>$199</p>
                  <p className="text-[#545556] text-[20px]">
                    &nbsp;per month/user
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mx-auto gap-2 mt-4 py-4 px-24 justify-center bg-gradient-to-r from-[#1644E9] to-[#D92EF5] rounded-[6px]">
              <p className="text-white font-semibold">Join Plan</p>
              <Image
                width={24}
                height={24}
                src="./arrow-right-02.svg"
                alt="custom-template-image"
                className="mx-auto"
              />
            </div>
            <div className="mt-8">
              <p className="ml-[48px] mb-[10px]">Includes :</p>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Template Bank & Custom Template</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Maximum document signing</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>AI-voice minutes (100 Minutes)</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Notarized Documents (coming soon)</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Blockchain timestamp</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Authenticity Verification of documents</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Fill Forms with NLP</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Collaboration</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p className="underline gradient-text gradient-underline">and more</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[397px] h-[949px] z-10 bg-white gradient-curve-border">
            <p className="px-[130px] text-white bg-gradient-to-r from-[#1644E9] to-[#D92EF5] py-3 z-30 text-center">
              POPULAR
            </p>
            <div className="rounded-b-[6px] bg-white">
              <div className="flex flex-col gap-3 w-[328px] h-[74px] mx-[48px] mt-[35px]">
                <p className="text-[20px] text-center">
                  Free Plan
                </p>
                <div className="flex justify-center items-center">
                  <p className="font-semibold text-[32px]">$0</p>
                  <p className="text-[#545556] text-[20px]">
                    &nbsp;per month/user
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mx-auto gap-2 mt-4 py-4 px-24 justify-center bg-gradient-to-r from-[#1644E9] to-[#D92EF5] rounded-[6px]">
              <p className="text-white font-semibold">Join Plan</p>
              <Image
                width={24}
                height={24}
                src="./arrow-right-02.svg"
                alt="custom-template-image"
                className="mx-auto"
              />
            </div>
            <div className="mt-8">
              <p className="ml-[48px] mb-[10px]">Includes :</p>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Template Bank & Custom Template</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Limited document signing</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Limited AI-voice minutes</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Notarized documents (coming soon)</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Blockchain timestamp</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Authenticity Verification of documents</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Fill Forms with NLP</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Collaboration</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p className="underline gradient-text gradient-underline">and more</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[397px] h-[919px] z-10 bg-white rounded-t-[6px] mt-[16px]">
            <p className="px-[120px] text-[#1745E9] bg-[#D9E8FE] py-3 z-30 rounded-t-[6px]">
              INDIVIDUAL PLAN
            </p>
            <div className="rounded-b-[6px] bg-white">
              <div className="flex flex-col gap-3 w-[328px] h-[74px] mx-[48px] mt-[35px]">
                <p className="text-[20px] text-center">
                  Individual Plan
                </p>
                <div className="flex justify-center items-center">
                  <p className="font-semibold text-[32px]">$9</p>
                  <p className="text-[#545556] text-[20px]">
                    &nbsp;pay as you go
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mx-auto gap-2 mt-4 py-4 px-24 justify-center bg-gradient-to-r from-[#1644E9] to-[#D92EF5] rounded-[6px]">
              <p className="text-white font-semibold">Join Plan</p>
              <Image
                width={24}
                height={24}
                src="./arrow-right-02.svg"
                alt="custom-template-image"
                className="mx-auto"
              />
            </div>
            <div className="mt-8">
              <p className="ml-[48px] mb-[10px]">Includes :</p>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Template Bank & Custom Template</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Maximum document signing</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>AI-voice minutes (100 Minutes)</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Notarized Documents (coming soon)</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Blockchain timestamp</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Authenticity Verification of documents</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Fill Forms with NLP</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p>Collaboration</p>
              </div>
              <hr />
              <div className="flex gap-1 mt-5 mb-5 ml-[48px]">
                <Image
                  width={20}
                  height={20}
                  src="./right-tick.svg"
                  alt="right-tick-image"
                  className="mr-2"
                />
                <p className="underline gradient-text gradient-underline">and more</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PicYourPerPic;
