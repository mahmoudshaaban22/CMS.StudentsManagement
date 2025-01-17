import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { Grade } from '../enums/grade.enum';

export interface CreateUpdateStudentDto extends EntityDto<number> {
  name: string;
  age: number;
  grade: Grade;
}

export interface GetStudentListDto extends PagedAndSortedResultRequestDto {
}

export interface StatisticsDto {
  totalStudents: number;
  averageAge: number;
  gradeDistribution: Record<string, number>;
}

export interface StudentDto extends FullAuditedEntityDto<number> {
  name: string;
  age: number;
  grade: Grade;
}
