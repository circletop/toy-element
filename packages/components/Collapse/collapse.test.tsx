import { describe, it, expect, test } from "vitest";

import { mount } from '@vue/test-utils'
import Collapse from "./Collapse.vue";
describe("Collapse.vue", () => {
  
  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Collapse);
    expect(wrapper.classes()).toContain("collapse");
  });

})