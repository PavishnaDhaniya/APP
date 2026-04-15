from django.db import models

class PuzzleScore(models.Model):
    player_name = models.CharField(max_length=100)
    moves = models.IntegerField()
    time_taken = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.player_name
