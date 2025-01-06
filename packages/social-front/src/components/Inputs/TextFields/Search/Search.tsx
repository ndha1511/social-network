import { useForm } from "react-hook-form";
import ControlTextField from "../ControlTextField";
import Icon from "@/components/DataDisplay/Icon";
import { useEffect, useState } from "react";
import { SearchProps } from "./types";

const defaultDuration = 300;

const Search = ({
  handleSearch,
  handleClick,
  autoFocus,
  duration = defaultDuration,
  placeholder,
}: SearchProps) => {
  const { control, watch } = useForm<{ textSearch: string }>({
    mode: "onChange",
    values: {
      textSearch: "",
    },
  });

  const [isFocus, setIsFocus] = useState(false);

  const textSearch = watch("textSearch");

  // debounce search
  useEffect(() => {
    if (textSearch === "") return;
    const debounce = setTimeout(() => {
      handleSearch(textSearch);
    }, duration);
    return () => clearTimeout(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  return (
    <ControlTextField
      control={control}
      name="textSearch"
      placeholder={placeholder}
      onClick={handleClick}
      sx={{
        width: 220,
      }}
      slotProps={{
        input: {
          startAdornment: !isFocus && <Icon icon="search" />,
        },
      }}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      autoFocus={autoFocus}
    />
  );
};

export default Search;
