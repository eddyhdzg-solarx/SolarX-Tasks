import React, { forwardRef, Ref } from "react";
import Link, { LinkProps } from "next/link";
import { Button, ButtonProps } from "@mui/material";

type LinkRef = HTMLButtonElement;
type NextLinkProps = Omit<ButtonProps, "href"> &
  Pick<LinkProps, "href" | "as" | "prefetch" | "locale">;

const LinkButtonRef = (
  { href, as, prefetch, locale, ...props }: LinkProps,
  ref: Ref<LinkRef>
) => (
  <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
    <Button ref={ref} {...props} />
  </Link>
);

export const LinkButton = forwardRef<LinkRef, NextLinkProps>(LinkButtonRef);
