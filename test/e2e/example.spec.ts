/* eslint-disable consistent-return */
import { Application } from 'spectron';
import * as path from 'path';

jest.setTimeout(10000);

describe('Main window', () => {
    let app: Application;

    beforeEach(() => {
        app = new Application({
            path: require('electron'),
            args: [path.join(__dirname, '..', '..')],
        });

        return app.start();
    });

    afterEach(() => {
        if (app.isRunning()) {
            return app.stop();
        }
    });

    it('opens the window', async () => {
        const { client, browserWindow } = app;

        await client.waitUntilWindowLoaded();
        const title = await browserWindow.getTitle();

        expect(title).toBe('Webpack App');
    });

    it('increments the counter', async () => {
        const { client } = app;

        await client.waitUntilWindowLoaded();
        await client.elementClick('#increment');

        const counterText = await client.getElementText('#counter-value');

        expect(counterText).toBe('Current value: 1');
    });

    it('decrements the counter', async () => {
        const { client } = app;

        await client.waitUntilWindowLoaded();
        await client.elementClick('#decrement');

        const counterText = await client.getElementText('#counter-value');

        expect(counterText).toBe('Current value: -1');
    });
});
