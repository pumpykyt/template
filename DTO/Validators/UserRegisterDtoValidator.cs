using DTO.Models;
using FluentValidation;

namespace DTO.Validators
{
    public class UserRegisterDtoValidator : AbstractValidator<UserRegisterDto>
    {
        public UserRegisterDtoValidator()
        {
            RuleFor(t => t.Email)
                .NotEmpty()
                .EmailAddress();
            RuleFor(t => t.UserName)
                .NotEmpty()
                .MinimumLength(5);
            RuleFor(t => t.Password)
                .NotEmpty()
                .Matches(@"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
        }
    }
}