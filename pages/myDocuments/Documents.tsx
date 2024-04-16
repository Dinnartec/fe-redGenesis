import DataFolderSearch from "@/src/components/DataFolderSearch";
import HeaderPage from "@/src/components/HeaderPage";
import Home from "@/src/components/Layout/Home";
import MenuOptions from "@/src/components/MenuOptions";

const Documents = () => {

  return (
    <Home>
      <div className="flex flex-col gap-6">
        <HeaderPage
          titleHeader="Mis Documentos"  
        />
        <DataFolderSearch />
      </div>

      <MenuOptions />
    </Home>
  );
};

export default Documents;
