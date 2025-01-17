using CMS.StudentsManagement.Enums;
using CMS.StudentsManagement.Students;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace CMS.StudentsManagement.Data.Students
{
    public class StudentManagementDataSeeder
    : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Student, int> _StudentRepository;

        public StudentManagementDataSeeder(IRepository<Student, int> StudentRepository)
        {
            _StudentRepository = StudentRepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _StudentRepository.GetCountAsync() <= 0)
            {
                var students = new List<Student>()
                {
                     new Student
                    {
                        Name = "Ahmed Ali",
                        Age = 6,
                        Grade = Grade.Grade1
                    },
                      new Student
                    {
                        Name = "Ahmed Ahmed",
                        Age = 6,
                        Grade = Grade.Grade2
                    },
                       new Student
                    {
                        Name = "Esraa Ahmed",
                        Age = 6,
                        Grade = Grade.Grade5
                    },
                        new Student
                    {
                        Name = "Mahmoud",
                        Age = 6,
                        Grade = Grade.Grade9
                    },
                         new Student
                    {
                        Name = "sara",
                        Age = 6,
                        Grade = Grade.Grade10
                    },
                          new Student
                    {
                        Name = "huda",
                        Age = 6,
                        Grade = Grade.Grade1
                    },
                           new Student
                    {
                        Name = "zeinab",
                        Age = 6,
                        Grade = Grade.Grade4
                    },
                            new Student
                    {
                        Name = "Yahya",
                        Age = 6,
                        Grade = Grade.Grade5
                    },
                             new Student
                    {
                        Name = "messi",
                        Age = 6,
                        Grade = Grade.Grade7
                    },
                              new Student
                    {
                        Name = "Cr7",
                        Age = 6,
                        Grade = Grade.Grade1

                    },

                }; 
                await _StudentRepository.InsertManyAsync(students,
            
                    autoSave: true
                );

                
            }
        }
    }

}
