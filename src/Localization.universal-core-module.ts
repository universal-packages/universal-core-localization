import { CoreModule } from '@universal-packages/core'
import { Localization, LocalizationOptions } from '@universal-packages/localization'

export default class LocalizationModule extends CoreModule<LocalizationOptions> {
  public static readonly moduleName = 'storage-module'
  public static readonly description = 'Localization initialization module'

  public subject: Localization

  public async prepare(): Promise<void> {
    this.subject = new Localization(this.config)

    await this.subject.prepare()
  }

  public async release(): Promise<void> {}
}
