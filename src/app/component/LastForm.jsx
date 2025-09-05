import { useEffect } from "react";

export const LastForm = ({
  Input,
  Button,
  form,
  onChange,
  onChangeStep,
  onChangeBack,
  useState,
  motion,
}) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  useEffect(() => {
    const newErrors = {};

    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateRegex.test(form.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Он сар зөв оруулна уу";
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.date]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);

    onChange({
      ...form,
      file: file,
    });
  }

  function goToNext() {
    const newErrors = {};
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateRegex.test(form.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Он сар зөв оруулна уу";
    }
    if (form.file) {
      newErrors.file = null;
    } else {
      newErrors.file = "Зураг оруулна уу";
    }
    setErrors(newErrors);
    if (!newErrors.date && !newErrors.file) {
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
        className="w-[480px] h-fit bg-white box-border flex flex-col justify-between rounded-[8px]"
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
            label="Date of birth"
            type="date"
            value={form.date}
            placeholder="date"
            onChange={(e) =>
              onChange({
                ...form,
                date: e.target.value,
              })
            }
            error={errors.date}
          />
          <div className="text-[14px] font-semibold flex gap-1 text-[#334155] mt-3">
            Profile image
            <span className="text-[#E14942] text-[14px] font-semibold">*</span>
          </div>
          <div className="h-50 w-full flex justify-center items-center relative overflow-hidden">
            Add image
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="inset-0 absolute w-full h-full object-cover"
              />
            )}
            <input
              className="h-50 border rounded-lg inset-0 opacity-0 absolute"
              type="file"
              placeholder="date"
              onChange={handleImageChange}
            />
          </div>

          {errors.file && <div className="text-red-500"> {errors.file}</div>}
        </div>
        <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
          <Button variant="secondary" onClick={onChangeBack}>
            Back
          </Button>
          <Button variant="primary" onClick={goToNext}>
            Continue 3/3
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
