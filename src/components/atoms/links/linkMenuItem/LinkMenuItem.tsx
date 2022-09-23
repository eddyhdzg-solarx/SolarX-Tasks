import React, { forwardRef, Ref } from "react";
import Link, { LinkProps } from "next/link";
import { MenuItem, MenuItemProps } from "@mui/material";

type LinkRef = HTMLLIElement;
type NextLinkProps = Omit<MenuItemProps, "href"> &
  Pick<LinkProps, "href" | "as" | "prefetch" | "locale">;

const LinkMenuItemRef = (
  { href, as, prefetch, locale, ...props }: LinkProps,
  ref: Ref<LinkRef>
) => (
  <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
    <MenuItem ref={ref} {...props} />
  </Link>
);

export const LinkMenuItem = forwardRef<LinkRef, NextLinkProps>(LinkMenuItemRef);
