// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, {
  useRef,
  useContext,
  createContext,
  Fragment,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  mergeProps,
  useTreeState,
  useMenu,
  useHover,
  useMenuItem,
  useMenuSection,
  useFocusRing,
  useKeyboard,
} from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { combineRef, renderChildren, exists, noop } from "./_internal_utils";
import { Popover } from "./builtins/Popover";
import { renderCollection } from "./_internal_collection";
import { MenuTriggerContext } from "./builtins/MenuTriggerContext";
const MenuContext = createContext(null);
const ItemContext = createContext(null);
export function SubmenuImpl(props) {
  const ref = useRef(null);
  const {
    children,
    closeOnSelect,
    selectedKeys,
    disabledKeys,
    onSelectionChange = noop,
  } = props;
  const { style, className, onAction, resetProps } = useContext(MenuContext);
  const handleSelectionChange = useCallback(
    (keys) => {
      onSelectionChange(Array.from(keys));
    },
    [onSelectionChange]
  );
  const reactAriaProps = {
    ...props,
    selectedKeys: new Set(selectedKeys),
    disabledKeys: new Set(disabledKeys),
    onSelectionChange: handleSelectionChange,
    children: renderCollection(children),
  };
  const state = useTreeState(reactAriaProps);
  const { menuProps } = useMenu(reactAriaProps, state, ref);
  useEffect(() => {
    if (
      state.collection.size > 0 &&
      !exists(state.selectionManager.focusedKey)
    ) {
      let key = state.collection.getFirstKey();

      while (exists(key) && !exists(state.selectionManager.focusedKey)) {
        if (state.collection.getItem(key).type !== "section") {
          state.selectionManager.setFocusedKey(key);
        }

        key = state.collection.getKeyAfter(key);
      }
    }
  }, [state]);
  return (
    <Fragment>
      {exists(props.cssStyles) ? (
        <style
          style={{
            display: "none",
          }}
        >
          {props.cssStyles}
        </style>
      ) : null}
      <ul
        {...mergeProps(menuProps)}
        ref={ref}
        style={style}
        className={className}
      >
        {[...state.collection].map((item) =>
          item.type !== "section" ? (
            <MenuItemCollectionNode
              key={item.key}
              item={item}
              state={state}
              onAction={props.onAction || onAction}
              closeOnSelect={closeOnSelect}
              {...item.props}
            />
          ) : (
            <MenuSectionCollectionNode
              key={item.key}
              section={item}
              state={state}
              onAction={props.onAction || onAction}
              resetProps={resetProps}
              {...item.props}
            />
          )
        )}
      </ul>
    </Fragment>
  );
}
export function MenuRoot(props) {
  const ref = useRef(null);
  const {
    measureRef,
    renderInline,
    children,
    vislyChildren,
    onShouldClose = noop,
    closeOnSelect = true,
    onAction = noop,
    selectedKeys,
    disabledKeys,
    onSelectionChange = noop,
  } = props;
  const {
    style,
    testId,
    innerRef,
    vislyProps,
    values,
    resetProps,
  } = usePrimitive({
    ref,
    props,
  });
  const handleSelectionChange = useCallback(
    (keys) => {
      onSelectionChange(Array.from(keys));
    },
    [onSelectionChange]
  );
  const reactAriaProps = {
    ...props,
    selectedKeys: new Set(selectedKeys),
    disabledKeys: new Set(disabledKeys),
    onSelectionChange: handleSelectionChange,
    children: renderCollection(children),
  };
  const state = useTreeState(reactAriaProps);
  const { menuProps } = useMenu(reactAriaProps, state, ref);
  const { menuProps: menuDOMProps, close } = useContext(MenuTriggerContext) || {
    menuProps: {},
  };
  const _style = { ...style, margin: 0 };

  if (renderInline) {
    return (
      <MenuContext.Provider
        value={{
          style: _style,
          className: vislyProps.className,
          renderInline: true,
          onAction,
          onShouldClose,
          resetProps,
        }}
      >
        <ul
          {...mergeProps(menuProps, menuDOMProps, vislyProps)}
          data-testid={testId}
          ref={combineRef(ref, combineRef(measureRef, innerRef))}
          style={_style}
        >
          {renderChildren(vislyChildren, values)}
        </ul>
      </MenuContext.Provider>
    );
  }

  return (
    <MenuContext.Provider
      value={{
        style: _style,
        className: vislyProps.className,
        onAction,
        onShouldClose: close || onShouldClose,
        resetProps,
        selectedKeys,
        onSelectionChange,
      }}
    >
      <ul
        {...mergeProps(menuProps, menuDOMProps, vislyProps)}
        data-testid={testId}
        ref={combineRef(ref, innerRef)}
        style={_style}
      >
        {[...state.collection].map((item) =>
          item.type !== "section" ? (
            <MenuItemCollectionNode
              key={item.key}
              item={item}
              state={state}
              onAction={onAction}
              closeOnSelect={closeOnSelect}
              {...item.props}
            />
          ) : (
            <MenuSectionCollectionNode
              key={item.key}
              section={item}
              state={state}
              onAction={onAction}
              closeOnSelect={closeOnSelect}
              resetProps={resetProps}
              {...item.props}
            />
          )
        )}
      </ul>
    </MenuContext.Provider>
  );
}
export function MenuSectionRoot(props) {
  const { measureRef } = props;
  const ref = useRef(null);
  const { style, testId, innerRef, vislyProps, values } = usePrimitive({
    ref,
    props,
  });
  return (
    <div
      style={style}
      data-testid={testId}
      ref={combineRef(measureRef, innerRef)}
      {...vislyProps}
    >
      {renderChildren(props.vislyChildren, values)}
    </div>
  );
}
export function MenuSectionCollectionNode({
  section,
  state,
  onAction,
  closeOnSelect,
  resetProps,
}) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });
  return (
    <li
      {...itemProps}
      style={{
        flexDirection: "column",
      }}
    >
      {section.rendered && (
        <span
          {...headingProps}
          style={{
            width: "100%",
          }}
        >
          {section.rendered}
        </span>
      )}
      <ul
        {...mergeProps(groupProps, resetProps)}
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[...section.childNodes].map((node) => (
          <MenuItemCollectionNode
            key={node.key}
            item={node}
            state={state}
            onAction={onAction}
            closeOnSelect={closeOnSelect}
            {...node.props}
          />
        ))}
      </ul>
    </li>
  );
}
export function SubMenuRoot(props) {
  const { measureRef, renderInline, crossOffset = 0 } = props;
  const ref = useRef(null);
  const { isFocused, isOpen } = useContext(ItemContext) || {};
  const { style, testId, values, vislyProps } = usePrimitive({
    ignoreFocusHandling: true,
    isFocusVisible: isFocused,
    ref,
    props,
  });
  const triggerRef = React.useRef();

  if (renderInline) {
    return (
      <div
        data-testid={testId}
        ref={combineRef(ref, measureRef)}
        style={style}
        {...vislyProps}
      >
        {renderChildren(props.vislyChildren, values)}
      </div>
    );
  }

  return (
    <div
      data-testid={testId}
      ref={combineRef(ref, triggerRef)}
      style={style}
      {...vislyProps}
    >
      {renderChildren(props.vislyChildren, values)}

      <Popover
        isOpen={isOpen}
        placement="right top"
        triggerRef={triggerRef}
        autoFocusFirst={true}
        containFocus
        crossOffset={crossOffset}
      >
        <SubmenuImpl {...props} />
      </Popover>
    </div>
  );
}
export function MenuItemRoot(props) {
  const ref = useRef();
  const { isSelected, isFocused, isDisabled } = useContext(ItemContext) || {};
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ignoreFocusHandling: true,
    isFocusVisible: isFocused,
    ref,
    props: { ...props, disabled: isDisabled },
    variants: isSelected
      ? [
          {
            propName: "selected",
          },
        ]
      : [],
  });
  return (
    <div
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...vislyProps}
      style={style}
    >
      {renderChildren(props.children, values)}
    </div>
  );
}

function MenuItemCollectionNode({
  item,
  state,
  onAction,
  closeOnSelect = false,
}) {
  const itemRef = React.useRef();
  const isSelected = state.selectionManager.isSelected(item.key);
  const isDisabled = state.disabledKeys.has(item.key);
  const { onShouldClose } = useContext(MenuContext);
  const { close: closeSelf } = useContext(ItemContext) || {
    close: onShouldClose,
  };
  const { isFocusVisible, focusProps } = useFocusRing();
  const [isOpen, setIsOpen] = useState(false);
  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      closeOnSelect,
      isDisabled,
      isSelected,
      onAction,
      onClose: onShouldClose,
    },
    state,
    itemRef
  );
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        setIsOpen(true);
      } else if (e.key === "ArrowLeft" || e.key === "Escape") {
        setIsOpen(false);
        closeSelf();
      }
    },
  });
  const { hoverProps } = useHover({
    onHoverChange: (isHovering) => {
      if (isHovering) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
  });
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <li
      {...mergeProps(menuItemProps, focusProps, keyboardProps, hoverProps)}
      ref={itemRef}
    >
      <ItemContext.Provider
        value={{
          isSelected,
          isFocused: isFocusVisible,
          isDisabled,
          key: item.key,
          itemRef,
          isOpen,
          close,
        }}
      >
        {item.rendered}
      </ItemContext.Provider>
    </li>
  );
}

export const MenuCheckableRoot = MenuItemRoot;
