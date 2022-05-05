
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  var PACKAGE_PATH;
  if (typeof window === 'object') {
    PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
  } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
    Module['locateFile'](REMOTE_PACKAGE_BASE) :
    ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);

    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;

    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);

      function DataRequest(start, end, crunched, audio) {
        this.start = start;
        this.end = end;
        this.crunched = crunched;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

        },
        finish: function(byteArray) {
          var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

    var files = metadata.files;
    for (i = 0; i < files.length; ++i) {
      new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
    }


    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDB_RO = "readonly";
    var IDB_RW = "readwrite";
    var DB_NAME = "EM_PRELOAD_CACHE";
    var DB_VERSION = 1;
    var METADATA_STORE_NAME = 'METADATA';
    var PACKAGE_STORE_NAME = 'PACKAGES';
    function openDatabase(callback, errback) {
      try {
        var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (e) {
        return errback(e);
      }
      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
          db.deleteObjectStore(PACKAGE_STORE_NAME);
        }
        var packages = db.createObjectStore(PACKAGE_STORE_NAME);

        if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
          db.deleteObjectStore(METADATA_STORE_NAME);
        }
        var metadata = db.createObjectStore(METADATA_STORE_NAME);
      };
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        callback(db);
      };
      openRequest.onerror = function(error) {
        errback(error);
      };
    };

    /* Check if there's a cached package, and if so whether it's the latest available */
    function checkCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
      var metadata = transaction.objectStore(METADATA_STORE_NAME);

      var getRequest = metadata.get("metadata/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        if (!result) {
          return callback(false);
        } else {
          return callback(PACKAGE_UUID === result.uuid);
        }
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function fetchCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
      var packages = transaction.objectStore(PACKAGE_STORE_NAME);

      var getRequest = packages.get("package/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        callback(result);
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
      var transaction_packages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
      var packages = transaction_packages.objectStore(PACKAGE_STORE_NAME);

      var putPackageRequest = packages.put(packageData, "package/" + packageName);
      putPackageRequest.onsuccess = function(event) {
        var transaction_metadata = db.transaction([METADATA_STORE_NAME], IDB_RW);
        var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
        var putMetadataRequest = metadata.put(packageMeta, "metadata/" + packageName);
        putMetadataRequest.onsuccess = function(event) {
          callback(packageData);
        };
        putMetadataRequest.onerror = function(error) {
          errback(error);
        };
      };
      putPackageRequest.onerror = function(error) {
        errback(error);
      };
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;

        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          DataRequest.prototype.requests[files[i].filename].onload();
        }
        Module['removeRunDependency']('datafile_game.data');

      };
      Module['addRunDependency']('datafile_game.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      function preloadFallback(error) {
        console.error(error);
        console.error('falling back to default preload behavior');
        fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
      };

      openDatabase(
        function(db) {
          checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
            function(useCached) {
              Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
              if (useCached) {
                console.info('loading ' + PACKAGE_NAME + ' from cache');
                fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback);
              } else {
                console.info('loading ' + PACKAGE_NAME + ' from remote');
                fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                  function(packageData) {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                      function(error) {
                        console.error(error);
                        processPackageData(packageData);
                      });
                  }
                  , preloadFallback);
              }
            }
            , preloadFallback);
        }
        , preloadFallback);

      if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

  }
  loadPackage({"package_uuid":"079a8f12-a906-49d9-a1de-442f0835f133","remote_package_size":15209419,"files":[{"filename":"","crunched":0,"start":0,"end":132,"audio":false},{"filename":"","crunched":0,"start":132,"end":155,"audio":false},{"filename":"","crunched":0,"start":155,"end":580,"audio":false},{"filename":"","crunched":0,"start":580,"end":653,"audio":false},{"filename":"","crunched":0,"start":653,"end":1131,"audio":false},{"filename":"","crunched":0,"start":1131,"end":2027,"audio":false},{"filename":"","crunched":0,"start":2027,"end":6682,"audio":false},{"filename":"","crunched":0,"start":6682,"end":6871,"audio":false},{"filename":"","crunched":0,"start":6871,"end":7295,"audio":false},{"filename":"","crunched":0,"start":7295,"end":8938,"audio":false},{"filename":"","crunched":0,"start":8938,"end":9354,"audio":false},{"filename":"","crunched":0,"start":9354,"end":10728,"audio":false},{"filename":"","crunched":0,"start":10728,"end":15626,"audio":false},{"filename":"","crunched":0,"start":15626,"end":16170,"audio":false},{"filename":"","crunched":0,"start":16170,"end":17662,"audio":false},{"filename":"","crunched":0,"start":17662,"end":20445,"audio":false},{"filename":"","crunched":0,"start":20445,"end":24095,"audio":false},{"filename":"","crunched":0,"start":24095,"end":27500,"audio":false},{"filename":"","crunched":0,"start":27500,"end":27740,"audio":false},{"filename":"","crunched":0,"start":27740,"end":28187,"audio":false},{"filename":"","crunched":0,"start":28187,"end":28415,"audio":false},{"filename":"","crunched":0,"start":28415,"end":28753,"audio":false},{"filename":"","crunched":0,"start":28753,"end":29096,"audio":false},{"filename":"","crunched":0,"start":29096,"end":30095,"audio":false},{"filename":"","crunched":0,"start":30095,"end":30597,"audio":false},{"filename":"","crunched":0,"start":30597,"end":33947,"audio":false},{"filename":"","crunched":0,"start":33947,"end":36191,"audio":false},{"filename":"","crunched":0,"start":36191,"end":36242,"audio":false},{"filename":"","crunched":0,"start":36242,"end":39010,"audio":false},{"filename":"","crunched":0,"start":39010,"end":50944,"audio":false},{"filename":"","crunched":0,"start":50944,"end":70510,"audio":false},{"filename":"","crunched":0,"start":70510,"end":71492,"audio":false},{"filename":"","crunched":0,"start":71492,"end":71657,"audio":false},{"filename":"","crunched":0,"start":71657,"end":85585,"audio":false},{"filename":"","crunched":0,"start":85585,"end":105154,"audio":false},{"filename":"","crunched":0,"start":105154,"end":105274,"audio":false},{"filename":"","crunched":0,"start":105274,"end":105631,"audio":false},{"filename":"","crunched":0,"start":105631,"end":108133,"audio":false},{"filename":"","crunched":0,"start":108133,"end":109057,"audio":false},{"filename":"","crunched":0,"start":109057,"end":114871,"audio":false},{"filename":"","crunched":0,"start":114871,"end":115540,"audio":false},{"filename":"","crunched":0,"start":115540,"end":135190,"audio":false},{"filename":"","crunched":0,"start":135190,"end":154389,"audio":false},{"filename":"","crunched":0,"start":154389,"end":155070,"audio":false},{"filename":"","crunched":0,"start":155070,"end":157951,"audio":false},{"filename":"","crunched":0,"start":157951,"end":158876,"audio":false},{"filename":"","crunched":0,"start":158876,"end":159014,"audio":false},{"filename":"","crunched":0,"start":159014,"end":159068,"audio":false},{"filename":"","crunched":0,"start":159068,"end":161303,"audio":false},{"filename":"","crunched":0,"start":161303,"end":182422,"audio":false},{"filename":"","crunched":0,"start":182422,"end":182542,"audio":false},{"filename":"","crunched":0,"start":182542,"end":182638,"audio":false},{"filename":"","crunched":0,"start":182638,"end":183175,"audio":false},{"filename":"","crunched":0,"start":183175,"end":184014,"audio":false},{"filename":"","crunched":0,"start":184014,"end":184184,"audio":false},{"filename":"","crunched":0,"start":184184,"end":188505,"audio":false},{"filename":"","crunched":0,"start":188505,"end":189186,"audio":false},{"filename":"","crunched":0,"start":189186,"end":189336,"audio":false},{"filename":"","crunched":0,"start":189336,"end":189514,"audio":false},{"filename":"","crunched":0,"start":189514,"end":189572,"audio":false},{"filename":"","crunched":0,"start":189572,"end":190253,"audio":false},{"filename":"","crunched":0,"start":190253,"end":191142,"audio":false},{"filename":"","crunched":0,"start":191142,"end":193024,"audio":false},{"filename":"","crunched":0,"start":193024,"end":194878,"audio":false},{"filename":"","crunched":0,"start":194878,"end":194960,"audio":false},{"filename":"","crunched":0,"start":194960,"end":195179,"audio":false},{"filename":"","crunched":0,"start":195179,"end":195220,"audio":false},{"filename":"","crunched":0,"start":195220,"end":195261,"audio":false},{"filename":"","crunched":0,"start":195261,"end":195302,"audio":false},{"filename":"","crunched":0,"start":195302,"end":196352,"audio":false},{"filename":"","crunched":0,"start":196352,"end":196505,"audio":false},{"filename":"","crunched":0,"start":196505,"end":197410,"audio":false},{"filename":"","crunched":0,"start":197410,"end":198314,"audio":false},{"filename":"","crunched":0,"start":198314,"end":198975,"audio":false},{"filename":"","crunched":0,"start":198975,"end":214442,"audio":false},{"filename":"","crunched":0,"start":214442,"end":215404,"audio":false},{"filename":"","crunched":0,"start":215404,"end":216383,"audio":false},{"filename":"","crunched":0,"start":216383,"end":217202,"audio":false},{"filename":"","crunched":0,"start":217202,"end":239945,"audio":false},{"filename":"","crunched":0,"start":239945,"end":262634,"audio":false},{"filename":"","crunched":0,"start":262634,"end":285333,"audio":false},{"filename":"","crunched":0,"start":285333,"end":307619,"audio":false},{"filename":"","crunched":0,"start":307619,"end":331826,"audio":false},{"filename":"","crunched":0,"start":331826,"end":332487,"audio":false},{"filename":"","crunched":0,"start":332487,"end":333148,"audio":false},{"filename":"","crunched":0,"start":333148,"end":333809,"audio":false},{"filename":"","crunched":0,"start":333809,"end":333973,"audio":false},{"filename":"","crunched":0,"start":333973,"end":334150,"audio":false},{"filename":"","crunched":0,"start":334150,"end":337696,"audio":false},{"filename":"","crunched":0,"start":337696,"end":400806,"audio":false},{"filename":"","crunched":0,"start":400806,"end":487439,"audio":false},{"filename":"","crunched":0,"start":487439,"end":584031,"audio":false},{"filename":"","crunched":0,"start":584031,"end":689932,"audio":false},{"filename":"","crunched":0,"start":689932,"end":784554,"audio":false},{"filename":"","crunched":0,"start":784554,"end":879176,"audio":false},{"filename":"","crunched":0,"start":879176,"end":1009847,"audio":false},{"filename":"","crunched":0,"start":1009847,"end":1017671,"audio":false},{"filename":"","crunched":0,"start":1017671,"end":1022895,"audio":false},{"filename":"","crunched":0,"start":1022895,"end":1026074,"audio":false},{"filename":"","crunched":0,"start":1026074,"end":1027653,"audio":false},{"filename":"","crunched":0,"start":1027653,"end":1030903,"audio":false},{"filename":"","crunched":0,"start":1030903,"end":1042243,"audio":false},{"filename":"","crunched":0,"start":1042243,"end":1043341,"audio":false},{"filename":"","crunched":0,"start":1043341,"end":1056124,"audio":false},{"filename":"","crunched":0,"start":1056124,"end":1083973,"audio":false},{"filename":"","crunched":0,"start":1083973,"end":1084837,"audio":false},{"filename":"","crunched":0,"start":1084837,"end":1093345,"audio":false},{"filename":"","crunched":0,"start":1093345,"end":1093440,"audio":false},{"filename":"","crunched":0,"start":1093440,"end":1149457,"audio":false},{"filename":"","crunched":0,"start":1149457,"end":1150541,"audio":false},{"filename":"","crunched":0,"start":1150541,"end":1159281,"audio":false},{"filename":"","crunched":0,"start":1159281,"end":1160742,"audio":false},{"filename":"","crunched":0,"start":1160742,"end":1162598,"audio":false},{"filename":"","crunched":0,"start":1162598,"end":1162991,"audio":false},{"filename":"","crunched":0,"start":1162991,"end":1163616,"audio":false},{"filename":"","crunched":0,"start":1163616,"end":1164010,"audio":false},{"filename":"","crunched":0,"start":1164010,"end":1164590,"audio":false},{"filename":"","crunched":0,"start":1164590,"end":1165070,"audio":false},{"filename":"","crunched":0,"start":1165070,"end":1165742,"audio":false},{"filename":"","crunched":0,"start":1165742,"end":1166170,"audio":false},{"filename":"","crunched":0,"start":1166170,"end":1166806,"audio":false},{"filename":"","crunched":0,"start":1166806,"end":1167274,"audio":false},{"filename":"","crunched":0,"start":1167274,"end":1167951,"audio":false},{"filename":"","crunched":0,"start":1167951,"end":1168462,"audio":false},{"filename":"","crunched":0,"start":1168462,"end":1169294,"audio":false},{"filename":"","crunched":0,"start":1169294,"end":1170023,"audio":false},{"filename":"","crunched":0,"start":1170023,"end":1171049,"audio":false},{"filename":"","crunched":0,"start":1171049,"end":1171666,"audio":false},{"filename":"","crunched":0,"start":1171666,"end":1172564,"audio":false},{"filename":"","crunched":0,"start":1172564,"end":1172738,"audio":false},{"filename":"","crunched":0,"start":1172738,"end":1173381,"audio":false},{"filename":"","crunched":0,"start":1173381,"end":1174178,"audio":false},{"filename":"","crunched":0,"start":1174178,"end":1175388,"audio":false},{"filename":"","crunched":0,"start":1175388,"end":1175687,"audio":false},{"filename":"","crunched":0,"start":1175687,"end":1176290,"audio":false},{"filename":"","crunched":0,"start":1176290,"end":1176785,"audio":false},{"filename":"","crunched":0,"start":1176785,"end":1177521,"audio":false},{"filename":"","crunched":0,"start":1177521,"end":1179178,"audio":false},{"filename":"","crunched":0,"start":1179178,"end":1179275,"audio":false},{"filename":"","crunched":0,"start":1179275,"end":1185392,"audio":false},{"filename":"","crunched":0,"start":1185392,"end":1186374,"audio":false},{"filename":"","crunched":0,"start":1186374,"end":1188761,"audio":false},{"filename":"","crunched":0,"start":1188761,"end":1188817,"audio":false},{"filename":"","crunched":0,"start":1188817,"end":1189800,"audio":false},{"filename":"","crunched":0,"start":1189800,"end":1190821,"audio":false},{"filename":"","crunched":0,"start":1190821,"end":1191444,"audio":false},{"filename":"","crunched":0,"start":1191444,"end":1193024,"audio":false},{"filename":"","crunched":0,"start":1193024,"end":1196434,"audio":false},{"filename":"","crunched":0,"start":1196434,"end":1197132,"audio":false},{"filename":"","crunched":0,"start":1197132,"end":1199306,"audio":false},{"filename":"","crunched":0,"start":1199306,"end":1200564,"audio":false},{"filename":"","crunched":0,"start":1200564,"end":1201087,"audio":false},{"filename":"","crunched":0,"start":1201087,"end":1201596,"audio":false},{"filename":"","crunched":0,"start":1201596,"end":1201887,"audio":false},{"filename":"","crunched":0,"start":1201887,"end":1202262,"audio":false},{"filename":"","crunched":0,"start":1202262,"end":1202919,"audio":false},{"filename":"","crunched":0,"start":1202919,"end":1203231,"audio":false},{"filename":"","crunched":0,"start":1203231,"end":1204555,"audio":false},{"filename":"","crunched":0,"start":1204555,"end":1206191,"audio":false},{"filename":"","crunched":0,"start":1206191,"end":1206708,"audio":false},{"filename":"","crunched":0,"start":1206708,"end":1210690,"audio":false},{"filename":"","crunched":0,"start":1210690,"end":1213704,"audio":false},{"filename":"","crunched":0,"start":1213704,"end":1214670,"audio":false},{"filename":"","crunched":0,"start":1214670,"end":1214933,"audio":false},{"filename":"","crunched":0,"start":1214933,"end":1215098,"audio":false},{"filename":"","crunched":0,"start":1215098,"end":1222058,"audio":false},{"filename":"","crunched":0,"start":1222058,"end":1222344,"audio":false},{"filename":"","crunched":0,"start":1222344,"end":1222607,"audio":false},{"filename":"","crunched":0,"start":1222607,"end":1224807,"audio":false},{"filename":"","crunched":0,"start":1224807,"end":1226382,"audio":false},{"filename":"","crunched":0,"start":1226382,"end":1227173,"audio":false},{"filename":"","crunched":0,"start":1227173,"end":1231914,"audio":false},{"filename":"","crunched":0,"start":1231914,"end":1232410,"audio":false},{"filename":"","crunched":0,"start":1232410,"end":1245090,"audio":false},{"filename":"","crunched":0,"start":1245090,"end":1247745,"audio":false},{"filename":"","crunched":0,"start":1247745,"end":1248734,"audio":false},{"filename":"","crunched":0,"start":1248734,"end":1258852,"audio":false},{"filename":"","crunched":0,"start":1258852,"end":1258883,"audio":false},{"filename":"","crunched":0,"start":1258883,"end":1266509,"audio":false},{"filename":"","crunched":0,"start":1266509,"end":1267619,"audio":false},{"filename":"","crunched":0,"start":1267619,"end":1272337,"audio":false},{"filename":"","crunched":0,"start":1272337,"end":1275537,"audio":false},{"filename":"","crunched":0,"start":1275537,"end":1276214,"audio":false},{"filename":"","crunched":0,"start":1276214,"end":1277453,"audio":false},{"filename":"","crunched":0,"start":1277453,"end":1278530,"audio":false},{"filename":"","crunched":0,"start":1278530,"end":1283778,"audio":false},{"filename":"","crunched":0,"start":1283778,"end":1285077,"audio":false},{"filename":"","crunched":0,"start":1285077,"end":1286104,"audio":false},{"filename":"","crunched":0,"start":1286104,"end":1286184,"audio":false},{"filename":"","crunched":0,"start":1286184,"end":1286237,"audio":false},{"filename":"","crunched":0,"start":1286237,"end":1286352,"audio":false},{"filename":"","crunched":0,"start":1286352,"end":1286551,"audio":false},{"filename":"","crunched":0,"start":1286551,"end":1286559,"audio":false},{"filename":"","crunched":0,"start":1286559,"end":1286599,"audio":false},{"filename":"","crunched":0,"start":1286599,"end":1287702,"audio":false},{"filename":"","crunched":0,"start":1287702,"end":1288412,"audio":false},{"filename":"","crunched":0,"start":1288412,"end":1289023,"audio":false},{"filename":"","crunched":0,"start":1289023,"end":1294247,"audio":false},{"filename":"","crunched":0,"start":1294247,"end":1295412,"audio":false},{"filename":"","crunched":0,"start":1295412,"end":1300432,"audio":false},{"filename":"","crunched":0,"start":1300432,"end":1302101,"audio":false},{"filename":"","crunched":0,"start":1302101,"end":1302822,"audio":false},{"filename":"","crunched":0,"start":1302822,"end":1303672,"audio":false},{"filename":"","crunched":0,"start":1303672,"end":1308183,"audio":false},{"filename":"","crunched":0,"start":1308183,"end":1315776,"audio":false},{"filename":"","crunched":0,"start":1315776,"end":2640130,"audio":false},{"filename":"","crunched":0,"start":2640130,"end":2940397,"audio":false},{"filename":"","crunched":0,"start":2940397,"end":2988926,"audio":false},{"filename":"","crunched":0,"start":2988926,"end":2998219,"audio":false},{"filename":"","crunched":0,"start":2998219,"end":3058569,"audio":false},{"filename":"","crunched":0,"start":3058569,"end":3138171,"audio":false},{"filename":"","crunched":0,"start":3138171,"end":3190165,"audio":false},{"filename":"","crunched":0,"start":3190165,"end":3536087,"audio":false},{"filename":"","crunched":0,"start":3536087,"end":3545716,"audio":false},{"filename":"","crunched":0,"start":3545716,"end":3552179,"audio":false},{"filename":"","crunched":0,"start":3552179,"end":3566825,"audio":false},{"filename":"","crunched":0,"start":3566825,"end":3575253,"audio":false},{"filename":"","crunched":0,"start":3575253,"end":3584089,"audio":false},{"filename":"","crunched":0,"start":3584089,"end":3585415,"audio":false},{"filename":"","crunched":0,"start":3585415,"end":3585472,"audio":false},{"filename":"","crunched":0,"start":3585472,"end":3591742,"audio":false},{"filename":"","crunched":0,"start":3591742,"end":3593123,"audio":false},{"filename":"","crunched":0,"start":3593123,"end":3595835,"audio":false},{"filename":"","crunched":0,"start":3595835,"end":3599522,"audio":false},{"filename":"","crunched":0,"start":3599522,"end":3600242,"audio":false},{"filename":"","crunched":0,"start":3600242,"end":3609322,"audio":false},{"filename":"","crunched":0,"start":3609322,"end":3610628,"audio":false},{"filename":"","crunched":0,"start":3610628,"end":3612290,"audio":false},{"filename":"","crunched":0,"start":3612290,"end":3616453,"audio":false},{"filename":"","crunched":0,"start":3616453,"end":3628761,"audio":true},{"filename":"","crunched":0,"start":3628761,"end":3649561,"audio":false},{"filename":"","crunched":0,"start":3649561,"end":3667121,"audio":false},{"filename":"","crunched":0,"start":3667121,"end":3694592,"audio":true},{"filename":"","crunched":0,"start":3694592,"end":3871198,"audio":true},{"filename":"","crunched":0,"start":3871198,"end":3936108,"audio":true},{"filename":"","crunched":0,"start":3936108,"end":3960709,"audio":true},{"filename":"","crunched":0,"start":3960709,"end":4518349,"audio":true},{"filename":"","crunched":0,"start":4518349,"end":4782993,"audio":true},{"filename":"","crunched":0,"start":4782993,"end":4783050,"audio":false},{"filename":"","crunched":0,"start":4783050,"end":4805688,"audio":false},{"filename":"","crunched":0,"start":4805688,"end":4838455,"audio":false},{"filename":"","crunched":0,"start":4838455,"end":4841943,"audio":false},{"filename":"","crunched":0,"start":4841943,"end":4843106,"audio":false},{"filename":"","crunched":0,"start":4843106,"end":4843618,"audio":false},{"filename":"","crunched":0,"start":4843618,"end":4844268,"audio":false},{"filename":"","crunched":0,"start":4844268,"end":4847767,"audio":false},{"filename":"","crunched":0,"start":4847767,"end":4851092,"audio":false},{"filename":"","crunched":0,"start":4851092,"end":4851743,"audio":false},{"filename":"","crunched":0,"start":4851743,"end":4853169,"audio":false},{"filename":"","crunched":0,"start":4853169,"end":4858070,"audio":false},{"filename":"","crunched":0,"start":4858070,"end":5183382,"audio":false},{"filename":"","crunched":0,"start":5183382,"end":9885875,"audio":false},{"filename":"","crunched":0,"start":9885875,"end":9893036,"audio":false},{"filename":"","crunched":0,"start":9893036,"end":9893898,"audio":false},{"filename":"","crunched":0,"start":9893898,"end":9905178,"audio":false},{"filename":"","crunched":0,"start":9905178,"end":9910079,"audio":false},{"filename":"","crunched":0,"start":9910079,"end":10296037,"audio":false},{"filename":"","crunched":0,"start":10296037,"end":15023976,"audio":false},{"filename":"","crunched":0,"start":15023976,"end":15027399,"audio":false},{"filename":"","crunched":0,"start":15027399,"end":15034560,"audio":false},{"filename":"","crunched":0,"start":15034560,"end":15035422,"audio":false},{"filename":"","crunched":0,"start":15035422,"end":15047884,"audio":false},{"filename":"","crunched":0,"start":15047884,"end":15049067,"audio":false},{"filename":"","crunched":0,"start":15049067,"end":15065924,"audio":false},{"filename":"","crunched":0,"start":15065924,"end":15069103,"audio":false},{"filename":"","crunched":0,"start":15069103,"end":15088494,"audio":false},{"filename":"","crunched":0,"start":15088494,"end":15098022,"audio":false},{"filename":"","crunched":0,"start":15098022,"end":15099707,"audio":false},{"filename":"","crunched":0,"start":15099707,"end":15099765,"audio":false},{"filename":"","crunched":0,"start":15099765,"end":15099957,"audio":false},{"filename":"","crunched":0,"start":15099957,"end":15100316,"audio":false},{"filename":"","crunched":0,"start":15100316,"end":15100457,"audio":false},{"filename":"","crunched":0,"start":15100457,"end":15100585,"audio":false},{"filename":"","crunched":0,"start":15100585,"end":15100599,"audio":false},{"filename":"","crunched":0,"start":15100599,"end":15100783,"audio":false},{"filename":"","crunched":0,"start":15100783,"end":15107159,"audio":false},{"filename":"","crunched":0,"start":15107159,"end":15107204,"audio":false},{"filename":"","crunched":0,"start":15107204,"end":15107238,"audio":false},{"filename":"","crunched":0,"start":15107238,"end":15108338,"audio":false},{"filename":"","crunched":0,"start":15108338,"end":15110346,"audio":false},{"filename":"","crunched":0,"start":15110346,"end":15111123,"audio":false},{"filename":"","crunched":0,"start":15111123,"end":15111943,"audio":false},{"filename":"","crunched":0,"start":15111943,"end":15112112,"audio":false},{"filename":"","crunched":0,"start":15112112,"end":15115880,"audio":false},{"filename":"","crunched":0,"start":15115880,"end":15116989,"audio":false},{"filename":"","crunched":0,"start":15116989,"end":15124904,"audio":false},{"filename":"","crunched":0,"start":15124904,"end":15126483,"audio":false},{"filename":"","crunched":0,"start":15126483,"end":15126603,"audio":false},{"filename":"","crunched":0,"start":15126603,"end":15127378,"audio":false},{"filename":"","crunched":0,"start":15127378,"end":15134202,"audio":false},{"filename":"","crunched":0,"start":15134202,"end":15134778,"audio":false},{"filename":"","crunched":0,"start":15134778,"end":15136090,"audio":false},{"filename":"","crunched":0,"start":15136090,"end":15136336,"audio":false},{"filename":"","crunched":0,"start":15136336,"end":15138674,"audio":false},{"filename":"","crunched":0,"start":15138674,"end":15139253,"audio":false},{"filename":"","crunched":0,"start":15139253,"end":15140875,"audio":false},{"filename":"","crunched":0,"start":15140875,"end":15141986,"audio":false},{"filename":"","crunched":0,"start":15141986,"end":15145317,"audio":false},{"filename":"","crunched":0,"start":15145317,"end":15145423,"audio":false},{"filename":"","crunched":0,"start":15145423,"end":15146103,"audio":false},{"filename":"","crunched":0,"start":15146103,"end":15146212,"audio":false},{"filename":"","crunched":0,"start":15146212,"end":15148307,"audio":false},{"filename":"","crunched":0,"start":15148307,"end":15189539,"audio":false},{"filename":"","crunched":0,"start":15189539,"end":15198421,"audio":false},{"filename":"","crunched":0,"start":15198421,"end":15204236,"audio":false},{"filename":"","crunched":0,"start":15204236,"end":15208942,"audio":false},{"filename":"","crunched":0,"start":15208942,"end":15209181,"audio":false},{"filename":"","crunched":0,"start":15209181,"end":15209419,"audio":false}]});

})();
