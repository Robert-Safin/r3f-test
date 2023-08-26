import { FC } from "react";
import "./globals.css";


interface Props {
  children: React.ReactNode;
}




const RootLayout:FC<Props> = (props) => {
  return (
    <html lang="en" className="bg-black container max-w-[1440px] mx-auto min-h-screen">
      <body>{props.children}</body>
    </html>
  );
}

export default RootLayout;
