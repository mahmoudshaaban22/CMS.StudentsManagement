import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StatisticsDto, StudentService } from '@proxy/students';
import { ChartModule } from '@abp/ng.components/chart.js';

@Component({
  selector: 'app-student-statistics',
  templateUrl: './student-statistics.component.html',
  styleUrl: './student-statistics.component.scss'
})

export class StudentStatisticsComponent implements OnInit {
  statistics: StatisticsDto | null = null;
  chartData: any = null;
  barchartData: any = null;  constructor(
    private studentService: StudentService,) { }

  ngOnInit(): void {
    this.studentService.getStatistics().subscribe((data) => {
      this.statistics = data;
      this.fetchStatistics();
    });
  }
  fetchStatistics(): void {
    // Simulate fetching data from the server
    this.statistics = {
      totalStudents: this.statistics.totalStudents,
      averageAge: this.statistics.averageAge,
      gradeDistribution:  this.statistics.gradeDistribution,
    };
    this.prepareChartData();
  }

  prepareChartData(): void {
    if (!this.statistics) {
      return;
    }

    const gradeLabels = Object.keys(this.statistics.gradeDistribution);
    const gradeValues = Object.values(this.statistics.gradeDistribution);

    const backgroundColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ];
    const borderColors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ];

    // Pie Chart Data
    this.chartData = {
      labels: gradeLabels,
      datasets: [
        {
          data: gradeValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1
        }
      ]
    };

    // Bar Chart Data
    this.barchartData = {
      labels: gradeLabels,
      datasets: [
        {
          label: 'Number of Students',
          data: gradeValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };
  }
}
  


