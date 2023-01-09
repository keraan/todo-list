import lodash from "lodash";
import app from "./app";
import { todoFactory } from "./todo-cards";
import './style.css';

app()

const card1 = todoFactory('Learn JS', 'because i need to become god', '26/2/2023', 'high')
console.log(card1.title)
