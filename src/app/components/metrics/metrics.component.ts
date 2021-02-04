import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface metric {
  title : string
  metricvalues: any[]
}

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  values : string[]
  display: string[]
  display2: string[]
  display3: string[]
  isHidden: boolean
  isHiddenMid: boolean
  isHiddenRight: boolean


  metric: {one: metric, second: metric, third: metric } = {
    one: {
      title: "Metric 1",
      metricvalues: ["22", "34", "10"]
    },
    second: {
      title: "Metric 2",
      metricvalues: ["12", "15", "15"]
    },
    third: {
      title: "Metric 3",
      metricvalues: ["20", "1", "20"]
    }
  }

  @Output() emitValues: EventEmitter<{ firstvalues: string[], secondvalues: string[], thirdvalues: string[] }> = new EventEmitter<{firstvalues: string[], secondvalues: string[], thirdvalues: string[]}>()


  constructor() { }

  ngOnInit(): void {
  }

  sortLeft() : void {
    this.display = this.metric.one.metricvalues.sort((a,b) => a - b)
    if ( this.display ) {
      this.isHidden = true
    }
  }

  sortMid() {
    this.display2 = this.metric.second.metricvalues.sort((a,b) => a - b)
    if(this.display2) {
      this.isHiddenMid = true
    }
  }

  sortRight() {
    this.display3 = this.metric.third.metricvalues.sort((a,b) => a - b)
    if(this.display3) {
      this.isHiddenRight = true
    }
  }

  emitValue(): void {
    this.emitValues.emit({firstvalues: this.metric.one.metricvalues, secondvalues: this.metric.second.metricvalues, thirdvalues: this.metric.third.metricvalues})
  }

}
