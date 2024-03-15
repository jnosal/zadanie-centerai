# Generated by Django 5.0.3 on 2024-03-15 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ShortenedUrl",
            fields=[
                (
                    "signature",
                    models.CharField(
                        db_index=True, max_length=100, primary_key=True, serialize=False
                    ),
                ),
                ("url", models.URLField(db_index=True)),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True, null=True, verbose_name="Created"
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True, null=True, verbose_name="Updated"
                    ),
                ),
            ],
        ),
    ]