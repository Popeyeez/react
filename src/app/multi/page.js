"use client";
import {
  Input,
  Button,
  BasicForm,
  ImageForm,
  LastForm,
  EndForm,
} from "../component";
import { useState } from "react";

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
    file: "",
  });
  const [step, setStep] = useState("basic");

  console.log(form);

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
      <BasicForm
        Input={Input}
        Button={Button}
        form={form}
        onChange={setForm}
        onChangeStep={submit}
        useState={useState}
      />
    );
  }
  if (step === "image") {
    return (
      <ImageForm
        Input={Input}
        Button={Button}
        form={form}
        onChange={setForm}
        onChangeStep={last}
        onChangeBack={back}
        useState={useState}
      />
    );
  }
  if (step === "last") {
    return (
      <LastForm
        Input={Input}
        Button={Button}
        form={form}
        onChange={setForm}
        onChangeStep={end}
        onChangeBack={submit}
        useState={useState}
      />
    );
  }
  if (step === "end") {
    return <EndForm />;
  }
};
export default Multi;
