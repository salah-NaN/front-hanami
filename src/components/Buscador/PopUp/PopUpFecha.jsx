import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const PopUpFecha = ({ onChangeForm, setSearchForm, searchForm }) => {
  const changeForm = () => {};

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {onChangeForm === undefined ? (
          <DateCalendar
            onChange={(newValue) =>
              setSearchForm({
                ...searchForm,
                fecha: new Date(newValue?.$d).toLocaleDateString(),
              })
            }
          />
        ) : (
          <DateCalendar
            onChange={(newValue) => onChangeForm({ fecha: newValue?.$d })}
          />
        )}
      </LocalizationProvider>
    </div>
  );
};

export default PopUpFecha;
