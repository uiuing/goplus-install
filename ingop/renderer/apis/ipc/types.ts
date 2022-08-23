export type IngopHome = {
  init: () => Promise<void>
  remove: () => Promise<void>
}

export type FileDataParams = {
  fileName: string
  base64Data: string
}

export type AutoSaveFile = {
  gop: (fileData: FileDataParams) => Promise<boolean>
  env: {
    go: (fileData: FileDataParams) => Promise<boolean>
  }
}

export type EnvManage = {
  initGop: () => void
  env: {
    initGo: () => void
  }
  remove: () => void
}

type ExistsValue = {
  exist: boolean
  isNew: boolean
}

export type ExistsAllEnvResult = {
  gop: ExistsValue
  env: {
    go: ExistsValue
  }
  system: {
    platform: string
    arch: string
  }
}

export type ExistsAllEnvParams = {
  gopNewVersion: string
  env: { goNewVersion: string }
}

export type Compile = {
  gop: () => Promise<boolean>
}
