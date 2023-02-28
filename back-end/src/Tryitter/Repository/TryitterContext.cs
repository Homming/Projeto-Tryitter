using Microsoft.EntityFrameworkCore;

public class TryitterContext : DbContext
{

    private readonly string _server;
    private readonly string _dbName;
    private readonly string _user;
    private readonly string _pass;

    public TryitterContext(DbContextOptions<TryitterContext> options) : base(options){ }

    public TryitterContext() {
        _server = Environment.GetEnvironmentVariable("DATABASE_SERVER")!;
        _dbName = Environment.GetEnvironmentVariable("DATABASE_NAME")!;
        _user = Environment.GetEnvironmentVariable("DATABASE_USER")!;
        _pass = Environment.GetEnvironmentVariable("DATABASE_PASS")!;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
        if (!optionsBuilder.IsConfigured)
            optionsBuilder.UseSqlServer($"Server={_server};Database={_dbName};User={_user};Password={_pass};");
    }

}