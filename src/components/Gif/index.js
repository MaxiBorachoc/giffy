import React from 'react'
import './/styles.css'

import { Link } from "wouter"

export default function Gif({title, id, url}){
           return (
           <>
           <Link to={`/gif/${id}`} className="Gif">
                <h4>{title}</h4>
                <img src={url} alt={title}/>
            </Link>
           
            </>
            )
}