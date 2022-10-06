import React from "react";
import App from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
