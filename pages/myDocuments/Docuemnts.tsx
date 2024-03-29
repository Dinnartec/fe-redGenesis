import { signOut } from "next-auth/react";
import React from "react";

const Docuemnts = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <div>Docuemnts</div>
      <button onClick={handleLogout} className="bg-secondary text-white py-4 px-6 w-auto h-auto">Cerrar Sesion</button>
    </>
  );
};

export default Docuemnts;
