import "./App.css";
import React, { useEffect, useState, Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { setUsername } from "./Landing";
import Landing from "./Landing";
import { useLocation, useParams, withRouter } from 'react-router-dom';

export function randomName() {
  const adjectives = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

export function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

/*export const NextPage = ({ nickname }) => {
  return (
    <div>
      <p>Ime: {nickname}</p>
    </div>
  );
  };*/

const DopApp = (props) => {
  console.log("Pssing nickname from APP to DoAPp " + props.nickname)
  console.log('DopApp rendering')
  const { messages, currentMember, onSendMessage } = props;
  const location = useLocation();
  const { randomID } = useParams();
  const params = new URLSearchParams(location.search);

  const nickname = params.get('nickname') || 'anonymous';
  return (
    <div className="App">
      <div className="App-header">
        <h1>DopApp</h1>
        <h3>You are chatting with {props.nickname}</h3>
      </div>
      <Messages messages={messages} currentMember={nickname} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
}

export { DopApp };
