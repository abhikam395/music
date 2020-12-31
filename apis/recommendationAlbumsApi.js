import store from '../frontend/store';
import {getRecommendationAlbums} from '../frontend/store/actions/recommendationAction'

const albums = [ 
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
]

export function getRecommendedAlbums(){
    store.dispatch(getRecommendationAlbums(albums))
}