import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './Series.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  series : Serie[];
  avg : number;

  constructor(private serieService: SerieService) {
    this.series = [];
    this.avg = 0;
   }

  getSeries() : void {
    this.serieService.getSeries().subscribe( theSeries => this.series = theSeries )
  }

  getAvg() : number{

    let seriesSize : number = 0;
    let totalSeasons : number = 0;
    this.series.forEach(element => {
      seriesSize ++;
      totalSeasons += element.getSeasons();
    });

    return totalSeasons / seriesSize;
  }


  ngOnInit(): void {
    this.getSeries;
    console.log(this.getAvg());

  }

}
