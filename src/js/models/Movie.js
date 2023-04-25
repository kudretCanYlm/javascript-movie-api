import { api_key,base_url} from "../config"
export class Movie
{
    constructor(id)
    {
        this.id=id
    }
    async GetMovie()
    {
        //benim apim kısa olduğundan aynı şeyi kullandım
        const response= await fetch(`${base_url}?apikey=${api_key}&t=${this.id}`)
        this.data= await response.json();
        console.log(this.data)
    }
}