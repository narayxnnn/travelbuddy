import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
const SearchBar = () => (
    <form>
      <TextField
        id="search-bar"
        variant="outlined"
        placeholder="Search..."
        size="small"
        style={{color:"white",backgroundColor:"#e2f0fa",borderRadius:"5px"}}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
    </form>
  );
export default function Searchbar() {

    return (
            <SearchBar/>
    );
}