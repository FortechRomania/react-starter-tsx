import React from 'react'
import {Redirect} from "react-router-dom";
import { FunctionComponent } from "react";
import { useUserState } from "../state/user/UserHooks";

export const authDecorator = (Component: any): FunctionComponent => {

    const { pathname } = window.location;

     return () => {
        const {state: user} = useUserState();

        // TODO use token here 
        const isAuthenticated: any | null = user.name;
        if(isAuthenticated) {
            return <Component />
        }
        return <Redirect to={`/login?redirect=${pathname}`} />
     }
}