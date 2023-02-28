
using Microsoft.EntityFrameworkCore;

public class TryitterRepository<T> : ITryitterRepository<T> where T : class {
    protected readonly DbContext _context;
    public TryitterRepository(DbContext context)
    {
        _context = context;
    }

    public virtual void Add<T>(T entity) where T : class
    {
        _context.Add(entity);
        _context.SaveChanges();
    }

    public virtual void Delete<T>(T entity) where T : class
    {
        _context.Remove(entity);
        _context.SaveChanges();
    }

    public virtual void Update<T>(T entity) where T : class
    {
        _context.Update(entity);
        _context.SaveChanges();
    }

    public virtual T? GetById<T>(int id) where T : class
    {
        return _context.Set<T>().Find(id);
    }

    public virtual IEnumerable<T> GetAll<T>() where T : class
    {
        return _context.Set<T>().ToList();
    }


}