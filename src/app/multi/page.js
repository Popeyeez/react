"use client";
import { Input, Title, Button } from "../component";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Multi = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  console.log(form);
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-[480px] h-[655px] bg-white box-border">
        <div className="m-[32px] flex gap-[8px] flex-col relative">
          <img
            className="w-[60px] h-[60px]"
            src="main1.png
        "
            alt=""
          />
          <h3 className="text-[#202124] text-[26px] font-semibold">
            Join Us! 😎
          </h3>
          <h3 className="text-[#8E8E8E] text-[18px] font-normal">
            Please provide all current information accurately.
          </h3>
          <Title /> First name
          <Input
            value={form.firstName}
            placeholder={"First name"}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
          />
          <Title /> Last name
          <Input
            value={form.lastName}
            placeholder={"Last name"}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: e.target.value,
              })
            }
          />
          <Title /> Username
          <Input
            value={form.userName}
            placeholder={"Username"}
            onChange={(e) =>
              setForm({
                ...form,
                userName: e.target.value,
              })
            }
          />
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Multi;
