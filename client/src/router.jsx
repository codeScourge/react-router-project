import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Characters, {CharacterChooser} from "./components/characters/characters";
import CharacterInfo from "./components/characters/character";
import loadCharacters from "./components/characters/loader";

const router = createBrowserRouter([
    {
        path: "/characters",
        element: <Characters/>,
        children: [
            {
                index: true,
                loader: loadCharacters,
                element: <CharacterChooser/>
            },
            {
                path: ":name",
                element: <CharacterInfo />
            },
        ]
    },
    {
        path: "/*",
        element: <Navigate to="/characters" />
    }
])

export default function MyRouter() {
    return  <RouterProvider router={router}/>
}
