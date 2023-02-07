import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';

export const DatePickerDesktop = () => {
  return (
    <DesktopDatePicker
      label="Date desktop"
      inputFormat="MM/DD/YYYY"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export const DatePickerMobile = () => {
  return (
    <MobileDatePicker
      label="Date mobile"
      inputFormat="MM/DD/YYYY"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
