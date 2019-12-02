import { shallowMount } from "@vue/test-utils"; 
// Views
import Home from "../../src/views/Home";
import Support from "@/views/Support";
import Search from "@/views/Search";
// State
import getters from "@/store/index";

//  - Views Render to DOM
describe("All views render", () => {
  it("Home renders", async () => {
    const wrapper = await shallowMount(Home);
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("Support view renders ", async () => {
    const wrapper = await shallowMount(Support);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
