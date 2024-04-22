import { AuthProps } from "@/types/components.type";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Auth = ({ children }: AuthProps) => {
  const router = useRouter();

  const dataTitleDescription = {
    login: {
      id: 1,
      title: "Inicio de sesión",
      description:
        "Inicia sesión para acceder a tus exámenes personalizados y llevar tu aprendizaje al siguiente nivel.",
    },
    register: {
      id: 2,
      title: "Registro",
      description:
        "¡Únete a nosotros para convertir tus archivos PDF en exámenes personalizados! Regístrate ahora y comienza a estudiar de manera más eficiente y divertida.",
    },
    validationOTP: {
      id: 3,
      title: "Validación de OTP",
      description:
        "Revisa tu correo electrónico, hemos enviado un código. Ingresa el código enviado a jimmyrozo29@gmail.com",
    },
  };

  return (
    <div className="w-screen h-screen flex">
      <section className="w-3/5 px-10 py-14 flex items-center justify-center bg-[#f7fffd] ">
        <Image
          src={`${process.env.NEXT_PUBLIC_URL_CLOUD_FRONT_ASSETS}/images/imgLogin.svg`}
          width={770}
          height={770}
          alt="login"
          className="object-contain"
          style={{ objectFit: "contain" }}
          priority
        />
      </section>
      <section className="w-2/5 flex flex-col justify-center items-center">
        <div className="w-[345px] flex flex-col">
          {router.pathname !== "/auth/otp" && (
            <>
              <h1 className="text-3xl font-bold text-center">
                Bienvenidos a StudyApp
              </h1>
              <div className="flex flex-col items-center mt-10">
                {router.pathname === "/auth/login" ? (
                  <>
                    <h2 className="text-3xl font-bold text-secondary">
                      {dataTitleDescription.login.title}
                    </h2>
                    <p className="text-center mt-2">
                      {dataTitleDescription.login.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-secondary">
                      {dataTitleDescription.register.title}
                    </h2>
                    <p className="text-center mt-2">
                      {dataTitleDescription.register.description}
                    </p>
                  </>
                )}
              </div>
            </>
          )}

          {children}
        </div>
      </section>
    </div>
  );
};

export default Auth;
