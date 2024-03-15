import factory


class ShortenedUrlFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = "shortener.ShortenedUrl"
