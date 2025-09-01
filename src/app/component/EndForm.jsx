export const EndForm = ({}) => {
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-[480px] h-[193px] bg-white box-border flex flex-col justify-between">
        <div className="m-[32px] flex gap-[8px] flex-col">
          <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            You're All Set 🔥
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            We have received your submission. Thank you!
          </h3>
        </div>
      </div>
    </div>
  );
};
