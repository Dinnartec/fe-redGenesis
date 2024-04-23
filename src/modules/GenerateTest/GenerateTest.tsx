import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import React, { useState, useEffect } from "react";

type generateTestProps = {
  onClose: () => void;
};

const GenerateTest = ({ onClose }: generateTestProps) => {
  const [quantityQuestions, setQuantityQuestions] = useState(0);
  const [inputs, setInputs] = useState({
    nameTest: "",
    numberQuestions: quantityQuestions,
  });
  const MAX_QUESTIONS = 15;

  const DISABLED_BUTTON = quantityQuestions === 0 || inputs.nameTest === "";

  const handleIncrement = () => {
    if (quantityQuestions >= MAX_QUESTIONS) return;
    setQuantityQuestions(quantityQuestions + 1);
  };

  const handleDecrement = () => {
    if (quantityQuestions > 0) {
      setQuantityQuestions(quantityQuestions - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'numberQuestions') {
      setQuantityQuestions(parseInt(value) || 0);
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };
  console.log("inputs", inputs);

  useEffect(() => {
    setInputs((values) => ({ ...values, numberQuestions: quantityQuestions }));
  }, [quantityQuestions]);

  const handleGenerateTest = () => {
    console.log("Generar examen", inputs);
    onClose();
  }

  return (
    <div className="px-16 py-8 h-auto w-[468px] bg-white flex flex-col gap-8 rounded-2xl">
      <h1 className="text-center font-bold text-secondary text-4xl">Generar examen</h1>
      <div className="flex flex-col gap-4 w-full">
        <CustomInput
          type="text"
          placeholder="Nombre del examen"
          className="w-full h-8 rounded-md border border-gray px-2 py-1"
          name="nameTest"
          id="nameTest"
          label="Nombre del examen"
          value={inputs.nameTest}
          onChange={handleChange}
        />
        <div className="flex gap-4 items-center">
          <CustomButton
            className="w-auto h-auto text-secondary text-3xl disabled:text-gray disabled:cursor-not-allowed"
            label="-"
            onClick={handleDecrement}
            disabled={quantityQuestions <= 0}
          />
          <CustomInput
            type="number"
            placeholder="0"
            className="w-10 h-9 rounded-sm shadow-custom-tooltip px-1 text-center placeholder:text-black"
            name="numberQuestions"
            id="numberQuestions"
            value={quantityQuestions || ''}
            onChange={handleChange}
          />
          <CustomButton
            className="w-auto h-auto text-secondary text-3xl disabled:text-gray disabled:cursor-not-allowed"
            label="+"
            onClick={handleIncrement}
            disabled={quantityQuestions >= MAX_QUESTIONS}
          />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <CustomButton
          label="Cancelar"
          className="w-32 h-8 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white"
          onClick={onClose}
        />

        <CustomButton
          label="Guardar"
          className="w-32 h-8 bg-secondary text-white rounded-lg disabled:bg-[#D9D9D9] disabled:text-black"
          onClick={handleGenerateTest}
          disabled={DISABLED_BUTTON}
        />
      </div>
    </div>
  );
};

export default GenerateTest;