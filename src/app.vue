<template>
    <v-app>
        <v-app-bar color="primary">
            <v-app-bar-title>{{ title }}</v-app-bar-title>

            <template v-slot:append>
                <div id="app-bar-append"></div>
            </template>
        </v-app-bar>

        <v-main>
            <v-container style="max-width:1080px">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component v-if="$route?.meta?.keepAlive" :is="Component" :key="$route.fullPath"></component>
                    </keep-alive>
                    <component v-if="!$route?.meta?.keepAlive" :is="Component"></component>
                </router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { pathPrefix, dufsVersion } from './common.js';

const title = window.__CUSTOM_PAGE_TITLE__ || (location.host + (pathPrefix === '/' ? '' : pathPrefix));

const theme = useTheme();
const matchDark = matchMedia('(prefers-color-scheme:dark)');
const setTheme = () => theme.global.name.value = matchDark.matches ? 'dark' : 'light';
setTheme();
matchDark.addEventListener('change', setTheme);

</script>
