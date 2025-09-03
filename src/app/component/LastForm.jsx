export const LastForm = ({
  Title,
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  onChangeBack,
}) => {
  const [errors, setErrors] = useState({});

  function goToNext() {
    const newErrors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^[89]\d{7}$/;

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Имэйл хаяг зөв оруулна уу";
    }

    if (phoneRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber = null;
    } else {
      newErrors.phoneNumber = "Утасны дугаар зөв оруулна уу";
    }

    if (form.password === form.confirmPassword) {
      newErrors.confirmPassword = null;
    } else {
      newErrors.confirmPassword = "Нууц үг ижил байх ёстой";
    }

    setErrors(newErrors);
    if (!newErrors.email && !newErrors.phone && !newErrors.confirmPassword) {
      onChangeStep("onChangeStep");
    }
  }

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
          <Title text="Date of birth" />

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
          <Title text="Profile image" />

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
          <Button onClick={goToNext} className={"text-white w-full"}>
            Continue 3/3
          </Button>
        </div>
      </div>
    </div>
  );
};
