import { Component } from '@angular/core';
import { BaseChartDirective  } from 'ng2-charts';
import { Chart ,ChartOptions,registerables} from 'chart.js';
import { ChartData } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-overview',
  imports: [BaseChartDirective ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  
  equityData = [100]; // 100% Equity
  equityLabels = ['Equity'];
  equityColor=['blue']  
  
  // Data for the second chart (Sectors)
  sectorData = [27.66, 25.76, 14.96, 8.68, 8.41, 5.62, 5.34];
  sectorLabels = [
    'Information Technology',
    'Financials',
    'Communication Services',
    'Materials',
    'Utilities',
    'Energy',
    'Consumer Discretionary',
  ];
  sectorColors=['yellow','blue','green','gray','red','orange']
  
  // Data for the third chart (Stocks)
  stockData = [67.72, 31.25, 1.03];
  stockLabels = ['Large cap', 'Mid cap', 'Small cap'];
  stockColors =['blue','red','orange'];

  public donutChartData: ChartData<'doughnut'> = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [300, 50, 100, 75],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1
      }
    ]
  };
  public donutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true
      },
    },
    cutout: '70%' // Creates the donut effect
  };
  // ngOninit(){
  //   this.renderAccountChart(this.equityData,this.equityLabels,this.equityColor);
  //   this.renderSectorsChart(this.sectorData,this.sectorLabels,this.sectorColors);
  //   this.renderStocksChart(this.stockData,this.stockLabels,this.stockColors);
  // }
  
  // renderAccountChart(labelData: any, valueData:any, colorData:any){
    
  //   const mychart = new Chart('account',{
  //     type: 'doughnut',
  //     data:{
  //       labels: labelData,
  //       datasets:[
  //         {
  //           data: valueData,
  //           backgroundColor: colorData
  //         }
  //       ]
  //     }
  //   })
  // }
  // renderSectorsChart(labelData: any, valueData:any, colorData:any){
    
  //   const mychart = new Chart('sectors',{
  //     type: 'doughnut',
  //     data:{
  //       labels: labelData,
  //       datasets:[
  //         {
  //           data: valueData,
  //           backgroundColor: colorData
  //         }
  //       ]
  //     }
  //   })
  // }
  // renderStocksChart(labelData: any, valueData:any, colorData:any){
    
  //   const mychart = new Chart('stocks',{
  //     type: 'doughnut',
  //     data:{
  //       labels: labelData,
  //       datasets:[
  //         {
  //           data: valueData,
  //           backgroundColor: colorData
  //         }
  //       ]
  //     }
  //   })
  // }

}
