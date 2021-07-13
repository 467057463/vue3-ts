module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: { 
        view: 'src/preload/view.js',
      },
      builderOptions: {
        appId: process.env.VUE_APP_APP_ID,
        productName: process.env.VUE_APP_NAME,
        copyright: 'Copyright © 2021',
        directories: {
          output: './dist_application', // 输出文件路径
        },
        asar: true,
        win: {
          target: [
            {
              target: 'nsis',
              arch: ['x64'],
            },
          ],
          artifactName: '${productName} Setup ${version}.${ext}',
        },
        nsis: {
          oneClick: false,
          language: "2052",
          perMachine: true,
          allowToChangeInstallationDirectory: true
        }
      }
    }
  }
}