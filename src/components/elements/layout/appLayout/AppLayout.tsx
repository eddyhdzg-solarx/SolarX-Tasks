import { Notch } from "components";

export function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Notch />
      <main>{children}</main>
    </>
  );
}
