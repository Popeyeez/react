export function ImageForm({
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  onChangeBack,
  useState,
  motion,
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
    if (form.password !== "") {
      newErrors.password = null;
    } else {
      newErrors.password = "Нууц үг хийнэ үү";
    }

    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.phoneNumber &&
      !newErrors.confirmPassword &&
      !newErrors.password
    ) {
      onChangeStep("onChangeStep");
    }
  }
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-[480px] h-[fit] bg-white box-border flex flex-col justify-between rounded-[8px]"
      >
        <div className="m-[32px] flex gap-[8px] flex-col">
          <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            Join Us! 😎
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            Please provide all current information accurately.
          </h3>
          <Input
            label="Email"
            value={form.email}
            placeholder="Email"
            onChange={(e) =>
              onChange({
                ...form,
                email: e.target.value,
              })
            }
            error={errors.email}
          />
          <Input
            label="Phone number"
            value={form.phoneNumber}
            type="number"
            placeholder={"Phone number"}
            onChange={(e) =>
              onChange({
                ...form,
                phoneNumber: e.target.value,
              })
            }
            error={errors.phoneNumber}
          />
          <Input
            label="Password"
            type="password"
            value={form.password}
            placeholder={"Password"}
            onChange={(e) =>
              onChange({
                ...form,
                password: e.target.value,
              })
            }
            error={errors.password}
          />
          <Input
            label="Confirm password"
            type="password"
            value={form.confirmPassword}
            placeholder={"Confirm password"}
            onChange={(e) =>
              onChange({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            error={errors.confirmPassword}
          />
        </div>
        <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
          <Button variant="secondary" onClick={onChangeBack}>
            Back
          </Button>
          <Button variant="primary" onClick={goToNext}>
            Continue 2/3
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
