import { createVuetify } from 'vuetify';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { mdi } from 'vuetify/iconsets/mdi-svg';
import 'vuetify/styles';
import {
    mdiChevronRight,
    mdiHome,
    mdiFile,
    mdiFileMusic,
    mdiFileVideo,
    mdiFilePdfBox,
    mdiFolder,
    mdiImage,
    mdiLanguageC,
    mdiLanguageCpp,
    mdiLanguageCsharp,
    mdiLanguageGo,
    mdiLanguageJava,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiLanguagePhp,
    mdiLanguagePython,
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiLanguageLua,
    mdiLanguageRust,
    mdiLanguageKotlin,
    mdiDocker,
    mdiGit,
    mdiPowershell,
    mdiCodeJson,
    mdiScriptText,
    mdiZipBox,
    mdiMagnetOn,
    mdiWindowRestore,
    mdiAndroid,
    mdiFileWord,
    mdiFileExcel,
    mdiFilePowerpoint,
    mdiVuejs,
    mdiSvg,
    mdiBook,
    mdiDownload,
    mdiFolderDownload,
    mdiImageSearch,
    mdiVideo,
    mdiDiscPlayer,
    mdiFileSearch,
    mdiLinkVariant,
    mdiBookOpenVariant,
    mdiMagnify,
    mdiClose,
    mdiCloseCircle,
    mdiSortAlphabeticalAscending,
    mdiSortAlphabeticalDescending,
    mdiSortClockAscending,
    mdiSortClockDescending,
    mdiSortNumericAscending,
    mdiSortNumericDescending,
    mdiDeleteForever,
    mdiFileMove,
    mdiUpload,
    mdiFolderPlus,
    mdiMusic,
    mdiPlay,
    mdiPause,
    mdiSkipPrevious,
    mdiSkipNext,
    mdiRepeat,
    mdiRepeatOff,
    mdiShuffle,
    mdiShuffleDisabled,
} from '@mdi/js';

export default createVuetify({
    components: {
        VSkeletonLoader,
    },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            mdiChevronRight,
            mdiHome,
            mdiFile,
            mdiFileMusic,
            mdiFileVideo,
            mdiFilePdfBox,
            mdiFolder,
            mdiImage,
            mdiLanguageC,
            mdiLanguageCpp,
            mdiLanguageCsharp,
            mdiLanguageGo,
            mdiLanguageJava,
            mdiLanguageJavascript,
            mdiLanguageTypescript,
            mdiLanguagePhp,
            mdiLanguagePython,
            mdiLanguageHtml5,
            mdiLanguageCss3,
            mdiLanguageLua,
            mdiLanguageRust,
            mdiLanguageKotlin,
            mdiDocker,
            mdiGit,
            mdiPowershell,
            mdiCodeJson,
            mdiScriptText,
            mdiZipBox,
            mdiMagnetOn,
            mdiWindowRestore,
            mdiAndroid,
            mdiFileWord,
            mdiFileExcel,
            mdiFilePowerpoint,
            mdiVuejs,
            mdiSvg,
            mdiBook,
            mdiDownload,
            mdiFolderDownload,
            mdiImageSearch,
            mdiVideo,
            mdiDiscPlayer,
            mdiFileSearch,
            mdiLinkVariant,
            mdiBookOpenVariant,
            mdiMagnify,
            mdiClose,
            mdiCloseCircle,
            mdiSortAlphabeticalAscending,
            mdiSortAlphabeticalDescending,
            mdiSortClockAscending,
            mdiSortClockDescending,
            mdiSortNumericAscending,
            mdiSortNumericDescending,
            mdiDeleteForever,
            mdiFileMove,
            mdiUpload,
            mdiFolderPlus,
            mdiMusic,
            mdiPlay,
            mdiPause,
            mdiSkipPrevious,
            mdiSkipNext,
            mdiRepeat,
            mdiRepeatOff,
            mdiShuffle,
            mdiShuffleDisabled,
        },
        sets: {
            mdi,
        },
    },
    theme: {
        variations: {
            colors: [
                'primary',
                'secondary',
            ],
            lighten: 2,
            darken: 2,
        },
        themes: {
            light: {
                colors: {
                    primary: '#0288d1',
                    secondary: '#00b0ff',
                    ...(window.__CUSTOM_THEME__?.light || {}),
                },
            },
            dark: {
                dark: true,
                colors: {
                    background: '#0f0f0f',
                    primary: '#0288d1',
                    secondary: '#00b0ff',
                    ...(window.__CUSTOM_THEME__?.dark || {}),
                },
            },
        },
    },
});