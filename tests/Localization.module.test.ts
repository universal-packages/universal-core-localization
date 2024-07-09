import { LocalizationModule } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(LocalizationModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(global.localizationSubject).not.toBeUndefined()
    expect(global.localizationSubject.options).toEqual({ defaultLocale: 'en', useFileName: true, localizationsLocation: './src' })
  })
})
