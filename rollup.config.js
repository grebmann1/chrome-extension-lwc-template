import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';


export default {
    input: 'client/main.js',
    output: {
        file: 'dist/popup/main.js',
        format: 'esm',
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        lwc(),
        copy({
            targets: [
              { src: 'node_modules/@salesforce-ux/design-system/assets', dest: 'dist/popup'}
            ],
            copyOnce: true
        }),
        copy({
            targets: [
              { src: 'client/index.html', dest: 'dist/popup' },
              { src: 'client/assets', dest: 'dist/popup' },
              { src: 'extension/scripts', dest: 'dist' },
              { src: 'extension/manifest.json', dest: 'dist' },
              { src: 'images', dest: 'dist' },
            ]
        })
    ],
};