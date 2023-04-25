import { api_key} from "../config"
import { base_url } from "../config";
export default class Search{

    constructor(keyword)
    {
           this.keyword=keyword;
    }

    async  getResults(){
        
        
        const response= await fetch(`${base_url}?apikey=${api_key}&t=${this.keyword}`)
        this.data= await response.json();
    }
    //http://www.omdbapi.com/?apikey=e0935941&t=a
}