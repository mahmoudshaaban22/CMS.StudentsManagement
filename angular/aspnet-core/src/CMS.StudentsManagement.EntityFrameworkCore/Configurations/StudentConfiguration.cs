using CMS.StudentsManagement.Students;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace CMS.StudentsManagement.Configurations
{
    internal class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.ConfigureByConvention();
            builder.Property(a=> a.Name).HasMaxLength(StudentsManagementConsts.GeneralNameLength).IsRequired();
            builder.Property(a=> a.Age).IsRequired();
            builder.Property(a=> a.Grade).HasMaxLength(StudentsManagementConsts.GeneralGradeLength).IsRequired();

            builder.ToTable("Students");
        }
    }
}
