import { describe, it, expect, test } from "vitest";

import { mount } from '@vue/test-utils'
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";

describe("Button.vue", () => {
    // Props: type
    it("should has the correct type class when type prop is set", () => {
      const types = ["primary", "success", "warning", "danger", "info"];
      types.forEach((type) => {
        const wrapper = mount(Button, {
          props: { type: type as any },
        });
        expect(wrapper.classes()).toContain(`cr-button--${type}`);
      });
    });
  
    // Props: size
    it("should has the correct size class when size prop is set", () => {
      const sizes = ["large", "default", "small"];
      sizes.forEach((size) => {
        const wrapper = mount(Button, {
          props: { size: size as any },
        });
        expect(wrapper.classes()).toContain(`cr-button--${size}`);
      });
    });
  
    // Props: plain, round, circle
    it.each([
      ["plain", "is-plain"],
      ["round", "is-round"],
      ["circle", "is-circle"],
      ["disabled", "is-disabled"],
      ["loading", "is-loading"],
    ])(
      "should has the correct class when prop %s is set to true",
      (prop, className) => {
        const wrapper = mount(Button, {
          props: { [prop]: true },
          global: {
            stubs: ["ErIcon"],
          },
        });
        expect(wrapper.classes()).toContain(className);
      }
    );
  
    it("should has the correct native type attribute when native-type prop is set", () => {
      const wrapper = mount(Button, {
        props: { nativeType: "submit" },
      });
      expect(wrapper.element.tagName).toBe("BUTTON");
      expect((wrapper.element as any).type).toBe("submit");
    });
  
    // Props: tag
    it("should renders the custom tag when tag prop is set", () => {
      const wrapper = mount(Button, {
        props: { tag: "a" },
      });
      expect(wrapper.element.tagName.toLowerCase()).toBe("a");
    });
  
    // Events: click
    it("should emits a click event when the button is clicked", async () => {
      const wrapper = mount(Button, {});
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toHaveLength(1);
    });  

})

describe('ButtonGroup', () => {
  test("basic button group", async () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));
    expect(wrapper.classes()).toContain("cr-button-group");
  });

  test("button group with size", async () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));
      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`cr-button--${size}`);
    })
  })

  it("should has the correct type class when button group type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));
      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`cr-button--${type}`);
    });
  });

  it("button group disabled", () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));
    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });

})