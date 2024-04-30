export const FiltersButton = ({ openPopUpFilters }) => {
  return (
    <div className="border rounded-full p-2.5" onClick={openPopUpFilters}>
      <img src="/ajustamiento.png" alt="filters" className="w-7" />
    </div>
  );
};

export default FiltersButton;
