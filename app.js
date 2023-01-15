"use strict";

import { Select } from "./src/js/select";

const select = new Select("#select", {
    placeholder: "Town",
    data: [
        { id: "1", value: "Canandaigua, NY", phone: "+1 585 393 0001", adress: "151 Charlotte Street" },
        { id: "2", value: "New York City", phone: "+1 212 456 0002", adress: "9 East 91st Street" },
        { id: "3", value: "Yonkers, NY", phone: "+1 914 678 0003", adress: "511 Warburton Ave" },
        { id: "4", value: "Sherrill, NY", phone: "+1 315 908 0004", adress: "14 WEST Noyes BLVD" },
    ],
    onSelect(item) {
        console.log("Selected item", item.adress);
    },
});

// ==============BURGER================================================

import { burger } from "./src/js/burger";
burger();

import { spollers } from "./src/js/spollers";
spollers();

window.s = select;
