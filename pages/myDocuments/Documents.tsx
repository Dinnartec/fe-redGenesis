import Home from "@/src/components/Layout/Home";
import { signOut } from "next-auth/react";

const Documents = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Home>
      <div>Documents</div>
      <button
        onClick={handleLogout}
        className="bg-secondary text-white py-4 px-6 w-auto h-auto"
      >
        Cerrar Sesion
      </button>
    </Home>
  );
};

export default Documents;
