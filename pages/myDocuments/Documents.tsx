import HeaderPage from "@/src/components/HeaderPage";
import Home from "@/src/components/Layout/Home";
import MenuOptions from "@/src/components/MenuOptions";
import { signOut } from "next-auth/react";

const Documents = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Home>
      <div className="flex flex-col gap-6">
        <HeaderPage
          titleHeader="Mis Documentos"  
        />
        <button
          onClick={handleLogout}
          className="bg-secondary text-white py-4 px-6 w-auto h-auto"
        >
          Cerrar Sesion
        </button>
      </div>

      <MenuOptions />
    </Home>
  );
};

export default Documents;
