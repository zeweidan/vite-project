import { exec } from 'child_process';
export default function myPlugin() {
    const virtualModuleId = 'virtual:my-module'
    const resolvedVirtualModuleId = '\0' + virtualModuleId
  
    return {
      name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
      resolveId(id) {
        if (id === virtualModuleId) {
          return resolvedVirtualModuleId
        }
      },
      load(id) {
        if (id === resolvedVirtualModuleId) {
          return `export const msg = "from virtual module"`
        }
      },
      options(options) {
        console.log('options', options)
        return {
            ...options,
            plugins: ['b']
        }
      },
      async buildStart(option) {
        console.log('option', option)
        await new Promise((resolve, reject) => {
            console.log('buildStart')
            exec('git submodule update --remote', (res) => {
                resolve()
            })
        })
      }
    }
  }