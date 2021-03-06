// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./Tag.CloseButton.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { RootPrimitive, IconPrimitive } from "./_internal_primitives";
import * as icons from "./icons";

const styles = [
  {
    type: "default",
    layers: {
      L18KCCrBxw: {
        none: {
          icon: icons.close,
          useMask: true,
        },
        pressed: {
          useMask: true,
        },
        disabled: {
          useMask: true,
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "secondary",
    layers: {
      L18KCCrBxw: {
        none: {
          useMask: true,
        },
        disabled: {
          useMask: true,
        },
      },
    },
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

export const CloseButtonContext = createContext(null);

function CloseButton(_props) {
  const defaults = useContext(CloseButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="EpRVWnGu6D"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "EpRVWnGu6D",
        scope: "GVTg8oMm1q",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          id={"Icon_L18KCCrBxw"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_GVTg8oMm1q_L18KCCrBxw"
          }
          key={"L18KCCrBxw"}
          useMask={getStyle("L18KCCrBxw", "useMask")}
          src={exists(props.icon) ? props.icon : getStyle("L18KCCrBxw", "icon")}
        />
      )}
    </RootPrimitive>
  );
}

CloseButton.__variants = [
  {
    name: "secondary",
    type: "variant",
  },
];

export default CloseButton;
