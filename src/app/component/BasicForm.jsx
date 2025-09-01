export const BasicForm = ({
  Title,
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
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
          <Title /> First name
          <Input
            value={form.firstName}
            placeholder="First name"
            onChange={(e) => onChange({ ...form, firstName: e.target.value })}
          />
          <Title /> Last name
          <Input
            value={form.lastName}
            placeholder="Last name"
            onChange={(e) => onChange({ ...form, lastName: e.target.value })}
          />
          <Title /> Username
          <Input
            value={form.userName}
            placeholder="Username"
            onChange={(e) => onChange({ ...form, userName: e.target.value })}
          />
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onChangeStep}
            className="text-white w-full mb-[32px] mx-[32px]"
          >
            Continue 1/3
          </Button>
        </div>
      </div>
    </div>
  );
};
