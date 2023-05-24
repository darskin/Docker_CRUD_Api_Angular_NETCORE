using FluentValidation;

namespace API.Models
{
    public class ItemsValidator : AbstractValidator<Item>
    {
        public ItemsValidator()
        {
            RuleFor(i => i.Name).NotEmpty().NotNull().MaximumLength(150);
            RuleFor(i => i.Description).NotEmpty().NotNull().MaximumLength(300);
            RuleFor(i => i.Price).NotEmpty().NotNull().GreaterThan(0);
        }
    }
}
