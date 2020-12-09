import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import slugify from "./slugify";

const SongList = (props) => {
  const { songs } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    setFilteredSongs(
      songs.filter((song) => {
        return song.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      })
    );
  }, [searchTerm, songs]);

  return (
    <div>
      <Helmet>
        <title>TKO-älyn Zoomsitsit 11.12.2020 - laulum.me</title>
      </Helmet>
      <div className="header">
        <h1>
        TKO-älyn Zoomsitsit 11.12.2020 - laulum.me
        </h1>
      </div>
      <div className="searchbar">
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Search songs..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="song-list">
        {filteredSongs.map((s) => (
          <Link to={"songs/" + slugify(s.name)} key={s.id}>
            <div className="song-card">{s.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SongList;
