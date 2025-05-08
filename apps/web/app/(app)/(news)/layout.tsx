import { BottomNavigation } from '@itrends/ui';

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNavigation />
      {modal}
    </>
  );
}
