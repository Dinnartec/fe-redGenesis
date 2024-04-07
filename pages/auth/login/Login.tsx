import { LoginUser } from "@/interface/objetcs.interface";
import { UserLogin } from "@/interface/slices.interface";
import { setUserState } from "@/slices/userSlice";
import CustomButton from "@/src/components/CustomButton/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import Auth from "@/src/components/Layout/Auth";
import { useAppDispatch } from "@/src/hooks/useReduxHooks";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEvent, useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const distpatch = useAppDispatch();
  const router = useRouter();
  const isDisabled = !inputs.email || !inputs.password;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputs.email && inputs.password) {
      setIsLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: inputs.email,
        password: inputs.password,
      });

      if (result && result.error) {
        setIsError(true);
      } else {
        const userSession = await getSession();
        if (userSession) {
          setIsLoading(false);
          setIsError(false);
          router.push("/myDocuments");
          distpatch(setUserState(userSession.user as UserLogin));
        }
      }
    } else {
      setIsError(true);
    }
  };

  const handleRedirectRegister = () => {
    router.push("/auth/register");
  };

  return (
    <div>
      <Auth>
        <div className="w-full flex flex-col mt-8 ">
          <CustomInput
            type="email"
            placeholder="Ingresa el correo electrónico"
            label="Correo electrónico"
            className="w-full border border-grayLight rounded-lg p-2 mb-5"
            isRequeried
            name="email"
            value={inputs.email}
            onChange={handleChange}
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
            label="Iniciar sesión"
            disabled={isDisabled || isLoading || isError}
            className="w-32 h-8 rounded-md text-sm bg-secondary text-white  mt-10 disabled:bg-grayLight disabled:text-primary self-center flex justify-center items-center gap-3"
            onClick={handleSubmit}
            loading={isLoading}
          />
          <p className="text-primary text-sm self-center mt-16">
            ¿No tiene una cuenta?{" "}
            <span
              className="text-secondary cursor-pointer"
              onClick={handleRedirectRegister}
            >
              Crear una cuenta
            </span>
          </p>
        </div>
      </Auth>
    </div>
  );
};

export default Login;
