import {AuthorizationServiceConfiguration} from '@openid/appauth';
import {LoginEvents} from '../loginEvents';
import {EndSessionNotifier} from './endSessionNotifier';
import {EndSessionRequest} from './endSessionRequest';
import {EndSessionRequestResponse} from './endSessionRequestResponse';

/*
 * A class to perform logout, which follows the same pattern as AppAuth-JS logins
 */
export class EndSessionRequestHandler {

    private readonly _logoutEvents: LoginEvents;

    public constructor(logoutEvents: LoginEvents) {
        this._logoutEvents = logoutEvents;
    }

    public performEndSessionRequest(
        configuration: AuthorizationServiceConfiguration,
        request: EndSessionRequest): void {
        // TODO
    }

    public buildRequestUrl(configuration: AuthorizationServiceConfiguration, request: EndSessionRequest): string {
        return '';
    }

    public async completeEndSessionRequestIfPossible(): Promise<void> {
        // TODO
    }

    public setEndSessionNotifier(notifier: EndSessionNotifier): EndSessionRequestHandler {
        return this;
    }

    public completeEndSessionRequest(): Promise<EndSessionRequestResponse | null> {
        return null;
    }
}