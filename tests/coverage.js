const fs = require('fs');

class CoverageManager {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async startJsCoverage(){
        await this.page.coverage.startJSCoverage();
    }
    async startCssCoverage(){
        await this.page.coverage.startCSSCoverage();
    }
    async stopJsCoverage(){
        const coverage = await this.page.coverage.stopJSCoverage();
        fs.writeFile("coverage-js.json", JSON.stringify(coverage), function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
    async stopCssCoverage(){
        const coverage = await this.page.coverage.stopCSSCoverage();
        fs.writeFile("coverage-css.json", JSON.stringify(coverage), function(err) {
            if (err) {
                console.log(err);
            }
        });
    }

  }
  module.exports = { CoverageManager };