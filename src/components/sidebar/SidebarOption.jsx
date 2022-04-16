import React from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const SidebarOption = ({ Icon, title, onClick, onDelete }) => {
  return (
    <article onClick={onClick} className="sidebar__option clickable">
      {Icon && <Icon className="sidebar__option-icon" />}
      {Icon ? (
        <h4 className="sidebar__option-heading">{title}</h4>
      ) : (
        <div className="sidebar__option-channel">
          <h4 className="sidebar__option-heading">
            <span className="sidebar__option-hash">#</span> {title}
          </h4>

          <IconButton
            className="sidebar__option-delete"
            onClick={() => onDelete()}
          >
            <Delete />
          </IconButton>
        </div>
      )}
    </article>
  );
};

export default SidebarOption;
