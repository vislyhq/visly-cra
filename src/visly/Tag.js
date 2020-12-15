// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./Tag.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { SpacerPrimitive, TextPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";
import { default as CloseButton } from "./Tag.CloseButton";

const styles = [
  {
    type: "default",
    layers: {
      KJGQnvmPc4: {
        none: {
          text: "Tag text",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "secondary",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "secondary",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "secondary",
  },
];

export const TagContext = createContext(null);

function Tag(_props) {
  const defaults = useContext(TagContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "root",
        scope: "F1VUYzxbcv",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        <TextPrimitive
          id={"text_KJGQnvmPc4"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_F1VUYzxbcv_KJGQnvmPc4"
          }
          key={"KJGQnvmPc4"}
          text={
            exists(props.text) ? props.text : getStyle("KJGQnvmPc4", "text")
          }
          element={getStyle("KJGQnvmPc4", "htmlElement")}
        />,
        <SpacerPrimitive
          id={"Spacer_Rp5bggYTEk"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_F1VUYzxbcv_Rp5bggYTEk"
          }
          key={"Rp5bggYTEk"}
        />,
        props.CloseButton === undefined ? (
          <CloseButton key={"SaWLT1pfE4"} />
        ) : (
          props.CloseButton
        ),
      ]}
    </ButtonRoot>
  );
}

Tag.__variants = [
  {
    name: "secondary",
    type: "variant",
  },
];

export default Tag;