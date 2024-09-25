import {
  Box,
  FormHelperText,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

type FormTextFieldType = {
  label?: React.ReactNode;
  errorMessage?: string;
  name?: string;
  rows?: number;
  placeholder?: string;
  sx?: SxProps<Theme>;
  errSx?: SxProps<Theme>;
};

const ERROR_MARGIN_SX = { ml: "8px" };

export const FormTextField = ({
  label,
  errorMessage = "",
  name,
  rows,
  placeholder,
  sx,
  errSx,
}: FormTextFieldType) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label={label}
          error={!!errorMessage}
          name={name}
          rows={rows}
          placeholder={placeholder}
          sx={sx}
        />
      </Box>
      {!!errorMessage && (
        <FormHelperText sx={{ ...ERROR_MARGIN_SX, ...errSx }} error>
          {
            <Typography variant="caption" sx={{ whiteSpace: "pre-wrap" }}>
              {errorMessage}
            </Typography>
          }
        </FormHelperText>
      )}
    </Box>
  );
};
