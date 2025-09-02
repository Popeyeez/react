export function ImageForm({
  Title,
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  onChangeBack,
  useState,
}) {
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

    if (phoneRegex.test(form.phone)) {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Утасны дугаар зөв оруулна уу";
    }

    setErrors(newErrors);
    if (!newErrors.email && !newErrors.phone) {
      onChangeStep("onChangeStep");
    }
  }
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-[480px] h-[fit] bg-white box-border flex flex-col justify-between">
        <div className="m-[32px] flex gap-[8px] flex-col">
          <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            Join Us! 😎
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            Please provide all current information accurately.
          </h3>
          <Title /> Email
          <Input
            value={form.email}
            placeholder="Email"
            onChange={(e) =>
              onChange({
                ...form,
                email: e.target.value,
              })
            }
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
          <Title /> Phone number
          <Input
            value={form.phoneNumber}
            type="number"
            placeholder={"Phone number"}
            onChange={(e) =>
              onChange({
                ...form,
                phoneNumber: e.target.value,
              })
            }
          />
          {errors.phone && <div className="text-red-500">{errors.phone}</div>}
          <Title /> Password
          <Input
            type="password"
            value={form.password}
            placeholder={"Password"}
            onChange={(e) =>
              onChange({
                ...form,
                password: e.target.value,
              })
            }
          />
          <Title /> Confirm password
          <Input
            type="password"
            value={form.confirmPassword}
            placeholder={"Confirm password"}
            onChange={(e) =>
              onChange({
                ...form,
                confirmPassword: e.target.value,
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
            Continue 2/3
          </Button>
        </div>
      </div>
    </div>
  );
}
