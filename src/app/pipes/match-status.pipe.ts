import { Pipe, PipeTransform } from '@angular/core';

enum MatchStatuses {
  SCHEDULED = "Запланирован",
  LIVE = "В прямом эфире",
  IN_PLAY = "В игре",
  PAUSED = "Пауза",
  FINISHED = "Завершен",
  POSTPONED = "Отложен",
  SUSPENDED = "Приостановлен",
  CANCELED = "Отменен",
}

type MatchStatusesKeys = keyof typeof MatchStatuses;

@Pipe({
  name: 'matchStatus'
})
export class MatchStatusPipe implements PipeTransform {
  transform(value: MatchStatusesKeys): string {
    return MatchStatuses[value];
  }
}
