import { Logger } from '@universal-packages/logger'

import { LocalizationModule } from '../src'

describe(LocalizationModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new LocalizationModule({} as any, logger)

    await module.prepare()
    await module.release()
  })
})
