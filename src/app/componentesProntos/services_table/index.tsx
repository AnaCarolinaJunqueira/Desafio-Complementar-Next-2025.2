"use client"

import { useState } from "react";

type Service = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
}

type TableProps = {
    services: Service[];
}