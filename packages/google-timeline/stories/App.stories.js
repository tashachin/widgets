import React, { useState, useEffect } from "react";
import TimeLine from "../src/TimeLine";

export default { title: "TimeLine" };

export const app = () => {
  return <TimeLine />;
};
app.story = {
  name: "TimeLine",
};
