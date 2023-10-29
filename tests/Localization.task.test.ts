import { populateTemplates } from '@universal-packages/template-populator'

import LocalizationTask from '../src/Localization.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe(LocalizationTask, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    await jestCore.execTask('localization-task', {
      directive: 'init',

      args: { f: true },
      coreConfigOverride: {
        config: { location: './tests/__fixtures__/config' },
        modules: { location: './tests/__fixtures__' },
        tasks: { location: './tests/__fixtures__' },
        logger: { silence: true }
      }
    })

    expect(populateTemplates).toHaveBeenCalledWith(expect.stringMatching(/universal-core-localization\/src\/template/), './src', { override: true })
  })

  it('throws an error if directive is not recognized', async (): Promise<void> => {
    await expect(
      jestCore.execTask('localization-task', {
        directive: 'nop',

        args: { f: true },
        coreConfigOverride: {
          config: { location: './tests/__fixtures__/config' },
          modules: { location: './tests/__fixtures__' },
          tasks: { location: './tests/__fixtures__' },
          logger: { silence: true }
        }
      })
    ).rejects.toThrow('Unrecognized directive nop')
  })
})
