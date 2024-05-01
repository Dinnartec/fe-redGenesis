import Auth from "@/src/components/Layout/Auth";
import { urlImageCLoud } from "@/src/utils/utilsText";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import OTPInput from "react-otp-input";

const OTPValidator = () => {
  const countdownTimer = Date.now() + 60000;

  const [otp, setOtp] = useState<string | "">("");
  const [newOTP, setNewOTP] = useState(0);
  const [isInvalid, setIsInvalid] = useState(false);

  const [validTime, setValidTime] = useState(countdownTimer);

  const resetTimer = () => {
    const newValidTime = Date.now() + 60000;
    setValidTime(newValidTime);
    setNewOTP(newOTP + 1);
  };

  const generateCode = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    return completed ? (
      <button
        className="underline font-gordita text-lg"
        onClick={() => {
          resetTimer();
        }}
      >
        Generar un nuevo código
      </button>
    ) : (
      <span className="font-gordita text-lg">
        {"0" + minutes.toString()}:
        {seconds >= 10 ? seconds : "0" + seconds.toString()} &nbsp; para generar
        un nuevo código.
      </span>
    );
  };

  useEffect(() => {
    if (otp.length === 6) {
      if (otp === "123456") {
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
    }
  }, [otp]);

  return (
    <Auth>
      <div className=" flex flex-col">
        <header className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold text-secondary">
            Validación de OTP
          </h2>
          <p className="text-sm max-w-[303px]">
            Revisa tu correo electrónico, hemos{" "}
            {newOTP === 0 ? "enviado" : "reenviado"} un código. Ingresa el
            código enviado a jimmy.dinnartec@gmail.com
          </p>
        </header>
        <div className="my-16 flex flex-col gap-2">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            // renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="X"
                className={`h-16 text-4xl border rounded-lg outline-none ${
                  isInvalid ? "border-red" : "border-black"
                }`}
              />
            )}
            shouldAutoFocus
            inputStyle="otp-input"
            containerStyle={"justify-between"}
          />

          {isInvalid && (
            <p className="text-red text-sm text-center">
              ¡Ups! Este código no es válido o ya venció. Intenta nuevamente.
            </p>
          )}
        </div>

        <footer className="flex flex-col gap-2 items-center">
          <div className="flex gap-4">
            <p className="font-bold text-base">¿No has recibido el código?</p>
            <Image
              src={`${urlImageCLoud}/icons/iconInfo.svg`}
              width={16}
              height={16}
              alt="infoOTP"
              data-tooltip-id="information-tooltip"
              data-tooltip-html={`
              <div class="flex flex-col gap-3 mx-2">
                <p class=" text-sm font-semibold " >Prueba lo siguiente:</p>
                <ul class="list-disc list-inside">
                  <li class="text-xs">Revisa que tu dirección de correo esté bien escrita.</li>
                  <li class="text-xs"> Verifica la carpeta de spam de tu correo.</li>
                </ul>
              </div>
              `}
              data-tooltip-place="bottom-start"
            />
          </div>
          {/* <p className="text-base">00:57 para generar un nuevo código.</p> */}
          <Countdown key={newOTP} date={validTime} renderer={generateCode} />
        </footer>
      </div>
    </Auth>
  );
};

export default OTPValidator;
