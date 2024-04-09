import { RegisterForm } from "@/interface/objetcs.interface";
import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import Auth from "@/src/components/Layout/Auth";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEvent, useState } from "react";


const Register = () => {
  const [inputs, setInputs] = useState<RegisterForm>({
    names: "",
    surname: "",
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isDisabled = !inputs.email || !inputs.password;
  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    console.log("Registrando usuario...", inputs);
    try {
      // const response = await fetch("http://localhost:3000/api/auth/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(inputs),
      // });
      if (true) {
        console.log("Usuario registrado correctamente")
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirectLogin = () => {
    router.push("/auth/login");
  };

  return (
    <div>
      <Auth>
        <div className="w-full flex flex-col mt-8 ">
          <CustomInput
            type="text"
            placeholder="Ingresa tus nombres"
            label="Nombres"
            className="w-full border border-grayLight rounded-lg p-2 mb-5"
            isRequeried
            name="names"
            value={inputs.names}
            onChange={handleChange}
          />
          <CustomInput
            type="text"
            placeholder="Ingresa tus apellidos"
            label="Apellidos"
            className="w-full border border-grayLight rounded-lg p-2 mb-5"
            isRequeried
            name="surname"
            value={inputs.surname}
            onChange={handleChange}
          />
          <CustomInput
            type="email"
            placeholder="Ingresa el correo electrónico"
            label="Correo electrónico"
            className="w-full border border-grayLight rounded-lg p-2 mb-5"
            isRequeried
            name="email"
            value={inputs.email}
            onChange={handleChange}
            infoTooltip
            tooltipId="information-tooltip"
            tooltipContent="Actualmente, funciona con el correo institucional de la universidad de pamplona"
            tooltipPlacement="left"
          />
          <CustomInput
            type="password"
            placeholder="Ingresa la contraseña"
            label="Contraseña"
            className="w-full border border-grayLight rounded-lg p-2"
            isRequeried
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <CustomButton
            label={  isLoading ? "Registrando..." : "Registrarse"}
            disabled={isDisabled || isLoading || isError}
            className="w-32 h-8 rounded-md text-sm bg-secondary text-white  mt-10 disabled:bg-grayLight disabled:text-primary self-center flex justify-center items-center gap-3"
            onClick={handleSubmit}
            loading={isLoading}
          />
          <p className="text-primary text-sm self-center mt-16">
            ¿Ya tienes cuenta?{" "}
            <span
              className="text-secondary cursor-pointer"
              onClick={handleRedirectLogin}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </Auth>
    </div>
  );
};

export default Register;
