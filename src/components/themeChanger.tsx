import React, { FunctionComponent } from "react";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeChanger: FunctionComponent<{}> = () => (
  <ThemeToggler>
    {/* @ts-ignore */}
    {({ theme, toggleTheme }) => (
      <label htmlFor="changer">
        <input
          id="changer"
          type="checkbox"
          className="theme-changer"
          onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />{" "}
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
);

export default ThemeChanger;
