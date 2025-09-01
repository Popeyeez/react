"use client";
import { Input, Title, Button } from "../component";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Multi = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
  });
  const [step, setStep] = useState("basic");
  function submit() {
    setStep("image");
  }
  function back() {
    setStep("basic");
  }
  function last() {
    setStep("last");
  }
  function end() {
    setStep("end");
  }
  if (step === "basic") {
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
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <Title /> Last name
            <Input
              value={form.lastName}
              placeholder="Last name"
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            <Title /> Username
            <Input
              value={form.userName}
              placeholder="Username"
              onChange={(e) => setForm({ ...form, userName: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={submit}
              className="text-white w-full mb-[32px] mx-[32px]"
            >
              Continue 1/3
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "image") {
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
            <Title /> Email
            <Input
              value={form.email}
              placeholder="Email"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
            <Title /> Phone number
            <Input
              value={form.phoneNumber}
              placeholder={"Phone number"}
              onChange={(e) =>
                setForm({
                  ...form,
                  phoneNumber: e.target.value,
                })
              }
            />
            <Title /> Password
            <Input
              type="password"
              value={form.password}
              placeholder={"Password"}
              onChange={(e) =>
                setForm({
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
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
            <Button onClick={back} className={"bg-white text-black w-[140px]"}>
              Back
            </Button>
            <Button onClick={last} className={"text-white w-full"}>
              Continue 2/3
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "last") {
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
                setForm({
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
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-[8px] mb-[32px] box-border mx-[32px]">
            <Button
              onClick={submit}
              className={"bg-white text-black w-[140px]"}
            >
              Back
            </Button>
            <Button onClick={end} className={"text-white w-full"}>
              Continue 3/3
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "end") {
    return (
      <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
        <div className="w-[480px] h-[193px] bg-white box-border flex flex-col justify-between">
          <div className="m-[32px] flex gap-[8px] flex-col">
            <img className="w-[60px] h-[60px]" src="main1.png" alt="" />
            <h3 className="text-[#202124] text-[26px] font-semibold">
              You're All Set 🔥
            </h3>
            <h3 className="text-[#8E8E8E] text-[18px] font-normal">
              We have received your submission. Thank you!
            </h3>
          </div>
        </div>
      </div>
    );
  }
};
export default Multi;
