using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Post
{
    [Key]
    public int PostId { get; set; }
    public string Content { get; set; } = default!;
    public byte[]? ImageData { get; set; }
    public string? ImageMime { get; set; }
    [ForeignKey("StudentId")]
    public int StudentId { get; set; }
    public Student Student { get; set; }

}