import Menu from "./components/menu";
import Search from "./components/search";
import Sort from "./components/sort";
import User from "./components/user";
import Message from "./components/films-list-empty";
import {mockCards} from "./data";
import {Position} from "./util";
import {renderComponent} from "./util";
import PageController from "./page-controller";

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);
const footerElement = document.querySelector(`.footer .footer__statistics p`);
footerElement.textContent = `${mockCards().length} movies inside`;

const pageController = new PageController(mainElement, mockCards());

renderComponent(mainElement, new Menu(mockCards()).getElement(), Position.BEFOREEND);
renderComponent(mainElement, new Sort().getElement(), Position.BEFOREEND);
pageController.init();
renderComponent(mainElement, new Message().getElement(), Position.BEFOREEND);
renderComponent(headerElement, new Search().getElement(), Position.BEFOREEND);
renderComponent(headerElement, new User().getElement(), Position.BEFOREEND);
