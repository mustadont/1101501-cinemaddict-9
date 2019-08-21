import {renderItemQuantity} from "../util";

export const getCardTemplate = (card) => {
  const {
    title,
    rating,
    year,
    duration,
    genre,
    poster,
    description,
    commentsQuantity,
    isWatchlist,
    isWatched,
    isFavorite,
  } = card;
  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${renderItemQuantity(commentsQuantity, `comment`).count} ${renderItemQuantity(commentsQuantity, `comment`).word}</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  ${isWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
          </form>
        </article>`;
};
