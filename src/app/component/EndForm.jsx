export const EndForm = ({ motion }) => {
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-[480px] h-[193px] bg-white box-border flex flex-col justify-between"
      >
        <div className="m-[32px] flex gap-[8px] flex-col">
          <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            You're All Set 🔥
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            We have received your submission. Thank you!
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
