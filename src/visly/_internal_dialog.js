// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import {
  FocusScope,
  useOverlay,
  useDialog,
  usePreventScroll,
} from "@visly/core";
import { combineRef, renderChildren } from "./_internal_utils";
import { usePrimitive } from "./_internal_usePrimitive";
const DialogState = createContext({});
export function DialogRoot(props) {
  const ref = useRef();
  const { autoFocusFirst = true } = props;
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ref,
    props,
  });

  if (props.renderInline) {
    return (
      <DialogState.Provider
        value={{
          renderInline: true,
        }}
      >
        <div
          ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
          className={vislyProps.className}
          style={{ ...style, padding: 100 }}
        >
          {renderChildren(props.children, values)}
        </div>
      </DialogState.Provider>
    );
  }

  const { isOpen, onClose } = props;
  return props.isOpen
    ? createPortal(
        <DialogState.Provider
          value={{
            isOpen,
            onClose,
            isDismissable: true,
            shouldCloseOnBlur: false,
            autoFocusFirst: autoFocusFirst,
          }}
        >
          <div
            ref={combineRef(innerRef, ref)}
            data-testid={testId}
            {...vislyProps}
            style={{
              ...style,
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
            }}
          >
            {renderChildren(props.children, values)}
          </div>
        </DialogState.Provider>,
        document.body
      )
    : null;
}
export function DialogContainerPrimitive(props) {
  const ref = useRef(null);
  const state = useContext(DialogState);
  const { overlayProps } = useOverlay(state, ref);
  usePreventScroll();
  const { dialogProps } = useDialog({}, ref);
  const { children, className, measureRef } = props;

  if (state.renderInline) {
    return (
      <div ref={combineRef(ref, measureRef)} className={className}>
        {children}
      </div>
    );
  }

  return (
    <FocusScope contain restoreFocus autoFocus>
      <div
        {...overlayProps}
        {...dialogProps}
        ref={combineRef(ref, measureRef)}
        className={className}
        id={props.id}
      >
        {children}
      </div>
    </FocusScope>
  );
}
