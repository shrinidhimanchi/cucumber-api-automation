const report = require('multiple-cucumber-html-reporter')
const options = {
    jsonDir: __dirname + '/../output',
    reportPath: __dirname + '/../output/multiple_cucumber_report',
    staticFilePath: false,
    openReportInBrowser: true,
    disableLog: false,
    pageTitle: "UBank PetStore Test Result",
    reportName: "UBank PetStore Test Result",
    pageFooter: "UBank PetStore Test Result",
    saveCollectedJSON: false,
    displayDuration: true,
    durationInMS: true,
    useCDN: true,
    displayReportTime: true
}

report.generate(options)
process.exit()