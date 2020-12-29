import React from "react"
import Landing from "../components/landing"
import Mindset from "../components/mindset"
import Curatorial from "../components/curatorial"
import Disappearing from "../components/disappearing"
import Fall from "../components/fall"
import Basket from "../components/basket"
import Conditioning from "../components/conditioning"
import LoveSong from "../components/lovesong"
import PickingUp from "../components/picking-up"
import Visibility from "../components/visibility"
import Shawl from "../components/shawl"

export default function Home() {
  const content = <>      <Fall />
      <Curatorial />
      <Basket />
      <Conditioning />
      <Curatorial />
      <LoveSong />
      <PickingUp />
      <Visibility />
      <Shawl /></>;
  return (
    <div className="main-container">

      <Landing />

      <Mindset />

      <Curatorial />

      <Disappearing />
    </div>
)}
