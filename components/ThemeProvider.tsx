"use client";

import {ThemeProvider as Nextthemesprovider} from "next-themes";
import {ReactNode} from "react";
interface themeproviderprops {
  children: ReactNode;
}
export default function ThemeProvider({children,} : themeproviderprops){
    return(
<Nextthemesprovider attribute="class" defaultTheme="light" enableSystem={false}>{children}</Nextthemesprovider>
    );
}