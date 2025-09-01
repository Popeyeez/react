export const LastForm = ({
  Title,
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  onChangeBack,
}) => {
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-[480px] h-[655px] bg-white box-border flex flex-col justify-between">
        <div className="m-[32px] flex gap-[8px] flex-col">
          <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            Join Us! 😎
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            Please provide all current information accurately.
          </h3>
          <Title /> Date of birth
          <Input
            type="date"
            value={form.date}
            placeholder="date"
            onChange={(e) =>
              onChange({
                ...form,
                date: e.target.value,
              })
            }
          />
          <Title /> Profile image
          <Input
            type="date"
            value={form.date}
            placeholder="date"
            onChange={(e) =>
              onChange({
                ...form,
                date: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
          <Button
            onClick={onChangeBack}
            className={"bg-white text-black w-[140px]"}
          >
            Back
          </Button>
          <Button onClick={onChangeStep} className={"text-white w-full"}>
            Continue 3/3
          </Button>
        </div>
      </div>
    </div>
  );
};
