// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef } from "react";
import { exists, combineRef, renderChildren } from "./_internal_utils";
import { injectSpacing } from "./_internal_component_utils";
import { usePrimitive } from "./_internal_usePrimitive";
export function RootPrimitive(props) {
  const ref = useRef();
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ref,
    props,
  });
  const children = injectSpacing(
    props.addSpacing,
    renderChildren(props.children, values)
  );
  return (
    <div
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...vislyProps}
      style={style}
    >
      {children}
    </div>
  );
}
export function ContainerPrimitive(props) {
  const children = injectSpacing(props.addSpacing, props.children);
  const Element = exists(props.element) ? props.element : "div";
  return (
    <Element
      ref={props.measureRef}
      id={props.id}
      className={props.className}
      style={props.style}
    >
      {children}
    </Element>
  );
}
export function TextPrimitive(props) {
  const { className, text, measureRef, element } = props;
  const Element = exists(element) ? element : "div";
  return (
    <Element id={props.id} className={className} ref={measureRef}>
      {text}
    </Element>
  );
}
export function IconPrimitive(props) {
  const { src, useMask, measureRef, error } = props;
  const maskStyles = useMask
    ? {
        mask: `url(${src}) no-repeat 50% 50% / contain`,
        WebkitMask: `url(${src}) no-repeat 50% 50% / contain`,
      }
    : {
        background: `url(${src}) no-repeat 50% 50% / contain`,
      };
  const errorStyles = {
    backgroundColor: "red",
  };
  const styles = error ? errorStyles : maskStyles;
  return (
    <div
      role="img"
      id={props.id}
      className={props.className}
      style={styles}
      ref={measureRef}
    />
  );
}
export function ImagePrimitive(props) {
  const { className, src, alt, measureRef } = props;
  return (
    <div
      ref={measureRef}
      role="img"
      className={className}
      id={props.id}
      style={{
        backgroundImage: `url(${src}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label={exists(alt) ? alt : ""}
    />
  );
}
export function SpacerPrimitive(props) {
  const { className, id, measureRef } = props;
  return (
    <div
      id={id}
      className={className}
      ref={measureRef}
      style={{
        alignSelf: "stretch",
      }}
    />
  );
}
export function ProgressFillPrimitive(props) {
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  return (
    <div
      ref={props.measureRef}
      className={props.className}
      id={props.id}
      style={{
        width: `${clamp(props.value, 0, 1) * 100}%`,
      }}
    />
  );
}
