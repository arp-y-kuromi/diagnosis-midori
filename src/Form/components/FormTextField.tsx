import {
  Box,
  FormHelperText,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type FormTextFieldType<T extends FieldValues> = {
  label?: React.ReactNode;
  name?: string;
  rows?: number;
  placeholder?: string;
  sx?: SxProps<Theme>;
  errSx?: SxProps<Theme>;
} & UseControllerProps<T>;

export const ERROR_MARGIN_SX = { ml: "8px" };

export const FormTextField = <T extends FieldValues>({
  label,
  name,
  rows,
  placeholder,
  sx,
  errSx,
  control,
}: FormTextFieldType<T>) => {
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <Box
      sx={{
        "@media (max-width: 750px)": {
          width: "380px",
        },
        "@media (max-width: 540px)": {
          width: "300px",
        },
        "@media (max-width: 430px)": {
          width: "280px",
        },
        mb: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            minWidth: "500px",
            "@media (max-width: 750px)": {
              minWidth: "380px",
              fontSize: "15px",
            },
            "@media (max-width: 540px)": {
              minWidth: "300px",
              fontSize: "12px",
            },
            "@media (max-width: 430px)": {
              minWidth: "280px",
              fontSize: "10px",
            },
          }}
        >
          {`${label}を入力してください`}
        </Typography>
        <TextField
          rows={rows}
          placeholder={placeholder}
          sx={sx}
          {...rest}
          inputRef={ref}
        />
      </Box>
      {!!error && (
        <FormHelperText sx={{ ...ERROR_MARGIN_SX, ...errSx }} error>
          {
            <Typography variant="caption" sx={{ whiteSpace: "pre-wrap" }}>
              {error?.message}
            </Typography>
          }
        </FormHelperText>
      )}
    </Box>
  );
};
