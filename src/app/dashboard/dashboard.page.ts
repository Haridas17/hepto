import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { 
    Chart.register(...registerables); 
  }

  ngOnInit() {
    this.createChart(); 
  }

  createChart() {
    const canvas = document.getElementById('activityChart') as HTMLCanvasElement;
    
    if (canvas) {  
      const ctx = canvas.getContext('2d');  
  
      if (ctx) { 
        new Chart(ctx, {
          type: 'line', 
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
            datasets: [{
              label: 'Active Users',
              data: [3200, 1150, 700, 2000, 2200, 3600, 2800],
              borderWidth: 2,
              fill: true, 
              pointRadius: 5,
              pointBackgroundColor: 'rgba(0, 153, 51, 1)',
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                beginAtZero: true
              },
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }
  
}
