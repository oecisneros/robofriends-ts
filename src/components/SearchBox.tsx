import * as React from "react";
import { IProps } from "../index";

interface ISearchBoxProps extends IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChange }: ISearchBoxProps) => (
  <div className="pa2">
    <input
      aria-label="Search robots"
      className="pa3 ba b--green bg-lightest-blue"
      onChange={onChange}
      type="search"
      placeholder="Search Robots"
    />
  </div>
);

export default SearchBox;
