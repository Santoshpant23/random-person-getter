"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3005;
const app = (0, express_1.default)();
const data = [{
        name: "Santosh",
        description: "A Student"
    }, {
        name: "Sun Lee",
        description: "A Master"
    },
    {
        name: "Leahy",
        description: "A Teacher"
    }
];
app.listen(port, () => {
    console.log("deployed");
});
app.get('/getdata', (req, res) => {
    const random = Math.floor(Math.random() * 3);
    const toreturn = data[random];
    res.json(toreturn);
});
