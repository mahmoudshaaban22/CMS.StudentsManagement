import { mapEnumToOptions } from '@abp/ng.core';

export enum Grade {
  Grade1 = 0,
  Grade2 = 1,
  Grade3 = 2,
  Grade4 = 3,
  Grade5 = 4,
  Grade6 = 5,
  Grade7 = 6,
  Grade8 = 7,
  Grade9 = 8,
  Grade10 = 9,
}

export const gradeOptions = mapEnumToOptions(Grade);
