import React from "react";
import { shallow, mount } from "enzyme";
import Filters from "./Filters.js";

describe("Filters", () => {
  let props;

  beforeEach(() => {
    props = {
      handleFilterSearchNameChange: jest.fn(),
      handleFilterSortByChange: jest.fn(),
      handleFilterResetClick: jest.fn(),
      searchName: "",
      sortBy: "ranking",
    };
  });

  it("renders the filters component", () => {
    const wrapper = shallow(<Filters {...props} />);
    expect(wrapper.find(".filters").exists()).toBe(true);
  });

  it("simulates reset button click event", () => {
    const wrapper = shallow(<Filters {...props} />);
    wrapper.find("button.reset").simulate("click");

    expect(props.handleFilterResetClick).toHaveBeenCalled();
    expect(props.handleFilterResetClick.mock.calls.length).toBe(1);
  });

  it("renders with expected props supplied for sortBy", () => {
    const wrapper = mount(<Filters {...props} />);
    expect(wrapper.props().sortBy).toBe("ranking");
  });

  it("renders with expected props supplied for searchName", () => {
    const wrapper = mount(<Filters {...props} />);
    expect(wrapper.find(".search-input").text()).toEqual(
      wrapper.props().searchName
    );
  });
});
