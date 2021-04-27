import React from "react";
import { shallow, mount } from "enzyme";
import Filters from "./Filters.js";

describe("Filters", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      handleFilterSearchNameChange: jest.fn(),
      handleFilterSortByChange: jest.fn(),
      handleFilterResetClick: jest.fn(),
      searchName: "",
      sortBy: "ranking",
    };

    wrapper = shallow(<Filters {...props} />);
  });

  it("renders the filters component", () => {
    expect(wrapper.find(".filters").exists()).toBe(true);
  });

  it("simulates reset button click event", () => {
    wrapper.find("button.reset").simulate("click");

    expect(props.handleFilterResetClick).toHaveBeenCalled();
    expect(props.handleFilterResetClick.mock.calls.length).toBe(1);
  });

  it("check sortBy property assigned", () => {
    const wrapper = mount(<Filters {...props} />);
    expect(wrapper.props().sortBy).toBe("ranking");
  });
});
