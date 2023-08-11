import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CharacterInfo() {
    const params = useParams();
    const name = params.name

    return  <div>
                <Link to="..">go back</Link>
                <h5>This is the page of {name}</h5>
            </div>
}
