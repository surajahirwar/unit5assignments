

import React from "react";
import { Home } from "./Home";
import {About} from "./About";
import {Men} from "./Men";
import {MenPro} from "./MenPro";
import {Women} from "./Women";
import {WomenPro} from "./WomenPro";
import {Contect} from "./contect";
import {PageNotFound} from "./PageNotFound"
import { Route, Routes } from "react-router-dom";

export default function () {
  return <div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:id" element={<MenPro />} />
        <Route path="/women" element={<Women />}  />
        <Route path="/women/:id" element={<WomenPro />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
  </div>;
}
