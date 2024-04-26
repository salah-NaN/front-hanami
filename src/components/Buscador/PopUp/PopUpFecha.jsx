import { motion } from "framer-motion";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { formatDate } from "date-fns";
// import es from 'date-fns/locale/es'

export const PopUpFecha = ({
  onChangeForm,
  setSearchForm,
  searchForm,
  setFechaPopUp,
  setExpanded
}) => {
  const dateFormat = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const handleFunction = (value) => {
    if (onChangeForm) {
      onChangeForm(value);
      setExpanded(false);
    } else {
      setSearchForm({ ...searchForm, ...value });
      setFechaPopUp(false);
    }
  };

  return (
    <motion.div
      className=""
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        {onChangeForm === undefined ? (
          <DateCalendar
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              height: "18rem",
              padding: "1px 2px 1px 2px",
              borderRadius: "30px",
              backgroundColor: "white",
              paddingX: "1rem",
              paddingTop: "2rem",
            }}
            onChange={(newValue) =>
              handleFunction({
                fecha: new Date(newValue?.$d).toLocaleDateString(
                  "es-ES",
                  dateFormat
                ),
              })
            }
          />
        ) : (
          <DateCalendar
            onChange={(newValue) =>
              handleFunction({
                fecha: new Date(newValue?.$d).toLocaleDateString(),
              })
            }
          />
        )}
      </LocalizationProvider>
    </motion.div>
  );
};

export default PopUpFecha;
