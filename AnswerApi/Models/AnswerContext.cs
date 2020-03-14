using Microsoft.EntityFrameworkCore;

namespace AnswerApi.Models
{
    public class AnswerContext : DbContext
    {
        public AnswerContext(DbContextOptions<AnswerContext> options)
            : base(options)
        {
        }

        public DbSet<UserAnswer> UserAnswers { get; set; }
    }
}