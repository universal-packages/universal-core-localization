import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class LocalizationInitializer extends CoreInitializer {
  public static readonly initializerName = 'localization'
  public static readonly description: string = 'Localization initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
