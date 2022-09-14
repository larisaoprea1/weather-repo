using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Auradeity.Infrastructure.Migrations
{
    public partial class AddRoleColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "role",
                table: "accounts",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "role",
                table: "accounts");
        }
    }
}
