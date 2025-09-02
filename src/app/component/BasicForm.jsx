export const BasicForm = ({
  Title,
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  useState,
}) => {
  const [errors, setErrors] = useState({});

  function goToNext() {
    const newErrors = {};

    if (form.firstName !== "") {
      newErrors.firstName = null;
    } else {
      newErrors.firstName = "Нэр ээ зөв оруулна уу";
    }

    if (form.lastName !== "") {
      newErrors.lastName = null;
    } else {
      newErrors.lastName = "Овог нэр ээ зөв оруулна уу";
    }
    if (form.userName !== "") {
      newErrors.userName = null;
    } else {
      newErrors.userName = "Хэрэглэгчийн нэр ээ зөв оруулна уу";
    }
    setErrors(newErrors);
    if (!newErrors.userName && !newErrors.firstName && !newErrors.lastName) {
      onChangeStep("onChangeStep");
    }
  }
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-[480px] h-[642px] bg-white box-border flex flex-col justify-between">
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
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName}</div>
          )}
          <Title /> Last name
          <Input
            value={form.lastName}
            placeholder="Last name"
            onChange={(e) => onChange({ ...form, lastName: e.target.value })}
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName}</div>
          )}
          <Title /> Username
          <Input
            value={form.userName}
            placeholder="Username"
            onChange={(e) => onChange({ ...form, userName: e.target.value })}
          />
          {errors.userName && (
            <div className="text-red-500">{errors.userName}</div>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={goToNext}
            className="text-white w-full mb-[32px] mx-[32px]"
          >
            Continue 1/3
          </Button>
        </div>
      </div>
    </div>
  );
};
