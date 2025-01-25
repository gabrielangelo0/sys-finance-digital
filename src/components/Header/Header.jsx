import { Plus } from "phosphor-react";

export default function Header({ setOpen, setSearchInput }) {
  function handleOpenModal() {
    setOpen(true);
  }

  function handleChangeSearch(event) {
    setSearchInput(event.target.value);
  }

  return (
    <header className="bg-[#F1F1F1] flex justify-between items-center p-4">
      <div>
        <h1 className="font-semibold">Detalhes dos produtos</h1>
      </div>
      <div className="space-x-4 flex">
        <input
          type="text"
          onChange={handleChangeSearch}
          placeholder="Pesquisar"
          className="border border-[#118DC0] px-6 py-1 rounded
                        placeholder:text-[#118DC0]"
        />
        <button
          onClick={handleOpenModal}
          className="bg-[#118DC0] text-white py-1 px-4 rounded gap-2
                        hover:bg-[#426b7b] transition-all duration-300 flex items-center"
        >
          <Plus size={16} />
          Novo produto
        </button>
      </div>
    </header>
  );
}
