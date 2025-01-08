import TextField from "@/components/Inputs/TextFields/TextField";
import FocusSearch from "../FocusSearch";
import Search from "@/components/Inputs/TextFields/Search";
import { useState } from "react";
import Icon from "@/components/DataDisplay/Icon";
import useWidth from "@/hooks/useWidth";
import IconButton from "@/components/Inputs/Buttons/IconButton";
import Avatar from "@mui/material/Avatar";

const TopAppBarSearch = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWidth();

  return (
    <>
      {!open ? (
        width === "mobile" ? (
          <Avatar>
            {" "}
            <IconButton icon="search" onClick={() => setOpen(true)} />
          </Avatar>
        ) : (
          <TextField
            placeholder="Tìm kiếm trong app"
            onClick={() => setOpen(true)}
            slotProps={{
              input: {
                startAdornment: <Icon icon="search" />,
              },
            }}
            sx={{
              width: 240,
            }}
          />
        )
      ) : (
        <></>
      )}
      <FocusSearch open={open} handleClose={() => setOpen(false)}>
        <Search
          placeholder="Tìm kiếm trong app"
          handleSearch={() => {}}
          autoFocus={open}
        />
      </FocusSearch>
    </>
  );
};

export default TopAppBarSearch;
