using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class NullableIdOrg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_EducationalOrganizations_EducationalOrganizationId",
                table: "Students");

            migrationBuilder.AlterColumn<Guid>(
                name: "EducationalOrganizationId",
                table: "Students",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_EducationalOrganizations_EducationalOrganizationId",
                table: "Students",
                column: "EducationalOrganizationId",
                principalTable: "EducationalOrganizations",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_EducationalOrganizations_EducationalOrganizationId",
                table: "Students");

            migrationBuilder.AlterColumn<Guid>(
                name: "EducationalOrganizationId",
                table: "Students",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_EducationalOrganizations_EducationalOrganizationId",
                table: "Students",
                column: "EducationalOrganizationId",
                principalTable: "EducationalOrganizations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
