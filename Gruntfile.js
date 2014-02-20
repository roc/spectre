module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    phantomas: {
      gruntSite : {
        options : {
          indexPath     : './govuk-performance/',
          options       : {},
          // using gov.uk rather than www.gov.uk to show off 1000ms redirect time
          url           : 'http://gov.uk/performance',
          numberOfRuns  : 10,
          group: {
            'REQUESTS' : [
              // 'requests',
              'gzipRequests',
              // 'postRequests',
              // 'httpsRequests',
              // 'notFound',
              // 'multipleRequests',
              // 'maxRequestsPerDomain',
              // 'domains',
              // 'medianRequestsPerDomain',
              // 'redirects',
              'redirectsTime',
              'smallestResponse',
              'biggestResponse',
              'smallestLatency',
              'biggestLatency',
              'medianResponse',
              'medianLatency',
              'assetsNotGzipped',
              // 'assetsWithQueryString',
              // 'smallImages'
            ],
            'TIMINGS' : [
              // 'timeToFirstByte',
              // 'timeToLastByte',
              // 'timeToFirstCss',
              // 'timeToFirstJs',
              // 'timeToFirstImage',
              // 'fastestResponse',
              'slowestResponse',
              'onDOMReadyTime',
              'onDOMReadyTimeEnd',
              // 'windowOnLoadTime',
              // 'windowOnLoadTimeEnd',
              // 'httpTrafficCompleted',
              'timeBackend',
              'timeFrontend'
            ],
            'HTML' : [
              'bodyHTMLSize',
              // 'iframesCount',
              // 'imagesWithoutDimensions',
              'commentsSize',
              'hiddenContentSize',
              'whiteSpacesSize',
              // 'DOMelementsCount',
              // 'DOMelementMaxDepth',
              // 'nodesWithInlineCSS',
            ],
            'JAVASCRIPT' : [
              'eventsBound',
              // 'documentWriteCalls',
              // 'evalCalls',
              // 'jsErrors',
              // 'consoleMessages',
              // 'windowAlerts',
              // 'windowConfirms',
              // 'windowPrompts',
              'globalVariables',
              // 'localStorageEntries',
              // 'ajaxRequests'
            ],
            'DOM' : [
              // 'DOMqueries',
              // 'DOMqueriesById',
              // 'DOMqueriesByClassName',
              // 'DOMqueriesByTagName',
              // 'DOMqueriesByQuerySelectorAll',
              // 'DOMinserts',
              // 'DOMqueriesDuplicated'
            ],
            'HEADERS' : [
              // 'headersCount',
              // 'headersSentCount',
              // 'headersRecvCount',
              // 'headersSize',
              // 'headersSentSize',
              // 'headersRecvSize'
            ],
            'CACHING' : [
              // 'cacheHits',
              // 'cacheMisses',
              // 'cachePasses',
              // 'cachingNotSpecified',
              'cachingTooShort',
              // 'cachingDisabled'
            ],
            'COOKIES' : [
              // 'cookiesSent',
              // 'cookiesRecv',
              // 'domainsWithCookies',
              'documentCookiesLength',
              // 'documentCookiesCount'
            ],
            'COUNTS & SIZES' : [
              'contentLength',
              'bodySize',
              'htmlSize',
              // 'htmlCount',
              'cssSize',
              // 'cssCount',
              'jsSize',
              // 'jsCount',
              'jsonSize',
              // 'jsonCount',
              'imageSize',
              // 'imageCount',
              // 'webfontSize',
              // 'webfontCount',
              'base64Size',
              // 'base64Count',
              // 'otherCount',
              // 'otherSize'
            ],
            'JQUERY' : [
              // 'jQueryOnDOMReadyFunctions', << Phantomas can't figure this out because jQuery on gov.uk is so old
              'jQuerySizzleCalls'
            ]
          }

        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load grunt-phantomas
  grunt.loadNpmTasks('grunt-phantomas');

  // Default task(s).
  grunt.registerTask('default', ['phantomas']);


};
