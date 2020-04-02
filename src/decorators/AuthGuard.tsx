import React, { ReactNode } from "react";

import { FunctionComponent } from "react";


export const AuthGuard: FunctionComponent<{activeChildren: ReactNode}> = ({children, activeChildren}) => {
    if(activeChildren){
        return <>{ activeChildren }</>
    }
    return <>{ children }</>
}