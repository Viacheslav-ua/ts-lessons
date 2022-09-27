interface Logger {
  /**
   * Используй для информации о текущих задачах
   * @param message 
   */
  info(message: string): void
  /**
   * Используй когда нужно сообщить админам,
   * но не требует ручного вмешательства
   * @param message 
   */
  warning(message: string): void
  /**
   * Используй когда нужно исправлять в ручную и срочно
   * @param message 
   */
  critical(message: string): void
}

abstract class BaseLoger implements Logger {
  protected level = 1

  info(message: string): void {
    if(this.level <= 1)
    this.log(message, this.level)
  }
  warning(message: string): void {
    if(this.level <= 2)
    this.log(message, this.level)
  }
  critical(message: string): void {
    if(this.level <= 3)
    this.log(message, this.level)
  }

  protected abstract log(message: string, level: number): void 
}

class ConsoleLogger extends BaseLoger {
  protected level = 3
  protected log(message: string, level: number): void {
      switch (level) {
        case 1:
          console.log(message)
          break
        case 2:
          console.warn(message)
          break
        case 3:
          console.error(message)
          break
      
        // default:
        //   break;
      }
  }
}
// class ConsoleLogger implements Logger {
//   info(message: string): void {
//     console.log(message)
//   }
//   warning(message: string): void {
//     console.warn(message)
//   }
//   critical(message: string): void {
//     console.error(message)
//   }

// }

// class DateConsoleLogger extends ConsoleLogger {
//   private getDateMessage(message: string): string {
        
//     return new Date().toLocaleString() + ': ' + message
//   }

//   info(message: string): void {
//       super.info(this.getDateMessage(message))
//   }

//   warning(message: string): void {
//       super.warning(this.getDateMessage(message))
//   }

//   critical(message: string): void {
//       super.critical(this.getDateMessage(message))
//   }
// }
class DateConsoleLogger extends ConsoleLogger {
  private getDateMessage(message: string): string {
        
    return new Date().toLocaleString() + ': ' + message
  }

  protected log(message: string, level: number): void {
      super.log(this.getDateMessage(message), level)
  }
}

class Job {

  constructor(private logger: Logger) {}

  public run() {
    try {
      this.logger.info('Я начал работу')
      // work
      // throw new Error('Ошибка во время работы')
      this.logger.warning('Я закончил работу успешно')
    } catch (e) {
      this.logger.critical('Я получил ошибку ' + e)
    }
  }
}

const job = new Job(new DateConsoleLogger)

job.run()