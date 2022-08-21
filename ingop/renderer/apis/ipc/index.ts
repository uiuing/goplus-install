import {
  AutoSaveFile,
  Compile,
  EnvManage,
  ExistsAllEnvParams,
  ExistsAllEnvResult,
  FileDataParams,
  IngopHome
} from './types'

export const ingopHome: IngopHome = {
  init: async () => {
    await global.ipcRenderer.invoke('ingop-home-init')
  },
  remove: async () => {
    await global.ipcRenderer.invoke('ingop-home-remove')
  }
}

export async function existsAllEnv(
  p: ExistsAllEnvParams
): Promise<ExistsAllEnvResult> {
  return await global.ipcRenderer.invoke('check-env-all', p)
}

export const autoSaveFile: AutoSaveFile = {
  gop: async (fileData: FileDataParams) => {
    await global.ipcRenderer.invoke('auto-sava-gop-file', fileData)
  },
  env: {
    go: async (fileData: FileDataParams) => {
      await global.ipcRenderer.invoke('auto-sava-env-go-file', fileData)
    }
  }
}

export const compile: Compile = {
  gop: async () => {
    return await global.ipcRenderer.invoke('compile-gop')
  }
}

export const envManage: EnvManage = {
  initGop: async () => {
    await global.ipcRenderer.invoke('env-gop-init')
  },
  env: {
    initGo: async () => {
      await global.ipcRenderer.invoke('env-env-go-init')
    }
  },
  remove: async () => {
    await global.ipcRenderer.invoke('env-all-remove')
  }
}
