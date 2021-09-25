using DA.Entities;

namespace Domain.Interfaces
{
    public interface IJwtService
    {
        string GenerateJwtToken(User user);
    }
}