import { BottomNavigation } from '@itrends/ui';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
