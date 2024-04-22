import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const PopUpFecha = ({onChangeForm}) => {
  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
        onChange={(newValue) => 
          onChangeForm({fecha: newValue?.$d})} />
      </LocalizationProvider>
    </div>
  );
};

export default PopUpFecha;
