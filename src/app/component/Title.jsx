export const Title = ({ text }) => {
  return (
    <div className="text-[14px] font-semibold flex gap-1 text-[#334155]">
      {text}
      <span className="text-[#E14942] text-[14px] font-semibold">*</span>
    </div>
  );
};
