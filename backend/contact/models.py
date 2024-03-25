from django.db import models

# Create your models here.

class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

#Custom Booking reference field that is unique ,6 characters long and contains only uppercase letters and digits
class BookingReferenceField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault('max_length', 6)
        kwargs.setdefault('unique', True)
        kwargs.setdefault('editable', False)
        kwargs.setdefault('blank', True)
        kwargs.setdefault('null', True)
        super().__init__(*args, **kwargs)

    def pre_save(self, model_instance, add):
        from random import choices
        from string import ascii_uppercase, digits
        if add and not getattr(model_instance, self.attname):
            value = ''.join(choices(ascii_uppercase + digits, k=self.max_length))
            setattr(model_instance, self.attname, value)
            return value
        return super().pre_save(model_instance, add)


class Review(TimeStampedModel):
    name = models.CharField(max_length=100)
    booking_reference = models.CharField(max_length=6)
    email = models.EmailField()
    review = models.TextField()

    def __str__(self):
        return self.name