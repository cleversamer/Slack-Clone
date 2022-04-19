import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectChannels, setCurrentChannel } from "../../store/channels";
import { selectUser } from "../../store/user";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { firestore } from "firebase";
import db from "../../firebase";
import "./index.css";

const Sidebar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const channels = useSelector(selectChannels);
  const [showChannels, setShowChannels] = useState(false);
  const [showLessNavs, setShowLessNavs] = useState(true);

  const handleChannelClick = (channel) => {
    dispatch(setCurrentChannel(channel));
    history(`/room/${channel.id}`);
  };

  const handleDeleteChannel = (channelId) => {
    db.collection("channels").doc(channelId).delete();
  };

  const handleCreateChannel = () => {
    const maxNoOfChannels = 16;
    if (channels?.length < maxNoOfChannels) {
      const name = prompt("Enter channel name:").substring(0, 16).toLowerCase();
      db.collection("channels").add({
        name,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });
    } else {
      alert(`Max number of channels is ${maxNoOfChannels} channels.`);
    }
  };

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__header-info">
          <h2 className="sidebar__heading">Web Developers</h2>

          {user && (
            <h3 className="sidebar__user">
              <FiberManualRecord className="sidebar__icon" />
              {user?.displayName || "Unknown user"}
            </h3>
          )}
        </div>

        <Create className="sidebar__icon clickable" />
      </header>

      <section className="sidebar__navs">
        <SidebarOption Icon={InsertComment} title="Threads" />

        <SidebarOption Icon={Inbox} title="Mentions & reactions" />

        <SidebarOption Icon={Drafts} title="Saved items" />

        {!showLessNavs && (
          <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
        )}

        {!showLessNavs && (
          <SidebarOption Icon={PeopleAlt} title="People & user groups" />
        )}

        {!showLessNavs && <SidebarOption Icon={Apps} title="Apps" />}

        {!showLessNavs && (
          <SidebarOption Icon={FileCopy} title="File browser" />
        )}

        <SidebarOption
          Icon={showLessNavs ? ExpandMore : ExpandLess}
          title={showLessNavs ? "Show more" : "Show less"}
          onClick={() => setShowLessNavs(!showLessNavs)}
        />
      </section>

      <hr />

      <section className="sidebar__channels">
        {showChannels ? (
          <SidebarOption
            Icon={ExpandLess}
            title="Hide channels"
            onClick={() => setShowChannels(!showChannels)}
          />
        ) : (
          <SidebarOption
            Icon={ExpandMore}
            title="Show channels"
            onClick={() => setShowChannels(!showChannels)}
          />
        )}

        <hr />

        {user && showChannels && (
          <SidebarOption
            Icon={Add}
            title="Add channel"
            onClick={() => handleCreateChannel()}
          />
        )}

        {showChannels &&
          channels.map((channel) => (
            <SidebarOption
              key={channel.id}
              id={channel.id}
              title={channel.name}
              onDelete={() => handleDeleteChannel(channel.id)}
              onClick={() => handleChannelClick(channel)}
            />
          ))}
      </section>
    </aside>
  );
};

export default Sidebar;
