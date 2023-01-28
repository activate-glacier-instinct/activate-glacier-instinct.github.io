import type { PageLoad } from './$types';
import cardsData from '../../content/work/cards.json'

type Card = {
    title: string;
    where: string;
    type: string;
    cardSize: string;
}

export const load: PageLoad = async function load() {
    return {
        cards: cardsData as Array<Card>
    }
};

export const prerender = true;
export const trailingSlash = 'always';
