const axios = require('axios').default;
import Notiflix from 'notiflix';
import LoadMoreBtn from './btn';
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const API_KEY = '24781518-e1a8cace8e42cfd12d2f64e58';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImages() {
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&page=${this.page}&per_page=40`;

        const image = await axios.get(url);
        this.incrementPage();

        return image.data;
    }

    endImages() {
        if (this.page === 13) {
            Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
            loadMoreBtn.hide();
        }
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery = newQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}