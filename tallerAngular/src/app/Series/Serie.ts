export class Serie {

  private id:number;
  private name:string;
  private channel:string;
  private description:string;
  private seasons: number;
  private webpage:string;
  private poster:string;

  constructor( id: number,  name: string,
     channel:string,  description:string,
     link:string,  image:string, seasons: number){

    this.id  = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = link;
    this.poster = image;

  }


  getId(){
    return this.id;
  }
  getName(){
    return this.name
  }
  getChannel(){
    return this.channel;
  }
  getSeasons(){
    return this.seasons;
  }
  getDescription(){
    return this.description;
  }
  getWebpage(){
    return this.webpage;
  }
  getPoster(){
    return this.poster;
  }

}
