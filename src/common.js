const dufsPrefixMatches = window.__DUFS_PREFIX__.match(/^(.+)__dufs_v(\d+\.\d+\.\d+)_$/);

/** @type {String} Start and end with / */
export const pathPrefix = dufsPrefixMatches[1];
/** @type {String} Format: 0.0.0 */
export const dufsVersion = dufsPrefixMatches[2];

/**
 * @link https://github.com/cloudreve/frontend/blob/master/src/config.ts
 * @link https://github.com/cloudreve/frontend/blob/master/src/component/FileManager/TypeIcon.js
 * @type {Record<String, [String, String]>}
 */
const extIconColorTable = {
    'mp3': ['$mdiFileMusic', '#651fff'],
    'flac': ['$mdiFileMusic', '#651fff'],
    'ape': ['$mdiFileMusic', '#651fff'],
    'wav': ['$mdiFileMusic', '#651fff'],
    'ogg': ['$mdiFileMusic', '#651fff'],
    'm4a': ['$mdiFileMusic', '#651fff'],
    'opus': ['$mdiFileMusic', '#651fff'],
    'oga': ['$mdiFileMusic', '#651fff'],
    'weba': ['$mdiFileMusic', '#651fff'],

    'mp4': ['$mdiFileVideo', '#d50000'],
    'flv': ['$mdiFileVideo', '#d50000'],
    'wmv': ['$mdiFileVideo', '#d50000'],
    'rm': ['$mdiFileVideo', '#d50000'],
    'rmvb': ['$mdiFileVideo', '#d50000'],
    'mkv': ['$mdiFileVideo', '#d50000'],
    'webm': ['$mdiFileVideo', '#d50000'],
    'avi': ['$mdiFileVideo', '#d50000'],
    'm3u8': ['$mdiFileVideo', '#d50000'],
    'mov': ['$mdiFileVideo', '#d50000'],
    'ogv': ['$mdiFileVideo', '#d50000'],

    'bmp': ['$mdiImage', '#d32f2f'],
    'png': ['$mdiImage', '#d32f2f'],
    'gif': ['$mdiImage', '#d32f2f'],
    'jpg': ['$mdiImage', '#d32f2f'],
    'jpeg': ['$mdiImage', '#d32f2f'],
    'psd': ['$mdiImage', '#d32f2f'],
    'webp': ['$mdiImage', '#d32f2f'],
    'avif': ['$mdiImage', '#d32f2f'],
    'tiff': ['$mdiImage', '#d32f2f'],
    'heif': ['$mdiImage', '#d32f2f'],
    'heic': ['$mdiImage', '#d32f2f'],
    'svg': ['$mdiSvg', '#ff9a00'],

    'txt': ['$mdiScriptText', '#607d8b'],
    'md': ['$mdiScriptText', '#607d8b'],
    'ini': ['$mdiScriptText', '#607d8b'],
    'conf': ['$mdiScriptText', '#607d8b'],
    'yml': ['$mdiScriptText', '#607d8b'],
    'yaml': ['$mdiScriptText', '#607d8b'],
    'toml': ['$mdiScriptText', '#607d8b'],

    'zip': ['$mdiZipBox', '#f9a825'],
    'tar': ['$mdiZipBox', '#f9a825'],
    'gz': ['$mdiZipBox', '#f9a825'],
    'bz2': ['$mdiZipBox', '#f9a825'],
    'xz': ['$mdiZipBox', '#f9a825'],
    'zst': ['$mdiZipBox', '#f9a825'],
    'rar': ['$mdiZipBox', '#f9a825'],
    '7z': ['$mdiZipBox', '#f9a825'],

    'c': ['$mdiLanguageC', '#a8b9cc'],
    'h': ['$mdiLanguageC', '#a8b9cc'],
    'cc': ['$mdiLanguageCpp', '#004482'],
    'cpp': ['$mdiLanguageCpp', '#004482'],
    'cxx': ['$mdiLanguageCpp', '#004482'],
    'hpp': ['$mdiLanguageCpp', '#004482'],
    'cs': ['$mdiLanguageCsharp', '#189f20'],
    'go': ['$mdiLanguageGo', '#16b3da'],
    'java': ['$mdiLanguageJava', '#da1e21'],
    'js': ['$mdiLanguageJavascript', '#f4d003'],
    'jsx': ['$mdiLanguageTypescript', '#f4d003'],
    'cjs': ['$mdiLanguageJavascript', '#f4d003'],
    'mjs': ['$mdiLanguageTypescript', '#f4d003'],
    'ts': ['$mdiLanguageTypescript', '#2f74c0'],
    'tsx': ['$mdiLanguageTypescript', '#2f74c0'],
    'php': ['$mdiLanguagePhp', '#777bb3'],
    'py': ['$mdiLanguagePython', '#3776ab'],
    'pyi': ['$mdiLanguagePython', '#3776ab'],
    'pyc': ['$mdiLanguagePython', '#3776ab'],
    'pyx': ['$mdiLanguagePython', '#3776ab'],
    'html': ['$mdiLanguageHtml5', '#e37933'],
    'css': ['$mdiLanguageCss3', '#519aba'],
    'lua': ['$mdiLanguageLua', '#00007c'],
    'rs': ['$mdiLanguageRust', '#000'],
    'kt': ['$mdiLanguageKotlin', '#7f52ff'],
    'dockerfile': ['$mdiDocker', '#2962cd'],
    'gitignore': ['$mdiGit', '#e84d31'],
    'ps1': ['$mdiPowershell', '#256db8'],
    'json': ['$mdiCodeJson', '#cbcb41'],
    'sh': ['$mdiScriptText', '#607d8b'],
    'cmd': ['$mdiScriptText', '#607d8b'],
    'bat': ['$mdiScriptText', '#607d8b'],
    'vue': ['$mdiVuejs', '#8dc149'],

    'doc': ['$mdiFileWord', '#538ce5'],
    'docx': ['$mdiFileWord', '#538ce5'],
    'xls': ['$mdiFileExcel', '#4caf50'],
    'xlsx': ['$mdiFileExcel', '#4caf50'],
    'ppt': ['$mdiFilePowerpoint', '#ef633f'],
    'pptx': ['$mdiFilePowerpoint', '#ef633f'],
    'pdf': ['$mdiFilePdfBox', '#f44336'],
    'epub': ['$mdiBook', '#81b315'],

    'torrent': ['$mdiMagnetOn', '#5c6bc0'],
    'exe': ['$mdiWindowRestore', '#1a237e'],
    'apk': ['$mdiAndroid', '#8bc34a'],
};

/**
 * @link https://prismjs.com/#supported-languages
 * @type {Record<String, String>}
 */
export const codeLanguageTable = {
    'c': 'c',
    'h': 'c',
    'cc': 'cpp',
    'cpp': 'cpp',
    'cxx': 'cpp',
    'hpp': 'cpp',
    'cs': 'cs',
    'go': 'go',
    'java': 'java',
    'js': 'js',
    'jsx': 'jsx',
    'cjs': 'js',
    'mjs': 'js',
    'ts': 'ts',
    'tsx': 'tsx',
    'php': 'php',
    'py': 'py',
    'pyi': 'py',
    'pyx': 'py',
    'html': 'html',
    'css': 'css',
    'lua': 'lua',
    'rs': 'rust',
    'kt': 'kt',
    'dockerfile': 'docker',
    // 'gitignore': '',
    'ps1': 'powershell',
    'json': 'json',
    'sh': 'sh',
    'cmd': 'sh',
    'bat': 'batch',
    'vue': 'html',
    // 'txt': '',
    // 'md': '',
    'ini': 'ini',
    'conf': 'ini',
    'yml': 'yml',
    'yaml': 'yml',
    'toml': 'toml',
};

/**
 * @description How can I get file extensions with JavaScript? - Stack Overflow
 * @link https://stackoverflow.com/questions/190852#answer-1203361
 * @param {String} e
 * @returns {String}
 */
export const getExt = e => {
    const i = e.lastIndexOf('.');
    return i === -1 ? '' : e.substring(i + 1, e.length);
};

/**
 * @param {String} e
 * @returns {String}
 */
export const getColorFromExt = e => (extIconColorTable[e.toLowerCase()] || ['$mdiFile', '#607d8b'])[1];
/**
 * @param {String} e
 * @returns {String}
 */
export const getIconFromExt = e => (extIconColorTable[e.toLowerCase()] || ['$mdiFile', '#607d8b'])[0];

/**
 * @param {Number} s
 * @returns {String}
 */
export const formatSize = s => {
    const units = ['TB', 'GB', 'MB', 'KB'];
    let u = 'Bytes';
    while (s >= 1024 && units.length) {
        u = units.pop();
        s /= 1024;
    }
    return `${u === 'Bytes' ? s : s.toFixed(2)} ${u}`;
};

/**
 * @param {Number} t
 * @returns {String}
 */
export const formatTimestamp = t => {
    const d = new Date(t);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, 0)}-${d.getDate().toString().padStart(2, 0)} ${d.getHours().toString().padStart(2, 0)}:${d.getMinutes().toString().padStart(2, 0)}:${d.getSeconds().toString().padStart(2, 0)}`;
};

/**
 * @param {String} s
 * @param {String} p
 * @returns {String}
 */
export const removePrefix = (s, p) => s.startsWith(p) ? s.substring(p.length) : s;

/**
 * @param {String} s
 * @param {String} p
 * @returns {String}
 */
export const removeSuffix = (s, p) => s.endsWith(p) ? s.substring(0, s.length - p.length) : s;

/**
 * @param {Function} fn
 * @param {Number} timeout
 * @returns {Function}
 */
export const debounce = (fn, timeout) => {
    let t;
    return function (...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), timeout);
    };
};
