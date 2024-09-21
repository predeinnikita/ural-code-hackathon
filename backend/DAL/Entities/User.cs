using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities;

[Table("Users")]
public class User
{
    [Column("Id")] public int Id { get; set; }
    [Column("Name")] public string Name { get; set; }
}