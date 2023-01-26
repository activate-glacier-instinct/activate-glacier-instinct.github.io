import type { PageLoad } from './$types';
import cardsData from '../../content/work/cards.json'

export const load: PageLoad = async function load() {
    return {
        cards: cardsData
    }
};


export const prerender = true;
export const trailingSlash = 'always';
