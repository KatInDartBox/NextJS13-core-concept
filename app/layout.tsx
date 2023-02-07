import "./globals.css";
import HeadNav from "./(appGroup)/headNav";
import Loading from "./(appGroup)/loading";
type tProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: tProps) {
  return (
    <>
      <html lang="en">
        <body>
          <HeadNav />
          {children}
        </body>
      </html>
    </>
  );
}
