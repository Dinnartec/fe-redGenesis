import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { urlImageCLoud } from "@/src/utils/utilsText";
import FooterUserProfile from "../FooterUserProfile";

const SideMenu = () => {
  const routes = useRouter();

  const option = [
    {
      id: 1,
      name: "Mis documentos",
      url: "/myDocuments",
      icon: `${urlImageCLoud}/icons/iconDocuments.svg`,
    },
    {
      id: 2,
      name: "Mis estadisticas",
      url: "/statistics",
      icon: `${urlImageCLoud}/icons/iconStatistics.svg`,
    },
    {
      id: 3,
      name: "Borradores",
      url: "/drafts",
      icon: `${urlImageCLoud}/icons/iconDraft.svg`,
    },
  ];

  return (
    <aside className="flex flex-col pt-20 bg-green-white w-[15.55vw] max-w-52 h-screen shadow-custom-tooltip items-center justify-between">
      <header className="flex flex-col items-center justify-center">
        <Image
          src={`${urlImageCLoud}/icons/iconLogo.svg`}
          alt="logo"
          width={64}
          height={64}
        />
        <h1 className="font-semibold text-secondary text-2xl mt-3">StudyApp</h1>
      </header>

      <nav>
        <ul className="flex flex-col gap-6 mx-4">
          {option.map((item) => {
            const isEnabled = routes.pathname === item.url;
            return (
              <li key={item.id}>
                <button
                  className={`py-3 px-6 rounded-md flex items-start justify-start cursor-pointer ${
                    isEnabled ? "bg-secondary" : "bg-green-white"
                  }`}
                  onClick={() => routes.push(item.url)}
                >
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={16}
                      height={16}
                      style={{ filter: isEnabled ? "brightness(0) invert(1)" : "none" }}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        isEnabled ? "text-white" : "text-gray"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <FooterUserProfile />
    </aside>
  );
};

export default SideMenu;
