// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { createContext, useContext, useRef } from "react";
import { exists, combineRef, renderChildren, noop } from "./_internal_utils";
import { mergeProps, useTextField } from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { useFormLabel } from "./_internal_formlabel";
const Context = createContext(null);
export function Root(props) {
  const ref = useRef();
  const focusDelegateRef = useRef(null);
  const {
    style,
    testId,
    innerRef,
    values,
    vislyProps,
    isDisabled,
  } = usePrimitive({
    ref,
    props,
  });
  const delegateFocus = {
    onMouseDownCapture: () => {
      if (exists(focusDelegateRef)) {
        focusDelegateRef.current.focus();
      }
    },
  };
  return (
    <label
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...mergeProps(vislyProps, delegateFocus)}
      onFocus={noop}
      onBlur={noop}
      style={style}
    >
      <Context.Provider
        value={{
          inputRef: combineRef(props.inputRef, focusDelegateRef),
          inputProps: props.inputProps || {},
          onFocus: vislyProps.onFocus,
          onBlur: vislyProps.onBlur,
          onChange: props.onChange || noop,
          value: props.value,
          isDisabled,
          type: props.type || "text",
          "aria-label": props["aria-label"],
          "aria-labelledby": props["aria-labelledby"],
          "aria-details": props["aria-details"],
          "aria-describedby": props["aria-describedby"],
        }}
      >
        {renderChildren(props.children, values)}
      </Context.Provider>
    </label>
  );
}
export function TextFieldPrimitive(props) {
  const { inputProps, inputRef, ...contextProps } = useContext(Context);
  const ref = useRef(null);
  const placeholder = props.placeholder;
  const { fieldProps, label } = useFormLabel();
  const { inputProps: baseInputProps } = useTextField(
    { ...contextProps, inputElementType: "input", label },
    ref
  );
  return (
    <input
      {...mergeProps(baseInputProps, inputProps)}
      ref={combineRef(props.measureRef, combineRef(ref, inputRef))}
      placeholder={placeholder}
      className={props.className}
      id={props.id}
      style={{
        border: "none",
        borderImage: "none",
        outline: "none",
        background: "none",
        ...inputProps.style,
      }}
      {...fieldProps}
    />
  );
}
