export const BasicForm = ({
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  useState,
  motion,
}) => {
  const [errors, setErrors] = useState({});

  function goToNext() {
    const newErrors = {};
    const nameRegex = /^[A-Za-zА-Яа-яӨөҮүЁё]+$/;

    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else {
      newErrors.firstName = "Нэр ээ зөв оруулна уу";
    }
    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else {
      newErrors.lastName = "Овог нэр ээ зөв оруулна уу";
    }
    if (nameRegex.test(form.userName)) {
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
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-[480px] h-[642px] bg-white box-border flex flex-col justify-between rounded-[8px]"
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
            label="First name"
            value={form.firstName}
            placeholder="First name"
            onChange={(e) => onChange({ ...form, firstName: e.target.value })}
            error={errors.firstName}
          />

          <Input
            label="Last name"
            value={form.lastName}
            placeholder="Last name"
            onChange={(e) => onChange({ ...form, lastName: e.target.value })}
            error={errors.lastName}
          />

          <Input
            label="Username"
            value={form.userName}
            placeholder="Username"
            onChange={(e) => onChange({ ...form, userName: e.target.value })}
            error={errors.userName}
          />
        </div>
        <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
          <Button variant="primary" onClick={goToNext}>
            Continue 1/3
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
