import type { CreateUpdateStudentDto, GetStudentListDto, StatisticsDto, StudentDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiName = 'Default';
  

  createStudent = (dto: CreateUpdateStudentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StudentDto>({
      method: 'POST',
      url: '/api/app/student/student',
      body: dto,
    },
    { apiName: this.apiName,...config });
  

  deleteStudent = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/app/student/${id}/student`,
    },
    { apiName: this.apiName,...config });
  

  getStatistics = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, StatisticsDto>({
      method: 'GET',
      url: '/api/app/student/statistics',
    },
    { apiName: this.apiName,...config });
  

  getStudent = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StudentDto>({
      method: 'GET',
      url: `/api/app/student/${id}/student`,
    },
    { apiName: this.apiName,...config });
  

  getStudentList = (dto: GetStudentListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<StudentDto>>({
      method: 'GET',
      url: '/api/app/student/student-list',
      params: { sorting: dto.sorting, skipCount: dto.skipCount, maxResultCount: dto.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  updateStudent = (dto: CreateUpdateStudentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, StudentDto>({
      method: 'PUT',
      url: '/api/app/student/student',
      body: dto,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
