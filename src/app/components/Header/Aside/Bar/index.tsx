"use client";

import "./bar.css";

interface propBar_I {
  onclick(vl: boolean): void;
  active: boolean;
}

export function ComponentBarAside(props: propBar_I): JSX.Element {
  return (
    <button id='bar' onClick={() => props.onclick(!props.active)}>
      <div className={`line ${props.active ? "active_line_1" : "line_1"}`} />
      <div className={`line ${props.active ? "active_line_2" : "line_2"}`} />
      <div className={`line ${props.active ? "active_line_3" : "line_1"}`} />
    </button>
  );
}
