import { CoreModule } from '@universal-packages/core'
import { Localization, LocalizationOptions } from '@universal-packages/localization'

import { LOG_CONFIGURATION } from './LOG_CONFIGURATION'

export default class LocalizationModule extends CoreModule<LocalizationOptions> {
  public static readonly moduleName = 'localization-module'
  public static readonly description = 'Localization initialization module'

  public subject: Localization

  public async prepare(): Promise<void> {
    this.subject = new Localization(this.config)

    this.subject.on('waring', (event) => {
      this.logger.log({ level: 'WARNING', message: event.message, category: 'LOCALIZATION' }, LOG_CONFIGURATION)
    })

    this.subject.on('error', (event) => {
      this.logger.log({ level: 'ERROR', error: event.error, category: 'LOCALIZATION' }, LOG_CONFIGURATION)
    })

    this.subject.prepare()
  }

  public async release(): Promise<void> {}
}
