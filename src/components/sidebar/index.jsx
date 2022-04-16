import React, { useState, useEffect } from "react";
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
import { onSnapshot } from "firebase/firestore";
import { createChannel, deleteChannel, channelsQuery } from "../../firebase";
import "./index.css";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [showChannels, setShowChannels] = useState(false);

  useEffect(() => {
    onSnapshot(channelsQuery, (snapshot) => {
      setChannels(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__header-info">
          <h2 className="sidebar__heading">Web Developers</h2>

          <h3 className="sidebar__user">
            <FiberManualRecord className="sidebar__icon" />
            Samer A.
          </h3>
        </div>

        <Create className="sidebar__icon clickable" />
      </header>

      <section className="sidebar__navs">
        <SidebarOption Icon={InsertComment} title="Threads" />

        <SidebarOption Icon={Inbox} title="Mentions & reactions" />

        <SidebarOption Icon={Drafts} title="Saved items" />

        <SidebarOption Icon={BookmarkBorder} title="Channel browser" />

        <SidebarOption Icon={PeopleAlt} title="People & user groups" />

        <SidebarOption Icon={Apps} title="Apps" />

        <SidebarOption Icon={FileCopy} title="File browser" />

        <SidebarOption Icon={ExpandLess} title="Show less" />
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

        {showChannels && (
          <SidebarOption
            Icon={Add}
            title="Add channel"
            onClick={() => createChannel("test")}
          />
        )}

        {showChannels &&
          channels.map((channel) => (
            <SidebarOption
              key={channel.id}
              title={channel.name}
              onDelete={() => deleteChannel(channel.id)}
            />
          ))}
      </section>
    </aside>
  );
};

export default Sidebar;
