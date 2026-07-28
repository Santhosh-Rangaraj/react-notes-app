import React from "react";
import "../styles/Cards.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { type Note } from "../App";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PushPinIcon from "@mui/icons-material/PushPin";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Cards = ({
  note,
  onClickedNote,
  onEditData,
}: {
  note: Note;
  onClickedNote: (note: Note) => void;
  onEditData: (note: Note) => void;
}) => {
  const [open, setOpen] = useState(false);

     const context = useContext(ThemeContext);
    
    if (!context) {
      throw new Error("ThemeContext must be used inside ThemeProvider");
    }
    
    const { theme } = context;

  const handleDelete = () => {
    onClickedNote(note);
  };
  return (
    <>
      <div className="cards-container">
        <div className={`theme-${theme}`}>
          <h4>
           <div >
            <span className="card-tag">
              {note.category === "Work"
                ? "🟣"
                : note.category === "Personal"
                  ? "🟢"
                  : note.category === "Ideas"
                    ? "🟡"
                    : note.category === "Others"
                      ? "🔴"
                      : ""}
            </span>
            {note.title}
            </div>
            { note.pinNote===true&&(
            <span className="pin-card">
              <PushPinIcon></PushPinIcon>
            </span>
            )
}
          </h4>
          <p className="card-description card-theme">{note.content}</p>
        </div>

        <span
          className="card-category"
          style={{
            backgroundColor:
              note.category === "Work"
                ? "#581fea"
                : note.category === "Personal"
                  ? "#468432"
                  : note.category === "Ideas"
                    ? "#efb403"
                    : note.category === "Others"
                      ? "#EA4335"
                      : "#CCCCCC",
          }}
        >
          {note.category}
        </span>
        <div className="card-footer">
          <p>{new Date(note.date).toLocaleDateString()}</p>
          <div>
            <EditOutlinedIcon
              className="edit-icon"
              onClick={() => onEditData(note)}
            ></EditOutlinedIcon>
            <DeleteOutlinedIcon
              className="delete-icon"
              onClick={() => setOpen(true)}
            ></DeleteOutlinedIcon>
          </div>
        </div>
      </div>
      <Dialog open={open} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WarningAmberIcon color="warning" />
            <span>Confirm Action</span>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "grey",
              backgroundColor: "lightgrey",
              "&:hover": { backgroundColor: "darkgrey" },
            }}
            variant="contained"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "red",
              "&:hover": { backgroundColor: "darkred" },
            }}
            color="success"
            variant="contained"
            onClick={handleDelete}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cards;
